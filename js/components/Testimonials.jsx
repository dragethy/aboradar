/* Testimonials – Social Proof */
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      initials: 'SM',
      text: 'Ich war schockiert – 4 Abos die ich komplett vergessen hatte. Mit AboRadar spare ich jetzt über 60 € im Monat!',
      stars: 5,
      color: 'bg-abo-accent',
    },
    {
      name: 'Thomas K.',
      initials: 'TK',
      text: 'Endlich ein Tool das nicht selbst ein Abo ist. In 5 Minuten eingerichtet, sofort den Überblick gehabt. Top!',
      stars: 5,
      color: 'bg-abo-blue',
    },
    {
      name: 'Lisa R.',
      initials: 'LR',
      text: 'Das Dashboard sieht nicht nur gut aus, es hat mir geholfen, mein McFit-Abo zu kündigen, das ich seit 2 Jahren nicht nutze.',
      stars: 5,
      color: 'bg-abo-orange',
    },
  ];

  const renderStars = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <svg key={i} className="w-4 h-4 text-abo-orange" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-abo-card/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
            Das sagen unsere <span className="text-abo-accent">Beta-Tester</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-abo-card rounded-2xl border border-abo-border p-6 card-hover">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {renderStars(t.stars)}
              </div>

              {/* Quote */}
              <p className="text-abo-text-soft text-sm leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-abo-bg font-display font-bold text-sm`}>
                  {t.initials}
                </div>
                <span className="font-display font-bold text-sm">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
