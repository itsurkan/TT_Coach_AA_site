// HERO — dark "coach canvas" with phone + annotated motion graphics
// Uses CSS keyframes for entry anim (reliable, no React state race)

const heroAnimCSS = `
@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes heroFadeUpLg {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes heroPhoneIn {
  from { opacity: 0; transform: translateY(40px) rotate(-2deg); }
  to { opacity: 1; transform: translateY(0) rotate(-2deg); }
}
@keyframes heroCanvasIn {
  from { opacity: 0; transform: rotate(6deg) translateY(30px); }
  to { opacity: 1; transform: rotate(3deg) translateY(0); }
}
@keyframes heroTipIn {
  from { opacity: 0; transform: translateY(20px) rotate(2deg); }
  to { opacity: 1; transform: translateY(0) rotate(2deg); }
}
@keyframes heroRibbonIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.hero-anim { opacity: 0; animation: heroFadeUp 800ms cubic-bezier(.2,.7,.2,1) forwards; }
.hero-anim-lg { opacity: 0; animation: heroFadeUpLg 900ms cubic-bezier(.2,.7,.2,1) forwards; }
.hero-phone { opacity: 0; animation: heroPhoneIn 1200ms cubic-bezier(.2,.7,.2,1) 600ms forwards; }
.hero-canvas { opacity: 0; animation: heroCanvasIn 1200ms cubic-bezier(.2,.7,.2,1) 400ms forwards; transform-origin: center; }
.hero-tip { opacity: 0; animation: heroTipIn 900ms cubic-bezier(.2,.7,.2,1) 1000ms forwards; }
.hero-ribbon { opacity: 0; animation: heroRibbonIn 900ms cubic-bezier(.2,.7,.2,1) 1200ms forwards; }
`;

function Hero() {
  return (
    <section style={{
      position: 'relative',
      paddingTop: 140,
      paddingBottom: 80,
      background: 'var(--bg)',
      overflow: 'hidden',
    }}>
      <style>{heroAnimCSS}</style>
      <HeroGrid />

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 60,
          alignItems: 'center',
        }}>
          {/* LEFT: Copy */}
          <div>
            <div className="hero-anim" style={{ animationDelay: '0ms' }}>
              <Pill tone="sage" dot>Live coaching · now on iOS &amp; Android</Pill>
            </div>

            <h1 style={{
              fontSize: 'clamp(52px, 6.6vw, 92px)',
              lineHeight: 0.98,
              letterSpacing: '-0.035em',
              fontWeight: 800,
              marginTop: 24,
              marginBottom: 28,
              textWrap: 'balance',
            }}>
              <span className="hero-anim-lg" style={{ display: 'block', animationDelay: '120ms' }}>A coach</span>
              <span className="hero-anim-lg" style={{ display: 'block', animationDelay: '240ms' }}>that plays</span>
              <span className="hero-anim-lg" style={{
                display: 'block',
                animationDelay: '360ms',
                fontStyle: 'italic', fontWeight: 400, color: 'var(--navy)'
              }}>in your ear.</span>
            </h1>

            <p className="hero-anim" style={{
              fontSize: 20, lineHeight: 1.45, color: 'var(--ink-2)',
              maxWidth: 520, marginBottom: 40,
              animationDelay: '600ms',
            }}>
              TT&nbsp;Coach&nbsp;AI watches every stroke you play and whispers corrections in real time — so you fix the elbow on rep 24, not rep 2,400.
            </p>

            <div className="hero-anim" style={{
              display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap',
              animationDelay: '800ms',
            }}>
              <Button variant="primary" size="lg">
                <Icon.Apple /> Download for iOS
              </Button>
              <Button variant="ghost" size="lg">
                <Icon.Android /> Get on Android
              </Button>
            </div>

            <div className="hero-anim" style={{
              display: 'flex', gap: 28, marginTop: 48,
              fontSize: 13, color: 'var(--ink-3)', fontWeight: 500,
              animationDelay: '1100ms', flexWrap: 'wrap',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon.Check style={{ color: 'var(--sage-2)' }}/> Phone in a stand, that's it</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon.Check style={{ color: 'var(--sage-2)' }}/> Works on-device</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon.Check style={{ color: 'var(--sage-2)' }}/> Free for 14 days</span>
            </div>
          </div>

          {/* RIGHT: Annotated phone stack */}
          <HeroVisual />
        </div>

        <div className="hero-anim" style={{
          marginTop: 80, display: 'flex', gap: 14, alignItems: 'center',
          color: 'var(--ink-3)', fontSize: 12, letterSpacing: '0.08em',
          textTransform: 'uppercase', fontWeight: 500,
          animationDelay: '1400ms', opacity: 0,
        }}>
          <span className="mono">↓ 01</span>
          <span>Scroll to see how it works</span>
        </div>
      </Container>
    </section>
  );
}

function HeroGrid() {
  return (
    <div aria-hidden style={{
      position: 'absolute', inset: 0,
      background: `
        radial-gradient(ellipse 80% 50% at 70% 20%, color-mix(in oklab, var(--navy) 10%, transparent), transparent 60%),
        radial-gradient(ellipse 60% 40% at 10% 90%, color-mix(in oklab, var(--sage-2) 8%, transparent), transparent 60%)
      `,
      pointerEvents: 'none',
    }}>
      <svg width="100%" height="100%" style={{ opacity: 0.35 }}>
        <defs>
          <pattern id="hgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M60 0H0V60" fill="none" stroke="var(--line)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hgrid)" />
      </svg>
    </div>
  );
}

function HeroVisual() {
  return (
    <div style={{ position: 'relative', height: 640 }}>
      <div className="hero-canvas" style={{
        position: 'absolute',
        top: 40, right: -20, width: 440, height: 540,
        background: 'var(--canvas)', borderRadius: 32,
        boxShadow: '0 40px 80px -20px rgba(26,26,31,0.25), 0 0 0 1px rgba(255,255,255,0.04) inset',
        overflow: 'hidden',
      }}>
        <SkeletonCanvas />
      </div>

      <div className="hero-phone" style={{
        position: 'absolute',
        left: -10, top: 0,
        width: 340,
        filter: 'drop-shadow(0 30px 50px rgba(26,26,31,0.22))',
      }}>
        <img src="assets/phone-live.png" alt="TT Coach AI live view" style={{ width: '100%' }} />
      </div>

      <FloatingTip />
      <StrokeRibbon />
    </div>
  );
}

function SkeletonCanvas() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', padding: 30 }}>
      <div style={{ position: 'absolute', top: 22, left: 22, color: '#9FE0C4', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
        Pose · 240fps
      </div>
      <div style={{ position: 'absolute', top: 22, right: 22, color: '#F5B547', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
        Δ Elbow +12°
      </div>
      <div style={{ position: 'absolute', bottom: 22, left: 22, color: '#6B6B75', fontSize: 10, letterSpacing: '0.12em', fontFamily: 'JetBrains Mono, monospace' }}>
        Forehand loop · rep 23/50
      </div>

      <svg viewBox="0 0 380 480" style={{ width: '100%', height: '100%' }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <g opacity="0.35" stroke="#9FE0C4" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="4 6">
          <path d="M190 180 L260 150" />
          <path d="M260 150 L310 180" />
        </g>
        <g stroke="#9FE0C4" strokeWidth="3" fill="none" strokeLinecap="round" style={{ filter: 'url(#glow)' }}>
          <circle cx="190" cy="120" r="22" />
          <path d="M190 142 L190 280" />
          <path d="M190 280 L155 360 L150 440" />
          <path d="M190 280 L225 360 L230 440" />
          <path d="M190 180 L140 240 L110 280" />
          <path d="M190 180 L260 160 L310 155" stroke="#F5B547" strokeWidth="3.5" />
        </g>
        <g fill="#9FE0C4">
          <circle cx="190" cy="180" r="4"/>
          <circle cx="140" cy="240" r="4"/>
          <circle cx="110" cy="280" r="4"/>
          <circle cx="155" cy="360" r="4"/>
          <circle cx="225" cy="360" r="4"/>
        </g>
        <g fill="#F5B547">
          <circle cx="260" cy="160" r="5"/>
          <circle cx="310" cy="155" r="6"/>
        </g>
        <path d="M260 160 L260 120" stroke="#F5B547" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7"/>
        <g transform="translate(220 95)">
          <rect x="0" y="0" width="130" height="28" rx="14" fill="#F5B547"/>
          <text x="12" y="18" fontSize="12" fontWeight="700" fill="#1A1A1F" fontFamily="Inter">Elbow too high</text>
        </g>
      </svg>
    </div>
  );
}

function FloatingTip() {
  return (
    <div className="hero-tip" style={{
      position: 'absolute',
      right: -30, top: 260,
      width: 260,
      background: 'var(--bg)',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: '14px 16px',
      boxShadow: '0 20px 40px -10px rgba(26,26,31,0.15)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 999,
          background: 'var(--amber-bg)',
          display: 'grid', placeItems: 'center',
          color: '#8A5A10',
        }}>
          <Icon.Mic />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, color: 'var(--amber)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Coach · speaking now</div>
        </div>
        <div style={{ fontSize: 11, color: 'var(--ink-3)' }} className="mono">+ 0.4s</div>
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.4, color: 'var(--ink)', fontWeight: 500 }}>
        "Lower your elbow a bit — it's a touch high."
      </div>
      <PulseLine />
    </div>
  );
}

function PulseLine() {
  return (
    <div style={{ display: 'flex', gap: 3, alignItems: 'end', height: 12, marginTop: 10 }}>
      {[...Array(18)].map((_, i) => (
        <div key={i} style={{
          width: 3, borderRadius: 2,
          background: 'var(--amber)',
          height: `${4 + Math.abs(Math.sin(i * 0.7)) * 10}px`,
          animation: `pulse 1.2s ease-in-out ${i * 60}ms infinite`,
        }}/>
      ))}
      <style>{`@keyframes pulse { 0%,100%{opacity:.35;transform:scaleY(.6)} 50%{opacity:1;transform:scaleY(1)} }`}</style>
    </div>
  );
}

function StrokeRibbon() {
  const strokes = ['good','good','off','good','good','good','good','off','good','focus'];
  const colors = { good: 'var(--sage)', off: '#F5B547', focus: '#1E4DA8' };
  return (
    <div className="hero-ribbon" style={{
      position: 'absolute', left: 10, bottom: 10,
      background: 'var(--bg)',
      border: '1px solid var(--line)',
      borderRadius: 14,
      padding: '12px 14px',
      boxShadow: '0 20px 40px -10px rgba(26,26,31,0.15)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 11, color: 'var(--ink-3)', gap: 20 }}>
        <span style={{ fontWeight: 600, color: 'var(--ink)' }}>Last 10 strokes</span>
        <span>8 good · 2 off</span>
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        {strokes.map((s, i) => (
          <div key={i} style={{
            width: 22, height: 26, borderRadius: 4,
            background: colors[s] || colors.good,
            border: s === 'focus' ? '2px solid #1E4DA8' : 'none',
            opacity: s === 'focus' ? 0.3 : 1,
          }} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Hero });
