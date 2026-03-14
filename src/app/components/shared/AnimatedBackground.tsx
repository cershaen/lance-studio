import { useState, useEffect } from 'react';

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let rafId: number;
    let lastMouseUpdate = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseUpdate < 50) return;
      lastMouseUpdate = now;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Base gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0d0d1a] to-[#0a0a0a]" />

      {/* Floating gradient orbs */}
      <div
        className="fixed w-[800px] h-[800px] rounded-full bg-gradient-to-r from-emerald-500/15 to-teal-500/15 blur-[150px] opacity-40 animate-float"
        style={{ top: '10%', left: '-5%', willChange: 'transform', transform: 'translateZ(0)' }}
      />
      <div
        className="fixed w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-[120px] opacity-30 animate-float-delayed"
        style={{ bottom: '10%', right: '-5%', willChange: 'transform', transform: 'translateZ(0)' }}
      />
      <div
        className="fixed w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/8 to-violet-500/8 blur-[100px] opacity-25 animate-float"
        style={{ top: '50%', left: '30%', willChange: 'transform', transform: 'translateZ(0)' }}
      />

      {/* Mouse follower - desktop only */}
      <div
        className="hidden md:block fixed w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="fixed inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Noise texture */}
      <div
        className="fixed inset-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}
