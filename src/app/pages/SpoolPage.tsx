import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';

/* ------------------------------------------------------------------ */
/*  Design tokens — Spool's own identity (from SPOOL_DESIGN_SYSTEM)   */
/* ------------------------------------------------------------------ */
const COLORS = {
  bg: '#0d0d0d',
  bgBlue: 'rgba(13, 13, 18, 1)',
  accent: '#007AFF',       // iOS system blue
  accentLight: '#3395FF',
  surface: 'rgba(255,255,255,0.03)',
  surfaceHover: 'rgba(255,255,255,0.05)',
  border: 'rgba(255,255,255,0.08)',
  borderHover: 'rgba(255,255,255,0.15)',
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255,255,255,0.55)',
  textTertiary: 'rgba(255,255,255,0.35)',
};

const SPRING = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/*  App Store link                                                     */
/* ------------------------------------------------------------------ */
const APP_STORE_URL = 'https://apps.apple.com/gb/app/spool/id6756892049';

/* ------------------------------------------------------------------ */
/*  Apple logo SVG                                                     */
/* ------------------------------------------------------------------ */
function AppleLogo({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Scroll-reveal wrapper (staggered entry from design system)         */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  className = '',
  delay = 0,
  y = 40,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: 0.8, ease: SPRING, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Glass card component                                               */
/* ------------------------------------------------------------------ */
function GlassCard({
  children,
  className = '',
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div className={`group relative ${className}`}>
      {hover && (
        <div className="absolute -inset-px rounded-[21px] bg-gradient-to-b from-white/[0.12] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div
        className={`relative backdrop-blur-xl rounded-[20px] p-6 border transition-all duration-500 ${
          hover
            ? 'bg-white/[0.03] border-white/[0.08] group-hover:bg-white/[0.05] group-hover:border-white/[0.15]'
            : 'bg-white/[0.03] border-white/[0.08]'
        }`}
        style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.08)' }}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature section — full-viewport sticky scroll reveal               */
/* ------------------------------------------------------------------ */
function FeatureSection({
  label,
  title,
  titleAccent,
  description,
  children,
  accentColor = COLORS.accent,
  reverse = false,
}: {
  label: string;
  title: string;
  titleAccent: string;
  description: string;
  children: React.ReactNode;
  accentColor?: string;
  reverse?: boolean;
}) {
  return (
    <section className="relative py-32 md:py-40 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase block mb-5"
            style={{ color: accentColor, opacity: 0.7 }}
          >
            {label}
          </span>
        </Reveal>

        <div
          className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center ${
            reverse ? 'direction-rtl' : ''
          }`}
          style={{ direction: reverse ? 'rtl' : 'ltr' }}
        >
          <div style={{ direction: 'ltr' }}>
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight mb-6">
                {title}
                <br />
                <span style={{ color: COLORS.textTertiary }}>{titleAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed mb-8" style={{ color: COLORS.textSecondary }}>
                {description}
              </p>
            </Reveal>
          </div>

          <div style={{ direction: 'ltr' }}>
            <Reveal delay={0.15}>{children}</Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const DATABASE_ENTRIES = [
  { colour: '#10b981', name: 'Matte PLA',     brand: 'Bambu Lab',  material: 'PLA',  weight: '1000g' },
  { colour: '#ef4444', name: 'Galaxy Red',    brand: 'Prusament',  material: 'PETG', weight: '750g' },
  { colour: '#3b82f6', name: 'Ocean Blue',    brand: 'Polymaker',  material: 'PLA+', weight: '1000g' },
  { colour: '#f59e0b', name: 'Solar Yellow',  brand: 'eSUN',       material: 'ABS',  weight: '500g' },
  { colour: '#8b5cf6', name: 'Cosmic Purple', brand: 'Hatchbox',   material: 'TPU',  weight: '800g' },
];

const MATERIAL_COLORS: Record<string, string> = {
  PLA: '#22c55e',
  PETG: '#f97316',
  ABS: '#3b82f6',
  TPU: '#a855f7',
  'PLA+': '#22c55e',
};

const BAMBU_PRINTERS = ['X1 Carbon', 'P1S', 'A1', 'A1 Mini'];

const FEATURES = [
  {
    title: 'Printer Management',
    desc: 'Track maintenance, monitor print hours, set service reminders.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
      </svg>
    ),
  },
  {
    title: 'SpoolTag',
    desc: 'Print QR labels or write NFC tags. Scan to see everything.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
      </svg>
    ),
  },
  {
    title: 'iCloud Sync',
    desc: 'Seamless sync across iPhone and iPad. No accounts. Apple-native.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: 'Smart Inventory',
    desc: 'Low stock alerts, colour search, filtering, storage tracking.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: 'Cost & Energy',
    desc: 'True cost of printing. Electricity from wattage and duration.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Print History',
    desc: 'Full logging. Automatic for Bambu. Quick entry for everyone else.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */
export default function SpoolPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Global scroll progress for nav progress bar
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });
  const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Hero parallax
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroBlur = useTransform(heroProgress, [0, 1], [0, 10]);

  useEffect(() => {
    document.title = 'Spool — Track Every Gram';
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen" style={{ background: COLORS.bg }}>
      {/* ============================================================ */}
      {/*  SPOOL BACKGROUND — own identity, blue/purple ambient glow   */}
      {/* ============================================================ */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(145deg, ${COLORS.bg} 0%, ${COLORS.bgBlue} 50%, ${COLORS.bg} 100%)` }}
        />
        {/* Blue ambient orb */}
        <div
          className="absolute rounded-full animate-float"
          style={{
            width: '80vw',
            height: '80vw',
            maxWidth: '900px',
            maxHeight: '900px',
            top: '5%',
            left: '-15%',
            background: `radial-gradient(circle, ${COLORS.accent}12 0%, transparent 70%)`,
            filter: 'blur(100px)',
          }}
        />
        {/* Purple ambient orb */}
        <div
          className="absolute rounded-full animate-float-delayed"
          style={{
            width: '60vw',
            height: '60vw',
            maxWidth: '700px',
            maxHeight: '700px',
            bottom: '10%',
            right: '-10%',
            background: 'radial-gradient(circle, rgba(147,51,234,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ============================================================ */}
      {/*  NAVBAR — Spool branded, not Lance Studio                    */}
      {/* ============================================================ */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: SPRING }}
      >
        <div className="backdrop-blur-2xl bg-black/40 border-b border-white/[0.06]">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/spool-tracker-logo.png" alt="Spool" className="w-7 h-7 rounded-lg" />
              <span className="text-white text-sm font-semibold tracking-wide">Spool</span>
            </div>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 active:scale-[0.96]"
              style={{
                background: COLORS.accent,
                color: '#fff',
                boxShadow: `0 0 20px ${COLORS.accent}40`,
              }}
            >
              <AppleLogo className="w-4 h-4" />
              Download
            </a>
          </div>
          <motion.div
            className="h-[1px]"
            style={{ width: progressWidth, background: COLORS.accent }}
          />
        </div>
      </motion.nav>

      {/* ============================================================ */}
      {/*  HERO — full viewport, app icon, title, tagline              */}
      {/* ============================================================ */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 pt-14"
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          filter: useTransform(heroBlur, (v) => `blur(${v}px)`),
        }}
      >
        <div className="max-w-4xl w-full text-center relative z-10">
          {/* App icon */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: SPRING, delay: 0.1 }}
          >
            <div className="relative inline-block">
              <div
                className="absolute inset-0 rounded-[2rem] blur-[60px]"
                style={{ background: `${COLORS.accent}30` }}
              />
              <img
                src="/spool-tracker-logo.png"
                alt="Spool"
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-[2rem] shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: SPRING, delay: 0.2 }}
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", system-ui, sans-serif' }}
          >
            Track every gram.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl max-w-xl mx-auto mb-12 font-light leading-relaxed"
            style={{ color: COLORS.textSecondary }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: SPRING, delay: 0.4 }}
          >
            The complete filament management system for 3D printing.
            Built for precision. Designed for makers.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: SPRING, delay: 0.55 }}
          >
            {/* App Store button — Liquid Button style from design system */}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white overflow-hidden transition-transform duration-300 active:scale-[0.96]"
              style={{
                background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`,
                boxShadow: `0 4px 20px ${COLORS.accent}40, 0 8px 40px ${COLORS.accent}20`,
              }}
            >
              {/* Shimmer overlay */}
              <div
                className="absolute inset-0 animate-shimmer"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  animationDuration: '3s',
                  animationIterationCount: 'infinite',
                }}
              />
              <AppleLogo className="w-6 h-6 relative z-10" />
              <div className="text-left relative z-10">
                <div className="text-[10px] opacity-70 leading-tight">Download on the</div>
                <div className="text-base font-semibold leading-tight">App Store</div>
              </div>
            </a>

            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl transition-all duration-300"
              style={{ color: COLORS.textSecondary }}
            >
              <span>See features</span>
              <motion.svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              className="w-1 h-1 rounded-full bg-white/50"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* ============================================================ */}
      {/*  STATEMENT — big typographic moment                          */}
      {/* ============================================================ */}
      <section className="relative py-40 md:py-52 px-6" id="features">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", system-ui, sans-serif' }}
            >
              2,800+ filaments.
              <br />
              <span style={{ color: COLORS.accent }}>One tap to add.</span>
              <br />
              <span style={{ color: COLORS.textTertiary }}>Zero data entry.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-lg md:text-xl max-w-2xl leading-relaxed" style={{ color: COLORS.textSecondary }}>
              The largest built-in filament database on iOS — covering Bambu Lab, Prusament,
              Polymaker, eSUN, Hatchbox, Overture, and dozens more. Every filament includes
              brand, material, colour, diameter, and print temperatures.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURE: DATABASE — with interactive mockup                  */}
      {/* ============================================================ */}
      <FeatureSection
        label="The Database"
        title="Browse. Tap. Done."
        titleAccent="No manual entry needed."
        description="Search by name, brand, material, or colour. Each entry includes hex colour preview, recommended temperatures, diameter, and brand info. Just tap to add any filament to your collection."
      >
        <GlassCard className="max-w-md mx-auto lg:mx-0 lg:ml-auto">
          {/* Search bar */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-4">
            <svg className="w-4 h-4" style={{ color: COLORS.textTertiary }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <span className="text-sm" style={{ color: COLORS.textTertiary }}>Search filaments…</span>
          </div>
          {/* Entries */}
          <div className="space-y-1.5">
            {DATABASE_ENTRIES.map((entry, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] transition-all duration-300 cursor-default"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: SPRING, delay: i * 0.05 }}
              >
                <div
                  className="w-8 h-8 rounded-full flex-shrink-0 ring-1 ring-white/10"
                  style={{ backgroundColor: entry.colour }}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-white text-sm font-medium truncate">{entry.name}</div>
                  <div className="text-xs" style={{ color: COLORS.textTertiary }}>{entry.brand} · {entry.weight}</div>
                </div>
                <span
                  className="px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase"
                  style={{
                    background: `${MATERIAL_COLORS[entry.material] || COLORS.accent}20`,
                    color: MATERIAL_COLORS[entry.material] || COLORS.accent,
                  }}
                >
                  {entry.material}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-4">
            <span className="text-xs" style={{ color: COLORS.textTertiary }}>+ 2,795 more</span>
          </div>
        </GlassCard>
      </FeatureSection>

      {/* ============================================================ */}
      {/*  FEATURE: ANALYTICS                                          */}
      {/* ============================================================ */}
      <FeatureSection
        label="Analytics"
        title="Know the true cost"
        titleAccent="of every print."
        description="Track inventory value, cost per print, and weight usage with decimal precision. Monitor energy costs, material breakdowns, usage trends, and spending patterns — all computed automatically."
        reverse
      >
        <GlassCard className="max-w-md mx-auto lg:mx-0">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            {[
              { val: '£142.50', lbl: 'Inventory', color: '#22c55e' },
              { val: '£0.82',   lbl: 'Per Print', color: '#f97316' },
              { val: '2.4kg',   lbl: 'This Month', color: COLORS.accent },
            ].map((s) => (
              <div key={s.lbl} className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-white text-lg font-bold font-mono">{s.val}</div>
                <div className="text-[10px] mt-1" style={{ color: COLORS.textTertiary }}>{s.lbl}</div>
              </div>
            ))}
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end justify-between gap-1.5 h-28 px-1">
            {[35, 55, 45, 72, 60, 85, 40, 68, 52, 78, 42, 90].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <motion.div
                  className="w-full rounded-t-sm"
                  style={{
                    background: `linear-gradient(to top, ${COLORS.accent}60, ${COLORS.accent}20)`,
                  }}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: SPRING, delay: i * 0.03 }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 px-1">
            <span className="text-[10px]" style={{ color: COLORS.textTertiary }}>Jan</span>
            <span className="text-[10px]" style={{ color: COLORS.textTertiary }}>Dec</span>
          </div>
        </GlassCard>
      </FeatureSection>

      {/* ============================================================ */}
      {/*  FEATURE: BAMBU SYNC — premium hero callout                  */}
      {/* ============================================================ */}
      <section className="relative py-32 md:py-40 px-6 overflow-hidden">
        {/* Accent glow behind */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: `${COLORS.accent}08`, filter: 'blur(100px)' }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <GlassCard hover={false} className="overflow-hidden">
              <div className="p-8 md:p-14 text-center relative">
                {/* Gradient border accent */}
                <div
                  className="absolute inset-0 rounded-[20px] pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.accent}10, transparent 40%, transparent 60%, ${COLORS.accent}08)`,
                  }}
                />

                <div className="relative z-10">
                  <Reveal>
                    <span
                      className="text-xs font-semibold tracking-[0.3em] uppercase block mb-6"
                      style={{ color: COLORS.accent, opacity: 0.7 }}
                    >
                      Bambu Lab Integration
                    </span>
                  </Reveal>

                  <Reveal delay={0.05}>
                    <div
                      className="w-16 h-16 rounded-2xl border flex items-center justify-center mx-auto mb-8"
                      style={{ background: `${COLORS.accent}10`, borderColor: `${COLORS.accent}20` }}
                    >
                      <svg className="w-8 h-8" style={{ color: COLORS.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                      </svg>
                    </div>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <h2
                      className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", system-ui, sans-serif' }}
                    >
                      Your Bambu printer.
                      <br />
                      <span style={{ color: COLORS.accent }}>Automatically synced.</span>
                    </h2>
                  </Reveal>

                  <Reveal delay={0.15}>
                    <p className="text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ color: COLORS.textSecondary }}>
                      Connect to the Bambu Lab Cloud API. Spool auto-imports your complete
                      print history — name, duration, material, and weight consumed.
                      No manual logging.
                    </p>
                  </Reveal>

                  <Reveal delay={0.2}>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {BAMBU_PRINTERS.map((printer, i) => (
                        <motion.span
                          key={printer}
                          className="px-5 py-2.5 rounded-full text-sm font-medium border"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            borderColor: 'rgba(255,255,255,0.1)',
                            color: COLORS.textPrimary,
                          }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, ease: SPRING, delay: 0.25 + i * 0.05 }}
                        >
                          {printer}
                        </motion.span>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURE GRID — 2x3                                          */}
      {/* ============================================================ */}
      <section className="py-32 md:py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", system-ui, sans-serif' }}
              >
                Everything you need.
              </h2>
              <p className="mt-4 text-lg" style={{ color: COLORS.textTertiary }}>
                Nothing you don't.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.05}>
                <GlassCard className="h-full">
                  <div
                    className="w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: `${COLORS.accent}08`,
                      borderColor: `${COLORS.accent}15`,
                      color: COLORS.accent,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
                    {feature.desc}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS — three numbers, clean                                */}
      {/* ============================================================ */}
      <section className="py-24 px-6 relative">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.008), transparent)' }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: '2,800+', label: 'Filaments' },
              { value: '0.1g', label: 'Precision' },
              { value: '∞', label: 'iCloud Sync' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="text-center">
                  <div
                    className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono"
                    style={{ textShadow: `0 0 40px ${COLORS.accent}20` }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-widest uppercase" style={{ color: COLORS.textTertiary }}>
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="py-40 md:py-52 px-6 relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: `${COLORS.accent}06`, filter: 'blur(120px)' }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
              style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Rounded", system-ui, sans-serif',
                textShadow: `0 0 80px ${COLORS.accent}15`,
              }}
            >
              Start tracking.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xl max-w-md mx-auto mb-14 leading-relaxed" style={{ color: COLORS.textSecondary }}>
              Free on the App Store.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-white text-lg overflow-hidden transition-transform duration-300 active:scale-[0.96]"
              style={{
                background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.accentLight})`,
                boxShadow: `0 4px 30px ${COLORS.accent}40, 0 12px 60px ${COLORS.accent}20`,
              }}
            >
              <div
                className="absolute inset-0 animate-shimmer"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  animationDuration: '3s',
                  animationIterationCount: 'infinite',
                }}
              />
              <AppleLogo className="w-7 h-7 relative z-10" />
              <div className="text-left relative z-10">
                <div className="text-xs opacity-70 leading-tight">Download on the</div>
                <div className="text-lg font-semibold leading-tight">App Store</div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER — minimal                                            */}
      {/* ============================================================ */}
      <footer className="py-12 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/spool-tracker-logo.png" alt="Spool" className="w-5 h-5 rounded-md opacity-50" />
            <Link
              to="/"
              className="text-xs tracking-wide hover:text-white/60 transition-colors"
              style={{ color: COLORS.textTertiary }}
            >
              A Lance Studio product
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/privacy.html"
              className="text-xs hover:text-white/60 transition-colors"
              style={{ color: COLORS.textTertiary }}
            >
              Privacy
            </a>
            <a
              href="mailto:hello@lance-studio.com"
              className="text-xs hover:text-white/60 transition-colors"
              style={{ color: COLORS.textTertiary }}
            >
              Contact
            </a>
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
            © 2026 Lance Studio
          </p>
        </div>
      </footer>
    </div>
  );
}
