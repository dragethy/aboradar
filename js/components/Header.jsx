/* Header – Sticky mit Blur-Backdrop */
const Header = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = (e) => {
    e.preventDefault();
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-abo-bg/80 backdrop-blur-lg border-b border-abo-border/50' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight">
          <img src="img/logos/logo-icon.svg" alt="AboRadar Logo" className="w-8 h-8" />
          Abo<span className="text-abo-accent">Radar</span>
          <span className="text-abo-text-muted text-sm font-normal">.app</span>
        </a>

        {/* CTA */}
        <button
          onClick={scrollToHero}
          className="px-4 py-2 rounded-lg bg-abo-accent text-abo-bg font-display font-bold text-sm hover:brightness-110 transition-all"
        >
          <span className="hidden sm:inline">Auf die Warteliste</span>
          <span className="sm:hidden">Warteliste</span>
        </button>
      </div>
    </header>
  );
};
