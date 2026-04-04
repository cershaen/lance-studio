import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useInView, animate as motionAnimate, useMotionValue } from 'motion/react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { FilamentSpool } from '../components/spool/FilamentSpool';

/* ------------------------------------------------------------------ */
/*  Design system tokens                                               */
/* ------------------------------------------------------------------ */

const BG_PRIMARY = 'rgb(13, 13, 13)';
const BG_CARD    = 'rgb(38, 38, 43)';
const ACCENT     = '#007AFF';
const TEXT_PRIMARY   = '#ffffff';
const TEXT_SECONDARY = 'rgba(235, 235, 245, 0.6)';
const TEXT_TERTIARY  = 'rgba(235, 235, 245, 0.3)';

const MAT: Record<string, string> = {
  PLA: '#34C759', PETG: '#FF9500', ABS: '#007AFF',
  TPU: '#AF52DE', 'PLA+': '#34C759', Nylon: '#8E8E93', ASA: '#FF3B30',
};

const RADIUS_MD = 16;
const RADIUS_LG = 20;
const RADIUS_XL = 24;

const APP_STORE = 'https://apps.apple.com/gb/app/spool/id6756892049';

const SPRING = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };

/* ------------------------------------------------------------------ */
/*  Shared components                                                  */
/* ------------------------------------------------------------------ */

function AppleLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function Check({ color }: { color: string }) {
  return (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx={8} cy={8} r={8} fill={`${color}20`} />
      <path d="M5 8l2 2 4-4" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ScrollReveal({
  children,
  delay = 0,
  className = '',
  blur = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  blur?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: blur ? 'blur(10px)' : 'blur(0px)', scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Count-up number animation */
function CountUp({ to, suffix = '', prefix = '', duration = 1.8 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;
    const controls = motionAnimate(motionVal, to, { duration, ease: 'easeOut' });
    const unsubscribe = motionVal.on('change', (v) => {
      if (ref.current) ref.current.textContent = prefix + Math.round(v).toLocaleString() + suffix;
    });
    return () => { controls.stop(); unsubscribe(); };
  }, [isInView]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

/* Sharp colored spool circle — replaces blurry WebGL canvas at tiny sizes */
function SpoolColorCircle({ colors, size = 36 }: { colors: string[]; size?: number }) {
  const c = colors[0] || '#999';
  const c2 = colors[1];
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: c2
        ? `conic-gradient(${c} 0deg, ${c2} 180deg, ${c} 360deg)`
        : `radial-gradient(circle at 38% 36%, ${c}ff 0%, ${c}99 55%, ${c}44 100%)`,
      border: `1.5px solid ${c}55`,
      boxShadow: `0 0 ${size * 0.4}px ${c}35`,
      flexShrink: 0,
    }} />
  );
}

/* Lift card on hover */
function HoverCard({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={SPRING}
      style={style}
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
    title: 'Smart Inventory',
    desc: 'Colour search, material filtering, low-stock alerts. Find any spool in seconds across your entire collection.',
    color: ACCENT,
  },
  {
    title: 'Categories',
    desc: 'Organise spools exactly how you think. By project, printer, storage location, or material type. Fully customisable.',
    color: '#34C759',
  },
  {
    title: 'Cost and Energy',
    desc: 'True printing costs. Electricity calculated from wattage and duration. Price per gram, total spend, and inventory value.',
    color: '#FF9500',
  },
  {
    title: 'Print History',
    desc: 'Full logging: spool, weight, duration, quality rating, notes. Auto-imported from Bambu. Quick entry for every other printer.',
    color: '#AF52DE',
  },
  {
    title: 'Quality Ratings',
    desc: 'Rate every print with a single tap. Track which spools, materials, and settings produce your best results over time.',
    color: '#FF3B30',
  },
  {
    title: 'iCloud Sync',
    desc: 'Seamless sync across every iPhone and iPad you own. No accounts, no sign-ups. Apple-native privacy, always.',
    color: '#8E8E93',
  },
];

const BAMBU_PRINTERS = ['X1 Carbon', 'P1S', 'A1', 'A1 Mini'];

const BAMBU_MAINTENANCE = [
  {
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Maintenance Logs',
    desc: 'Keep a full service history for each printer. Every cleaning, lubrication, and part replacement, logged in one place.',
  },
  {
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Printer-Specific Guides',
    desc: 'Step-by-step maintenance checklists tailored to your printer model. No more searching the wiki mid-session.',
  },
  {
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none">
        <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Smart Reminders',
    desc: 'Set service intervals based on print hours or time. Spool notifies you when a printer is due for maintenance before issues start.',
  },
];

const TESTIMONIALS = [
  {
    quote: "I thought it would just measure filament, but it does so much more. Cost per print, Bambu Cloud integration, adding prints with a single tap. It honestly feels like it was designed by Apple themselves. Keep making apps like this!",
    attribution: 'App Store review',
    stars: 5,
    featured: true,
  },
  {
    quote: 'The most feature-complete filament management app on any platform.',
    attribution: 'Independent review',
    stars: 5,
    featured: false,
  },
  {
    quote: 'Finally an app that tracks what I actually care about. Weight remaining, cost per print, energy usage. Everything in one place.',
    attribution: 'App Store review',
    stars: 5,
    featured: false,
  },
];

const PLANS = [
  {
    name: 'Free',
    price: 'Free',
    priceSub: 'forever',
    features: [
      'Up to 10 spools',
      '10,000+ filament database',
      'iCloud sync across devices',
      'Print history logging',
      'Cost and energy tracking',
      'Categories and organisation',
    ],
    cta: 'Download Free',
    accent: false,
  },
  {
    name: 'Pro',
    price: '£4.99',
    priceSub: '/month or £49.99/year',
    features: [
      'Unlimited spools',
      'Everything in Free',
      'Bambu Cloud auto-sync',
      'SpoolTag — NFC and QR labels',
      'Advanced analytics intelligence',
      'Multiple printer management',
    ],
    cta: 'Get Pro',
    accent: true,
  },
];

const SPOOL_SHOWCASE = [
  { colors: ['#FF6B35'], materialType: 0,  label: 'PLA' },
  { colors: ['#1E3A5F'], materialType: 3,  label: 'Silk' },
  { colors: ['#2D1B69'], materialType: 1,  label: 'Galaxy', animated: true },
  { colors: ['#CC3333'], materialType: 2,  label: 'Carbon Fiber' },
  { colors: ['#FF8C00'], materialType: 5,  label: 'PETG' },
  { colors: ['#4CAF50', '#2196F3'], materialType: 7, label: 'Rainbow' },
];

/* ------------------------------------------------------------------ */
/*  Intelligence section                                               */
/* ------------------------------------------------------------------ */

const INTEL_TABS = [
  { id: 'pulse',     label: 'Pulse',     color: '#FF9500' },
  { id: 'economics', label: 'Economics', color: '#34C759' },
  { id: 'energy',    label: 'Energy',    color: '#FBBF24' },
  { id: 'material',  label: 'Material',  color: '#AF52DE' },
  { id: 'hardware',  label: 'Hardware',  color: '#007AFF' },
] as const;

const INTEL_DATA: Record<string, {
  stats: { val: string; lbl: string; trend?: string }[];
  chart: { month: string; value: number }[];
}> = {
  pulse: {
    stats: [
      { val: '218',   lbl: 'Total Prints',    trend: '+31 this month' },
      { val: '89%',   lbl: 'Success Rate',    trend: '+3% vs last month' },
      { val: '6.2kg', lbl: 'Consumed',        trend: 'across 4 materials' },
    ],
    chart: [
      { month: 'Jan', value: 11 }, { month: 'Feb', value: 14 }, { month: 'Mar', value: 19 },
      { month: 'Apr', value: 16 }, { month: 'May', value: 22 }, { month: 'Jun', value: 18 },
      { month: 'Jul', value: 12 }, { month: 'Aug', value: 27 }, { month: 'Sep', value: 20 },
      { month: 'Oct', value: 24 }, { month: 'Nov', value: 17 }, { month: 'Dec', value: 31 },
    ],
  },
  economics: {
    stats: [
      { val: '£186',  lbl: 'Inventory Value', trend: '+£24 this week' },
      { val: '£1.24', lbl: 'Avg per Print',   trend: '0.1g precision' },
      { val: '£41',   lbl: 'Spent This Month',trend: '33 prints logged' },
    ],
    chart: [
      { month: 'Jan', value: 20 }, { month: 'Feb', value: 28 }, { month: 'Mar', value: 38 },
      { month: 'Apr', value: 26 }, { month: 'May', value: 44 }, { month: 'Jun', value: 31 },
      { month: 'Jul', value: 18 }, { month: 'Aug', value: 49 }, { month: 'Sep', value: 37 },
      { month: 'Oct', value: 34 }, { month: 'Nov', value: 29 }, { month: 'Dec', value: 52 },
    ],
  },
  energy: {
    stats: [
      { val: '52 kWh',     lbl: 'Total Grid Use',   trend: '218 prints total' },
      { val: '0.24 kWh',   lbl: 'Avg per Print',    trend: 'measured per job' },
      { val: '28 kJ/g',    lbl: 'Efficiency',        trend: 'improving week on week' },
    ],
    chart: [
      { month: 'Jan', value: 2.4 }, { month: 'Feb', value: 3.8 }, { month: 'Mar', value: 5.1 },
      { month: 'Apr', value: 3.3 }, { month: 'May', value: 6.2 }, { month: 'Jun', value: 4.1 },
      { month: 'Jul', value: 2.2 }, { month: 'Aug', value: 6.8 }, { month: 'Sep', value: 4.7 },
      { month: 'Oct', value: 3.7 }, { month: 'Nov', value: 3.1 }, { month: 'Dec', value: 5.5 },
    ],
  },
  material: {
    stats: [
      { val: '6.82kg', lbl: 'Total Consumed',     trend: 'across all spools' },
      { val: '4',      lbl: 'Material Types',     trend: 'PLA, PETG, ABS, TPU' },
      { val: 'PLA+',   lbl: 'Most Used',          trend: '61% of all prints' },
    ],
    chart: [
      { month: 'Jan', value: 380 }, { month: 'Feb', value: 520 }, { month: 'Mar', value: 640 },
      { month: 'Apr', value: 440 }, { month: 'May', value: 710 }, { month: 'Jun', value: 480 },
      { month: 'Jul', value: 310 }, { month: 'Aug', value: 820 }, { month: 'Sep', value: 570 },
      { month: 'Oct', value: 530 }, { month: 'Nov', value: 420 }, { month: 'Dec', value: 740 },
    ],
  },
  hardware: {
    stats: [
      { val: '2',      lbl: 'Printers Tracked', trend: 'X1C + A1 Mini' },
      { val: '486h',   lbl: 'Total Print Time',  trend: 'since first log' },
      { val: '15-340W',lbl: 'Power Range',       trend: 'measured per model' },
    ],
    chart: [
      { month: 'Jan', value: 21 }, { month: 'Feb', value: 33 }, { month: 'Mar', value: 42 },
      { month: 'Apr', value: 28 }, { month: 'May', value: 51 }, { month: 'Jun', value: 36 },
      { month: 'Jul', value: 18 }, { month: 'Aug', value: 57 }, { month: 'Sep', value: 39 },
      { month: 'Oct', value: 31 }, { month: 'Nov', value: 24 }, { month: 'Dec', value: 44 },
    ],
  },
};

const ANALYTICS_CAPABILITIES = [
  { label: 'Cost per print with decimal precision', color: '#34C759' },
  { label: 'Energy and kWh tracking per printer',   color: '#FBBF24' },
  { label: 'Material usage velocity over time',      color: '#AF52DE' },
  { label: 'Inventory value and spend trends',       color: '#FF9500' },
  { label: 'Printer health and total print hours',   color: '#007AFF' },
];

function AnalyticsSection() {
  const [activeTab, setActiveTab] = useState<string>('economics');
  const tab   = INTEL_TABS.find((t) => t.id === activeTab) || INTEL_TABS[1];
  const data  = INTEL_DATA[activeTab];

  return (
    <section style={{ padding: '0 24px 140px' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
        gap: 64, alignItems: 'center',
      }}>
        {/* Card */}
        <ScrollReveal delay={0.1}>
          <HoverCard>
            <div style={{ position: 'relative' }}>
              {/* Ambient glow — colour-reactive */}
              <motion.div
                animate={{ background: `radial-gradient(ellipse at 50% 0%, ${tab.color}18 0%, transparent 70%)` }}
                transition={{ duration: 0.6 }}
                style={{
                  position: 'absolute', top: -40, left: 0, right: 0, height: 300,
                  pointerEvents: 'none',
                }}
              />
              <div style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                borderRadius: RADIUS_XL,
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 20,
                overflow: 'hidden',
              }}>
                {/* Thin colour bar at top */}
                <motion.div
                  animate={{ background: `linear-gradient(90deg, transparent, ${tab.color}60, transparent)` }}
                  transition={{ duration: 0.5 }}
                  style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1 }}
                />

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <p style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em', margin: '0 0 2px', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif' }}>
                    Intelligence
                  </p>
                  <p style={{ fontSize: 11, color: TEXT_TERTIARY, margin: 0 }}>Analysis of 218 logged prints</p>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 16, padding: '4px', borderRadius: 12, background: 'rgba(255,255,255,0.04)' }}>
                  {INTEL_TABS.map((t) => (
                    <motion.button
                      key={t.id}
                      onClick={() => setActiveTab(t.id)}
                      whileHover={{ opacity: 1 }}
                      whileTap={{ scale: 0.96 }}
                      style={{
                        padding: '6px 12px', borderRadius: 8, border: 'none',
                        fontSize: 10, fontWeight: 600,
                        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
                        letterSpacing: '0.04em', textTransform: 'uppercase', cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        background: activeTab === t.id ? `${t.color}25` : 'transparent',
                        color: activeTab === t.id ? t.color : TEXT_TERTIARY,
                      }}
                    >
                      {t.label}
                    </motion.button>
                  ))}
                </div>

                {/* Stats */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 16 }}>
                      {data.stats.map((s) => (
                        <div key={s.lbl} style={{
                          textAlign: 'center', padding: '12px 8px', borderRadius: 14,
                          background: 'rgba(255,255,255,0.04)',
                          border: `1px solid ${tab.color}18`,
                        }}>
                          <div style={{ fontSize: 18, fontWeight: 700, fontFamily: 'ui-monospace, "SF Mono", monospace', fontVariantNumeric: 'tabular-nums', color: TEXT_PRIMARY }}>
                            {s.val}
                          </div>
                          <div style={{ fontSize: 10, color: TEXT_TERTIARY, marginTop: 3 }}>{s.lbl}</div>
                          {s.trend && (
                            <div style={{ fontSize: 8, color: tab.color, marginTop: 3, opacity: 0.8, letterSpacing: '0.02em' }}>{s.trend}</div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Chart */}
                    <div style={{ height: 110 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data.chart} margin={{ top: 4, right: 4, bottom: 0, left: 4 }}>
                          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 9, fill: 'rgba(235,235,245,0.3)' }} interval={2} />
                          <Bar dataKey="value" radius={[3, 3, 0, 0]} animationDuration={500}>
                            {data.chart.map((_, i) => (
                              <Cell key={i} fill={tab.color} fillOpacity={0.45 + (i / data.chart.length) * 0.55} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </HoverCard>
        </ScrollReveal>

        {/* Text */}
        <div>
          <ScrollReveal>
            <motion.p
              animate={{ color: tab.color }}
              transition={{ duration: 0.4 }}
              style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}
            >
              Intelligence
            </motion.p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 20, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>
              Know the true cost of every print.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: TEXT_SECONDARY, marginBottom: 28 }}>
              Most makers guess. Spool calculates. Track inventory value, cost per print, and weight consumed with decimal precision — computed automatically every time you log a print.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ANALYTICS_CAPABILITIES.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.14 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: 4, background: c.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: TEXT_SECONDARY }}>{c.label}</span>
                </motion.div>
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
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);
  const heroY       = useTransform(heroScroll, [0, 0.6], [0, -80]);

  const { scrollYProgress } = useScroll();
  const progress      = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  const progressWidth = useTransform(progress, [0, 1], ['0%', '100%']);

  useEffect(() => { document.title = 'Spool — Filament Tracker for 3D Printers'; }, []);

  return (
    <div style={{ background: BG_PRIMARY, color: TEXT_PRIMARY, minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── AMBIENT ORBS — scroll-reactive background ── */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.1, 0.06], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
          style={{ position: 'absolute', top: '-20%', left: '-10%', width: '60vw', height: '60vw', borderRadius: '50%', background: `radial-gradient(circle, ${ACCENT}, transparent 70%)` }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04], x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut', delay: 4 }}
          style={{ position: 'absolute', bottom: '10%', right: '-15%', width: '50vw', height: '50vw', borderRadius: '50%', background: 'radial-gradient(circle, #AF52DE, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'easeInOut', delay: 8 }}
          style={{ position: 'absolute', top: '40%', left: '40%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, #34C759, transparent 70%)' }}
        />
      </div>

      {/* ── NAV ── */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, isolation: 'isolate', background: 'rgba(13,13,13,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 52, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="/spool-tracker-logo.png" alt="Spool" style={{ width: 28, height: 28, borderRadius: 8 }} />
            <span style={{ fontSize: 15, fontWeight: 600, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif', letterSpacing: '-0.01em' }}>Spool</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ fontSize: 13, color: TEXT_SECONDARY, textDecoration: 'none' }}>Features</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ fontSize: 13, color: TEXT_SECONDARY, textDecoration: 'none' }}>Pricing</a>
            <motion.a href={APP_STORE} target="_blank" rel="noopener noreferrer"
              whileHover={{ opacity: 0.85, scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px', borderRadius: 999, background: ACCENT, color: '#fff', fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
              <AppleLogo size={14} />
              Download
            </motion.a>
          </div>
        </div>
        <motion.div style={{ height: 2, background: ACCENT, width: progressWidth }} />
      </nav>

      {/* ── HERO ── */}
      <motion.section ref={heroRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 24px 40px', opacity: heroOpacity, y: heroY }}>
        <div style={{ maxWidth: 680, textAlign: 'center' }}>

          {/* iOS 26 badge with pulsing dot */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} style={{ marginBottom: 32 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', borderRadius: 999, background: 'rgba(0,122,255,0.1)', border: '1px solid rgba(0,122,255,0.25)' }}>
              <div style={{ position: 'relative', width: 6, height: 6 }}>
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: 'easeOut' }}
                  style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: ACCENT }}
                />
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: ACCENT }} />
              </div>
              <span style={{ fontSize: 11, fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Built for iOS 26</span>
            </div>
          </motion.div>

          {/* Floating app icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            style={{ marginBottom: 40 }}
          >
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
              <img src="/spool-tracker-logo.png" alt="Spool" style={{ width: 120, height: 120, borderRadius: 28, boxShadow: `0 0 80px ${ACCENT}25, 0 20px 60px rgba(0,0,0,0.5)`, margin: '0 auto', display: 'block' }} />
            </motion.div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 0 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>
            Track every gram.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.32 }}
            style={{ fontSize: 'clamp(17px, 2.5vw, 21px)', color: TEXT_SECONDARY, lineHeight: 1.5, maxWidth: 500, margin: '0 auto 48px', fontWeight: 400 }}>
            The filament manager serious makers actually use. 10,000+ profiles built-in, true cost tracking, and automatic Bambu Cloud sync.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <motion.a href={APP_STORE} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.03, boxShadow: `0 8px 40px ${ACCENT}55` }}
              whileTap={{ scale: 0.97 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 32px', borderRadius: RADIUS_MD, background: ACCENT, color: '#fff', fontSize: 16, fontWeight: 600, textDecoration: 'none', boxShadow: `0 4px 24px ${ACCENT}40` }}>
              <AppleLogo size={22} />
              <span>Download on the App Store</span>
            </motion.a>
            <p style={{ fontSize: 13, color: TEXT_TERTIARY, margin: 0 }}>
              Free to download
              <span style={{ color: 'rgba(255,255,255,0.12)', margin: '0 8px' }}>·</span>
              <span style={{ color: TEXT_SECONDARY }}>Pro from £4.99/month</span>
            </p>
            <motion.button onClick={() => document.getElementById('statement')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ opacity: 0.7 }}
              style={{ background: 'none', border: 'none', color: TEXT_TERTIARY, fontSize: 14, cursor: 'pointer', padding: '8px 16px', fontFamily: 'inherit', marginTop: 4 }}>
              Scroll to explore ↓
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* ── STATEMENT ── */}
      <section id="statement" style={{ padding: '120px 24px 140px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{ fontSize: 'clamp(32px, 6vw, 60px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>
              10,000+ filaments.{' '}
              <span style={{ color: ACCENT }}>One tap to add.</span>{' '}
              <span style={{ color: TEXT_TERTIARY }}>Zero data entry.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ marginTop: 28, fontSize: 18, lineHeight: 1.65, color: TEXT_SECONDARY, maxWidth: 600 }}>
              The largest built-in filament database on iOS. Over 10,000 profiles from Bambu Lab, Prusament, Polymaker, eSUN, Hatchbox, Overture, and dozens more. Brand, material, colour, diameter, and print temperatures included. Just search and tap.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── DATABASE ── */}
      <section style={{ padding: '0 24px 140px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <ScrollReveal>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>The Database</p>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 20, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>Browse. Tap. Done.</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: TEXT_SECONDARY, marginBottom: 28 }}>
                Search by name, brand, material, or colour. Each entry includes hex colour preview, temperatures, diameter, and brand. No typing required. Find your filament and tap to add it.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['PLA', 'PETG', 'ABS', 'TPU', 'ASA', 'Nylon'].map((m) => (
                  <motion.span key={m} whileHover={{ scale: 1.06 }} style={{ padding: '5px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700, fontFamily: 'ui-monospace, "SF Mono", monospace', letterSpacing: '0.05em', background: `${MAT[m] || ACCENT}18`, color: MAT[m] || ACCENT, cursor: 'default' }}>
                    {m}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <HoverCard>
              <div style={{ background: BG_CARD, borderRadius: RADIUS_XL, padding: 20, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderRadius: 12, background: 'rgba(255,255,255,0.06)', marginBottom: 12, fontSize: 14, color: TEXT_TERTIARY }}>
                  <span style={{ opacity: 0.5 }}>⌕</span>
                  Search 10,000+ filaments…
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {DATABASE_ENTRIES.map((e, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ background: 'rgba(255,255,255,0.06)' }}
                      style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 14, background: 'rgba(255,255,255,0.03)' }}
                    >
                      <SpoolColorCircle colors={e.spoolColors} size={36} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{e.name}</div>
                        <div style={{ fontSize: 12, color: TEXT_TERTIARY }}>{e.brand} · {e.weight}</div>
                      </div>
                      <span style={{ padding: '3px 8px', borderRadius: 999, fontSize: 9, fontWeight: 700, fontFamily: 'ui-monospace, "SF Mono", monospace', background: `${ACCENT}20`, color: ACCENT, letterSpacing: '0.06em' }}>
                        {e.material}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <p style={{ textAlign: 'center', marginTop: 14, fontSize: 12, color: TEXT_TERTIARY }}>+ 9,995 more</p>
              </div>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ANALYTICS / INTELLIGENCE ── */}
      <AnalyticsSection />

      {/* ── BAMBU + PRINTER MANAGEMENT ── */}
      <section style={{ padding: '0 24px 140px' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <ScrollReveal>
            <HoverCard>
              <div style={{ background: BG_CARD, borderRadius: RADIUS_XL, padding: 'clamp(32px, 6vw, 56px)', boxShadow: '0 8px 40px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }} />

                {/* Top content */}
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                  <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: 20 }}>Printer Intelligence</p>
                  <h2 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 16, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>
                    Your Bambu printer.{' '}<span style={{ color: ACCENT }}>Automatically synced.</span>
                  </h2>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: TEXT_SECONDARY, maxWidth: 500, margin: '0 auto 24px' }}>
                    Connect to the Bambu Lab Cloud API once. Your entire print history imports automatically: name, duration, material, and weight consumed. No manual logging required.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
                    {BAMBU_PRINTERS.map((p) => (
                      <motion.span key={p} whileHover={{ background: 'rgba(255,255,255,0.1)' }}
                        style={{ padding: '7px 16px', borderRadius: 999, fontSize: 13, fontWeight: 500, background: 'rgba(255,255,255,0.06)', color: TEXT_PRIMARY }}>
                        {p}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 32 }} />

                {/* Maintenance features */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 20 }}>
                  {BAMBU_MAINTENANCE.map((item, i) => (
                    <motion.div key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ background: 'rgba(255,255,255,0.04)' }}
                      style={{ padding: 16, borderRadius: RADIUS_MD, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: `${ACCENT}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                        {item.icon}
                      </div>
                      <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, color: TEXT_PRIMARY }}>{item.title}</h4>
                      <p style={{ fontSize: 13, lineHeight: 1.55, color: TEXT_SECONDARY, margin: 0 }}>{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <p style={{ textAlign: 'center', marginTop: 28, fontSize: 12, color: TEXT_TERTIARY }}>More printers added regularly · Cloud sync is a Pro feature</p>
              </div>
            </HoverCard>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SPOOLTAG ── */}
      <section style={{ padding: '0 24px 140px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 64, alignItems: 'center' }}>
          {/* Animated card */}
          <ScrollReveal delay={0.1}>
            <HoverCard>
              <div style={{ background: BG_CARD, borderRadius: RADIUS_XL, padding: 40, textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #34C759, transparent)' }} />

                {/* NFC icon with animated scan rings */}
                <div style={{ position: 'relative', width: 72, height: 72, margin: '0 auto 24px' }}>
                  {[1, 2, 3].map((ring) => (
                    <motion.div
                      key={ring}
                      animate={{ scale: [1, 1.8, 1], opacity: [0.35, 0, 0.35] }}
                      transition={{ repeat: Infinity, duration: 2.8, delay: ring * 0.55, ease: 'easeOut' }}
                      style={{
                        position: 'absolute',
                        borderRadius: '50%',
                        border: '1px solid rgba(52,199,89,0.5)',
                        top: '50%', left: '50%',
                        width: 72, height: 72,
                        marginTop: -36, marginLeft: -36,
                        pointerEvents: 'none',
                      }}
                    />
                  ))}
                  <div style={{ width: 72, height: 72, borderRadius: 20, background: 'rgba(52,199,89,0.1)', border: '1px solid rgba(52,199,89,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <svg width={32} height={32} viewBox="0 0 24 24" fill="none">
                      <path d="M20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20" stroke="#34C759" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M17 12C17 9.24 14.76 7 12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17" stroke="#34C759" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="2" fill="#34C759" />
                    </svg>
                  </div>
                </div>

                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 10, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>SpoolTag</h3>
                <p style={{ fontSize: 15, color: TEXT_SECONDARY, lineHeight: 1.6, maxWidth: 280, margin: '0 auto 28px' }}>
                  Hold your phone to a tag. See the filament, remaining weight, and print history instantly.
                </p>

                {/* Tag type pills */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 24 }}>
                  <div style={{ padding: '8px 18px', borderRadius: 12, background: 'rgba(52,199,89,0.1)', border: '1px solid rgba(52,199,89,0.25)', fontSize: 13, color: '#34C759', fontWeight: 600 }}>NFC Tag</div>
                  <div style={{ padding: '8px 18px', borderRadius: 12, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', fontSize: 13, color: TEXT_PRIMARY, fontWeight: 600 }}>QR Label</div>
                </div>

                {/* Mini preview card — what you see when you scan */}
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: RADIUS_MD, padding: '12px 16px', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'left' }}>
                  <div style={{ fontSize: 10, color: TEXT_TERTIARY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>When scanned</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <SpoolColorCircle colors={['#4CAF50']} size={32} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: TEXT_PRIMARY }}>Grass Green · PLA Matte</div>
                      <div style={{ fontSize: 11, color: TEXT_TERTIARY }}>Bambu Lab · 847g remaining</div>
                    </div>
                    <div style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: 4, background: '#34C759' }} />
                  </div>
                </div>
              </div>
            </HoverCard>
          </ScrollReveal>

          {/* Text */}
          <div>
            <ScrollReveal>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#34C759', marginBottom: 16 }}>SpoolTag</p>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 20, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>
                Your shelf. Tap to identify.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: TEXT_SECONDARY, marginBottom: 28 }}>
                Print QR labels in seconds or write NFC stickers once. Tap or scan any spool to instantly pull up its full profile, weight history, and print log. No searching, no scrolling.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[
                  'NFC tap — one-touch spool identification',
                  'QR codes — scan with iPhone camera',
                  'Deep links directly into the spool profile',
                  'Share filament details with other makers',
                ].map((label, i) => (
                  <motion.div key={label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.14 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: 'flex', alignItems: 'center', gap: 10 }}
                  >
                    <Check color="#34C759" />
                    <span style={{ fontSize: 14, color: TEXT_SECONDARY }}>{label}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section id="features" style={{ padding: '0 24px 140px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>Everything a serious maker needs.</h2>
              <p style={{ fontSize: 17, color: TEXT_TERTIARY, marginTop: 8 }}>Nothing they don't.</p>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 16 }}>
            {FEATURES.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 24, scale: 0.96, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, scale: 1.02, boxShadow: `0 12px 32px rgba(0,0,0,0.35), 0 0 0 1px ${f.color}20` }}
                style={{ background: BG_CARD, borderRadius: RADIUS_LG, padding: 24, boxShadow: '0 4px 16px rgba(0,0,0,0.2)', borderTop: `2px solid ${f.color}35`, cursor: 'default' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 4, background: f.color, flexShrink: 0 }} />
                  <h3 style={{ fontSize: 17, fontWeight: 600, margin: 0 }}>{f.title}</h3>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: TEXT_SECONDARY, margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '0 24px 140px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            { countTo: 10000, suffix: '+', label: 'Filament Profiles', color: ACCENT },
            { countTo: 218,   suffix: '',  label: 'Prints Logged',     color: '#34C759' },
            { countTo: 4,     suffix: '',  label: 'Printers Supported', color: '#FF9500' },
          ].map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.04)' }}
              style={{ textAlign: 'center', padding: '36px 16px', background: 'rgba(255,255,255,0.02)', borderRadius: RADIUS_LG, border: '1px solid rgba(255,255,255,0.06)', cursor: 'default' }}
            >
              <div style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, fontFamily: 'ui-monospace, "SF Mono", monospace', marginBottom: 8, color: s.color }}>
                <CountUp to={s.countTo} suffix={s.suffix} duration={1.8} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: TEXT_TERTIARY }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FILAMENT SHOWCASE — continuous marquee ── */}
      <section style={{ padding: '0 0 140px', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: 16 }}>Premium Visuals</p>
              <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>Every material, rendered.</h2>
              <p style={{ fontSize: 17, color: TEXT_TERTIARY, marginTop: 8 }}>21 material types. Procedural shaders. Looks nothing like a list.</p>
            </div>
          </ScrollReveal>
        </div>
        {/* Marquee track */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 140, background: `linear-gradient(to right, ${BG_PRIMARY}, transparent)`, zIndex: 1, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 140, background: `linear-gradient(to left, ${BG_PRIMARY}, transparent)`, zIndex: 1, pointerEvents: 'none' }} />
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 26, ease: 'linear' }}
            style={{ display: 'flex', gap: 56, width: 'max-content', padding: '16px 28px' }}
          >
            {[...SPOOL_SHOWCASE, ...SPOOL_SHOWCASE].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.14, y: -10 }}
                transition={SPRING}
                style={{ textAlign: 'center', cursor: 'default', flexShrink: 0 }}
              >
                <FilamentSpool colors={s.colors} materialType={s.materialType} size={120} animated={s.animated} />
                <p style={{ fontSize: 12, fontWeight: 500, color: TEXT_TERTIARY, marginTop: 12, letterSpacing: '0.04em' }}>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: '0 24px 140px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>Loved by makers.</h2>
            </div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: 16 }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                style={{ background: BG_CARD, borderRadius: RADIUS_LG, padding: 28, boxShadow: '0 4px 16px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <svg key={si} width={13} height={13} viewBox="0 0 13 13" fill="#FF9500">
                        <path d="M6.5 0l1.64 4.36H13L9.18 7.07l1.64 4.36L6.5 8.72l-4.32 2.71L3.82 7.07 0 4.36h4.86z" />
                      </svg>
                    ))}
                  </div>
                  <p style={{ fontSize: t.featured ? 17 : 15, fontWeight: t.featured ? 500 : 400, lineHeight: 1.6, color: t.featured ? TEXT_PRIMARY : TEXT_SECONDARY, margin: 0 }}>
                    "{t.quote}"
                  </p>
                </div>
                <p style={{ fontSize: 12, color: TEXT_TERTIARY, marginTop: 20, marginBottom: 0, fontWeight: 500, letterSpacing: '0.04em' }}>· {t.attribution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING — subtle ── */}
      <section id="pricing" style={{ padding: '0 24px 120px' }}>
        <div style={{ maxWidth: 840, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: 14 }}>Pricing</p>
              <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 10, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>
                Start free. Upgrade when ready.
              </h2>
              <p style={{ fontSize: 15, color: TEXT_TERTIARY }}>No trial limits. Cancel anytime.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 12 }}>
            {PLANS.map((plan, i) => (
              <motion.div key={plan.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                style={{
                  borderRadius: RADIUS_XL,
                  padding: '28px 28px',
                  background: plan.accent ? 'rgba(0,122,255,0.04)' : 'rgba(255,255,255,0.02)',
                  border: plan.accent ? '1px solid rgba(0,122,255,0.18)' : '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: plan.accent ? ACCENT : TEXT_TERTIARY, marginBottom: 12 }}>
                  {plan.name}
                </p>

                <div style={{ marginBottom: 22 }}>
                  <span style={{ fontSize: 36, fontWeight: 700, fontFamily: 'ui-monospace, "SF Mono", monospace', letterSpacing: '-0.02em' }}>{plan.price}</span>
                  <span style={{ fontSize: 12, color: TEXT_TERTIARY, marginLeft: 6 }}>{plan.priceSub}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24, flex: 1 }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Check color={plan.accent ? ACCENT : TEXT_TERTIARY} />
                      <span style={{ fontSize: 13, color: plan.accent ? TEXT_SECONDARY : TEXT_TERTIARY }}>{f}</span>
                    </div>
                  ))}
                </div>

                <motion.a href={APP_STORE} target="_blank" rel="noopener noreferrer"
                  whileHover={{ opacity: 0.85 }} whileTap={{ scale: 0.97 }}
                  style={{
                    display: 'block', textAlign: 'center',
                    padding: '12px 20px', borderRadius: RADIUS_MD,
                    background: plan.accent ? ACCENT : 'rgba(255,255,255,0.07)',
                    color: '#fff', fontSize: 14, fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: '80px 24px 140px', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 style={{ fontSize: 'clamp(36px, 7vw, 64px)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 16, fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", "SF Pro Display", system-ui, sans-serif' }}>
            Your collection. Under control.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p style={{ fontSize: 18, color: TEXT_SECONDARY, marginBottom: 8 }}>Free on the App Store. No account required.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p style={{ fontSize: 14, color: TEXT_TERTIARY, marginBottom: 40 }}>Pro unlocks unlimited spools, Bambu sync, and SpoolTag.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <motion.a href={APP_STORE} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: `0 12px 48px ${ACCENT}55` }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 36px', borderRadius: RADIUS_MD, background: ACCENT, color: '#fff', fontSize: 17, fontWeight: 600, textDecoration: 'none', boxShadow: `0 4px 30px ${ACCENT}40` }}>
            <AppleLogo size={24} />
            <span>Download on the App Store</span>
          </motion.a>
        </ScrollReveal>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: '32px 24px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, fontSize: 12, color: TEXT_TERTIARY }}>
          <Link to="/" style={{ color: TEXT_TERTIARY, textDecoration: 'none' }}>A Lance Studio product</Link>
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
