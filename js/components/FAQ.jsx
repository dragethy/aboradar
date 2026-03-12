/* FAQ – Akkordeon */
const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: 'Was ist AboRadar?',
      answer: 'AboRadar ist eine kostenlose Abo-Tracker App für iOS, Android und Web. Sie hilft dir, alle Abonnements zu überblicken, vergessene Abos zu finden und hunderte Euro pro Jahr zu sparen.',
    },
    {
      question: 'Wann kommt die App?',
      answer: 'Wir arbeiten aktuell am Launch. Trag dich auf die Warteliste ein und wir benachrichtigen dich, sobald die App verfügbar ist.',
    },
    {
      question: 'Für welche Geräte ist AboRadar verfügbar?',
      answer: 'AboRadar wird als App für iPhone (iOS), Android-Smartphones und als Web-App im Browser verfügbar sein – alles aus einem Codebase.',
    },
    {
      question: 'Ist AboRadar kostenlos?',
      answer: 'Ja, die Basis-Version wird kostenlos sein. Premium-Features sind optional und werden als einmaliger In-App-Kauf oder Abo angeboten – Details folgen zum Launch.',
    },
    {
      question: 'Sind meine Daten sicher?',
      answer: 'Ja, AboRadar ist DSGVO-konform. Deine Abo-Daten bleiben lokal auf deinem Gerät – nichts wird in die Cloud hochgeladen, kein Tracking.',
    },
    {
      question: 'Wie finde ich meine vergessenen Abos?',
      answer: 'AboRadar enthält einen Abo-Finder mit Checkliste der häufigsten deutschen Abo-Dienste. Zusätzlich empfehlen wir: Kontoauszüge checken, E-Mail nach Rechnungen durchsuchen und App-Store Abos prüfen.',
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24" aria-label="Häufig gestellte Fragen zu AboRadar" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
            Häufige <span className="text-abo-accent">Fragen</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-abo-card rounded-xl border border-abo-border overflow-hidden card-hover"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display font-bold text-sm md:text-base pr-4" itemProp="name">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-abo-accent flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="px-5 pb-5 text-abo-text-soft text-sm leading-relaxed" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
