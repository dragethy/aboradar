/* Pricing – Coming Soon / Warteliste */
const Pricing = () => {
  const plannedFeatures = [
    'Kostenlose Basis-Version',
    'Abo-Dashboard mit KPIs und Charts',
    'Push-Benachrichtigungen für Kündigungsfristen',
    'Bank-Import (automatische Abo-Erkennung)',
    'Offline-fähig & DSGVO-konform',
    'Verfügbar für iOS, Android & Web',
  ];

  return (
    <section id="pricing" className="py-16 md:py-24" aria-label="AboRadar – Die App kommt bald">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
            Die App kommt <span className="text-abo-accent">bald</span>
          </h2>
          <p className="text-abo-text-soft text-lg">
            Trag dich auf die Warteliste ein und sei beim Launch dabei.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="relative rounded-2xl border border-abo-accent bg-abo-card shadow-lg shadow-abo-accent/10 p-6 md:p-8">
            {/* Badge */}
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-6 bg-abo-accent/20 text-abo-accent">
              Geplante Features
            </span>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plannedFeatures.map((feature, j) => (
                <li key={j} className="flex items-start gap-2 text-sm">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-abo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-abo-text-soft">{feature}</span>
                </li>
              ))}
            </ul>

            {/* EmailForm */}
            <EmailForm />
          </div>
        </div>
      </div>
    </section>
  );
};
