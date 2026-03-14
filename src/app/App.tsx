import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from './components/shared/AnimatedBackground';

export default function App() {
  useEffect(() => {
    document.title = 'Lance Studio';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'Lance Studio creates innovative digital tools and tabletop gaming accessories.');
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <AnimatedBackground />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="text-white text-sm tracking-[0.25em] uppercase font-medium">Lance Studio</span>
            <div className="flex items-center gap-6">
              <Link
                to="/spool"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                Spool Tracker
              </Link>
              <a
                href="mailto:hello@lance-studio.com"
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-6 pt-32 pb-20 min-h-screen">
          <div className="max-w-5xl w-full text-center">
            {/* Brand */}
            <div className="animate-fade-in mb-8">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-12">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-slate-400 text-xs tracking-widest uppercase">Now Live on the App Store</span>
              </div>
            </div>

            <h1
              className="text-6xl md:text-7xl lg:text-[6.5rem] font-bold text-white mb-8 animate-fade-in tracking-tight leading-[0.95]"
              style={{ textShadow: '0 0 80px rgba(16, 185, 129, 0.15)' }}
            >
              Spool Tracker
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-14 animate-fade-in-up leading-relaxed font-light">
              The most beautiful way to manage your 3D printing filament inventory. Track every spool, every gram, every print.
            </p>

            {/* Two CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delayed-2">
              {/* App Store Button */}
              <a
                href="https://apps.apple.com/gb/app/spool/id6756892049"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-semibold text-base transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] opacity-60 leading-tight">Download on the</div>
                  <div className="text-base font-semibold leading-tight -mt-0.5">App Store</div>
                </div>
              </a>

              {/* Learn More Button */}
              <Link
                to="/spool"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/[0.06] text-white border border-white/[0.12] rounded-2xl font-medium text-base transition-all duration-500 hover:bg-white/[0.1] hover:border-white/[0.2] hover:scale-[1.03] backdrop-blur-md"
              >
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* App preview - logo */}
            <div className="mt-20 animate-fade-in-delayed-3">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-[2.5rem] blur-[60px]" />
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <img
                    src="/spool-tracker-logo.png"
                    alt="Spool Tracker"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Tabletop Gaming - Simplified */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-6 block">Also from Lance Studio</span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ textShadow: '0 0 40px rgba(16, 185, 129, 0.1)' }}
            >
              Tabletop Gaming Studio
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Custom 3D printed terrain tiles, dungeon pieces, and accessories for board gamers and RPG enthusiasts.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {['Custom Terrain', 'Game Pieces', 'Made to Order'].map((feature) => (
                <span
                  key={feature}
                  className="px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
            <a
              href="https://www.etsy.com/shop/your-shop-name"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-sm"
            >
              <span>Visit our Etsy Store</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Footer */}
        <footer className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <a
              href="mailto:hello@lance-studio.com"
              className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm inline-flex items-center gap-2 mb-8"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@lance-studio.com
            </a>
            <div className="mb-3">
              <span className="text-xs tracking-[0.3em] uppercase text-slate-600">Lance Studio</span>
            </div>
            <p className="text-slate-600 text-xs">
              © 2026 Lance Studio. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
