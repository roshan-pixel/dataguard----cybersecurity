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
  const sectionRef = useRef<HTMLElement | null>(null);

  // High-DPI interactive particle constellation engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const dpr = window.devicePixelRatio || 1;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', handleResize);

    // Pause rendering when hero is out of view
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }

    const particles: Particle[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      size: Math.random() * 2 + 1.2,
      alpha: Math.random() * 0.45 + 0.3,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= -40 && x <= rect.width + 40 && y >= -40 && y <= rect.height + 40) {
        mouseX = x;
        mouseY = y;
      } else {
        mouseX = -1000;
        mouseY = -1000;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // 1. Constellation links between neighboring particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const pdx = p.x - p2.x;
            const pdy = p.y - p2.y;
            const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
            if (pdist < 80) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(43, 102, 255, ${0.1 * (1 - pdist / 80)})`;
              ctx.stroke();
            }
          }

          // 2. Cursor magnetic laser line connections
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(43, 102, 255, ${0.3 * (1 - dist / 130)})`;
            ctx.stroke();
          }

          // 3. Digital dot particle
          ctx.fillStyle = `rgba(43, 102, 255, ${p.alpha})`;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="relative w-full bg-white border-b border-[#DCE3ED] overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20"
    >
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative min-h-[480px] sm:min-h-[540px] lg:min-h-[600px]">
          
          {/* Expanded 3D Halftone Mountain Mesh & Interactive Particle Canvas Filling the Grid in the Background of the Text */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-end z-0">
            <div className="relative w-full h-full flex items-center justify-center lg:justify-end">
              <img 
                src="/assets/hero_mountain_pure.png" 
                alt="" 
                aria-hidden="true"
                className="w-full lg:w-[82%] xl:w-[78%] h-full object-contain object-center lg:object-right select-none pointer-events-none drop-shadow-sm opacity-90 lg:opacity-100"
              />

              {/* Scrim gradient layer for pristine text contrast across the mountain */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-[58%] pointer-events-none" />

              {/* Interactive Canvas for dynamic particle constellation spanning the entire hero grid */}
              <canvas 
                ref={canvasRef} 
                aria-hidden="true"
                className="absolute inset-0 w-full h-full pointer-events-none"
              />
            </div>
          </div>

          {/* Left Column: Typography & CTAs (on top of background mountain & scrim) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 relative z-10 py-4">
            
            {/* Tag / Badge: Data Security Technical Chip */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/95 backdrop-blur-sm border border-[#DCE3ED] text-[#2B66FF] font-mono-tech text-xs tracking-wider font-semibold shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B66FF] animate-pulse" />
              <span>ZERO-TRUST ARCHITECTURE // v2.4</span>
            </div>

            {/* Main Headline with exact Behance typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-sans font-bold leading-[1.08] tracking-tight text-[#0F1115]">
              AI secure{' '}
              <span className="font-pixel text-[#2B66FF] tracking-tight inline-block cursor-default">
                access
              </span>{' '}
              to your data, anywhere, anytime
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-[#1A1F2B] max-w-xl leading-relaxed font-normal">
              Enable remote teams with secure access, strong identity checks, and safe tools to work from anywhere.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
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
                className="group px-6 py-3.5 bg-white hover:bg-[#F5F7FA] text-[#0F1115] text-xs font-mono-tech tracking-wider uppercase border border-[#0F1115]/80 hover:border-[#2B66FF] hover:text-[#2B66FF] rounded-none transition-all flex items-center gap-2.5"
              >
                <span>VIEW DOCS</span>
                <FileText size={15} className="text-[#0F1115] group-hover:text-[#2B66FF] transition-colors" />
              </button>
            </div>

            {/* Cybersecurity Trust Certification Strip */}
            <div className="pt-4 border-t border-[#DCE3ED]/70 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono-tech text-[#6B7280]">
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#2B66FF]" />
                <span>SOC 2 TYPE II</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#2B66FF]" />
                <span>ISO 27001</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#2B66FF]" />
                <span>GDPR COMPLIANT</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-emerald-700 font-semibold">mTLS ENFORCED</span>
              </div>
            </div>

          </div>

          {/* Right Column: floating architectural badge anchored over the mountain */}
          <div className="lg:col-span-5 relative w-full h-[120px] sm:h-[180px] lg:h-[500px] flex items-end justify-end pointer-events-none z-10">
            {/* Floating architectural security badge */}
            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-auto bg-white/95 backdrop-blur-md border border-[#DCE3ED] p-3.5 shadow-tech rounded-none text-xs font-mono-tech hidden sm:block mb-6 mr-2"
            >
              <div className="flex items-center gap-2 text-emerald-600 font-bold mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>PERIMETER SECURE</span>
              </div>
              <div className="text-[11px] text-[#6B7280] space-y-0.5">
                <div>Telemetry: mTLS v1.3 Active</div>
                <div>Clusters: 3/3 Healthy • Latency: 0.4ms</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
