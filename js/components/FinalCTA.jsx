/* FinalCTA – Abschluss Call-to-Action */
const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-abo-bg via-abo-accent/5 to-abo-bg"></div>

      <div className="relative max-w-2xl mx-auto px-4 md:px-6 text-center">
        <h2 className="font-display font-black text-3xl md:text-5xl mb-4">
          Finde jetzt deine{' '}
          <span className="text-abo-warning">vergessenen</span> Abos
        </h2>
        <p className="text-abo-text-soft text-lg mb-8">
          Trag dich auf die Warteliste ein &ndash; die AboRadar App kommt bald für iOS, Android und Web.
        </p>

        <div className="max-w-md mx-auto mb-6">
          <EmailForm />
        </div>

        <p className="text-xs text-abo-text-muted">
          Kein Spam. Wir benachrichtigen dich nur zum App-Launch.
        </p>
      </div>
    </section>
  );
};
