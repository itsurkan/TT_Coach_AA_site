function CTA() {
  return (
    <section style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <Container>
        <Reveal>
          <div style={{
            background: 'var(--ink)',
            color: 'var(--bg)',
            borderRadius: 32,
            padding: '80px 60px',
            position: 'relative',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 40,
            alignItems: 'center',
          }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 800, marginBottom: 20, textWrap: 'balance' }}>
                Stop guessing what went wrong.
              </h2>
              <p style={{ fontSize: 18, color: '#C9C7BF', lineHeight: 1.5, maxWidth: 440, marginBottom: 32 }}>
                Download TT&nbsp;Coach AI, prop your phone up, and play. A real fix in your first session — or we'll refund you.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Button variant="primary" size="lg" style={{ background: '#F5B547', color: '#1A1A1F' }}>
                  <Icon.Apple /> Download for iOS
                </Button>
                <Button variant="ghost" size="lg" style={{ background: 'transparent', color: '#F2EEE6', borderColor: 'rgba(255,255,255,0.2)' }}>
                  <Icon.Android /> Get on Android
                </Button>
              </div>
            </div>

            {/* decorative QR-ish block */}
            <div style={{ position: 'relative', height: 260, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{
                width: 200, height: 200, borderRadius: 24,
                background: 'var(--bg)', padding: 18,
                display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridTemplateRows: 'repeat(12, 1fr)', gap: 2,
              }}>
                {Array.from({ length: 144 }).map((_, i) => {
                  const r = (Math.sin(i * 2.3) + Math.cos(i * 1.1)) > 0.2;
                  return <div key={i} style={{ background: r ? 'var(--ink)' : 'transparent', borderRadius: 1 }}/>;
                })}
              </div>
              <div style={{ position: 'absolute', bottom: 20, fontSize: 11, color: '#8A8A92', fontFamily: 'JetBrains Mono' }}>
                SCAN · iOS + Android
              </div>
            </div>

            {/* corner motif */}
            <div aria-hidden style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(245,181,71,0.08)' }}/>
          </div>
        </Reveal>

        <Footer />
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <div style={{
      marginTop: 80, paddingTop: 32, borderTop: '1px solid var(--line)',
      display: 'flex', justifyContent: 'space-between', fontSize: 13, color: 'var(--ink-3)',
      flexWrap: 'wrap', gap: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Logo/>
        <span>© 2026 TT Coach AI. Fix the elbow.</span>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Support</a>
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>For coaches</a>
      </div>
    </div>
  );
}

Object.assign(window, { CTA });
