"""Generate PNG assets from SVG logo files for AboRadar."""
import os
import sys

try:
    import cairosvg
except ImportError:
    print("cairosvg not available, trying alternative...")
    sys.exit(1)

from PIL import Image
import io

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ABORADAR_DIR = os.path.dirname(os.path.dirname(BASE_DIR))
APP_DIR = os.path.join(os.path.dirname(ABORADAR_DIR), "aboradar-app")

ICON_SVG = os.path.join(BASE_DIR, "logo-icon.svg")
FULL_SVG = os.path.join(BASE_DIR, "logo-full.svg")


def svg_to_png(svg_path, output_path, width, height=None):
    """Convert SVG to PNG at specified dimensions."""
    if height is None:
        height = width
    png_data = cairosvg.svg2png(
        url=svg_path,
        output_width=width,
        output_height=height,
    )
    with open(output_path, "wb") as f:
        f.write(png_data)
    size_kb = os.path.getsize(output_path) / 1024
    print(f"  Created: {output_path} ({width}x{height}, {size_kb:.1f}KB)")


def create_favicon_ico(png_path, ico_path):
    """Create .ico from PNG with multiple sizes."""
    img = Image.open(png_path)
    sizes = [(16, 16), (32, 32), (48, 48)]
    imgs = [img.resize(s, Image.LANCZOS) for s in sizes]
    imgs[0].save(ico_path, format="ICO", sizes=sizes, append_images=imgs[1:])
    size_kb = os.path.getsize(ico_path) / 1024
    print(f"  Created: {ico_path} (multi-size ICO, {size_kb:.1f}KB)")


def create_og_image(svg_path, output_path):
    """Create 1200x630 OG image with logo centered on dark background."""
    # Create dark background
    bg = Image.new("RGBA", (1200, 630), (8, 9, 13, 255))

    # Render logo at reasonable size
    logo_size = 280
    png_data = cairosvg.svg2png(
        url=svg_path,
        output_width=logo_size,
        output_height=logo_size,
    )
    logo = Image.open(io.BytesIO(png_data)).convert("RGBA")

    # Center the logo (slightly left to leave room for text)
    x = (1200 - logo_size) // 2
    y = (630 - logo_size) // 2 - 40
    bg.paste(logo, (x, y), logo)

    # Add a subtle text area below (brand name as simple bar)
    # We'll keep it simple - just the icon centered
    # The wordmark would need font rendering which is complex

    bg.save(output_path, "PNG")
    size_kb = os.path.getsize(output_path) / 1024
    print(f"  Created: {output_path} (1200x630, {size_kb:.1f}KB)")


def create_splash_icon(svg_path, output_path):
    """Create splash screen icon (centered on dark bg)."""
    # Splash icon for Expo: just the logo on transparent bg
    size = 512
    png_data = cairosvg.svg2png(
        url=svg_path,
        output_width=size,
        output_height=size,
    )
    with open(output_path, "wb") as f:
        f.write(png_data)
    size_kb = os.path.getsize(output_path) / 1024
    print(f"  Created: {output_path} ({size}x{size}, {size_kb:.1f}KB)")


def main():
    print("=== AboRadar Logo Asset Generator ===\n")

    # 1. App Icon (1024x1024) for Expo
    print("1. App Icon (1024x1024):")
    app_icon_path = os.path.join(APP_DIR, "assets", "icon.png")
    svg_to_png(ICON_SVG, app_icon_path, 1024)

    # 2. Favicon PNGs
    print("\n2. Favicon:")
    favicon_png = os.path.join(BASE_DIR, "favicon-512.png")
    svg_to_png(ICON_SVG, favicon_png, 512)

    favicon_32 = os.path.join(BASE_DIR, "favicon-32.png")
    svg_to_png(ICON_SVG, favicon_32, 32)

    # Create ICO
    ico_path = os.path.join(ABORADAR_DIR, "img", "favicon.ico")
    create_favicon_ico(favicon_png, ico_path)

    # Also save a 32px PNG favicon
    favicon_png_web = os.path.join(ABORADAR_DIR, "img", "favicon.png")
    svg_to_png(ICON_SVG, favicon_png_web, 32)

    # 3. Various sizes for web
    print("\n3. Web sizes:")
    for size in [192, 180, 128]:
        out = os.path.join(BASE_DIR, f"logo-icon-{size}.png")
        svg_to_png(ICON_SVG, out, size)

    # 4. OG Image
    print("\n4. OG Image (1200x630):")
    og_path = os.path.join(ABORADAR_DIR, "img", "og-image.png")
    create_og_image(ICON_SVG, og_path)

    # 5. Splash Icon for Expo
    print("\n5. Splash Icon:")
    splash_path = os.path.join(APP_DIR, "assets", "splash-icon.png")
    create_splash_icon(ICON_SVG, splash_path)

    # 6. Android adaptive icon (foreground)
    print("\n6. Android Adaptive Icon:")
    android_fg = os.path.join(APP_DIR, "assets", "android-icon-foreground.png")
    svg_to_png(ICON_SVG, android_fg, 1024)

    # Monochrome version (same icon)
    android_mono = os.path.join(APP_DIR, "assets", "android-icon-monochrome.png")
    svg_to_png(ICON_SVG, android_mono, 1024)

    # Expo web favicon
    print("\n7. Expo Web Favicon:")
    expo_favicon = os.path.join(APP_DIR, "assets", "favicon.png")
    svg_to_png(ICON_SVG, expo_favicon, 48)

    print("\n=== Done! All assets generated. ===")


if __name__ == "__main__":
    main()
