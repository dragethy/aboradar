/* Problem – Schock-Statistiken mit Counter-Animation */
const Problem = () => {
  const stats = [
    { value: 8.4, suffix: '', label: 'Abos hat der Durchschnittsdeutsche', color: 'text-abo-blue', decimals: 1 },
    { value: 237, suffix: ' €', label: 'gibt er dafür pro Monat aus', color: 'text-abo-orange', decimals: 0 },
    { value: 850, suffix: ' €', label: 'pro Jahr verschwendet', color: 'text-abo-warning', decimals: 0, warning: true },
  ];

  return (
    <section id="stats" className="py-16 md:py-24" aria-label="Statistiken zu Abo-Verschwendung in Deutschland">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
            Das Problem, das <span className="text-abo-warning">niemand sieht</span>
          </h2>
          <p className="text-abo-text-soft text-lg max-w-2xl mx-auto">
            67% der Menschen haben keinen Überblick über ihre laufenden Abonnements.
            Der durchschnittliche Deutsche hat 8,4 Abos und gibt 237 € monatlich dafür aus. Rund 30% davon werden nicht genutzt – das sind über 850 € Verschwendung pro Jahr.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* Einzelne Stat-Karte mit Counter */
const StatCard = ({ stat, delay }) => {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const duration = 1500;
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(stat.value, increment * step);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
  };

  const displayValue = stat.decimals > 0
    ? count.toFixed(stat.decimals).replace('.', ',')
    : Math.round(count).toLocaleString('de-DE');

  return (
    <div
      ref={ref}
      className={`relative bg-abo-card rounded-2xl border border-abo-border p-6 md:p-8 text-center card-hover fade-in-up delay-${delay}`}
    >
      {stat.warning && (
        <span className="absolute top-3 right-3 text-[10px] bg-abo-warning/20 text-abo-warning px-2 py-1 rounded-full font-bold uppercase tracking-wider">
          Verschwendung
        </span>
      )}
      <p className={`font-mono font-bold text-5xl md:text-6xl ${stat.color} mb-2`}>
        {displayValue}{stat.suffix}
      </p>
      <p className="text-abo-text-soft text-sm">
        {stat.label}
      </p>
    </div>
  );
};
