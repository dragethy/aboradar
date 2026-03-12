/* Footer */
const Footer = () => {
  return (
    <footer className="border-t border-abo-border bg-abo-card/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-display font-extrabold text-lg">
            Abo<span className="text-abo-accent">Radar</span>
            <span className="text-abo-text-muted text-sm font-normal">.app</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-abo-text-soft">
            <a href="datenschutz.html" className="hover:text-abo-text transition-colors">Datenschutz</a>
            <a href="impressum.html" className="hover:text-abo-text transition-colors">Impressum</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-abo-text-muted">
            &copy; 2026 AboRadar. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
