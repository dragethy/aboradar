/* DashboardPreview – Animiertes Dashboard-Mockup aus Divs */
const DashboardPreview = () => {
  return (
    <div className="dashboard-container rounded-2xl border border-abo-border bg-abo-card p-4 md:p-6 shadow-2xl">
      {/* Scan Line */}
      <div className="scan-line absolute left-0 right-0 h-[2px] bg-abo-accent z-10 pointer-events-none" style={{
        boxShadow: '0 0 15px 5px rgba(0, 232, 157, 0.4), 0 0 30px 10px rgba(0, 232, 157, 0.2)'
      }}></div>

      {/* Header Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-abo-warning"></div>
          <div className="w-3 h-3 rounded-full bg-abo-orange"></div>
          <div className="w-3 h-3 rounded-full bg-abo-accent"></div>
        </div>
        <span className="text-[10px] font-mono text-abo-text-muted">aboradar.app</span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4">
        <div className="bg-abo-card-alt rounded-lg p-2 md:p-3 border border-abo-border">
          <p className="text-[9px] md:text-[10px] text-abo-text-muted uppercase tracking-wider">Monatlich</p>
          <p className="font-mono font-bold text-base md:text-lg text-abo-text">237 €</p>
          <p className="text-[9px] text-abo-warning">+12% vs. Vormonat</p>
        </div>
        <div className="bg-abo-card-alt rounded-lg p-2 md:p-3 border border-abo-border">
          <p className="text-[9px] md:text-[10px] text-abo-text-muted uppercase tracking-wider">Aktive Abos</p>
          <p className="font-mono font-bold text-base md:text-lg text-abo-accent">8</p>
          <p className="text-[9px] text-abo-text-muted">von 12 gesamt</p>
        </div>
        <div className="bg-abo-card-alt rounded-lg p-2 md:p-3 border border-abo-border">
          <p className="text-[9px] md:text-[10px] text-abo-text-muted uppercase tracking-wider">Verschwendet</p>
          <p className="font-mono font-bold text-base md:text-lg text-abo-warning">71 €</p>
          <span className="inline-block text-[8px] bg-abo-warning/20 text-abo-warning px-1.5 py-0.5 rounded-full font-bold">4 ungenutzt</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="grid grid-cols-5 gap-2 md:gap-3">
        {/* Bar Chart */}
        <div className="col-span-3 bg-abo-card-alt rounded-lg p-2 md:p-3 border border-abo-border">
          <p className="text-[9px] md:text-[10px] text-abo-text-muted mb-2 uppercase tracking-wider">Kosten/Kategorie</p>
          <div className="space-y-1.5">
            {[
              { label: 'Streaming', width: '75%', color: 'bg-abo-accent' },
              { label: 'Software', width: '55%', color: 'bg-abo-blue' },
              { label: 'Fitness', width: '35%', color: 'bg-abo-orange' },
              { label: 'News', width: '20%', color: 'bg-abo-warning' },
            ].map((bar) => (
              <div key={bar.label} className="flex items-center gap-2">
                <span className="text-[8px] text-abo-text-muted w-12 text-right">{bar.label}</span>
                <div className="flex-1 h-2 bg-abo-bg rounded-full overflow-hidden">
                  <div className={`h-full ${bar.color} rounded-full transition-all`} style={{ width: bar.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donut Chart */}
        <div className="col-span-2 bg-abo-card-alt rounded-lg p-2 md:p-3 border border-abo-border flex flex-col items-center justify-center">
          <p className="text-[9px] md:text-[10px] text-abo-text-muted mb-2 uppercase tracking-wider">Status</p>
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <div
              className="w-full h-full rounded-full"
              style={{
                background: 'conic-gradient(#00E89D 0deg 216deg, #FF9F43 216deg 288deg, #FF5C5C 288deg 360deg)',
              }}
            ></div>
            <div className="absolute inset-2 md:inset-3 rounded-full bg-abo-card-alt flex items-center justify-center">
              <span className="font-mono font-bold text-xs md:text-sm text-abo-text">67%</span>
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <span className="flex items-center gap-1 text-[7px] text-abo-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-abo-accent"></span>Aktiv
            </span>
            <span className="flex items-center gap-1 text-[7px] text-abo-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-abo-orange"></span>Prüfen
            </span>
            <span className="flex items-center gap-1 text-[7px] text-abo-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-abo-warning"></span>Kündigen
            </span>
          </div>
        </div>
      </div>

      {/* Abo List Preview */}
      <div className="mt-3 space-y-1.5">
        {[
          { name: 'Netflix', price: '12,99 €', status: 'active' },
          { name: 'Spotify', price: '9,99 €', status: 'active' },
          { name: 'McFit', price: '24,99 €', status: 'warning' },
        ].map((abo) => (
          <div key={abo.name} className="flex items-center justify-between bg-abo-card-alt/50 rounded-lg px-3 py-1.5 border border-abo-border/50">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${abo.status === 'active' ? 'bg-abo-accent' : 'bg-abo-warning'}`}></div>
              <span className="text-[10px] text-abo-text">{abo.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-abo-text-soft">{abo.price}</span>
              {abo.status === 'warning' && (
                <span className="text-[7px] bg-abo-warning/20 text-abo-warning px-1.5 py-0.5 rounded-full font-bold">Ungenutzt</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
