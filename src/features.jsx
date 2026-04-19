function Features() {
  const features = [
    {
      title: 'Technique detection',
      body: 'Pose estimation on-device spots the small deviations a mirror never could — elbow drift, hip under-rotation, open paddle face — and tells you which one to fix first.',
      chip: 'Live',
      chipTone: 'amber',
      visual: <TechViz />,
    },
    {
      title: 'Drill customization',
      body: 'Build a drill that only counts the strokes you care about. Pick a stroke, pick a reference, pick how strict the coach should be. Share it with the group chat.',
      chip: 'Build',
      chipTone: 'navy',
      visual: <DrillViz />,
    },
    {
      title: 'Session review',
      body: 'Every rep is saved. Scrub the timeline, compare against your own best, and watch the exact strokes the coach flagged — with one thing working and one thing to focus on.',
      chip: 'Review',
      chipTone: 'sage',
      visual: <ReviewViz />,
    },
  ];

  return (
    <section id="features" style={{ padding: '140px 0 100px', background: 'var(--bg-2)', position: 'relative' }}>
      <Container>
        <Reveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div style={{ maxWidth: 560 }}>
              <Pill tone="ink">Features</Pill>
              <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', lineHeight: 1.02, letterSpacing: '-0.03em', fontWeight: 800, marginTop: 18, textWrap: 'balance' }}>
                Three tools, one pocket coach.
              </h2>
            </div>
            <p style={{ maxWidth: 360, fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.5 }}>
              We shipped what a player actually uses at the table — and cut everything else. No gamification. No streaks. No trophies.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 120}>
              <FeatureCard f={f} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({ f }) {
  return (
    <div style={{
      background: 'var(--bg)',
      border: '1px solid var(--line)',
      borderRadius: 20,
      padding: 24,
      display: 'flex', flexDirection: 'column', gap: 18,
      minHeight: 480,
    }}>
      <div style={{ aspectRatio: '4/3', width: '100%' }}>
        {f.visual}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Pill tone={f.chipTone}>{f.chip}</Pill>
      </div>
      <h3 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em' }}>{f.title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)' }}>{f.body}</p>
    </div>
  );
}

function TechViz() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--canvas)', borderRadius: 14, position: 'relative', overflow: 'hidden' }}>
      <svg viewBox="0 0 300 220" style={{ width: '100%', height: '100%' }}>
        <g stroke="#9FE0C4" strokeWidth="2.2" fill="none" strokeLinecap="round">
          <circle cx="120" cy="70" r="14"/>
          <path d="M120 84 L120 140"/>
          <path d="M120 140 L100 200 M120 140 L140 200"/>
          <path d="M120 100 L80 140"/>
          <path d="M120 100 L180 90 L220 95" stroke="#F5B547" strokeWidth="2.6"/>
        </g>
        <circle cx="220" cy="95" r="5" fill="#F5B547"/>
        <rect x="165" y="45" width="95" height="22" rx="11" fill="#F5B547"/>
        <text x="177" y="60" fontSize="11" fontWeight="700" fill="#1A1A1F" fontFamily="Inter">Elbow +12°</text>
        <text x="20" y="208" fontSize="9" fill="#6B6B75" fontFamily="JetBrains Mono">17 joints · 240fps</text>
      </svg>
    </div>
  );
}

function DrillViz() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--bg-2)', borderRadius: 14, padding: 16, display: 'flex', flexDirection: 'column', gap: 8, border: '1px solid var(--line)' }}>
      <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: 'JetBrains Mono' }}>NEW DRILL</div>
      <div style={{ fontSize: 14, fontWeight: 600 }}>Crosscourt forehand · 50</div>
      {[
        { label: 'Stroke', val: 'Forehand loop' },
        { label: 'Reference', val: 'My best (Mar 8)' },
        { label: 'Strictness', val: '●●●○○' },
      ].map(r => (
        <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 10px', background: 'var(--bg)', borderRadius: 8, fontSize: 12 }}>
          <span style={{ color: 'var(--ink-3)' }}>{r.label}</span>
          <span style={{ fontWeight: 500 }}>{r.val}</span>
        </div>
      ))}
      <div style={{ padding: '8px 12px', background: 'var(--navy)', color: '#fff', borderRadius: 8, fontSize: 12, fontWeight: 600, textAlign: 'center', marginTop: 4 }}>
        Start drill →
      </div>
    </div>
  );
}

function ReviewViz() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'var(--bg-2)', borderRadius: 14, padding: 16, border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--ink-3)' }}>
        <span>SESSION · TUE 10:24</span>
        <span className="mono">42:18</span>
      </div>
      {/* Timeline of strokes */}
      <div style={{ display: 'flex', gap: 1, height: 40, alignItems: 'end' }}>
        {Array.from({ length: 40 }).map((_, i) => {
          const h = 20 + Math.abs(Math.sin(i * 0.8)) * 20;
          const bad = i === 12 || i === 27 || i === 33;
          return <div key={i} style={{ flex: 1, height: `${h}px`, background: bad ? '#F5B547' : 'var(--sage)', borderRadius: 1 }}/>;
        })}
      </div>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 12, color: 'var(--ink-2)' }}>
        <Icon.Play style={{ color: 'var(--navy)' }}/>
        <span>Stroke 27 · "Elbow drift"</span>
      </div>
      <div style={{ background: 'var(--sage-bg)', padding: '8px 10px', borderRadius: 8, fontSize: 12, color: 'var(--sage-ink)' }}>
        <strong>Working:</strong> hip rotation within 3°
      </div>
      <div style={{ background: 'var(--amber-bg)', padding: '8px 10px', borderRadius: 8, fontSize: 12, color: '#8A5A10' }}>
        <strong>Next:</strong> lower arm on backswing
      </div>
    </div>
  );
}

Object.assign(window, { Features });
