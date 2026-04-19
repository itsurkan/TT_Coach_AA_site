function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? '14px 0' : '22px 0',
      background: scrolled ? 'color-mix(in oklab, var(--bg) 85%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px) saturate(1.2)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'all .3s ease',
    }}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Logo />
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: '-0.01em' }}>TT Coach AI</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div style={{ display: 'flex', gap: 28, fontSize: 14, color: 'var(--ink-2)', fontWeight: 500 }}>
            <a href="#how" style={{ color: 'inherit', textDecoration: 'none' }}>How it works</a>
            <a href="#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
            <a href="#proof" style={{ color: 'inherit', textDecoration: 'none' }}>Proof</a>
          </div>
          <Button variant="dark" size="md">
            Get the app <Icon.ArrowRight />
          </Button>
        </div>
      </Container>
    </nav>
  );
}

function Logo() {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: 9,
      background: 'var(--ink)', color: 'var(--bg)',
      display: 'grid', placeItems: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        {/* paddle + ball */}
        <circle cx="8" cy="10" r="5.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11.2 13.2l2.8 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="14.6" cy="6.4" r="1.6" fill="#F5B547" />
      </svg>
    </div>
  );
}

Object.assign(window, { Nav });
