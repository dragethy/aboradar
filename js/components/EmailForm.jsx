/* EmailForm – E-Mail-Sammlung (Platzhalter, später MailerLite) */
const EmailForm = ({ variant = 'default' }) => {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle | loading | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');

    // Platzhalter – später durch MailerLite API ersetzen
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-3 p-4 rounded-xl bg-abo-accent/10 border border-abo-accent/30">
        <svg className="w-6 h-6 text-abo-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p className="font-display font-bold text-abo-accent">Du bist auf der Warteliste!</p>
          <p className="text-sm text-abo-text-soft">Wir benachrichtigen dich zum App-Launch.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Deine E-Mail-Adresse"
        required
        className="flex-1 px-4 py-3 rounded-xl bg-abo-card border border-abo-border text-abo-text placeholder-abo-text-muted focus:outline-none focus:border-abo-accent focus:ring-1 focus:ring-abo-accent transition-colors"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 rounded-xl bg-abo-accent text-abo-bg font-display font-bold text-sm hover:brightness-110 transition-all glow-pulse disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
      >
        {status === 'loading' ? 'Wird gesendet...' : 'Auf die Warteliste'}
      </button>
    </form>
  );
};
