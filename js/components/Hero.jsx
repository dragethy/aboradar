/* Hero – Headline + EmailForm + DashboardPreview */
const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24" aria-label="AboRadar – Kostenloser Abo-Tracker" itemScope itemType="https://schema.org/WebApplication">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left – Text + Form */}
          <div id="about" className="flex-1 text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-abo-accent-dim border border-abo-accent/30 text-abo-accent text-xs font-body font-medium mb-6">
              Bald verfügbar für iOS, Android & Web
            </div>

            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-6" itemProp="name">
              Sieh was deine Abos{' '}
              <span className="text-gradient">WIRKLICH</span>{' '}
              kosten
            </h1>

            <p className="text-lg md:text-xl text-abo-text-soft mb-8 max-w-lg mx-auto lg:mx-0" itemProp="description">
              Der durchschnittliche Deutsche verschwendet <span className="text-abo-warning font-bold font-mono">850 €/Jahr</span> für
              ungenutzte Abos. AboRadar ist die smarte Abo-Tracker App für iOS, Android und Web. Vergessene Abos finden, Kündigungsfristen im Blick behalten, Push-Benachrichtigungen &ndash; alles in einer App. DSGVO-konform.
            </p>

            {/* Email Form */}
            <div className="mb-6 max-w-md mx-auto lg:mx-0">
              <EmailForm />
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-abo-text-muted">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-abo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Kostenlose Basis-Version
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-abo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Keine Kreditkarte
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-abo-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                DSGVO-konform
              </span>
            </div>
          </div>

          {/* Right – Dashboard Preview */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};
