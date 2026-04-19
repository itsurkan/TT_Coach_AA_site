// Shared primitives & hooks
const { useState, useEffect, useRef, useMemo, useCallback } = React;

// Intersection observer hook — triggers once when el enters viewport
function useInView(opts = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, opts);
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

// Scroll progress (0-1) within an element
function useScrollProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when top enters bottom of viewport, 1 when bottom leaves top
      const total = r.height + vh;
      const scrolled = vh - r.top;
      setP(Math.max(0, Math.min(1, scrolled / total)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return p;
}

// Fade-in + rise-on-enter wrapper
function Reveal({ children, delay = 0, as = 'div', className = '', style = {} }) {
  const [ref, inView] = useInView();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 800ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 800ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}>
      {children}
    </Tag>
  );
}

// Small pill tag
function Pill({ tone = 'ink', children, dot }) {
  const tones = {
    ink: { bg: 'transparent', fg: 'var(--ink)', border: 'var(--line)' },
    navy: { bg: 'transparent', fg: 'var(--navy)', border: 'var(--navy)' },
    sage: { bg: 'var(--sage-bg)', fg: 'var(--sage-ink)', border: 'transparent' },
    amber: { bg: 'var(--amber-bg)', fg: '#8A5A10', border: 'transparent' },
    dark: { bg: '#25252C', fg: '#E8E6DE', border: 'transparent' },
  };
  const t = tones[tone] || tones.ink;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      padding: '6px 12px', borderRadius: 999,
      background: t.bg, color: t.fg,
      border: `1px solid ${t.border}`,
      fontSize: 12, fontWeight: 500,
      letterSpacing: '0.02em',
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: 'currentColor', opacity: 0.8 }} />}
      {children}
    </span>
  );
}

// Button
function Button({ variant = 'primary', children, size = 'md', ...rest }) {
  const v = {
    primary: { bg: 'var(--navy)', fg: '#fff', border: 'transparent' },
    ghost: { bg: 'transparent', fg: 'var(--ink)', border: 'var(--line)' },
    dark: { bg: 'var(--ink)', fg: 'var(--bg)', border: 'transparent' },
  }[variant];
  const s = size === 'lg'
    ? { padding: '16px 26px', fontSize: 16 }
    : { padding: '12px 20px', fontSize: 14 };
  return (
    <button {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      borderRadius: 12, border: `1px solid ${v.border}`,
      background: v.bg, color: v.fg,
      fontFamily: 'inherit', fontWeight: 600,
      cursor: 'pointer', ...s,
      transition: 'transform .15s ease, box-shadow .15s ease, background .15s ease',
      ...rest.style,
    }}
    onMouseDown={e => e.currentTarget.style.transform = 'scale(.98)'}
    onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
      {children}
    </button>
  );
}

// Container wrapper with max-width
function Container({ children, style = {}, narrow }) {
  return (
    <div style={{
      maxWidth: narrow ? 960 : 1240,
      margin: '0 auto',
      padding: '0 32px',
      ...style,
    }}>{children}</div>
  );
}

// Icons (simple inline SVG)
const Icon = {
  ArrowRight: (p) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}><path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ArrowDown: (p) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" {...p}><path d="M8 3v10m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Play: (p) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}><path d="M3 2l9 5-9 5V2z" fill="currentColor"/></svg>,
  Check: (p) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" {...p}><path d="M3 7.5l2.5 2.5L11 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Apple: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.78-.06 1.9-.79 3.51-.67 1.54.11 2.72.72 3.47 1.77-3.08 1.88-2.34 6.04.37 7.12-.34.88-.8 1.76-1.43 2.95zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.59-2.34 4.32-3.74 4.25z"/></svg>,
  Android: (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>,
  Mic: (p) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}><rect x="8" y="3" width="4" height="9" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M5 9v1a5 5 0 0010 0V9M10 15v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  Target: (p) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6"/><circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.6"/><circle cx="10" cy="10" r="1" fill="currentColor"/></svg>,
  Replay: (p) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none" {...p}><path d="M4 5v4h4M16 11a6 6 0 11-2-4.7L16 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

Object.assign(window, { useInView, useScrollProgress, Reveal, Pill, Button, Container, Icon });
