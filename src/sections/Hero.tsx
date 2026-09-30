import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { Crosshair } from '../components/Crosshair';
import { sound } from '../components/AudioFeedback';

interface HeroProps {
  onOpenDemo: (tab?: 'scanner' | 'docs' | 'trial') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle interactive particle wave overlay
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }

    const particles: Particle[] = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1.5,
      alpha: Math.random() * 0.5 + 0.3,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(43, 102, 255, ${0.2 * (1 - dist / 100)})`;
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative w-full bg-white border-b border-[#DCE3ED] overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20">
      {/* Precision grid crosshair markers */}
      <div className="absolute top-4 left-6 z-20">
        <Crosshair />
      </div>
      <div className="absolute bottom-4 left-6 z-20">
        <Crosshair />
      </div>
      <div className="absolute bottom-4 right-6 z-20">
        <Crosshair />
      </div>

      {/* Blueprint ledger markings on outer edges */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-8 blueprint-ledger-left border-r border-[#DCE3ED]/50 pointer-events-none" />
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-8 blueprint-ledger-right border-l border-[#DCE3ED]/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            
            {/* Tag / Badge: Data Security */}
            <div className="inline-flex items-center gap-2 text-[#4F85FF] font-mono-tech text-xs tracking-wider font-semibold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" strokeDasharray="2 3" />
                <path d="M12 5v2M12 17v2M5 12H3M21 12h-2" />
              </svg>
              <span>Data Security</span>
            </div>

            {/* Main Headline with exact Behance typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-sans font-bold leading-[1.08] tracking-tight text-[#0F1115]">
              AI secure{' '}
              <span className="font-pixel text-[#4F85FF] tracking-tight inline-block hover:scale-105 transition-transform cursor-default">
                access
              </span>{' '}
              to your data, anywhere,{' '}
              <span className="font-pixel text-[#4F85FF] tracking-tight inline-block hover:scale-105 transition-transform cursor-default">
                anytime
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-[#1A1F2B] max-w-xl leading-relaxed font-normal">
              Enable remote teams with secure access, strong identity checks, and safe tools to work from anywhere.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary button */}
              <button
                onClick={() => {
                  sound.playClick(800);
                  onOpenDemo('scanner');
                }}
                className="group px-7 py-3.5 bg-[#2B66FF] hover:bg-[#1E52DB] text-white text-xs font-mono-tech tracking-wider uppercase rounded-none transition-all flex items-center gap-2.5 shadow-tech hover:shadow-blue-glow"
              >
                <span>GET STARTED</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary button */}
              <button
                onClick={() => {
                  sound.playClick(600);
                  onOpenDemo('docs');
                }}
                className="group px-6 py-3.5 bg-white hover:bg-[#F5F7FA] text-[#0F1115] text-xs font-mono-tech tracking-wider uppercase border border-black rounded-none transition-all flex items-center gap-2.5"
              >
                <span>VIEW DOCS</span>
                <FileText size={15} className="text-[#0F1115]" />
              </button>
            </div>

          </div>

          {/* Right Column: Generative Halftone 3D Mountain Mesh & Particles */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[420px] flex items-center justify-center">
            
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src="/assets/hero_mountain_pure.png" 
                alt="Dataguard 3D Halftone Topographical Mountain Security Mesh" 
                className="w-full h-full object-contain object-right drop-shadow-sm select-none pointer-events-none"
              />

              {/* Interactive Canvas for dynamic particle overlay */}
              <canvas 
                ref={canvasRef} 
                className="absolute inset-0 w-full h-full pointer-events-auto"
              />

              {/* Floating interactive security badge */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 left-2 sm:left-4 bg-white/95 backdrop-blur-md border border-[#DCE3ED] p-3 shadow-tech rounded-lg text-xs font-mono-tech hidden sm:block"
              >
                <div className="flex items-center gap-2 text-emerald-600 font-bold mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>PERIMETER SECURE</span>
                </div>
                <div className="text-[11px] text-[#6B7280]">
                  Latency: 0.4ms • Zero Packet Loss
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
