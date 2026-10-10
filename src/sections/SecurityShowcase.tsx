import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Play, Pause, ShieldCheck, Activity } from 'lucide-react';
import { Crosshair } from '../components/Crosshair';
import { sound } from '../components/AudioFeedback';
import { ShowcaseFX } from '../components/ShowcaseFX';

interface SecurityShowcaseProps {
  onOpenDemo: (tab?: 'scanner' | 'docs' | 'trial') => void;
}

const slideVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir * 40,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: -dir * 40,
    scale: 0.98,
  }),
};

export const SecurityShowcase: React.FC<SecurityShowcaseProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);

  const requestRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const accumulatedRef = useRef<number>(0);
  const progressBarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const DWELL_TIME = 3800; // Snappy 3.8s auto-cycle
  const isPaused = isHovered || isManuallyPaused;

  // Interactive Particle Constellation Engine for the Showcase Stage (matching Hero canvas physics)
  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const dpr = window.devicePixelRatio || 1;

    let width = stage.offsetWidth;
    let height = stage.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const handleResize = () => {
      if (!canvas || !stage) return;
      width = stage.offsetWidth;
      height = stage.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0.1 });

    observer.observe(stage);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }

    // Edge-biased coordinate generator: keeps the center artwork clean
    const getEdgeBiasedPos = () => {
      if (Math.random() < 0.82) {
        const edge = Math.floor(Math.random() * 4);
        if (edge === 0) return { x: Math.random() * width, y: Math.random() * (height * 0.22) }; // Top
        if (edge === 1) return { x: Math.random() * width, y: height * 0.78 + Math.random() * (height * 0.22) }; // Bottom
        if (edge === 2) return { x: Math.random() * (width * 0.22), y: Math.random() * height }; // Left
        return { x: width * 0.78 + Math.random() * (width * 0.22), y: Math.random() * height }; // Right
      }
      return { x: Math.random() * width, y: Math.random() * height };
    };

    const particles: Particle[] = Array.from({ length: 36 }, () => {
      const pos = getEdgeBiasedPos();
      return {
        x: pos.x,
        y: pos.y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.8 + 1.2,
        alpha: Math.random() * 0.08 + 0.14, // Quiet resting opacity
      };
    });

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= -20 && x <= rect.width + 20 && y >= -20 && y <= rect.height + 20) {
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

        const centerLeft = width * 0.32;
        const centerRight = width * 0.68;
        const centerTop = height * 0.25;
        const centerBottom = height * 0.75;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Proximity to mouse
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Particles brighten only within 160px of the cursor
          let currentAlpha = p.alpha;
          if (dist < 160) {
            const proximity = 1 - dist / 160;
            currentAlpha = p.alpha + (0.75 - p.alpha) * proximity;
          }

          // Dim particles if drifting directly over center artwork to keep it pristine
          const inCenter = p.x > centerLeft && p.x < centerRight && p.y > centerTop && p.y < centerBottom;
          if (inCenter && dist >= 160) {
            currentAlpha *= 0.25;
          }

          // Connect particles to each other ONLY when cursor is near (< 140px)
          // When cursor is away, zero stray lines are drawn (clean, no rendering debris)
          if (dist < 140) {
            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dx2 = mouseX - p2.x;
              const dy2 = mouseY - p2.y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

              if (dist2 < 140) {
                const pdx = p.x - p2.x;
                const pdy = p.y - p2.y;
                const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

                if (pdist < 75) {
                  const lineAlpha = 0.28 * (1 - pdist / 75) * (1 - Math.max(dist, dist2) / 140);
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.strokeStyle = `rgba(43, 102, 255, ${lineAlpha})`;
                  ctx.stroke();
                }
              }
            }

            // Laser beam connecting particle to cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.strokeStyle = `rgba(43, 102, 255, ${0.32 * (1 - dist / 140)})`;
            ctx.stroke();
          }

          // Ambient micro-square dot
          ctx.fillStyle = `rgba(43, 102, 255, ${currentAlpha})`;
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

  const tabs = [
    {
      num: '01',
      title: 'Zero-Trust Security',
      tag: 'IDENTITY & ACCESS VERIFICATION',
      status: 'VERIFIED · mTLS ACTIVE',
      headline: 'Zero-Trust Security Architecture',
      desc: 'Verify every user, machine, and request dynamically without perimeter trust assumptions. Enforce cryptographically verified device health and identity at every hop.',
      image: '/assets/showcase/clean/zero_trust.png',
      metric: '0 Implicit Trust • 100% Request Verification',
      spec: 'Protocol: mTLS v1.3 • FIDO2/WebAuthn Enforced',
    },
    {
      num: '02',
      title: 'Real-Time Monitoring',
      tag: 'CONTINUOUS TELEMETRY ENGINE',
      status: 'STREAMING · 12.4K EPS',
      headline: 'Real-Time Telemetry & Monitoring',
      desc: 'Continuous visibility across endpoints, networks, and cloud infrastructure. Protect sensitive business data with intelligent, always-on radar inspection.',
      image: '/assets/showcase/clean/monitoring.png',
      metric: 'Latency: <5ms • 3 Multi-Region Clusters',
      spec: 'Sampling: 100% Line Rate • Ingestion: 12.4K EPS',
    },
    {
      num: '03',
      title: 'Threat Detection',
      tag: 'AI ANOMALY DEFENSE',
      status: 'DEFENSE · 0-DAY MITIGATION',
      headline: 'Automated Threat Detection & Response',
      desc: 'Intercept zero-day exploits, credential stuffing, and unauthorized exfiltration in under 5ms with proactive automated perimeter defense walls.',
      image: '/assets/showcase/clean/threat.png',
      metric: '1,284 Threats Blocked • MTTD 4.8ms',
      spec: 'Neural Heuristics • Automated Tarpit Rules',
    },
    {
      num: '04',
      title: 'Data Encryption',
      tag: 'QUANTUM-RESILIENT CRYPTOGRAPHY',
      status: 'POST-QUANTUM RESILIENT',
      headline: 'End-to-End Quantum-Resilient Encryption',
      desc: 'Protect customer credentials and core enterprise pipelines with post-quantum resilient cryptographic algorithms and continuous automated key rotation.',
      image: '/assets/showcase/clean/encryption.png',
      metric: 'AES-256-GCM • Key Rotation: 24h',
      spec: 'NIST PQC Standards • HSM-Backed Key Custody',
    }
  ];

  // Navigate to target tab with explicit direction (forward or backward)
  const goToTab = useCallback((nextIndex: number, forcedDir?: 1 | -1) => {
    setDirection(() => {
      if (forcedDir !== undefined) return forcedDir;
      return nextIndex > activeTab ? 1 : -1;
    });
    setActiveTab(nextIndex);
    accumulatedRef.current = 0;
    lastTimeRef.current = null;

    // Reset progress bars
    progressBarRefs.current.forEach((bar) => {
      if (bar) bar.style.transform = 'scaleX(0)';
    });
  }, [activeTab]);

  const handleNext = useCallback(() => {
    sound.playClick(750);
    goToTab((activeTab + 1) % tabs.length, 1);
  }, [activeTab, goToTab, tabs.length]);

  const handlePrev = useCallback(() => {
    sound.playClick(650);
    goToTab((activeTab - 1 + tabs.length) % tabs.length, -1);
  }, [activeTab, goToTab, tabs.length]);

  // Keyboard arrow listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // High-performance rAF loop for smooth auto-advance with zero re-render lag
  useEffect(() => {
    accumulatedRef.current = 0;
    lastTimeRef.current = null;

    const animate = (time: number) => {
      if (document.hidden) {
        lastTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
        return;
      }

      if (lastTimeRef.current !== null && !isPaused) {
        const delta = time - lastTimeRef.current;
        accumulatedRef.current += delta;
        const progress = Math.min(accumulatedRef.current / DWELL_TIME, 1);

        // Update active progress bar directly on DOM node for 60fps performance
        const activeBar = progressBarRefs.current[activeTab];
        if (activeBar) {
          activeBar.style.transform = `scaleX(${progress})`;
        }

        if (accumulatedRef.current >= DWELL_TIME) {
          accumulatedRef.current = 0;
          if (activeBar) activeBar.style.transform = 'scaleX(0)';
          goToTab((activeTab + 1) % tabs.length, 1);
          return;
        }
      }

      lastTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [activeTab, isPaused, tabs.length, goToTab]);

  return (
    <section id="security-showcase" className="relative w-full bg-white border-b border-[#DCE3ED] py-14 sm:py-20 overflow-hidden">
      {/* Precision Blueprint Crosshairs */}
      <div className="absolute top-4 left-6 z-20">
        <Crosshair />
      </div>
      <div className="absolute top-4 right-6 z-20">
        <Crosshair />
      </div>
      <div className="absolute bottom-4 left-6 z-20">
        <Crosshair />
      </div>
      <div className="absolute bottom-4 right-6 z-20">
        <Crosshair />
      </div>

      {/* Container aligned with Behance Frame */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-10 border-b border-[#DCE3ED]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#2B66FF] font-mono-tech text-xs tracking-wider font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2B66FF] animate-pulse" />
              <span>CORE ARCHITECTURAL MODULES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-[#0F1115] leading-[1.12]">
              Security Built For Modern Enterprises
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#1A1F2B] font-normal leading-relaxed">
              We deliver intelligent cybersecurity solutions designed to protect teams with automated zero-trust infrastructure.
            </p>
          </div>
        </div>

        {/* Content Body: Tabs on Left, Constrained Showcase Stage on Right */}
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[330px_minmax(0,1fr)] gap-6 lg:gap-8 xl:gap-10 items-start py-8 sm:py-10"
        >
          
          {/* Left Column: Tab List + Enterprise Telemetry Card */}
          <div className="space-y-4 order-1 lg:order-1 min-w-0">
            {/* Module Tabs */}
            <div className="space-y-2.5">
              {tabs.map((tab, index) => {
                const isActive = activeTab === index;
                return (
                  <button
                    key={tab.num}
                    type="button"
                    onClick={() => {
                      sound.playClick(600 + index * 50);
                      goToTab(index);
                    }}
                    className={`w-full text-left p-3.5 sm:p-4 cursor-pointer transition-all rounded-lg border ${
                      isActive 
                        ? 'bg-[#F8FAFC] text-[#0F1115] border-[#2B66FF] shadow-xs' 
                        : 'bg-white text-[#64748B] border-[#E2E8F0] hover:text-[#0F1115] hover:bg-[#F8FAFC]/70 font-normal'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`font-mono-tech text-xs tracking-wider font-bold ${isActive ? 'text-[#2B66FF]' : 'text-[#94A3B8]'}`}>
                          {tab.num}
                        </span>
                        <span className={`font-sans text-sm sm:text-base tracking-tight ${isActive ? 'font-bold text-[#0F1115]' : 'font-medium'}`}>
                          {tab.title}
                        </span>
                      </div>

                      {isActive && (
                        <motion.div
                          layoutId="activeArrow"
                          className="text-[#2B66FF] flex items-center shrink-0"
                        >
                          <ArrowLeft size={16} />
                        </motion.div>
                      )}
                    </div>

                    {/* Active Tab Real-Time Ref-Driven Progress Bar */}
                    <div className={`mt-2.5 w-full bg-[#E2E8F0] h-[3px] rounded-full overflow-hidden ${isActive ? 'block' : 'hidden'}`}>
                      <div 
                        ref={(el) => {
                          progressBarRefs.current[index] = el;
                        }}
                        className="bg-[#2B66FF] h-full origin-left will-change-transform rounded-full"
                        style={{ transform: 'scaleX(0)' }}
                      />
                    </div>

                    {/* Sub-tag status */}
                    {isActive && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-mono-tech text-[#64748B] uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{tab.status}</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Architecture Telemetry & Play/Pause Controller (Fills vertical space with architectural density) */}
            <div className="p-4 bg-[#F8FAFC] border border-[#DCE3ED] rounded-lg space-y-3 font-mono-tech text-xs">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
                <div className="flex items-center gap-2 text-[#0F1115] font-semibold">
                  <Activity size={14} className="text-[#2B66FF]" />
                  <span>CORE TELEMETRY</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 rounded">
                  ONLINE
                </span>
              </div>

              <div className="space-y-1.5 text-[11px] text-[#64748B]">
                <div className="flex items-center justify-between">
                  <span>Cluster Health</span>
                  <span className="text-[#0F1115] font-semibold">3/3 Healthy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Engine Speed</span>
                  <span className="text-emerald-600 font-semibold">&lt; 4.8ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Architecture</span>
                  <span className="text-[#0F1115] font-semibold">FIPS 140-3 Ready</span>
                </div>
              </div>

              {/* Explicit Play/Pause Auto-cycle Controller Button */}
              <div className="pt-2 border-t border-[#E2E8F0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick(620);
                    setIsManuallyPaused(!isManuallyPaused);
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded text-[11px] font-semibold transition-colors ${
                    isManuallyPaused
                      ? 'bg-[#2B66FF] text-white'
                      : 'bg-white border border-[#DCE3ED] text-[#0F1115] hover:bg-[#F1F5F9]'
                  }`}
                  title={isManuallyPaused ? 'Resume auto-cycle' : 'Pause auto-cycle'}
                >
                  {isManuallyPaused ? <Play size={12} /> : <Pause size={12} />}
                  <span>{isManuallyPaused ? 'RESUME CYCLE' : 'PAUSE CYCLE'}</span>
                </button>

                <span className="text-[11px] text-[#94A3B8]">
                  {isPaused ? '⏸ Paused' : `▶ ${(DWELL_TIME / 1000).toFixed(1)}s`}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Bounded 3D Stage with Live Moving Illustration (strictly no horizontal overflow) */}
          <div className="order-2 lg:order-2 w-full min-w-0">
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#DCE3ED] shadow-md bg-white min-w-0">
              
              {/* HUD Top Bar with Bidirectional Navigation Chevrons */}
              <div className="px-5 sm:px-6 py-3.5 border-b border-[#DCE3ED] bg-[#F8FAFC] flex flex-wrap items-center justify-between gap-3 font-mono-tech text-xs sm:text-[13px]">
                <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>LIVE ACTIVE SIMULATION</span>
                  <span className="text-[#CBD5E1] hidden sm:inline">•</span>
                  <span className="text-[#64748B] hidden sm:inline">{tabs[activeTab].status}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 bg-white border border-[#DCE3ED] text-[#2B66FF] font-bold text-[11px] sm:text-xs rounded">
                    MODULE {tabs[activeTab].num} / 04
                  </span>

                  {/* Accessible Bidirectional Navigation Chevrons */}
                  <div className="flex items-center border border-[#DCE3ED] bg-white rounded overflow-hidden divide-x divide-[#DCE3ED] shadow-xs">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="p-2 hover:bg-[#F1F5F9] active:bg-[#E2E8F0] text-[#475569] hover:text-[#0F1115] transition-colors"
                      title="Previous Module (Upward / Backward)"
                      aria-label="Previous Module"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="p-2 hover:bg-[#F1F5F9] active:bg-[#E2E8F0] text-[#475569] hover:text-[#0F1115] transition-colors"
                      title="Next Module (Downward / Forward)"
                      aria-label="Next Module"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Stage (Bounded Responsive Height, No CSS Aspect Width Explosion) */}
              <div 
                ref={stageRef}
                className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] xl:h-[520px] bg-gradient-to-b from-[#F8FAFC] to-white flex items-center justify-center p-3 sm:p-6 overflow-hidden"
              >
                {/* Interactive Pointer Constellation Canvas (matching Hero interactive physics) */}
                <canvas 
                  ref={canvasRef} 
                  className="absolute inset-0 w-full h-full pointer-events-none z-10" 
                />
                
                {/* Precision corner ticks */}
                <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-[#2B66FF]/40 pointer-events-none" />
                <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-[#2B66FF]/40 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-[#2B66FF]/40 pointer-events-none" />
                <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-[#2B66FF]/40 pointer-events-none" />

                {/* Minimal blueprint dot grid & soft floor shadow */}
                <div className="absolute inset-0 bg-[radial-gradient(#2B66FF_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05] pointer-events-none" />
                <div className="absolute bottom-6 w-[70%] h-8 bg-[#2B66FF]/10 rounded-full blur-xl pointer-events-none" />

                {/* Swappable Normalized Artwork with Bidirectional Motion */}
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeTab}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full h-full flex items-center justify-center z-0"
                  >
                    <div className="relative h-full max-w-full aspect-[4/3] flex items-center justify-center">
                      {activeTab !== 1 && activeTab !== 2 ? (
                        <img 
                          src={tabs[activeTab].image} 
                          alt={tabs[activeTab].title}
                          className="w-full h-full object-contain select-none filter drop-shadow-sm"
                        />
                      ) : (
                        <div className="w-full h-full aspect-[4/3]" />
                      )}

                      {/* LIVE ACTIVE MOVING ILLUSTRATION OVERLAYS */}
                      <ShowcaseFX activeTab={activeTab} />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Docked Blueprint Telemetry Badge */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur border border-[#DCE3ED] px-3.5 py-2 font-mono-tech text-xs sm:text-[13px] text-[#0F1115] shadow-xs flex items-center gap-2.5 z-20 rounded-md">
                  <span className="w-2 h-2 bg-[#2B66FF] rounded-full animate-ping" />
                  <span className="font-semibold">{tabs[activeTab].metric}</span>
                </div>
              </div>

              {/* Card Footer with Details and Real Accessible CTA Button */}
              <div className="p-5 sm:p-7 border-t border-[#DCE3ED] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 bg-white">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2B66FF] font-semibold tracking-wider uppercase">
                    <ShieldCheck size={14} />
                    <span>{tabs[activeTab].tag}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl lg:text-[26px] font-bold font-sans text-[#0F1115] tracking-tight">
                    {tabs[activeTab].headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed max-w-2xl">
                    {tabs[activeTab].desc}
                  </p>
                  <div className="text-[11px] font-mono-tech text-[#94A3B8] pt-1">
                    {tabs[activeTab].spec}
                  </div>
                </div>

                {/* Real, Clean Accessible CTA Button */}
                <button
                  type="button"
                  onClick={() => {
                    sound.playClick(800);
                    onOpenDemo('scanner');
                  }}
                  className="self-start sm:self-center shrink-0 px-6 py-3.5 bg-[#2B66FF] hover:bg-[#1E52DB] text-white text-xs font-mono-tech tracking-wider uppercase rounded-none transition-all flex items-center gap-2.5 shadow-tech hover:shadow-blue-glow group"
                >
                  <span>INSPECT MODULE</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
