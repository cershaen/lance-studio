import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, useSpring } from 'motion/react';
import AnimatedBackground from '../components/shared/AnimatedBackground';

/* ------------------------------------------------------------------ */
/*  Scroll-reveal wrapper – fades + slides children into view          */
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
/*  Feature section with sticky phone + scrolling text                 */
/* ------------------------------------------------------------------ */
const FEATURES = [
  {
    title: 'Track Every Spool',
    description: 'Log every spool in your collection with details like material, colour, weight, and brand. Always know exactly what you have.',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Monitor Usage',
    description: 'Track how much filament you use per print. Watch your inventory update in real time as you log each session.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Material Library',
    description: 'PLA, PETG, ABS, TPU and beyond. Organise your collection by material type and find the perfect filament for every project.',
    gradient: 'from-purple-500/20 to-violet-500/20',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
      </svg>
    ),
  },
  {
    title: 'Beautiful & Intuitive',
    description: 'Designed for makers who appreciate great software. A stunning interface that makes managing your filament collection a pleasure.',
    gradient: 'from-rose-500/20 to-orange-500/20',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

const STATS = [
  { value: '∞', label: 'Unlimited Spools' },
  { value: 'g', label: 'Gram-level Tracking' },
  { value: '0', label: 'Subscription Fees' },
];

/* ------------------------------------------------------------------ */
/*  Animated counter component                                         */
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
      <div className="text-5xl md:text-6xl font-bold text-white mb-2" style={{ textShadow: '0 0 40px rgba(16,185,129,0.2)' }}>
        {value}
      </div>
      <div className="text-sm text-slate-400 tracking-wide">{label}</div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main page                                                          */
/* ------------------------------------------------------------------ */
export default function SpoolPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  // Progress bar width
  const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = 'Spool Tracker - Track Your 3D Printing Filament';
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#0a0a0a]">
      <AnimatedBackground />

      {/* Fixed navbar */}
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
        {/* Scroll progress bar */}
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
          {/* Floating badge */}
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
            <span className="text-slate-400 text-xs tracking-widest uppercase">Available Now</span>
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
            Your entire filament collection, beautifully organised.
            Know what you have. Know what you need.
          </motion.p>

          {/* CTA Buttons */}
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

          {/* App icon */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 rounded-[3rem] blur-[80px]" />
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                <img
                  src="/spool-tracker-logo.png"
                  alt="Spool Tracker"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
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
      {/*  TAGLINE – Big scrolling text                                 */}
      {/* ============================================================ */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Every spool.{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Every gram.
              </span>
              <br />
              <span className="text-slate-500">Always in sync.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              Spool Tracker was built for makers who care about precision. No more guessing how much
              filament is left. No more failed prints from empty spools.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FEATURES – Scroll-reveal cards                               */}
      {/* ============================================================ */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <span className="text-xs tracking-[0.3em] uppercase text-emerald-400/60 block mb-4">Features</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Everything you need.
                <br />
                <span className="text-slate-500">Nothing you don't.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.1}>
                <div className="group relative h-full">
                  {/* Hover glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700`} />

                  <div className="relative h-full backdrop-blur-sm bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 transition-all duration-500 group-hover:border-white/[0.15] group-hover:bg-white/[0.05]">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
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
      {/*  SCREENSHOT SHOWCASE – placeholder for user's screenshots     */}
      {/* ============================================================ */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.3em] uppercase text-emerald-400/60 block mb-4">Experience</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Designed with care.
                <br />
                <span className="text-slate-500">Down to every pixel.</span>
              </h2>
            </div>
          </Reveal>

          {/* Screenshot placeholders – 3 phone mockups */}
          <div className="flex items-center justify-center gap-6 md:gap-10">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div
                  className={`relative ${
                    i === 1 ? 'w-56 md:w-72 z-10' : 'w-44 md:w-56 opacity-70'
                  } transition-all duration-500`}
                >
                  {/* Phone frame */}
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.1] bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-2xl aspect-[9/19.5]">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-10" />

                    {/* Screenshot placeholder */}
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

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
                  </div>

                  {/* Reflection glow */}
                  {i === 1 && (
                    <div className="absolute -inset-8 bg-gradient-to-b from-emerald-500/10 to-transparent blur-[60px] -z-10" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <p className="text-center text-slate-500 text-sm mt-10">
              Add your app screenshots to bring this section to life
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PARALLAX TEXT SECTION                                        */}
      {/* ============================================================ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal>
            <blockquote className="text-center">
              <p className="text-3xl md:text-5xl font-light text-white leading-relaxed italic">
                "Built by a maker,{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium not-italic">
                  for makers
                </span>
                "
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HORIZONTAL SCROLL FEATURES                                   */}
      {/* ============================================================ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Why Spool Tracker?
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Never Run Out',
                desc: 'Get a clear overview of your filament stock. Know exactly when it\'s time to reorder.',
                emoji: '📦',
              },
              {
                title: 'Stay Organised',
                desc: 'Sort by material, colour, brand, or weight. Find the right spool for any project instantly.',
                emoji: '🗂',
              },
              {
                title: 'Print with Confidence',
                desc: 'Track remaining weight so you never start a print you can\'t finish.',
                emoji: '✨',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <div className="group text-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-500">
                  <div className="text-4xl mb-6">{item.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
              Ready to track?
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-xl text-slate-400 max-w-lg mx-auto mb-12 leading-relaxed">
              Download Spool Tracker today and take control of your filament collection.
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
