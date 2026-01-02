import { useState, useEffect } from 'react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Set page title
    document.title = 'Lance Studio - Creative Digital Solutions';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Lance Studio creates innovative digital tools and tabletop gaming accessories. Discover Spool Tracker and our custom 3D printed terrain.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Lance Studio creates innovative digital tools and tabletop gaming accessories. Discover Spool Tracker and our custom 3D printed terrain.';
      document.head.appendChild(meta);
    }

    let rafId: number;
    let lastMouseUpdate = 0;
    let lastScrollUpdate = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseUpdate < 50) return; // Throttle to ~20fps
      lastMouseUpdate = now;
      
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollUpdate < 50) return; // Throttle to ~20fps
      lastScrollUpdate = now;
      
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0f1e]">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      
      {/* All 4 floating gradient orbs with GPU acceleration */}
      <div 
        className="fixed w-[800px] h-[800px] rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-[120px] opacity-50 animate-gradient-shift"
        style={{
          top: `${20 - scrollY * 0.05}%`,
          left: '5%',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />
      <div 
        className="fixed w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/15 blur-[100px] opacity-40 animate-gradient-shift-delayed"
        style={{
          bottom: `${10 + scrollY * 0.03}%`,
          right: '10%',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />
      <div 
        className="fixed w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-[80px] opacity-30 animate-gradient-shift"
        style={{
          top: `${50 + scrollY * 0.02}%`,
          right: '15%',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />
      <div 
        className="fixed w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/12 to-blue-500/12 blur-[70px] opacity-35 animate-gradient-shift-delayed"
        style={{
          bottom: `${30 - scrollY * 0.04}%`,
          left: '20%',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Mouse follower - HIDDEN ON MOBILE */}
      <div 
        className="hidden md:block fixed w-[400px] h-[400px] rounded-full bg-emerald-500/5 blur-[80px] pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="fixed inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section - Floating Text */}
        <section className="flex items-center justify-center px-5 py-20 md:py-28 pb-6">
          <div className="max-w-[800px] w-full text-center">
            {/* Logo/Brand - ENLARGED */}
            <div className="mb-10 animate-fade-in">
              <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-[0.3em] uppercase text-white font-bold mb-6"
                style={{
                  textShadow: '0 0 60px rgba(16, 185, 129, 0.4), 0 0 100px rgba(16, 185, 129, 0.2)',
                }}
              >
                Lance Studio
              </h1>
              <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent" />
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 border border-white/[0.2] backdrop-blur-md mb-8 animate-fade-in-delayed shadow-lg shadow-black/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-lg shadow-emerald-500/50" />
              </span>
              <span className="text-white text-sm tracking-wide font-medium">System Operational</span>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="pt-6 pb-12 px-5">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm tracking-[0.3em] uppercase text-emerald-400/70">What We Build</span>
                <div className="h-px w-full mt-2 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
              </div>
              <h3 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                style={{
                  textShadow: '0 0 40px rgba(16, 185, 129, 0.2)',
                }}
              >
                Our Products
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
                Discover our suite of tools and services designed to enhance your creative workflow.
              </p>
            </div>

            {/* Product Cards Grid */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Spool Tracker Card */}
              <div className="relative group perspective-1000">
                {/* Glow effect */}
                <div className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                
                <div 
                  className="relative backdrop-blur-sm bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-white/[0.01] border border-white/[0.15] rounded-[2.5rem] p-10 shadow-2xl transform-gpu transition-all duration-700 group-hover:scale-[1.03] group-hover:border-white/[0.25] h-full"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(255, 255, 255, 0.02), inset 0 -20px 40px rgba(139, 92, 246, 0.03)',
                  }}
                >
                  {/* Enhanced gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent rounded-[2.5rem] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/[0.06] via-blue-500/[0.03] to-transparent rounded-[2.5rem] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500/[0.02] to-transparent rounded-[2.5rem] pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                  
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:animate-shimmer" style={{ transform: 'skewX(-20deg)' }} />
                  </div>
                  
                  {/* Inner glowing orbs - REDUCED */}
                  <div className="absolute top-5 right-5 w-40 h-40 bg-purple-500/10 rounded-full blur-[70px] group-hover:bg-purple-500/15 transition-all duration-700" />
                  <div className="absolute bottom-5 left-5 w-36 h-36 bg-blue-500/10 rounded-full blur-[70px] group-hover:bg-blue-500/15 transition-all duration-700" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-500/8 rounded-full blur-[60px] group-hover:bg-pink-500/12 transition-all duration-700" />
                  
                  <div className="relative z-10">
                    {/* App Logo with glow */}
                    <div className="flex justify-center mb-8 transform group-hover:scale-105 transition-transform duration-700">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-700" />
                        <div className="relative w-36 h-36 rounded-[2rem] overflow-hidden shadow-2xl shadow-purple-500/30 ring-1 ring-white/20 backdrop-blur-sm">
                          <img 
                            src="/spool-tracker-logo.png" 
                            alt="Spool Tracker Logo" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* App Info */}
                    <h4 className="text-3xl font-bold text-white mb-4 text-center" style={{ filter: 'blur(0px)' }}>
                      Spool Tracker
                    </h4>
                    
                    <p className="text-slate-200 mb-8 text-center leading-relaxed" style={{ filter: 'blur(0px)' }}>
                      Manage your 3D printing filament inventory with precision. Track spool weight, usage, and materials—all in one beautiful app.
                    </p>

                    {/* Beta Badge */}
                    <div className="flex justify-center mb-8">
                      <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/20 border border-purple-400/40 backdrop-blur-md group-hover:bg-purple-500/30 transition-all duration-500 shadow-lg shadow-purple-500/20" style={{ filter: 'blur(0px)' }}>
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400" />
                        </span>
                        <span className="text-purple-200 text-sm tracking-wide font-medium">Beta Testing</span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="space-y-4" style={{ filter: 'blur(0px)' }}>
                      <a 
                        href="https://forms.gle/1AWyXvcyt9PuFSGKA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full relative group/btn overflow-hidden rounded-2xl"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl group-hover/btn:blur-2xl transition-all duration-500" />
                        <div className="relative px-6 py-5 bg-gradient-to-r from-blue-500/25 to-purple-500/25 border border-blue-400/40 backdrop-blur-md group-hover/btn:from-blue-500/35 group-hover/btn:to-purple-500/35 group-hover/btn:border-blue-400/60 transition-all duration-500 rounded-2xl shadow-lg">
                          <div className="flex items-center justify-center gap-3">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <div className="text-left flex-1">
                              <div className="text-xs text-slate-300">Request Beta Access</div>
                              <div className="font-semibold text-white">Sign Up Form</div>
                            </div>
                            <svg 
                              className="w-5 h-5 text-white transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </a>

                      <div className="text-center text-slate-400 text-sm py-2">
                        <span className="px-4 py-1 rounded-full bg-black/30 border border-white/[0.1] backdrop-blur-sm">
                          Limited beta spots available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabletop Gaming Store Card */}
              <div className="relative group perspective-1000">
                {/* Glow effect */}
                <div className="absolute -inset-10 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-green-500/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                
                <div 
                  className="relative backdrop-blur-sm bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-white/[0.01] border border-white/[0.15] rounded-[2.5rem] p-10 shadow-2xl transform-gpu transition-all duration-700 group-hover:scale-[1.03] group-hover:border-white/[0.25] h-full overflow-hidden"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(255, 255, 255, 0.02), inset 0 -20px 40px rgba(139, 92, 246, 0.03)',
                  }}
                >
                  {/* Enhanced gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent rounded-[2.5rem] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-green-500/[0.06] via-teal-500/[0.03] to-transparent rounded-[2.5rem] pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/[0.02] to-transparent rounded-[2.5rem] pointer-events-none opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                  
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:animate-shimmer" style={{ transform: 'skewX(-20deg)' }} />
                  </div>
                  
                  {/* Inner glowing orbs - REDUCED */}
                  <div className="absolute top-5 right-5 w-40 h-40 bg-emerald-500/10 rounded-full blur-[70px] group-hover:bg-emerald-500/15 transition-all duration-700" />
                  <div className="absolute bottom-5 left-5 w-36 h-36 bg-teal-500/10 rounded-full blur-[70px] group-hover:bg-teal-500/15 transition-all duration-700" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-green-500/8 rounded-full blur-[60px] group-hover:bg-green-500/12 transition-all duration-700" />
                  
                  {/* Decorative floating shapes */}
                  <div className="absolute top-20 left-10 w-16 h-16 border-2 border-emerald-400/20 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-1000" />
                  <div className="absolute bottom-24 right-12 w-12 h-12 border-2 border-teal-400/20 rounded-lg -rotate-12 group-hover:-rotate-45 transition-transform duration-1000" />
                  <div className="absolute top-1/2 right-16 w-8 h-8 border-2 border-green-400/20 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon grid - representing board game tiles */}
                    <div className="flex justify-center mb-8 transform group-hover:scale-105 transition-transform duration-700">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-green-500/30 rounded-[2rem] blur-xl group-hover:blur-2xl transition-all duration-700" />
                        <div className="relative w-36 h-36 rounded-[2rem] bg-gradient-to-br from-emerald-500/25 via-teal-500/25 to-green-500/25 border border-emerald-400/40 shadow-2xl shadow-emerald-500/20 backdrop-blur-md group-hover:border-emerald-400/60 transition-all duration-700 p-6">
                          {/* Grid of tiles representing tabletop gaming */}
                          <div className="grid grid-cols-3 gap-2 h-full">
                            {[...Array(9)].map((_, i) => (
                              <div 
                                key={i}
                                className="bg-emerald-400/30 rounded-md border border-emerald-300/40 group-hover:bg-emerald-400/50 transition-all duration-500"
                                style={{
                                  transitionDelay: `${i * 30}ms`,
                                  transform: `translateY(${i % 2 === 0 ? '0' : '2px'})`,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Store Info */}
                    <h4 className="text-3xl font-bold text-white mb-4 text-center">
                      Tabletop Gaming Studio
                    </h4>
                    
                    <p className="text-slate-200 mb-6 text-center leading-relaxed">
                      Custom 3D printed terrain tiles, dungeon pieces, and tabletop accessories for board gamers and RPG enthusiasts.
                    </p>

                    {/* Visual features showcase */}
                    <div className="flex-1 flex flex-col justify-center mb-8 space-y-4">
                      <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-transparent border-l-2 border-emerald-400/50 group-hover:from-emerald-500/20 transition-all duration-500">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 border border-emerald-400/30">
                          <svg className="w-5 h-5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-white font-medium text-sm">Custom Terrain</div>
                          <div className="text-slate-400 text-xs">Modular dungeon tiles</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-gradient-to-r from-teal-500/10 to-transparent border-l-2 border-teal-400/50 group-hover:from-teal-500/20 transition-all duration-500" style={{ transitionDelay: '50ms' }}>
                        <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0 border border-teal-400/30">
                          <svg className="w-5 h-5 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-white font-medium text-sm">Game Pieces</div>
                          <div className="text-slate-400 text-xs">Tokens & accessories</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-2 border-green-400/50 group-hover:from-green-500/20 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
                        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0 border border-green-400/30">
                          <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                          </svg>
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-white font-medium text-sm">Made to Order</div>
                          <div className="text-slate-400 text-xs">Your custom designs</div>
                        </div>
                      </div>
                    </div>

                    {/* Button */}
                    <a 
                      href="https://www.etsy.com/shop/your-shop-name"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full relative group/btn overflow-hidden rounded-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-green-500/30 blur-xl group-hover/btn:blur-2xl transition-all duration-500" />
                      <div className="relative px-6 py-5 bg-gradient-to-r from-emerald-500/25 to-green-500/25 border border-emerald-400/40 backdrop-blur-md group-hover/btn:from-emerald-500/35 group-hover/btn:to-green-500/35 group-hover/btn:border-emerald-400/60 transition-all duration-500 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-center gap-3">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16.489 5.84c.27-.002.49.217.49.486 0 .269-.22.488-.49.486-.269.002-.488-.217-.488-.486 0-.269.219-.488.488-.486zm-5.37 0c.27-.002.49.217.49.486 0 .269-.22.488-.49.486-.269.002-.488-.217-.488-.486 0-.269.219-.488.488-.486zm-5.37 0c.27-.002.49.217.49.486 0 .269-.22.488-.49.486-.269.002-.488-.217-.488-.486 0-.269.219-.488.488-.486zM3.78 12.39c0-3.51 2.84-6.35 6.35-6.35s6.35 2.84 6.35 6.35-2.84 6.35-6.35 6.35-6.35-2.84-6.35-6.35zm0-6.35c0-.54.44-.98.98-.98h10.74c.54 0 .98.44.98.98s-.44.98-.98.98H4.76c-.54 0-.98-.44-.98-.98zm13.09 6.35c0-3.51 2.84-6.35 6.35-6.35.54 0 .98.44.98.98s-.44.98-.98.98c-2.43 0-4.39 1.96-4.39 4.39s1.96 4.39 4.39 4.39c.54 0 .98.44.98.98s-.44.98-.98.98c-3.51 0-6.35-2.84-6.35-6.35z"/>
                          </svg>
                          <div className="text-left flex-1">
                            <div className="text-xs text-slate-300">Visit our</div>
                            <div className="font-semibold text-white">Etsy Store</div>
                          </div>
                          <svg 
                            className="w-5 h-5 text-white transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Email Card */}
        <section className="pb-20 px-5">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center">
              <div className="relative group w-full max-w-lg">
                {/* Glow effect - reflects card colors above */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/15 via-emerald-500/15 to-purple-500/15 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                
                <div 
                  className="relative backdrop-blur-sm bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-white/[0.01] border border-white/[0.15] rounded-2xl px-6 py-4 shadow-2xl transform-gpu transition-all duration-700 group-hover:scale-[1.02] group-hover:border-white/[0.25]"
                  style={{
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 0 40px rgba(255, 255, 255, 0.02)',
                    filter: 'blur(0px)'
                  }}
                >
                  {/* Light gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent rounded-2xl pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.03] via-emerald-500/[0.05] to-purple-500/[0.03] rounded-2xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/[0.04] via-blue-500/[0.02] to-purple-500/[0.02] rounded-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-700" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent group-hover:animate-shimmer" style={{ transform: 'skewX(-20deg)' }} />
                  </div>
                  
                  {/* Inner subtle orbs - reflect card colors */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/8 rounded-full blur-[40px] group-hover:bg-blue-500/12 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-purple-500/8 rounded-full blur-[40px] group-hover:bg-purple-500/12 transition-all duration-700" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-500/6 rounded-full blur-[40px] group-hover:bg-emerald-500/10 transition-all duration-700" />
                  
                  <div className="relative z-10 text-center">
                    <a 
                      href="mailto:hello@lance-studio.com"
                      className="text-emerald-400 hover:text-emerald-300 no-underline transition-colors duration-300 inline-flex items-center gap-2 group/link"
                      style={{ 
                        fontSize: '1rem',
                        filter: 'blur(0px)'
                      }}
                    >
                      <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="tracking-wide">hello@lance-studio.com</span>
                      <svg 
                        className="w-3.5 h-3.5 opacity-70 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-5 border-t border-white/[0.05] backdrop-blur-sm">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-4">
              <span className="text-sm tracking-[0.3em] uppercase text-slate-600">Lance Studio</span>
            </div>
            <p className="text-slate-500 text-sm mb-2">
              © 2026 Lance Studio. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs">
              Bridging digital logic and physical form.
            </p>
          </div>
        </footer>
      </div>

      {/* Enhanced floating particles with geometric shapes - DOUBLED FOR MORE VISUAL RICHNESS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Small floating circles - DOUBLED FROM 20 TO 40 */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full animate-particle opacity-30"
            style={{
              left: `${5 + (i * 2.5) % 95}%`,
              top: `${10 + (i * 7) % 80}%`,
              width: `${3 + (i % 4)}px`,
              height: `${3 + (i % 4)}px`,
              background: i % 3 === 0 ? 'rgba(16, 185, 129, 0.3)' : i % 3 === 1 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(168, 85, 247, 0.3)',
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${5 + (i % 5)}s`,
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          />
        ))}
        
        {/* Geometric squares - DOUBLED FROM 8 TO 16 */}
        {[...Array(16)].map((_, i) => (
          <div
            key={`square-${i}`}
            className="absolute animate-float opacity-20"
            style={{
              left: `${15 + (i * 5.5) % 85}%`,
              top: `${20 + (i * 12) % 70}%`,
              width: `${8 + (i % 4) * 2}px`,
              height: `${8 + (i % 4) * 2}px`,
              border: `1px solid ${i % 2 === 0 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
              transform: `rotate(${i * 15}deg) translateZ(0)`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + (i % 3)}s`,
              willChange: 'transform',
            }}
          />
        ))}
        
        {/* Triangles - DOUBLED FROM 6 TO 12 */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`triangle-${i}`}
            className="absolute animate-float opacity-15"
            style={{
              left: `${25 + (i * 7) % 70}%`,
              top: `${15 + (i * 14) % 75}%`,
              width: 0,
              height: 0,
              borderLeft: `${6 + (i % 3) * 2}px solid transparent`,
              borderRight: `${6 + (i % 3) * 2}px solid transparent`,
              borderBottom: `${10 + (i % 3) * 3}px solid ${i % 2 === 0 ? 'rgba(168, 85, 247, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
              transform: `rotate(${i * 30}deg) translateZ(0)`,
              animationDelay: `${i * 0.45}s`,
              animationDuration: `${10 + (i % 4)}s`,
              willChange: 'transform',
            }}
          />
        ))}
        
        {/* Hexagons - DOUBLED FROM 5 TO 10 */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`hexagon-${i}`}
            className="absolute animate-particle opacity-25"
            style={{
              left: `${10 + (i * 9) % 80}%`,
              top: `${30 + (i * 13) % 60}%`,
              width: `${12 + (i % 3) * 2}px`,
              height: `${14 + (i % 3) * 2}px`,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: i % 3 === 0 ? 'rgba(59, 130, 246, 0.25)' : i % 3 === 1 ? 'rgba(16, 185, 129, 0.25)' : 'rgba(168, 85, 247, 0.25)',
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${7 + (i % 3)}s`,
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          />
        ))}
        
        {/* Plus symbols - DOUBLED FROM 7 TO 14 */}
        {[...Array(14)].map((_, i) => (
          <div
            key={`plus-${i}`}
            className="absolute animate-float opacity-25"
            style={{
              left: `${12 + (i * 6.5) % 85}%`,
              top: `${18 + (i * 6) % 80}%`,
              fontSize: `${16 + (i % 4) * 4}px`,
              color: i % 2 === 0 ? 'rgba(16, 185, 129, 0.4)' : 'rgba(59, 130, 246, 0.4)',
              animationDelay: `${i * 0.35}s`,
              animationDuration: `${7 + (i % 3)}s`,
              fontWeight: '200',
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          >
            +
          </div>
        ))}
      </div>
    </div>
  );
}