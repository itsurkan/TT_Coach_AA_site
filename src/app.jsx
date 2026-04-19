function App() {
  const [tweaks, setTweaks] = useState(window.TWEAKS);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', tweaks.palette);
    document.documentElement.setAttribute('data-theme', tweaks.theme);
  }, [tweaks.palette, tweaks.theme]);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <StatsSection />
        <CTA />
      </main>
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
