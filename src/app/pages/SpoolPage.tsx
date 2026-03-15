import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { FilamentSpool } from '../components/spool/FilamentSpool';

/* ------------------------------------------------------------------ */
/*  Spool design system tokens (from SPOOL_DESIGN_SYSTEM.md)           */
/* ------------------------------------------------------------------ */

// Backgrounds
const BG_PRIMARY = 'rgb(13, 13, 13)';
const BG_CARD = 'rgb(38, 38, 43)';

// Accent — iOS system blue, the ONLY brand colour
const ACCENT = '#007AFF';

// Text
const TEXT_PRIMARY = '#ffffff';
const TEXT_SECONDARY = 'rgba(235, 235, 245, 0.6)';  // iOS secondaryLabel
const TEXT_TERTIARY = 'rgba(235, 235, 245, 0.3)';   // iOS tertiaryLabel

// Material palette
const MAT: Record<string, string> = {
  PLA:  '#34C759', // iOS green
  PETG: '#FF9500', // iOS orange
  ABS:  '#007AFF', // iOS blue
  TPU:  '#AF52DE', // iOS purple
  'PLA+': '#34C759',
  Nylon: '#8E8E93',
  ASA:  '#FF3B30', // iOS red
};

// Corner radius (design system)
const RADIUS_MD = 16;
const RADIUS_LG = 20;
const RADIUS_XL = 24;

// App Store
const APP_STORE = 'https://apps.apple.com/gb/app/spool/id6756892049';

/* ------------------------------------------------------------------ */
/*  Apple logo                                                         */
/* ------------------------------------------------------------------ */
function AppleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  ScrollReveal — content fades/slides IN and STAYS. Never disappears */
/* ------------------------------------------------------------------ */
function ScrollReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const DATABASE_ENTRIES = [
  { name: 'Red Copper',       brand: 'Jayo',       material: 'PLA+ Silk',   weight: '1000g', spoolColors: ['#B5543A'], materialType: 3  },
  { name: 'Marble Brick Red', brand: 'Sunlu',      material: 'PLA Marble',  weight: '1000g', spoolColors: ['#CC3333'], materialType: 12 },
  { name: 'Earth Brown',      brand: 'Polymaker',  material: 'PLA+',        weight: '1000g', spoolColors: ['#6B4226'], materialType: 0  },
  { name: 'Grass Green',      brand: 'Bambu Lab',  material: 'PLA Matte',   weight: '1000g', spoolColors: ['#4CAF50'], materialType: 20 },
  { name: 'Navy Blue',        brand: 'ELEGOO',     material: 'PLA Matte',   weight: '1000g', spoolColors: ['#1E3A5F'], materialType: 20 },
];

const FEATURES = [
  {
    title: 'Printer Management',
    desc: 'Track all your 3D printers. Log maintenance, monitor print hours, set service reminders.',
  },
  {
    title: 'SpoolTag',
    desc: 'Print QR labels or write NFC tags. Scan with your phone to see every detail instantly.',
  },
  {
    title: 'iCloud Sync',
    desc: 'Seamless sync across iPhone and iPad. No accounts, no sign-ups. Apple-native privacy.',
  },
  {
    title: 'Smart Inventory',
    desc: 'Low stock alerts, colour search, material filtering, storage tracking. Find any spool in seconds.',
  },
  {
    title: 'Cost & Energy',
    desc: 'True printing costs. Electricity calculated from wattage and duration. Price-per-gram breakdowns.',
  },
  {
    title: 'Print History',
    desc: 'Full logging — spool, weight, duration, notes. Automatic for Bambu. Quick entry for everyone else.',
  },
];

const BAMBU_PRINTERS = ['X1 Carbon', 'P1S', 'A1', 'A1 Mini'];

const TESTIMONIALS = [
  {
    quote: 'The most feature-complete filament management app on any platform.',
    attribution: 'Independent review',
    featured: true,
  },
  {
    quote: "I thought it would just measure filament, but it does so much more — cost per print, Bambu Cloud integration, adding prints with a single tap. It honestly feels like it was designed by Apple themselves. Keep making apps like this!",
    attribution: 'Spool user',
    featured: false,
  },
  {
    quote: 'Wow, this is amazing so far.',
    attribution: 'Spool user',
    featured: false,
  },
];

const SPOOL_SHOWCASE = [
  { colors: ['#FF6B35'], materialType: 0, label: 'PLA' },
  { colors: ['#1E3A5F'], materialType: 3, label: 'Silk' },
  { colors: ['#2D1B69'], materialType: 1, label: 'Galaxy', animated: true },
  { colors: ['#CC3333'], materialType: 2, label: 'Carbon Fiber' },
  { colors: ['#FF8C00'], materialType: 5, label: 'PETG' },
  { colors: ['#4CAF50', '#2196F3'], materialType: 7, label: 'Rainbow' },
];

/* ------------------------------------------------------------------ */
/*  Intelligence tabs                                                   */
/* ------------------------------------------------------------------ */
const INTEL_TABS = [
  { id: 'pulse',     label: 'Pulse',     color: '#FF9500' },
  { id: 'economics', label: 'Economics', color: '#34C759' },
  { id: 'energy',    label: 'Energy',    color: '#FBBF24' },
  { id: 'material',  label: 'Material',  color: '#AF52DE' },
  { id: 'hardware',  label: 'Hardware',  color: '#007AFF' },
] as const;

const INTEL_DATA: Record<string, {
  stats: { val: string; lbl: string }[];
  chart: { month: string; value: number }[];
}> = {
  pulse: {
    stats: [
      { val: '143', lbl: 'Total Prints' },
      { val: '92%', lbl: 'Success Rate' },
      { val: '4.6kg', lbl: 'Consumed' },
    ],
    chart: [
      { month: 'Jan', value: 8 }, { month: 'Feb', value: 12 }, { month: 'Mar', value: 15 },
      { month: 'Apr', value: 11 }, { month: 'May', value: 18 }, { month: 'Jun', value: 14 },
      { month: 'Jul', value: 9 }, { month: 'Aug', value: 22 }, { month: 'Sep', value: 16 },
      { month: 'Oct', value: 19 }, { month: 'Nov', value: 13 }, { month: 'Dec', value: 24 },
    ],
  },
  economics: {
    stats: [
      { val: '£142.50', lbl: 'Inventory' },
      { val: '£0.82', lbl: 'Per Print' },
      { val: '£28.40', lbl: 'This Month' },
    ],
    chart: [
      { month: 'Jan', value: 18 }, { month: 'Feb', value: 24 }, { month: 'Mar', value: 32 },
      { month: 'Apr', value: 22 }, { month: 'May', value: 38 }, { month: 'Jun', value: 28 },
      { month: 'Jul', value: 15 }, { month: 'Aug', value: 42 }, { month: 'Sep', value: 35 },
      { month: 'Oct', value: 30 }, { month: 'Nov', value: 26 }, { month: 'Dec', value: 45 },
    ],
  },
  energy: {
    stats: [
      { val: '36 kWh', lbl: 'Total Grid' },
      { val: '0.25 kWh', lbl: 'Avg / Print' },
      { val: '34 kJ/g', lbl: 'Efficiency' },
    ],
    chart: [
      { month: 'Jan', value: 2.1 }, { month: 'Feb', value: 3.4 }, { month: 'Mar', value: 4.2 },
      { month: 'Apr', value: 2.8 }, { month: 'May', value: 5.1 }, { month: 'Jun', value: 3.6 },
      { month: 'Jul', value: 1.9 }, { month: 'Aug', value: 5.8 }, { month: 'Sep', value: 4.0 },
      { month: 'Oct', value: 3.2 }, { month: 'Nov', value: 2.6 }, { month: 'Dec', value: 4.8 },
    ],
  },
  material: {
    stats: [
      { val: '4.64kg', lbl: 'Consumed' },
      { val: '1', lbl: 'Active Types' },
      { val: 'PLA', lbl: 'Most Used' },
    ],
    chart: [
      { month: 'Jan', value: 320 }, { month: 'Feb', value: 480 }, { month: 'Mar', value: 550 },
      { month: 'Apr', value: 390 }, { month: 'May', value: 620 }, { month: 'Jun', value: 410 },
      { month: 'Jul', value: 280 }, { month: 'Aug', value: 710 }, { month: 'Sep', value: 500 },
      { month: 'Oct', value: 460 }, { month: 'Nov', value: 380 }, { month: 'Dec', value: 650 },
    ],
  },
  hardware: {
    stats: [
      { val: '1', lbl: 'Printers' },
      { val: '312h', lbl: 'Print Time' },
      { val: '5–325W', lbl: 'Power Range' },
    ],
    chart: [
      { month: 'Jan', value: 18 }, { month: 'Feb', value: 28 }, { month: 'Mar', value: 35 },
      { month: 'Apr', value: 22 }, { month: 'May', value: 42 }, { month: 'Jun', value: 30 },
      { month: 'Jul', value: 15 }, { month: 'Aug', value: 48 }, { month: 'Sep', value: 32 },
      { month: 'Oct', value: 25 }, { month: 'Nov', value: 20 }, { month: 'Dec', value: 38 },
    ],
  },
};

const ANALYTICS_CAPABILITIES = [
  { label: 'Cost per print tracking', color: '#34C759' },
  { label: 'Energy consumption monitoring', color: '#FBBF24' },
  { label: 'Material usage velocity', color: '#AF52DE' },
  { label: 'Printer health scores', color: '#007AFF' },
  { label: 'Spending trend analysis', color: '#FF9500' },
];

function AnalyticsSection() {
  const [activeTab, setActiveTab] = useState<string>('economics');
  const tab = INTEL_TABS.find((t) => t.id === activeTab) || INTEL_TABS[1];
  const data = INTEL_DATA[activeTab];

  return (
    <section style={{ padding: '0 24px 140px' }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
        gap: 64,
        alignItems: 'center',
      }}>
        {/* Intelligence card */}
        <ScrollReveal delay={0.1}>
          <div style={{ position: 'relative' }}>
            {/* Ambient glow */}
            <div style={{
              position: 'absolute',
              top: -40,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: `${tab.color}12`,
              filter: 'blur(80px)',
              pointerEvents: 'none',
              transition: 'background 0.5s ease',
            }} />
            <div style={{
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderRadius: RADIUS_XL,
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: 20,
              boxShadow: `0 8px 32px rgba(0,0,0,0.3), 0 0 60px ${tab.color}10`,
              transition: 'box-shadow 0.5s ease',
            }}>
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <p style={{
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  margin: '0 0 2px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                }}>
                  Intelligence
                </p>
                <p style={{ fontSize: 11, color: TEXT_TERTIARY, margin: 0 }}>Analysis of 143 logs</p>
              </div>

              {/* Tab bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4,
                marginBottom: 16,
                padding: '4px',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.04)',
              }}>
                {INTEL_TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 8,
                      border: 'none',
                      fontSize: 10,
                      fontWeight: 600,
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      background: activeTab === t.id ? `${t.color}25` : 'transparent',
                      color: activeTab === t.id ? t.color : TEXT_TERTIARY,
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Stats row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 16 }}>
                {data.stats.map((s) => (
                  <div key={s.lbl} style={{
                    textAlign: 'center',
                    padding: 12,
                    borderRadius: 14,
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${tab.color}15`,
                    transition: 'border-color 0.5s ease',
                  }}>
                    <div style={{
                      fontSize: 18,
                      fontWeight: 700,
                      fontFamily: 'ui-monospace, "SF Mono", monospace',
                      fontVariantNumeric: 'tabular-nums',
                      color: TEXT_PRIMARY,
                    }}>
                      {s.val}
                    </div>
                    <div style={{ fontSize: 10, color: TEXT_TERTIARY, marginTop: 4 }}>{s.lbl}</div>
                  </div>
                ))}
              </div>

              {/* Recharts bar chart */}
              <div style={{ height: 120 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.chart} margin={{ top: 4, right: 4, bottom: 0, left: 4 }}>
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 9, fill: 'rgba(235,235,245,0.3)' }}
                      interval={2}
                    />
                    <Bar dataKey="value" radius={[3, 3, 0, 0]} animationDuration={600}>
                      {data.chart.map((_, index) => (
                        <Cell key={index} fill={tab.color} fillOpacity={0.5 + (index / data.chart.length) * 0.5} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Text content */}
        <div>
          <ScrollReveal>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: tab.color, marginBottom: 16, transition: 'color 0.5s ease' }}>
              Intelligence
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: 20,
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif',
            }}>
              Know the true cost of every print.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: TEXT_SECONDARY, marginBottom: 28 }}>
              Track inventory value, cost per print, and weight usage with
              decimal precision. Monitor energy costs, material breakdowns,
              usage trends, and spending patterns — all computed automatically.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ANALYTICS_CAPABILITIES.map((c) => (
                <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    background: c.color,
                    flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 14, color: TEXT_SECONDARY }}>{c.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */
export default function SpoolPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);
  const heroY = useTransform(heroScroll, [0, 0.6], [0, -80]);

  // Progress bar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  const progressWidth = useTransform(progress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    document.title = 'Spool — Track Every Gram';
  }, []);

  return (
    <div style={{ background: BG_PRIMARY, color: TEXT_PRIMARY, minHeight: '100vh' }}>

      {/* ── NAV ── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(13, 13, 13, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
          height: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img
              src="/spool-tracker-logo.png"
              alt="Spool"
              style={{ width: 28, height: 28, borderRadius: 8 }}
            />
            <span style={{
              fontSize: 15,
              fontWeight: 600,
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
              letterSpacing: '-0.01em',
            }}>
              Spool
            </span>
          </div>
          <a
            href={APP_STORE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 18px',
              borderRadius: 999,
              background: ACCENT,
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            <AppleLogo size={14} />
            Download
          </a>
        </div>
        <motion.div style={{ height: 2, background: ACCENT, width: progressWidth }} />
      </nav>

      {/* ── HERO ── */}
      <motion.section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px 40px',
          opacity: heroOpacity,
          y: heroY,
        }}
      >
        <div style={{ maxWidth: 680, textAlign: 'center' }}>
          {/* App icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: 40 }}
          >
            <img
              src="/spool-tracker-logo.png"
              alt="Spool"
              style={{
                width: 120,
                height: 120,
                borderRadius: 28,
                boxShadow: `0 0 80px ${ACCENT}25, 0 20px 60px rgba(0,0,0,0.5)`,
                margin: '0 auto',
                display: 'block',
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            style={{
              fontSize: 'clamp(40px, 8vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              margin: '0 0 20px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif',
            }}
          >
            Track every gram.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{
              fontSize: 'clamp(17px, 2.5vw, 21px)',
              color: TEXT_SECONDARY,
              lineHeight: 1.5,
              maxWidth: 480,
              margin: '0 auto 48px',
              fontWeight: 400,
            }}
          >
            The complete filament management system for 3D printing. Built for precision. Designed for makers.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}
          >
            <a
              href={APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                padding: '16px 32px',
                borderRadius: RADIUS_MD,
                background: ACCENT,
                color: '#fff',
                fontSize: 16,
                fontWeight: 600,
                textDecoration: 'none',
                boxShadow: `0 4px 24px ${ACCENT}40`,
                transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <AppleLogo size={22} />
              <span>Download on the App Store</span>
            </a>
            <p style={{ fontSize: 14, color: TEXT_SECONDARY, margin: 0 }}>
              Free to download · <span style={{ color: TEXT_TERTIARY }}>Pro tier for power users</span>
            </p>
            <button
              onClick={() => document.getElementById('statement')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'none',
                border: 'none',
                color: TEXT_TERTIARY,
                fontSize: 14,
                cursor: 'pointer',
                padding: '8px 16px',
                fontFamily: 'inherit',
              }}
            >
              Scroll to explore ↓
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* ── STATEMENT ── */}
      <section id="statement" style={{ padding: '120px 24px 140px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontSize: 'clamp(32px, 6vw, 60px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif',
            }}>
              10,000+ filaments.{' '}
              <span style={{ color: ACCENT }}>One tap to add.</span>{' '}
              <span style={{ color: TEXT_TERTIARY }}>Zero data entry.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{
              marginTop: 28,
              fontSize: 18,
              lineHeight: 1.65,
              color: TEXT_SECONDARY,
              maxWidth: 600,
            }}>
              The largest built-in filament database on iOS — over 10,000 profiles from
              Bambu Lab, Prusament, Polymaker, eSUN, Hatchbox, Overture, and dozens more.
              Brand, material, colour, diameter, and print temperatures included.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── DATABASE ── */}
      <section style={{ padding: '0 24px 140px' }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: 64,
          alignItems: 'center',
        }}>
          {/* Text */}
          <div>
            <ScrollReveal>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>
                The Database
              </p>
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: 20,
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif',
              }}>
                Browse. Tap. Done.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: TEXT_SECONDARY, marginBottom: 28 }}>
                Search by name, brand, material, or colour. Each entry includes hex colour
                preview, temperatures, diameter, and brand. Tap to add to your collection.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['PLA', 'PETG', 'ABS', 'TPU', 'ASA', 'Nylon'].map((m) => (
                  <span key={m} style={{
                    padding: '5px 12px',
                    borderRadius: 999,
                    fontSize: 11,
                    fontWeight: 700,
                    fontFamily: 'ui-monospace, "SF Mono", monospace',
                    letterSpacing: '0.05em',
                    background: `${MAT[m] || ACCENT}18`,
                    color: MAT[m] || ACCENT,
                  }}>
                    {m}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Card mockup — solid card, NOT glass */}
          <ScrollReveal delay={0.1}>
            <div style={{
              background: BG_CARD,
              borderRadius: RADIUS_XL,
              padding: 20,
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}>
              {/* Search */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px 14px',
                borderRadius: 12,
                background: 'rgba(255,255,255,0.06)',
                marginBottom: 12,
                fontSize: 14,
                color: TEXT_TERTIARY,
              }}>
                <span style={{ opacity: 0.5 }}>⌕</span>
                Search 10,000+ filaments…
              </div>
              {/* Entries */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {DATABASE_ENTRIES.map((e, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 12px',
                    borderRadius: 14,
                    background: 'rgba(255,255,255,0.03)',
                    transition: 'background 0.2s',
                  }}>
                    <div style={{ flexShrink: 0 }}>
                      <FilamentSpool
                        colors={e.spoolColors}
                        materialType={e.materialType}
                        size={36}
                      />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.name}</div>
                      <div style={{ fontSize: 12, color: TEXT_TERTIARY }}>{e.brand} · {e.weight}</div>
                    </div>
                    <span style={{
                      padding: '3px 8px',
                      borderRadius: 999,
                      fontSize: 9,
                      fontWeight: 700,
                      fontFamily: 'ui-monospace, "SF Mono", monospace',
                      background: `${ACCENT}20`,
                      color: ACCENT,
                      letterSpacing: '0.06em',
                    }}>
                      {e.material}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ textAlign: 'center', marginTop: 14, fontSize: 12, color: TEXT_TERTIARY }}>
                + 9,995 more
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ANALYTICS / INTELLIGENCE ── */}
      <AnalyticsSection />

      {/* ── BAMBU SYNC ── */}
      <section style={{ padding: '0 24px 140px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{
              background: BG_CARD,
              borderRadius: RADIUS_XL,
              padding: 'clamp(32px, 6vw, 64px)',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Subtle accent tint at top */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)`,
              }} />

              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: 24 }}>
                Bambu Lab Integration
              </p>

              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: 20,
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif',
              }}>
                Your Bambu printer.{' '}
                <span style={{ color: ACCENT }}>Automatically synced.</span>
              </h2>

              <p style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: TEXT_SECONDARY,
                maxWidth: 480,
                margin: '0 auto 32px',
              }}>
                Connect to the Bambu Lab Cloud API. Auto-import your complete
                print history — name, duration, material, and weight consumed.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10 }}>
                {BAMBU_PRINTERS.map((p) => (
                  <span key={p} style={{
                    padding: '8px 18px',
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 500,
                    background: 'rgba(255,255,255,0.06)',
                    color: TEXT_PRIMARY,
                  }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section style={{ padding: '0 24px 140px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif',
              }}>
                Everything you need.
              </h2>
              <p style={{ fontSize: 17, color: TEXT_TERTIARY, marginTop: 8 }}>Nothing you don't.</p>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 16,
          }}>
            {FEATURES.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.04}>
                <div style={{
                  background: BG_CARD,
                  borderRadius: RADIUS_LG,
                  padding: 24,
                  height: '100%',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: TEXT_SECONDARY, margin: 0 }}>{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '0 24px 140px' }}>
        <div style={{
          maxWidth: 700,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {[
            { value: '10,000+', label: 'Filaments' },
            { value: '0.1g',   label: 'Precision' },
            { value: '∞',      label: 'iCloud Sync' },
          ].map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.06}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 700,
                  fontFamily: 'ui-monospace, "SF Mono", monospace',
                  marginBottom: 6,
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: TEXT_TERTIARY,
                }}>
                  {s.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── FILAMENT SHOWCASE ── */}
      <section style={{ padding: '0 24px 140px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>
                Premium Visuals
              </p>
              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif',
              }}>
                Every material, rendered.
              </h2>
              <p style={{ fontSize: 17, color: TEXT_TERTIARY, marginTop: 8 }}>
                Procedural shaders bring your filaments to life.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 32,
            }}>
              {SPOOL_SHOWCASE.map((s) => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <FilamentSpool
                    colors={s.colors}
                    materialType={s.materialType}
                    size={120}
                    animated={s.animated}
                  />
                  <p style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: TEXT_TERTIARY,
                    marginTop: 10,
                    letterSpacing: '0.04em',
                  }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '0 24px 140px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{
                fontSize: 'clamp(28px, 5vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif',
              }}>
                Loved by makers.
              </h2>
            </div>
          </ScrollReveal>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 16,
          }}>
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div style={{
                  background: BG_CARD,
                  borderRadius: RADIUS_LG,
                  padding: 28,
                  height: '100%',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <span style={{ fontSize: 32, color: ACCENT, lineHeight: 1, display: 'block', marginBottom: 12 }}>"</span>
                    <p style={{
                      fontSize: t.featured ? 18 : 15,
                      fontWeight: t.featured ? 600 : 400,
                      lineHeight: 1.55,
                      color: t.featured ? TEXT_PRIMARY : TEXT_SECONDARY,
                      margin: 0,
                      fontStyle: t.featured ? 'normal' : 'normal',
                    }}>
                      {t.quote}
                    </p>
                  </div>
                  <p style={{
                    fontSize: 12,
                    color: TEXT_TERTIARY,
                    marginTop: 20,
                    marginBottom: 0,
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                  }}>
                    — {t.attribution}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '80px 24px 140px', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 style={{
            fontSize: 'clamp(36px, 7vw, 64px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginBottom: 16,
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif',
          }}>
            Start tracking.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p style={{ fontSize: 18, color: TEXT_SECONDARY, marginBottom: 12 }}>Free on the App Store.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p style={{ fontSize: 14, color: TEXT_TERTIARY, marginBottom: 40 }}>Pro tier available for power users.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <a
            href={APP_STORE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              padding: '18px 36px',
              borderRadius: RADIUS_MD,
              background: ACCENT,
              color: '#fff',
              fontSize: 17,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: `0 4px 30px ${ACCENT}40`,
              transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <AppleLogo size={24} />
            <span>Download on the App Store</span>
          </a>
        </ScrollReveal>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: '32px 24px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          fontSize: 12,
          color: TEXT_TERTIARY,
        }}>
          <Link to="/" style={{ color: TEXT_TERTIARY, textDecoration: 'none' }}>
            A Lance Studio product
          </Link>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/privacy.html" style={{ color: TEXT_TERTIARY, textDecoration: 'none' }}>Privacy</a>
            <a href="mailto:hello@lance-studio.com" style={{ color: TEXT_TERTIARY, textDecoration: 'none' }}>Contact</a>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.12)' }}>© 2026 Lance Studio</span>
        </div>
      </footer>
    </div>
  );
}
