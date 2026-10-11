import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Activity, Eye } from 'lucide-react';
import { sound } from './AudioFeedback';

interface FirewallFXProps {
  onOpenDemo?: (tab?: 'scanner' | 'docs' | 'trial') => void;
}

export const FirewallFX: React.FC<FirewallFXProps> = ({ onOpenDemo }) => {
  // 3D Isometric Brick courses (Running bond staggered geometry)
  const brickCourses = [
    // Course 0 (Top)
    [
      { x: 330, y: 155, w: 76, h: 28 },
      { x: 414, y: 155, w: 76, h: 28 },
      { x: 498, y: 155, w: 76, h: 28 },
      { x: 582, y: 155, w: 76, h: 28 },
    ],
    // Course 1
    [
      { x: 288, y: 191, w: 76, h: 28 },
      { x: 372, y: 191, w: 76, h: 28 },
      { x: 456, y: 191, w: 76, h: 28 },
      { x: 540, y: 191, w: 76, h: 28 },
      { x: 624, y: 191, w: 76, h: 28 },
    ],
    // Course 2
    [
      { x: 330, y: 227, w: 76, h: 28 },
      { x: 414, y: 227, w: 76, h: 28 },
      { x: 498, y: 227, w: 76, h: 28 },
      { x: 582, y: 227, w: 76, h: 28 },
    ],
    // Course 3 (Bottom)
    [
      { x: 288, y: 263, w: 76, h: 28 },
      { x: 372, y: 263, w: 76, h: 28 },
      { x: 456, y: 263, w: 76, h: 28 },
      { x: 540, y: 263, w: 76, h: 28 },
      { x: 624, y: 263, w: 76, h: 28 },
    ],
  ];

  const pillTags = [
    { label: 'AI Monitoring', icon: Activity },
    { label: 'Threat Analysis', icon: Eye },
    { label: 'Risk Prevention', icon: ShieldCheck },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* 3D Isometric Single Master Animation Canvas */}
      <div className="relative w-full h-[320px] sm:h-[380px] md:h-[410px] flex items-center justify-center overflow-hidden bg-[#FBFDFF] rounded-xl border border-[#E2E8F0] shadow-inner">
        <svg
          viewBox="0 0 960 520"
          className="w-full h-full object-contain select-none"
        >
          <defs>
            {/* Soft Ground Floor Shadow */}
            <filter id="fwFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
            </filter>

            {/* High-Legibility Floating Card Shadow */}
            <filter id="fwCardShadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#0F172A" floodOpacity="0.08" />
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
            </filter>

            {/* Shield Volumetric Shadow */}
            <filter id="fwShieldShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#1E3A8A" floodOpacity="0.28" />
            </filter>

            {/* Cyan/Blue High-Tech Glow */}
            <filter id="fwGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Deflection Spark Glow */}
            <filter id="fwSparkGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Glassmorphic Panel Gradient */}
            <linearGradient id="fwPanelGlass" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.94" />
            </linearGradient>

            {/* 3D Shield Gradients */}
            <linearGradient id="fwShieldTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#EFF6FF" />
            </linearGradient>
            <linearGradient id="fwShieldLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#F0F7FF" />
              <stop offset="100%" stopColor="#DBEAFE" />
            </linearGradient>
            <linearGradient id="fwShieldRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DBEAFE" />
              <stop offset="50%" stopColor="#BFDBFE" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>

            {/* 3D Brick Facet Gradients */}
            <linearGradient id="fwBrickTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2EEFF" />
            </linearGradient>
            <linearGradient id="fwBrickFront" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#EFF4FA" />
            </linearGradient>
            <linearGradient id="fwBrickSide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Threat Laser Beam: Red Attack to Blue Containment */}
            <linearGradient id="fwLaserThreat" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#EF4444" stopOpacity="0.8" />
              <stop offset="90%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>

            {/* Dot Blueprint Background Grid */}
            <pattern id="fwDotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="14" cy="14" r="1.1" fill="#2B66FF" opacity="0.08" />
            </pattern>

            {/* Signature Behance Halftone Mortar Pattern */}
            <pattern id="fwHalftone" width="7" height="7" patternUnits="userSpaceOnUse">
              <circle cx="3.5" cy="3.5" r="1.1" fill="#2B66FF" opacity="0.22" />
            </pattern>
          </defs>

          {/* Background Grid */}
          <rect x="20" y="20" width="920" height="480" fill="url(#fwDotGrid)" />

          {/* Floor Contact Shadows */}
          <ellipse cx="480" cy="425" rx="280" ry="36" fill="#1E3A8A" opacity="0.18" filter="url(#fwFloorShadow)" />
          <ellipse cx="480" cy="425" rx="170" ry="22" fill="#2B66FF" opacity="0.22" filter="url(#fwFloorShadow)" />

          {/* Isometric Ground Alignment Rails */}
          <line x1="140" y1="320" x2="480" y2="425" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />
          <line x1="480" y1="425" x2="840" y2="320" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />

          {/* =========================================================================
              CENTER STAGE: 3D ISOMETRIC BRICK FIREWALL
              ========================================================================= */}
          <g transform="translate(480, 270)">
            <g transform="translate(-480, -270)">
              {/* Wall Base Shadow */}
              <ellipse cx="490" cy="335" rx="220" ry="25" fill="#0F172A" opacity="0.24" filter="url(#fwFloorShadow)" />

              {/* 3D Extruded Running Bond Bricks */}
              {brickCourses.map((course, rowIdx) =>
                course.map((brick, bIdx) => {
                  const skewOffset = rowIdx * 14;
                  const bx = brick.x + skewOffset;
                  const by = brick.y + rowIdx * 12;
                  const depth = 22;

                  return (
                    <g key={`fw-brick-${rowIdx}-${bIdx}`}>
                      {/* Brick Front Face with Halftone Texture */}
                      <polygon
                        points={`${bx},${by} ${bx + brick.w},${by - 12} ${bx + brick.w},${by + brick.h - 12} ${bx},${by + brick.h}`}
                        fill="url(#fwBrickFront)"
                        stroke="#2B66FF"
                        strokeWidth="1.6"
                        strokeOpacity="0.45"
                      />
                      <polygon
                        points={`${bx},${by} ${bx + brick.w},${by - 12} ${bx + brick.w},${by + brick.h - 12} ${bx},${by + brick.h}`}
                        fill="url(#fwHalftone)"
                        opacity="0.35"
                      />

                      {/* Brick Top Face (Isometric Extrusion) */}
                      <polygon
                        points={`${bx},${by} ${bx + depth},${by - depth} ${bx + brick.w + depth},${by - 12 - depth} ${bx + brick.w},${by - 12}`}
                        fill="url(#fwBrickTop)"
                        stroke="#2B66FF"
                        strokeWidth="1.4"
                        strokeOpacity="0.55"
                      />

                      {/* Brick Right Face (Dimensional Shading) */}
                      <polygon
                        points={`${bx + brick.w},${by - 12} ${bx + brick.w + depth},${by - 12 - depth} ${bx + brick.w + depth},${by + brick.h - 12 - depth} ${bx + brick.w},${by + brick.h - 12}`}
                        fill="url(#fwBrickSide)"
                        stroke="#2B66FF"
                        strokeWidth="1.4"
                        strokeOpacity="0.45"
                      />

                      {/* Specular Glint Highlight on Top Edge */}
                      <line
                        x1={bx + depth}
                        y1={by - depth}
                        x2={bx + brick.w + depth}
                        y2={by - 12 - depth}
                        stroke="#FFFFFF"
                        strokeWidth="1.6"
                        opacity="0.85"
                      />
                    </g>
                  );
                })
              )}
            </g>

            {/* --- INCOMING THREAT ATTACK TRAJECTORIES (4 Rays Intercepted at Shield) --- */}
            <g transform="translate(-480, -270)">
              {[
                { x1: 130, y1: 220, x2: 435, y2: 215, dur: 1.0, delay: 0 },
                { x1: 150, y1: 275, x2: 438, y2: 235, dur: 1.15, delay: 0.2 },
                { x1: 175, y1: 330, x2: 442, y2: 255, dur: 0.95, delay: 0.4 },
                { x1: 200, y1: 385, x2: 448, y2: 270, dur: 1.25, delay: 0.1 },
              ].map((ray, idx) => (
                <g key={`threat-ray-${idx}`}>
                  {/* Laser Trajectory Beam */}
                  <line
                    x1={ray.x1}
                    y1={ray.y1}
                    x2={ray.x2}
                    y2={ray.y2}
                    stroke="url(#fwLaserThreat)"
                    strokeWidth="2.8"
                    strokeDasharray="6 4"
                    opacity="0.9"
                  />
                  {/* Origin Threat Node */}
                  <circle cx={ray.x1} cy={ray.y1} r="4.5" fill="#EF4444" />
                  <circle cx={ray.x1} cy={ray.y1} r="2.0" fill="#FFFFFF" />

                  {/* Traveling High-Speed Malicious Packet */}
                  <motion.circle
                    cx={ray.x1}
                    cy={ray.y1}
                    r="5.0"
                    fill="#EF4444"
                    filter="url(#fwGlow)"
                    animate={{ cx: [ray.x1, ray.x2], cy: [ray.y1, ray.y2], opacity: [1, 0.35] }}
                    transition={{ duration: ray.dur, repeat: Infinity, delay: ray.delay, ease: 'easeIn' }}
                  />
                  <motion.circle
                    cx={ray.x1}
                    cy={ray.y1}
                    r="2.2"
                    fill="#FFFFFF"
                    animate={{ cx: [ray.x1, ray.x2], cy: [ray.y1, ray.y2], opacity: [1, 0.35] }}
                    transition={{ duration: ray.dur, repeat: Infinity, delay: ray.delay, ease: 'easeIn' }}
                  />
                </g>
              ))}
            </g>

            {/* --- CENTRAL HERO DEFENSIVE SHIELD --- */}
            <g transform="translate(-15, -45) scale(1.22)" filter="url(#fwShieldShadow)">
              {/* Floor Shadow */}
              <ellipse cx="0" cy="80" rx="36" ry="10" fill="#1E3A8A" opacity="0.32" filter="url(#fwFloorShadow)" />

              {/* Deflection Shockwave Energy Ring */}
              <motion.path
                d="M -42,-12 Q -56,32 -42,72"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="3.6"
                filter="url(#fwSparkGlow)"
                animate={{ opacity: [0.35, 1, 0.35], strokeWidth: [2.5, 4.6, 2.5] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Deflection Kinetic Sparks */}
              <g transform="translate(-38, 28)">
                <motion.circle
                  cx="0"
                  cy="0"
                  r="7"
                  fill="#38BDF8"
                  filter="url(#fwGlow)"
                  animate={{ scale: [1, 1.8, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                />
                <circle cx="0" cy="0" r="2.8" fill="#FFFFFF" />
                <motion.line
                  x1="0"
                  y1="0"
                  x2="-14"
                  y2="-12"
                  stroke="#38BDF8"
                  strokeWidth="1.8"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
                <motion.line
                  x1="0"
                  y1="0"
                  x2="-14"
                  y2="10"
                  stroke="#38BDF8"
                  strokeWidth="1.8"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                />
              </g>

              {/* 3D Shield Geometry */}
              {/* Top Bevel */}
              <polygon
                points="-32,-5 0,-20 32,-5 0,9"
                fill="url(#fwShieldTop)"
                stroke="#2B66FF"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              {/* Left Beveled Facet */}
              <polygon
                points="-32,-5 0,9 0,72 -32,46"
                fill="url(#fwShieldLeft)"
                stroke="#2B66FF"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              {/* Right Beveled Facet */}
              <polygon
                points="0,9 32,-5 32,46 0,72"
                fill="url(#fwShieldRight)"
                stroke="#2B66FF"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />

              {/* Center Defense Checkmark Crest */}
              <circle cx="0" cy="32" r="17" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="2.0" />
              <circle cx="0" cy="32" r="13" fill="#ECFDF5" />
              <path
                d="M -7,32 L -2,37 L 7,26"
                fill="none"
                stroke="#10B981"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Specular Highlight along Left Crest Ridge */}
              <line x1="-26" y1="-3" x2="0" y2="9" stroke="#FFFFFF" strokeWidth="2.6" opacity="0.9" strokeLinecap="round" />
            </g>
          </g>

          {/* =========================================================================
              HIGH-LEGIBILITY FLOATING TELEMETRY CARDS
              ========================================================================= */}

          {/* Left Card: Threat Interception Active */}
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <g transform="translate(45, 55)" filter="url(#fwCardShadow)">
              <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#fwPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
              {/* Red Threat Alert Header Strip */}
              <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill="#EF4444" />

              {/* Category Pill */}
              <g transform="translate(14, 24)">
                <rect x="0" y="0" width="148" height="20" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
                <circle cx="10" cy="10" r="3.5" fill="#EF4444" />
                <text x="18" y="14" fontSize="10.5" fill="#DC2626" fontWeight="800" fontFamily="system-ui, sans-serif">
                  AI THREAT DETECTION
                </text>
              </g>

              {/* Hero Metric */}
              <text x="14" y="70" fontSize="18" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                99.9% Accuracy
              </text>

              {/* Plain-Language Subtitle */}
              <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                Multi-vector attack streams blocked
              </text>

              {/* Divider and status */}
              <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
              <rect x="14" y="110" width="145" height="17" rx="3" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
              <text x="20" y="122" fontSize="10" fill="#64748B" fontWeight="700" fontFamily="monospace">
                ACTIVE DEFENSE // LIVE
              </text>
            </g>
          </motion.g>

          {/* Right Card: Defense Ledger / Zero Latency */}
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
          >
            <g transform="translate(665, 55)" filter="url(#fwCardShadow)">
              <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#fwPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
              {/* Cobalt Defense Header Strip */}
              <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill="#2B66FF" />

              {/* Category Pill */}
              <g transform="translate(14, 24)">
                <rect x="0" y="0" width="145" height="20" rx="10" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                <circle cx="10" cy="10" r="3.5" fill="#2B66FF" />
                <text x="18" y="14" fontSize="10.5" fill="#1D4ED8" fontWeight="800" fontFamily="system-ui, sans-serif">
                  PERIMETER INTEGRITY
                </text>
              </g>

              {/* Primary Metric */}
              <text x="14" y="70" fontSize="18" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                0ms Breach Window
              </text>

              {/* Subtitle */}
              <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                Zero-Trust Firewall: 100% Secure
              </text>

              {/* Divider and status */}
              <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
              <rect x="14" y="110" width="150" height="17" rx="3" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
              <text x="20" y="122" fontSize="10" fill="#1D4ED8" fontWeight="700" fontFamily="monospace">
                AUTONOMOUS SHIELD
              </text>
            </g>
          </motion.g>

          {/* Top Center Status Pill */}
          <g transform="translate(325, 20)">
            <rect x="0" y="0" width="310" height="32" rx="7" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="1.8" filter="url(#fwCardShadow)" />
            <circle cx="18" cy="16" r="4.5" fill="#2B66FF" />
            <text x="30" y="21" fontSize="11.5" fill="#0F172A" fontWeight="800" fontFamily="monospace">
              REAL-TIME THREAT INTERCEPTION
            </text>
          </g>
        </svg>
      </div>

      {/* Bottom Behance Pill Badges & Arrow Action Button */}
      <div className="mt-5 pt-4 border-t border-[#DCE3ED] flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-2.5">
          {pillTags.map((pill, idx) => {
            const Icon = pill.icon;
            return (
              <div
                key={idx}
                className="px-4 py-2 rounded-full text-xs font-mono-tech bg-[#F5F7FA] text-[#0F1115] border border-[#DCE3ED] flex items-center gap-2 shadow-2xs select-none"
              >
                <Icon size={13} className="text-[#2B66FF]" />
                <span className="font-semibold">{pill.label}</span>
              </div>
            );
          })}
        </div>

        {/* Signature Square Arrow Action Button matching Behance */}
        <button
          onClick={() => {
            sound.playClick(700);
            onOpenDemo?.('trial');
          }}
          className="w-10 h-10 bg-[#2B66FF] hover:bg-[#1E52DB] text-white rounded-lg flex items-center justify-center transition-transform hover:scale-105 cursor-pointer shadow-sm flex-shrink-0"
          title="Explore AI Threat Detection"
          aria-label="Explore AI Threat Detection"
        >
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
};
