/* AboFinder – "So findest du deine Abos" Sektion */
const AboFinder = () => {
  const methods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      step: '01',
      title: 'Kontoauszüge checken',
      description: 'Öffne deine Banking-App und filtere nach wiederkehrenden Abbuchungen der letzten 3 Monate. Die meisten Apps zeigen diese automatisch an.',
      tip: 'Tipp: Suche nach Beträgen wie 9,99 €, 12,99 € oder 14,99 €',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      step: '02',
      title: 'E-Mail durchsuchen',
      description: 'Suche in deinem Postfach nach „Rechnung", „Abonnement", „subscription" oder „Bestätigung". Du wirst überrascht sein, was du findest.',
      tip: 'Tipp: Auch nach „invoice" und „renewal" suchen',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      step: '03',
      title: 'App-Store Abos prüfen',
      description: 'iPhone: Einstellungen → Apple-ID → Abonnements. Android: Play Store → Zahlungen & Abos. Dort verstecken sich oft vergessene App-Abos.',
      tip: 'Tipp: Auch PayPal-Zahlungsvereinbarungen checken',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      step: '04',
      title: 'Kategorien durchgehen',
      description: 'Streaming, Fitness, Software, Cloud, News, Lieferdienste – geh jede Kategorie durch. AboRadar hilft dir mit einer Checkliste im Dashboard.',
      tip: 'Tipp: Die häufigsten vergessenen Abos: Fitness & Cloud-Speicher',
    },
  ];

  const scrollToHero = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="abo-finder" className="py-16 md:py-24" aria-label="So findest du alle deine Abos in 15 Minuten">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-abo-blue/20 border border-abo-blue/30 text-abo-blue text-xs font-body font-medium mb-4">
            Schritt für Schritt
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
            In 15 Minuten <span className="text-abo-accent">alle Abos</span> finden
          </h2>
          <p className="text-abo-text-soft text-lg max-w-2xl mx-auto">
            Du weißt nicht genau, welche Abos du hast? Kein Problem. Mit diesen 4 Schritten findest du jedes vergessene Abonnement.
          </p>
        </div>

        {/* 4 Methoden-Karten */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {methods.map((method, i) => (
            <div
              key={i}
              className="relative bg-abo-card rounded-2xl border border-abo-border p-6 card-hover group"
            >
              {/* Step-Nummer */}
              <span className="absolute top-4 right-4 font-mono text-2xl font-bold text-abo-border group-hover:text-abo-accent/30 transition-colors">
                {method.step}
              </span>

              {/* Icon */}
              <div className="text-abo-accent mb-4">{method.icon}</div>

              {/* Content */}
              <h3 className="font-display font-bold text-base mb-2">{method.title}</h3>
              <p className="text-abo-text-soft text-sm leading-relaxed mb-3">{method.description}</p>

              {/* Tipp */}
              <p className="text-xs text-abo-text-muted italic">{method.tip}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-abo-text-soft text-sm mb-4">
            Alle Abos gefunden? Jetzt ins Dashboard eintragen und den Überblick behalten.
          </p>
          <button
            onClick={scrollToHero}
            className="inline-flex items-center gap-2 bg-abo-accent hover:bg-abo-accent/90 text-abo-bg font-bold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-abo-accent/20"
          >
            Gratis Freebie sichern & Abos eintragen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
