/* CookieBanner – DSGVO Cookie-Consent */
const CookieBanner = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('aboradar_cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('aboradar_cookie_consent', 'all');
    setVisible(false);
  };

  const handleNecessary = () => {
    localStorage.setItem('aboradar_cookie_consent', 'necessary');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-abo-card border border-abo-border rounded-2xl p-4 md:p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-abo-text-soft leading-relaxed">
              Wir verwenden Cookies, um dir die bestmögliche Erfahrung zu bieten.
              Mehr dazu in unserer{' '}
              <a href="datenschutz.html" className="text-abo-accent hover:underline">Datenschutzerklärung</a>.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleNecessary}
              className="px-4 py-2 rounded-lg border border-abo-border text-abo-text-soft text-sm hover:border-abo-text-muted transition-colors"
            >
              Nur notwendige
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded-lg bg-abo-accent text-abo-bg font-bold text-sm hover:brightness-110 transition-all"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
