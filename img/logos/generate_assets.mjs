/**
 * Generate PNG/ICO assets from SVG logos for AboRadar.
 * Uses sharp (Node.js) - works on Windows without Cairo.
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ABORADAR_DIR = path.resolve(__dirname, '../..');
const APP_DIR = path.resolve(ABORADAR_DIR, '../aboradar-app');

const ICON_SVG = path.join(__dirname, 'logo-icon.svg');

async function svgToPng(svgPath, outputPath, width, height) {
  height = height || width;
  const svgBuffer = fs.readFileSync(svgPath);
  await sharp(svgBuffer)
    .resize(width, height)
    .png()
    .toFile(outputPath);
  const size = (fs.statSync(outputPath).size / 1024).toFixed(1);
  console.log(`  Created: ${path.relative(ABORADAR_DIR, outputPath)} (${width}x${height}, ${size}KB)`);
}

async function createOgImage(svgPath, outputPath) {
  // Dark background 1200x630
  const bg = sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: { r: 8, g: 9, b: 13, alpha: 1 }
    }
  }).png();

  // Render logo
  const logoSize = 280;
  const svgBuffer = fs.readFileSync(svgPath);
  const logoPng = await sharp(svgBuffer)
    .resize(logoSize, logoSize)
    .png()
    .toBuffer();

  // Composite logo centered
  await bg
    .composite([{
      input: logoPng,
      left: Math.round((1200 - logoSize) / 2),
      top: Math.round((630 - logoSize) / 2) - 30,
    }])
    .toFile(outputPath);

  const size = (fs.statSync(outputPath).size / 1024).toFixed(1);
  console.log(`  Created: ${path.relative(ABORADAR_DIR, outputPath)} (1200x630, ${size}KB)`);
}

async function createFaviconIco(pngPath, icoPath) {
  // Create a simple ICO by using 32x32 PNG wrapped in ICO format
  const png32 = await sharp(pngPath).resize(32, 32).png().toBuffer();
  const png16 = await sharp(pngPath).resize(16, 16).png().toBuffer();

  // ICO file format: header + directory entries + image data
  const images = [png16, png32];
  const sizes = [16, 32];

  // ICO Header (6 bytes)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type: ICO
  header.writeUInt16LE(images.length, 4); // Number of images

  // Directory entries (16 bytes each)
  let offset = 6 + images.length * 16;
  const entries = [];
  for (let i = 0; i < images.length; i++) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], 0); // Width
    entry.writeUInt8(sizes[i] === 256 ? 0 : sizes[i], 1); // Height
    entry.writeUInt8(0, 2);  // Color palette
    entry.writeUInt8(0, 3);  // Reserved
    entry.writeUInt16LE(1, 4);  // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(images[i].length, 8);  // Image size
    entry.writeUInt32LE(offset, 12); // Offset
    entries.push(entry);
    offset += images[i].length;
  }

  const ico = Buffer.concat([header, ...entries, ...images]);
  fs.writeFileSync(icoPath, ico);
  const size = (fs.statSync(icoPath).size / 1024).toFixed(1);
  console.log(`  Created: ${path.relative(ABORADAR_DIR, icoPath)} (ICO multi-size, ${size}KB)`);
}

async function main() {
  console.log('=== AboRadar Logo Asset Generator ===\n');

  // Ensure directories exist
  fs.mkdirSync(path.join(ABORADAR_DIR, 'img'), { recursive: true });
  fs.mkdirSync(path.join(APP_DIR, 'assets'), { recursive: true });

  // 1. App Icon (1024x1024)
  console.log('1. App Icon (1024x1024):');
  await svgToPng(ICON_SVG, path.join(APP_DIR, 'assets', 'icon.png'), 1024);

  // 2. Favicon
  console.log('\n2. Favicon:');
  const favicon512 = path.join(__dirname, 'favicon-512.png');
  await svgToPng(ICON_SVG, favicon512, 512);
  await createFaviconIco(favicon512, path.join(ABORADAR_DIR, 'img', 'favicon.ico'));
  await svgToPng(ICON_SVG, path.join(ABORADAR_DIR, 'img', 'favicon.png'), 32);

  // 3. Web sizes
  console.log('\n3. Web sizes:');
  for (const size of [192, 180, 128]) {
    await svgToPng(ICON_SVG, path.join(__dirname, `logo-icon-${size}.png`), size);
  }

  // 4. OG Image
  console.log('\n4. OG Image (1200x630):');
  await createOgImage(ICON_SVG, path.join(ABORADAR_DIR, 'img', 'og-image.png'));

  // 5. Splash Icon
  console.log('\n5. Splash Icon:');
  await svgToPng(ICON_SVG, path.join(APP_DIR, 'assets', 'splash-icon.png'), 512);

  // 6. Android icons
  console.log('\n6. Android Adaptive Icons:');
  await svgToPng(ICON_SVG, path.join(APP_DIR, 'assets', 'android-icon-foreground.png'), 1024);
  await svgToPng(ICON_SVG, path.join(APP_DIR, 'assets', 'android-icon-monochrome.png'), 1024);

  // 7. Expo web favicon
  console.log('\n7. Expo Web Favicon:');
  await svgToPng(ICON_SVG, path.join(APP_DIR, 'assets', 'favicon.png'), 48);

  console.log('\n=== Done! All assets generated. ===');
}

main().catch(console.error);
