function StatsSection() {
  const stats = [
    { n: '17', label: 'Joints tracked', sub: 'Full-body pose estimation' },
    { n: '240', label: 'Frames per second', sub: 'Nothing gets missed' },
    { n: '0ms', label: 'Cloud round-trip', sub: 'Runs on-device' },
    { n: '14d', label: 'Free to try', sub: 'No card required' },
  ];

  return (
    <section id="proof" style={{ padding: '100px 0', background: 'var(--canvas)', color: '#F2EEE6', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 40% at 80% 30%, rgba(245,181,71,0.1), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(159,224,196,0.1), transparent 60%)',
      }}/>

      <Container style={{ position: 'relative' }}>
        <Reveal>
          <div style={{ maxWidth: 760, marginBottom: 80 }}>
            <span style={{ display: 'inline-block', color: '#9FE0C4', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 16 }} className="mono">
              · Under the hood
            </span>
            <h2 style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.02, letterSpacing: '-0.03em', fontWeight: 800, textWrap: 'balance' }}>
              Built by people who cared about the <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#F5B547' }}>40ms</span> between seeing a mistake and hearing a fix.
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 40 }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <div>
                <div style={{ fontSize: 'clamp(48px, 5vw, 80px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 16, fontWeight: 600, marginTop: 16, marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: '#8A8A92' }}>{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

Object.assign(window, { StatsSection });
