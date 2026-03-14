import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, useSpring } from 'motion/react';
import { Database, BarChart3, Cloud, Wrench, ScanQrCode, CloudCog, Search, Zap, History, Printer } from 'lucide-react';
import AnimatedBackground from '../components/shared/AnimatedBackground';

/* ------------------------------------------------------------------ */
/*  Scroll-reveal wrapper                                              */
/* ------------------------------------------------------------------ */
function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data constants                                                      */
/* ------------------------------------------------------------------ */
const STATS = [
  { value: '2,800+', label: 'Filaments in Database' },
  { value: '0.1g', label: 'Precision Tracking' },
  { value: 'Bambu', label: 'Cloud Sync' },
];

const FEATURE_CARDS = [
  {
    title: 'Printer Management',
    description: 'Track all your 3D printers in one place. Log maintenance tasks, monitor print hours, and set service reminders to keep your machines running smoothly.',
    icon: Printer,
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'SpoolTag',
    description: 'Print QR labels or write NFC tags for any spool. Scan with your phone to see all details instantly — remaining weight, material, colour, and full print history.',
    icon: ScanQrCode,
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    title: 'iCloud Sync',
    description: 'Your collection syncs seamlessly across iPhone and iPad via iCloud. No third-party accounts. No sign-ups. Private, secure, and Apple-native.',
    icon: CloudCog,
    gradient: 'from-sky-500/20 to-blue-500/20',
  },
  {
    title: 'Smart Inventory',
    description: 'Low stock alerts, colour search, material filtering, brand organisation, and storage location tracking. Find any spool in seconds.',
    icon: Search,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
];

const BAMBU_PRINTERS = ['X1 Carbon', 'P1S', 'A1', 'A1 Mini'];

const DATABASE_ENTRIES = [
  { colour: '#10b981', name: 'Matte PLA', brand: 'Bambu Lab', material: 'PLA' },
  { colour: '#ef4444', name: 'Galaxy Red', brand: 'Prusament', material: 'PETG' },
  { colour: '#3b82f6', name: 'Ocean Blue', brand: 'Polymaker', material: 'PLA+' },
  { colour: '#f59e0b', name: 'Solar Yellow', brand: 'eSUN', material: 'ABS' },
  { colour: '#8b5cf6', name: 'Cosmic Purple', brand: 'Hatchbox', material: 'TPU' },
];

/* ------------------------------------------------------------------ */
/*  Animated stat component                                            */
/* ------------------------------------------------------------------ */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2" style={{ textShadow: '0 0 40px rgba(16,185,129,0.2)' }}>
        {value}
      </div>
      <div className="text-xs md:text-sm text-slate-400 tracking-wide">{label}</div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */
export default function SpoolPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Page-level scroll progress (for progress bar)
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Hero parallax — tied to the hero element leaving viewport
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroScale = useTransform(heroProgress, [0, 0.8], [1, 0.92]);
  const heroOpacity = useTransform(heroProgress, [0, 0.7], [1, 0]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = 'Spool — Premium Filament Management for 3D Printing';
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative w-full bg-[#0a0a0a]">
      <AnimatedBackground />

      {/* ============================================================ */}
      {/*  NAVBAR                                                       */}
      {/* ============================================================ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-black/60 border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-white text-sm tracking-[0.25em] uppercase font-medium hover:text-emerald-400 transition-colors duration-300">
            Lance Studio
          </Link>
          <a
            href="https://apps.apple.com/gb/app/spool/id6756892049"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            Download
          </a>
        </div>
        <motion.div className="h-[1px] bg-emerald-500/60" style={{ width: progressWidth }} />
      </nav>

      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden"
        style={{ scale: heroScale, opacity: heroOpacity }}
      >
        <div className="max-w-5xl w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-10"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            <span className="text-slate-400 text-xs tracking-widest uppercase">Available on iOS</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-[8rem] font-bold text-white tracking-tight leading-[0.9] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ textShadow: '0 0 120px rgba(16, 185, 129, 0.12)' }}
          >
            Spool
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Tracker
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your entire filament collection. Tracked to the gram.
            <br className="hidden md:block" />
            Costed to the penny.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a
              href="https://apps.apple.com/gb/app/spool/id6756892049"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-semibold transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,255,255,0.12)]"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] opacity-60 leading-tight">Download on the</div>
                <div className="text-base font-semibold leading-tight -mt-0.5">App Store</div>
              </div>
            </a>

            <button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-4 text-white/70 hover:text-white transition-colors duration-300 text-base"
            >
              <span>Explore</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </motion.div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-[3rem] blur-[80px]" />
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img src="/spool-tracker-logo.png" alt="Spool Tracker" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 mx-auto flex items-start justify-center p-1.5">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-white/50"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/*  STATS BAR                                                    */}
      {/* ============================================================ */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="grid grid-cols-3 gap-8">
            {STATS.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BIG STATEMENT                                                */}
      {/* ============================================================ */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Your entire filament collection.{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Tracked to the gram.
              </span>
              <br />
              <span className="text-slate-500">Costed to the penny.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              A complete filament management system — from the largest built-in database on iOS to
              automatic Bambu Lab sync, real-time analytics, and NFC tagging. Purpose-built for
              makers who care about precision.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURE: FILAMENT DATABASE — text left, visual right         */}
      {/* ============================================================ */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-emerald-400/60 block mb-4">The Database</span>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <Reveal>
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-emerald-400 mb-8">
                  <Database className="w-7 h-7" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  2,800+ filaments.
                  <br />
                  <span className="text-slate-500">One tap to add.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  No manual data entry. Browse the largest built-in filament database on iOS — covering
                  Bambu Lab, Prusament, Polymaker, eSUN, Hatchbox, Overture, and dozens more. Every
                  filament includes brand, material type, colour with hex preview, diameter, and
                  recommended print temperatures.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-2">
                  {['PLA · PETG · ABS · TPU · ASA', 'Colour Hex Codes', 'Print Temperatures'].map((pill) => (
                    <span
                      key={pill}
                      className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs tracking-wide"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Decorative database mockup */}
            <Reveal delay={0.2}>
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-3xl blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 group-hover:border-white/[0.15] transition-all duration-500">
                  {/* Search bar mockup */}
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.06] mb-4">
                    <Search className="w-4 h-4 text-slate-500" />
                    <span className="text-slate-500 text-sm">Search 2,800+ filaments...</span>
                  </div>
                  {/* Spool entries */}
                  <div className="space-y-2">
                    {DATABASE_ENTRIES.map((entry, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-all duration-300"
                      >
                        <div
                          className="w-8 h-8 rounded-full flex-shrink-0 ring-1 ring-white/10"
                          style={{ backgroundColor: entry.colour }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-sm font-medium truncate">{entry.name}</div>
                          <div className="text-slate-500 text-xs">{entry.brand}</div>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-400 text-xs font-mono">
                          {entry.material}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-slate-600 text-xs">+ 2,795 more filaments</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURE: ANALYTICS — visual left, text right                 */}
      {/* ============================================================ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-emerald-400/60 block mb-4">Analytics</span>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Decorative analytics dashboard */}
            <Reveal delay={0.1}>
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-3xl blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-3xl p-6 group-hover:border-white/[0.15] transition-all duration-500">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { val: '£142.50', lbl: 'Inventory Value' },
                      { val: '£0.82', lbl: 'Per Print' },
                      { val: '2.4kg', lbl: 'Used This Month' },
                    ].map((s) => (
                      <div key={s.lbl} className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="text-white text-lg font-bold">{s.val}</div>
                        <div className="text-slate-500 text-[10px] mt-1">{s.lbl}</div>
                      </div>
                    ))}
                  </div>
                  {/* Bar chart mockup */}
                  <div className="flex items-end justify-between gap-2 h-32 px-2">
                    {[40, 65, 55, 80, 70, 90, 45, 75, 60, 85, 50, 95].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t-sm bg-gradient-to-t from-blue-500/40 to-indigo-400/40 transition-all duration-500"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 px-2">
                    <span className="text-slate-600 text-[10px]">Jan</span>
                    <span className="text-slate-600 text-[10px]">Dec</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <Reveal>
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-blue-400 mb-8">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Know the true cost
                  <br />
                  <span className="text-slate-500">of every print.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  Track inventory value, cost per print, and weight usage with decimal precision.
                  Monitor energy costs calculated from printer wattage and duration. See material
                  breakdowns, usage trends, and spending patterns — all computed automatically.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-2">
                  {['Inventory Value', 'Cost Per Print', 'Energy Tracking', 'Material Breakdown'].map((pill) => (
                    <span
                      key={pill}
                      className="px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs tracking-wide"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURE: BAMBU CLOUD — centred hero callout                  */}
      {/* ============================================================ */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Reveal>
            <span className="text-xs tracking-[0.3em] uppercase text-emerald-400/60 block mb-4 text-center">Bambu Lab Integration</span>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl blur-[60px] opacity-50 group-hover:opacity-100 transition-all duration-700" />

              <div className="relative backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 md:p-14 text-center group-hover:border-white/[0.15] transition-all duration-500">
                {/* Decorative gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500/[0.08] via-transparent to-cyan-500/[0.08] pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-emerald-400 mb-8 mx-auto">
                    <Cloud className="w-8 h-8" />
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                    Your Bambu printer.
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      Automatically synced.
                    </span>
                  </h2>

                  <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
                    Connect directly to the Bambu Lab Cloud API. Spool auto-imports your complete
                    print history — print name, duration, material used, and weight consumed. No
                    manual logging needed. Everything syncs in the background.
                  </p>

                  {/* Printer pills */}
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {BAMBU_PRINTERS.map((printer) => (
                      <span
                        key={printer}
                        className="px-5 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-white text-sm font-medium"
                      >
                        {printer}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURE CARD GRID — 2x2                                      */}
      {/* ============================================================ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-emerald-400/60 block mb-4">Features</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Everything you need.
                <br />
                <span className="text-slate-500">Nothing you don't.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {FEATURE_CARDS.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.1}>
                <div className="group relative h-full">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700`} />
                  <div className="relative h-full backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 transition-all duration-500 group-hover:border-white/[0.15] group-hover:bg-white/[0.05]">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COMPACT FEATURE ROW — cost & print history                   */}
      {/* ============================================================ */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border-l-2 border-emerald-500/40">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Cost & Energy Tracking</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    True cost of printing. Electricity costs calculated from printer wattage and
                    duration. Price-per-gram breakdowns across all your materials.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.02] border-l-2 border-emerald-500/40">
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <History className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Print History</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Full print logging — what you printed, which spool, how much filament, duration,
                    and notes. Automatic for Bambu users. Quick manual entry for everyone else.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  SCREENSHOT SHOWCASE                                          */}
      {/* ============================================================ */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-emerald-400/60 block mb-4">Experience</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Designed with care.
                <br />
                <span className="text-slate-500">Built for makers.</span>
              </h2>
            </div>
          </Reveal>

          <div className="flex items-center justify-center gap-6 md:gap-10">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div
                  className={`relative ${
                    i === 1 ? 'w-56 md:w-72 z-10' : 'w-44 md:w-56 opacity-70'
                  } transition-all duration-500`}
                >
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.1] bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-2xl aspect-[9/19.5]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.06] border border-white/[0.08] mx-auto mb-4 flex items-center justify-center">
                          <svg className="w-8 h-8 text-emerald-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a2.25 2.25 0 002.25-2.25V5.25a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 003.75 21z" />
                          </svg>
                        </div>
                        <p className="text-slate-500 text-xs">Screenshot {i + 1}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                  </div>
                  {i === 1 && (
                    <div className="absolute -inset-8 bg-gradient-to-b from-emerald-500/10 to-transparent blur-[60px] -z-10" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <p className="text-center text-slate-500 text-sm mt-10">
              App screenshots coming soon
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/[0.05] via-transparent to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal>
            <h2
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
              style={{ textShadow: '0 0 80px rgba(16, 185, 129, 0.15)' }}
            >
              Start tracking today.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xl text-slate-400 max-w-lg mx-auto mb-12 leading-relaxed">
              Download Spool and take control of your filament collection.
              Free on the App Store.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://apps.apple.com/gb/app/spool/id6756892049"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-semibold text-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_80px_rgba(255,255,255,0.12)]"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-60 leading-tight">Download on the</div>
                  <div className="text-lg font-semibold leading-tight -mt-0.5">App Store</div>
                </div>
              </a>

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back to Lance Studio</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-xs tracking-[0.3em] uppercase text-slate-600 hover:text-slate-400 transition-colors">
            Lance Studio
          </Link>
          <div className="flex items-center gap-6">
            <a href="/privacy.html" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="mailto:hello@lance-studio.com" className="text-slate-600 text-xs hover:text-slate-400 transition-colors">
              Contact
            </a>
          </div>
          <p className="text-slate-700 text-xs">© 2026 Lance Studio</p>
        </div>
      </footer>
    </div>
  );
}
