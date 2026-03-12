/* AboRadar App – Root Component */
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Problem />
        <AboFinder />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <CookieBanner />
    </React.Fragment>
  );
};

/* React 18 Root rendern */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
