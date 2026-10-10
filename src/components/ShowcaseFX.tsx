import React from 'react';
import { motion } from 'framer-motion';

/**
 * =========================================================================
 * ZERO-TRUST MAGNIFYING GLASS LENS ANIMATION CONFIGURATION
 * =========================================================================
 * Variables exposed for fine-tuning alignment, angle, and grid style:
 * - cx, cy: Center of the magnifying glass lens in 1200x900 coordinate space
 * - rx, ry: Semi-major and semi-minor radii of the inner lens aperture
 * - rotation: Isometric tilt angle of the magnifying glass (degrees)
 * - dotRadius: Radius of halftone dots (~3.4px diameter)
 * - gridStep: Grid pitch/spacing between dots (px)
 * - loopDuration: Full loop cycle duration in seconds
 */
export const LENS_CONFIG = {
  cx: 677.5,
  cy: 338.0,
  rx: 90.0,
  ry: 44.0,
  rotation: -3.0,
  dotRadius: 1.7,
  gridStep: 8,
  color: '#2B66FF',
  loopDuration: 2.8,
};

interface LensDotColumn {
  x: number;
  delayIndex: number;
  dots: { y: number }[];
}

const generateLensColumns = (): LensDotColumn[] => {
  const { rx, ry, gridStep } = LENS_CONFIG;
  const cols: LensDotColumn[] = [];
  const maxK = Math.floor(rx / gridStep);
  const maxM = Math.floor(ry / gridStep);
  let colIndex = 0;

  for (let k = -maxK; k <= maxK; k++) {
    const x = k * gridStep;
    const dots: { y: number }[] = [];

    for (let m = -maxM; m <= maxM; m++) {
      const y = m * gridStep;
      // Precision ellipse boundary constraint accounting for dot radius clearance
      if (Math.pow(x / rx, 2) + Math.pow(y / ry, 2) <= 0.94) {
        dots.push({ y });
      }
    }

    if (dots.length > 0) {
      // Deterministic staggered phase delay pattern
      const delayIndex = (colIndex * 7) % 11;
      cols.push({ x, delayIndex, dots });
      colIndex++;
    }
  }

  return cols;
};

// Generate CSS Keyframes for GPU-accelerated 60fps compositor animation
const generateLensKeyframesCSS = (): string => {
  const total = LENS_CONFIG.loopDuration;
  const dropDistance = LENS_CONFIG.ry + 24;
  let css = `
    @media (prefers-reduced-motion: reduce) {
      .lens-col-drop {
        animation: none !important;
        transform: translateY(0px) !important;
        opacity: 0.95 !important;
      }
    }
  `;

  for (let k = 0; k < 11; k++) {
    const delaySec = 0.04 * k;
    const dropDur = 0.38;
    const settleDur = 0.08;
    const tStart = delaySec;
    const tLand = tStart + dropDur;
    const tSettle = tLand + settleDur;

    const pStart = ((tStart / total) * 100).toFixed(2);
    const pLand = ((tLand / total) * 100).toFixed(2);
    const pSettle = ((tSettle / total) * 100).toFixed(2);
    const pHoldEnd = ((2.15 / total) * 100).toFixed(2);
    const pFadeEnd = ((2.48 / total) * 100).toFixed(2);
    const pReset = ((2.65 / total) * 100).toFixed(2);

    css += `
      @keyframes lensDropCol_${k} {
        0% { transform: translateY(-${dropDistance}px); opacity: 0; }
        ${pStart}% { transform: translateY(-${dropDistance}px); opacity: 0; animation-timing-function: cubic-bezier(0.42, 0, 1, 1); }
        ${pLand}% { transform: translateY(1.5px); opacity: 1; animation-timing-function: cubic-bezier(0.2, 0.8, 0.4, 1); }
        ${pSettle}% { transform: translateY(0px); opacity: 1; }
        ${pHoldEnd}% { transform: translateY(0px); opacity: 1; animation-timing-function: ease-out; }
        ${pFadeEnd}% { transform: translateY(0px); opacity: 0; }
        ${pReset}% { transform: translateY(-${dropDistance}px); opacity: 0; }
        100% { transform: translateY(-${dropDistance}px); opacity: 0; }
      }
      .lens-col-drop-${k} {
        animation: lensDropCol_${k} ${total}s infinite;
        will-change: transform, opacity;
      }
    `;
  }
  return css;
};

const LENS_COLUMNS = generateLensColumns();
const LENS_KEYFRAMES_CSS = generateLensKeyframesCSS();

interface ShowcaseFXProps {
  activeTab: number;
}

export const ShowcaseFX: React.FC<ShowcaseFXProps> = ({ activeTab }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Tab 01: Zero-Trust Cryptographic Shield with Magnifying Glass Lens Inspection */}
      {activeTab === 0 && (
        <svg 
          viewBox="0 0 1200 900" 
          className="w-full h-full object-contain"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Embedded GPU keyframe stylesheet */}
            <style>{LENS_KEYFRAMES_CSS}</style>

            {/* Cobalt-tinted contact shadow blur filter */}
            <filter id="floorCobaltBlur" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
            </filter>

            {/* Strict ClipPath confining all dots strictly to the interior glass aperture */}
            <clipPath id="lensInnerClip" clipPathUnits="userSpaceOnUse">
              <ellipse
                cx={LENS_CONFIG.cx}
                cy={LENS_CONFIG.cy}
                rx={LENS_CONFIG.rx}
                ry={LENS_CONFIG.ry}
                transform={`rotate(${LENS_CONFIG.rotation} ${LENS_CONFIG.cx} ${LENS_CONFIG.cy})`}
              />
            </clipPath>
          </defs>

          {/* Clean cobalt-tinted contact shadow on the floor plane beneath the base platform */}
          <ellipse 
            cx="440" 
            cy="650" 
            rx="200" 
            ry="40" 
            fill="rgba(43, 102, 255, 0.10)" 
            filter="url(#floorCobaltBlur)" 
          />

          {/* Dotted Isometric Drop Animation strictly clipped inside the magnifying glass lens */}
          <g clipPath="url(#lensInnerClip)">
            <g transform={`translate(${LENS_CONFIG.cx}, ${LENS_CONFIG.cy}) rotate(${LENS_CONFIG.rotation})`}>
              {LENS_COLUMNS.map((col, idx) => (
                <g key={idx} transform={`translate(${col.x}, 0)`}>
                  <g className={`lens-col-drop lens-col-drop-${col.delayIndex}`}>
                    {col.dots.map((dot, dIdx) => (
                      <circle
                        key={dIdx}
                        cx="0"
                        cy={dot.y}
                        r={LENS_CONFIG.dotRadius}
                        fill={LENS_CONFIG.color}
                      />
                    ))}
                  </g>
                </g>
              ))}
            </g>
          </g>
        </svg>
      )}

      {/* Tab 02: Real-Time Radar / Sonar Telemetry Interface Animation (Built 100% From Scratch) */}
      {activeTab === 1 && (
        <svg 
          viewBox="0 0 1200 900" 
          className="w-full h-full object-contain"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Luminous Radar Sweep Radial Gradient */}
            <radialGradient id="radarSweep3D" cx="0" cy="0" r="310" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.88" />
              <stop offset="25%" stopColor="#2B66FF" stopOpacity="0.55" />
              <stop offset="65%" stopColor="#2B66FF" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#2B66FF" stopOpacity="0" />
            </radialGradient>

            {/* 3D Pedestal Cylinder Metallic Gradient */}
            <linearGradient id="pedestalCylinderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E2E8F0" stopOpacity="0.35" />
              <stop offset="20%" stopColor="#F1F5F9" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.90" />
              <stop offset="80%" stopColor="#EFF6FF" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#DBEAFE" stopOpacity="0.45" />
            </linearGradient>

            {/* Holographic UI Glass Gradient */}
            <linearGradient id="panelGlassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.95)" />
              <stop offset="100%" stopColor="rgba(239, 246, 255, 0.85)" />
            </linearGradient>

            {/* Waveform Gradient Fill */}
            <linearGradient id="waveformAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#2B66FF" stopOpacity="0.0" />
            </linearGradient>

            {/* Shield Front Gradient */}
            <linearGradient id="shieldFrontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F8FAFC" />
            </linearGradient>

            {/* Subtle Blueprint Dot Grid Pattern */}
            <pattern id="radarGridPattern" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1" fill="#2B66FF" opacity="0.10" />
            </pattern>

            {/* Alert Beacon Glow Filter */}
            <filter id="alertGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Radar Sweep Leading Edge Glow Filter */}
            <filter id="sweepGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Dish Drop Shadow */}
            <filter id="dishDropShadow" x="-25%" y="-25%" width="150%" height="150%">
              <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#2B66FF" floodOpacity="0.14" />
            </filter>

            {/* Soft Floor Shadow Blur Filter */}
            <filter id="radarFloorGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
            </filter>
          </defs>

          {/* Background Blueprint Micro Dot Grid */}
          <rect width="1200" height="900" fill="url(#radarGridPattern)" opacity="0.8" />

          {/* Precision Blueprint Corner Markers */}
          <g stroke="#CBD5E1" strokeWidth="1.5" fill="none" opacity="0.7">
            <path d="M 60 90 L 60 60 L 90 60" />
            <path d="M 1140 90 L 1140 60 L 1110 60" />
            <path d="M 60 810 L 60 840 L 90 840" />
            <path d="M 1140 810 L 1140 840 L 1110 840" />
          </g>

          {/* Main Visual Scene scaled for prominent heroic presence */}
          <g transform="translate(600, 440) scale(1.18) translate(-580, -450)">
            {/* Soft Grounding Floor Plane Contact Shadows */}
            <ellipse 
              cx="580" 
              cy="680" 
            rx="400" 
            ry="55" 
            fill="rgba(43, 102, 255, 0.12)" 
            filter="url(#radarFloorGlow)" 
          />
          <ellipse 
            cx="580" 
            cy="665" 
            rx="330" 
            ry="36" 
            fill="rgba(15, 23, 42, 0.08)" 
            filter="url(#radarFloorGlow)" 
          />

          {/* =========================================================================
              ISOMETRIC 3D RADAR PEDESTAL & CONCENTRIC DISH (Centered at 580, 450)
              ========================================================================= */}
          <g transform="translate(580, 450) rotate(-3)" filter="url(#dishDropShadow)">
            <g transform="scale(1, 0.50)">

              {/* 3D Cylindrical Pedestal Skirt & Front Depth Wall */}
              <path
                d="M -340 0 L -340 80 A 340 340 0 0 0 340 80 L 340 0 A 340 340 0 0 1 -340 0 Z"
                fill="url(#pedestalCylinderGrad)"
                stroke="#2B66FF"
                strokeWidth="1.6"
                opacity="0.85"
              />

              {/* Vertical 3D Cylinder Seam Ribs showing curved perspective depth */}
              {[15, 35, 55, 75, 90, 105, 125, 145, 165].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const x = 340 * Math.cos(rad);
                const y0 = 340 * Math.sin(rad);
                return (
                  <line
                    key={`rib-${i}`}
                    x1={x}
                    y1={y0}
                    x2={x}
                    y2={y0 + 80}
                    stroke="#2B66FF"
                    strokeWidth="1.2"
                    strokeDasharray="3 4"
                    opacity="0.32"
                  />
                );
              })}

              {/* Pedestal Bottom Base Rim (Solid baseline + dense micro-dots) */}
              <path
                d="M -340 80 A 340 340 0 0 0 340 80"
                fill="none"
                stroke="#2B66FF"
                strokeWidth="2.4"
                opacity="0.6"
              />
              <path
                d="M -340 80 A 340 340 0 0 0 340 80"
                fill="none"
                stroke="#2B66FF"
                strokeWidth="3.2"
                strokeDasharray="2.5 3"
                opacity="0.9"
              />

              {/* Outer Stepped Pedestal Lips */}
              <circle cx="0" cy="0" r="340" fill="none" stroke="#2B66FF" strokeWidth="2.0" opacity="0.5" />
              <circle cx="0" cy="0" r="340" fill="none" stroke="#2B66FF" strokeWidth="3.0" strokeDasharray="3 3" opacity="0.9" />

              <circle cx="0" cy="0" r="325" fill="none" stroke="#2B66FF" strokeWidth="1.6" opacity="0.45" />
              <circle cx="0" cy="0" r="325" fill="none" stroke="#2B66FF" strokeWidth="2.6" strokeDasharray="2 3" opacity="0.8" />

              {/* Outer Dish Perimeter Rim Boundary (r = 310) */}
              <circle cx="0" cy="0" r="310" fill="rgba(240, 246, 255, 0.45)" stroke="#2B66FF" strokeWidth="2.4" opacity="0.75" />
              <circle cx="0" cy="0" r="310" fill="none" stroke="#2B66FF" strokeWidth="3.4" strokeDasharray="2.5 2.5" opacity="0.95" />
              <circle cx="0" cy="0" r="310" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeDasharray="1.5 2.5" strokeDashoffset="1.2" opacity="0.85" />

              {/* Cardinal Telemetry Axes (X and Y Crosshairs within dish, neatly terminated) */}
              <line x1="-310" y1="0" x2="310" y2="0" stroke="#2B66FF" strokeWidth="1.4" strokeDasharray="4 6" opacity="0.45" />
              <line x1="0" y1="-310" x2="0" y2="310" stroke="#2B66FF" strokeWidth="1.4" strokeDasharray="4 6" opacity="0.45" />

              {/* Diagonal 45° Guidelines */}
              <line x1="-219" y1="-219" x2="219" y2="219" stroke="#2B66FF" strokeWidth="1.0" strokeDasharray="2 6" opacity="0.25" />
              <line x1="-219" y1="219" x2="219" y2="-219" stroke="#2B66FF" strokeWidth="1.0" strokeDasharray="2 6" opacity="0.25" />

              {/* Cardinal Perimeter Orientation Markers */}
              <text x="0" y="-322" fontSize="12" fill="#2B66FF" opacity="0.8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">000° // N</text>
              <text x="322" y="4" fontSize="12" fill="#2B66FF" opacity="0.8" fontFamily="monospace" textAnchor="start" fontWeight="bold">090° // E</text>
              <text x="0" y="334" fontSize="12" fill="#2B66FF" opacity="0.8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">180° // S</text>
              <text x="-322" y="4" fontSize="12" fill="#2B66FF" opacity="0.8" fontFamily="monospace" textAnchor="end" fontWeight="bold">270° // W</text>

              {/* Complete, 100% Continuous Concentric Radar Rings (r = 65, 130, 195, 260) */}
              {[65, 130, 195, 260].map((r, i) => (
                <g key={`ring-${i}`}>
                  {/* Solid structural base stroke eliminating any edge dissolution */}
                  <circle 
                    cx="0" 
                    cy="0" 
                    r={r} 
                    fill="none" 
                    stroke="#2B66FF" 
                    strokeWidth="1.8"  
                    opacity={0.45 + i * 0.12} 
                  />
                  {/* Dense primary uniform dot circle */}
                  <circle 
                    cx="0" 
                    cy="0" 
                    r={r} 
                    fill="none" 
                    stroke="#2B66FF" 
                    strokeWidth="3.2"  
                    strokeDasharray="2.5 2.5" 
                    opacity="0.95" 
                  />
                  {/* Interleaved micro-dots on outer rings for maximum unbroken circle clarity */}
                  {r >= 130 && (
                    <circle 
                      cx="0" 
                      cy="0" 
                      r={r} 
                      fill="none" 
                      stroke="#38BDF8" 
                      strokeWidth="2.4"  
                      strokeDasharray="2 3" 
                      strokeDashoffset="1.2"
                      opacity="0.85" 
                    />
                  )}
                </g>
              ))}

              {/* Monospace Range Distance Tags along 45° diagonal axis */}
              {[
                { r: 65, label: '25KM' },
                { r: 130, label: '50KM' },
                { r: 195, label: '75KM' },
                { r: 260, label: '100KM' },
              ].map((item, idx) => (
                <text
                  key={`range-${idx}`}
                  x={item.r * 0.707 + 6}
                  y={item.r * 0.707 - 4}
                  fontSize="10"
                  fill="#2B66FF"
                  opacity="0.75"
                  fontFamily="monospace"
                  fontWeight="600"
                >
                  {item.label}
                </text>
              ))}

              {/* Smooth Continuous Elliptical Orbital Data Pulses */}
              <motion.circle
                cx="0"
                cy="0"
                r="130"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="3.6"
                strokeDasharray="50 160"
                animate={{ strokeDashoffset: [210, 0] }}
                transition={{ duration: 4.6, repeat: Infinity, ease: 'linear' }}
                opacity="0.9"
              />
              <motion.circle
                cx="0"
                cy="0"
                r="195"
                fill="none"
                stroke="#2B66FF"
                strokeWidth="3.6"
                strokeDasharray="70 240"
                animate={{ strokeDashoffset: [0, 310] }}
                transition={{ duration: 5.4, repeat: Infinity, ease: 'linear' }}
                opacity="0.85"
              />
              <motion.circle
                cx="0"
                cy="0"
                r="260"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="3.2"
                strokeDasharray="85 320"
                animate={{ strokeDashoffset: [405, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: 'linear' }}
                opacity="0.8"
              />

              {/* 360° Rotating Radar Sweep Cone with luminous radial gradient, electric cyan scanline, white laser core */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'linear' }}
              >
                {/* 60° sweep wedge sector */}
                <path 
                  d="M 0 0 L 310 0 A 310 310 0 0 1 155 268.5 Z" 
                  fill="url(#radarSweep3D)" 
                  filter="url(#sweepGlow)" 
                  opacity="0.95" 
                />
                {/* Arc highlight along outer rim */}
                <path 
                  d="M 310 0 A 310 310 0 0 1 155 268.5" 
                  fill="none" 
                  stroke="#60A5FA" 
                  strokeWidth="2.8" 
                  opacity="0.85" 
                />
                {/* Electric sky-blue leading edge scanline */}
                <line x1="0" y1="0" x2="310" y2="0" stroke="#38BDF8" strokeWidth="4.0" opacity="1" />
                {/* Crisp white laser core */}
                <line x1="0" y1="0" x2="310" y2="0" stroke="#FFFFFF" strokeWidth="1.6" opacity="0.95" />
                {/* Trailing edge */}
                <line x1="0" y1="0" x2="155" y2="268.5" stroke="#2B66FF" strokeWidth="1.6" opacity="0.55" />
              </motion.g>

              {/* Central Radar Emitter Core */}
              <circle cx="0" cy="0" r="18" fill="#2B66FF" opacity="0.9" />
              <circle cx="0" cy="0" r="10" fill="#38BDF8" />
              <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
              <motion.circle 
                cx="0" 
                cy="0" 
                r="26" 
                fill="none" 
                stroke="#38BDF8" 
                strokeWidth="1.8"
                animate={{ scale: [1, 1.8, 1], opacity: [0.85, 0.15, 0.85] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Target Detection Pings with live telemetry tags */}
              {[
                { x: -100, y: 175, color: '#F59E0B', label: 'ALERT // ANOMALY', delay: 0.2 },
                { x: 165, y: -80, color: '#10B981', label: 'NODE-01 // HEALTHY', delay: 1.8 },
                { x: -155, y: -100, color: '#38BDF8', label: 'GATEWAY // 99.8%', delay: 2.6 },
                { x: 150, y: 145, color: '#6366F1', label: 'STREAM // SECURE', delay: 1.0 },
              ].map((blip, i) => (
                <g key={`blip-${i}`} transform={`translate(${blip.x}, ${blip.y})`}>
                  <motion.circle
                    r="6.5"
                    fill={blip.color}
                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.35, 0.9] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: blip.delay }}
                  />
                  <motion.circle
                    r="14"
                    fill="none"
                    stroke={blip.color}
                    strokeWidth="1.8"
                    initial={{ r: 8, opacity: 0.9 }}
                    animate={{ r: 28, opacity: 0 }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: blip.delay, ease: 'easeOut' }}
                  />
                  {/* Anchor tick to tag */}
                  <line x1="8" y1="-2" x2="16" y2="-8" stroke={blip.color} strokeWidth="1.2" opacity="0.6" />
                  <text 
                    x="20" 
                    y="-5" 
                    fontSize="11" 
                    fill={blip.color} 
                    opacity="0.9" 
                    fontFamily="monospace"
                    fontWeight="600"
                  >
                    {blip.label}
                  </text>
                </g>
              ))}

            </g>
          </g>

          {/* =========================================================================
              FLOATING HOLOGRAPHIC UI PANELS ANCHORED ABOVE THE RADAR
              ========================================================================= */}
          {/* Panel 1: Left Holographic Telemetry Panel (Waveform / Signal Monitor) */}
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Projection Anchor Beam down to the dish surface */}
            <line 
              x1="285" 
              y1="360" 
              x2="380" 
              y2="420" 
              stroke="#2B66FF" 
              strokeWidth="1.4" 
              strokeDasharray="3 4" 
              opacity="0.45" 
            />
            <ellipse cx="380" cy="420" rx="10" ry="5" fill="none" stroke="#2B66FF" strokeWidth="1.4" opacity="0.6" />

            {/* Trapezoidal Glass Panel Body */}
            <polygon
              points="220,220 350,180 350,320 220,360"
              fill="url(#panelGlassGrad)"
              stroke="#2B66FF"
              strokeWidth="1.8"
              strokeDasharray="5 3"
              opacity="0.85"
            />
            {/* Inner solid high-tech border */}
            <polygon
              points="226,226 344,190 344,314 226,350"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.2"
              opacity="0.75"
            />

            {/* Header Bar */}
            <circle cx="242" cy="234" r="4" fill="#F59E0B" />
            <text x="254" y="237" fontSize="10" fill="#1E40AF" fontWeight="bold" fontFamily="monospace">
              SIGNAL TELEMETRY
            </text>
            <line x1="234" y1="246" x2="338" y2="214" stroke="#2B66FF" strokeWidth="1" opacity="0.3" />

            {/* Horizontal Grid lines inside panel */}
            <line x1="234" y1="278" x2="338" y2="246" stroke="#2B66FF" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.2" />
            <line x1="234" y1="310" x2="338" y2="278" stroke="#2B66FF" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.2" />

            {/* Waveform area fill */}
            <path
              d="M 236 325 Q 255 275, 275 300 T 305 265 T 338 285 L 338 305 L 236 335 Z"
              fill="url(#waveformAreaGrad)"
            />

            {/* Live Streaming Signal Waveform */}
            <motion.path
              d="M 236 325 Q 255 275, 275 300 T 305 265 T 338 285"
              fill="none"
              stroke="#2B66FF"
              strokeWidth="2.8"
              strokeLinecap="round"
              opacity="0.95"
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Peak warning beacon point */}
            <circle cx="305" cy="265" r="3.5" fill="#F59E0B" />
            <text x="260" y="345" fontSize="9" fill="#64748B" fontFamily="monospace">99.98% COHERENCE</text>
          </motion.g>

          {/* Panel 2: Right Holographic UI Panel (Real-Time Throughput / Activity Bars) */}
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
          >
            {/* Projection Anchor Beam down to the dish surface */}
            <line 
              x1="710" 
              y1="340" 
              x2="680" 
              y2="410" 
              stroke="#2B66FF" 
              strokeWidth="1.4" 
              strokeDasharray="3 4" 
              opacity="0.45" 
            />
            <ellipse cx="680" cy="410" rx="10" ry="5" fill="none" stroke="#2B66FF" strokeWidth="1.4" opacity="0.6" />

            {/* Trapezoidal Glass Panel Body */}
            <polygon
              points="640,180 780,230 780,370 640,320"
              fill="url(#panelGlassGrad)"
              stroke="#2B66FF"
              strokeWidth="1.8"
              strokeDasharray="5 3"
              opacity="0.85"
            />
            {/* Inner solid border */}
            <polygon
              points="646,190 774,236 774,360 646,314"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.2"
              opacity="0.75"
            />

            {/* Header Bar */}
            <circle cx="662" cy="206" r="4" fill="#10B981" />
            <text x="674" y="209" fontSize="10" fill="#1E40AF" fontWeight="bold" fontFamily="monospace">
              THROUGHPUT // EPS
            </text>
            <line x1="654" y1="218" x2="766" y2="258" stroke="#2B66FF" strokeWidth="1" opacity="0.3" />

            {/* Horizontal Grid lines */}
            <line x1="654" y1="252" x2="766" y2="292" stroke="#2B66FF" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.2" />
            <line x1="654" y1="286" x2="766" y2="326" stroke="#2B66FF" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.2" />

            {/* 5 Animated Real-Time Throughput Activity Bars */}
            {[
              { x: 670, yBase: 306, baseH: 42, delay: 0 },
              { x: 692, yBase: 314, baseH: 64, delay: 0.2 },
              { x: 714, yBase: 322, baseH: 50, delay: 0.4 },
              { x: 736, yBase: 330, baseH: 72, delay: 0.1 },
              { x: 758, yBase: 338, baseH: 56, delay: 0.3 },
            ].map((bar, i) => (
              <g key={`bar-${i}`}>
                {/* Bar track background */}
                <line
                  x1={bar.x}
                  y1={bar.yBase}
                  x2={bar.x}
                  y2={bar.yBase - 85}
                  stroke="#E2E8F0"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                {/* Active animated throughput bar */}
                <motion.line
                  x1={bar.x}
                  y1={bar.yBase}
                  x2={bar.x}
                  y2={bar.yBase - bar.baseH}
                  stroke="#2B66FF"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  opacity="0.95"
                  animate={{
                    y2: [bar.yBase - bar.baseH, bar.yBase - (bar.baseH * 0.45), bar.yBase - bar.baseH],
                    opacity: [0.75, 1, 0.75],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    delay: bar.delay,
                    ease: 'easeInOut',
                  }}
                />
              </g>
            ))}

            <text x="680" y="355" fontSize="9" fill="#64748B" fontFamily="monospace">12.4K INGEST / SEC</text>
          </motion.g>

          {/* =========================================================================
              MODERN SOLID 3D ISOMETRIC SHIELD WITH ALERT BEACON (Right Side)
              ========================================================================= */}
          <motion.g
            animate={{ y: [0, -3.5, 0] }}
            transition={{ duration: 4.0, repeat: Infinity, delay: 0.2, ease: 'easeInOut' }}
          >
            {/* Soft Shield Floor Contact Shadow */}
            <ellipse 
              cx="955" 
              cy="520" 
              rx="55" 
              ry="14" 
              fill="rgba(43, 102, 255, 0.16)" 
              filter="url(#radarFloorGlow)" 
            />

            {/* Top 3D Extrusion Facet */}
            <polygon
              points="895,330 915,316 965,292 1015,316 995,330 945,306"
              fill="#F0F7FF"
              stroke="#2B66FF"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />

            {/* Right Side 3D Extrusion Depth Facet */}
            <path
              d="M 995 330 L 1015 316 L 1015 402 Q 1005 438, 989 464 Q 977 474, 965 482 L 945 494 Q 969 478, 985 452 L 995 416 Z"
              fill="#DBEAFE"
              stroke="#2B66FF"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />

            {/* Solid Front Face with clean frosted fill */}
            <path
              d="M 895 330 L 945 306 L 995 330 L 995 416 Q 995 462, 945 494 Q 895 462, 895 416 Z"
              fill="url(#shieldFrontGrad)"
              stroke="#2B66FF"
              strokeWidth="3.0"
              strokeLinejoin="round"
            />

            {/* Inner Blueprint Perimeter Accent Line */}
            <path
              d="M 903 338 L 945 318 L 987 338 L 987 414 Q 987 454, 945 484 Q 903 454, 903 414 Z"
              fill="rgba(43, 102, 255, 0.04)"
              stroke="#38BDF8"
              strokeWidth="1.4"
              strokeDasharray="3 3"
              opacity="0.75"
            />

            {/* Glowing Yellow Alert Triangle Badge Mounted on Shield */}
            <polygon 
              points="945,340 961,368 929,368" 
              fill="#F59E0B" 
              stroke="#D97706" 
              strokeWidth="1.4"
              filter="url(#alertGlow)"
            />
            <line x1="945" y1="347" x2="945" y2="358" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="945" cy="364" r="1.4" fill="#FFFFFF" />

            {/* Glowing Alert Pulse Beacon expanding behind the badge */}
            <motion.circle
              cx="945"
              cy="356"
              r="16"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="1.8"
              animate={{ r: [12, 30], opacity: [0.9, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />

            {/* Crisp Solid Security Checkmark Emblem */}
            <path
              d="M 929 425 L 941 437 L 963 408"
              fill="none"
              stroke="#2B66FF"
              strokeWidth="4.0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>
        </g>
      </svg>
    )}

      {/* Tab 03: Threat Detection Laser Deflections on Wall (Firewall surface: x=590..660, y=280..600) */}
      {activeTab === 2 && (
        <svg 
          viewBox="0 0 1200 900" 
          className="w-full h-full object-contain"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Subtle isometric firewall edge trace */}
          <line x1="590" y1="280" x2="660" y2="600" stroke="#2B66FF" strokeWidth="3" opacity="0.35" strokeDasharray="8 8" />

          {/* Incoming laser threat vectors hitting the exact angled wall face */}
          {[
            { startX: 250, startY: 280, hitX: 596, hitY: 330, bounceX: 470, bounceY: 270, delay: 0 },
            { startX: 260, startY: 380, hitX: 612, hitY: 410, bounceX: 480, bounceY: 360, delay: 0.9 },
            { startX: 280, startY: 480, hitX: 635, hitY: 490, bounceX: 500, bounceY: 450, delay: 1.7 },
            { startX: 300, startY: 570, hitX: 655, hitY: 570, bounceX: 520, bounceY: 540, delay: 2.5 },
          ].map((threat, i) => (
            <g key={i}>
              {/* Incoming red attack vector ray */}
              <motion.line
                x1={threat.startX}
                y1={threat.startY}
                x2={threat.hitX}
                y2={threat.hitY}
                stroke="#EF4444"
                strokeWidth="2.5"
                strokeDasharray="45 120"
                initial={{ strokeDashoffset: 160, opacity: 0 }}
                animate={{ strokeDashoffset: [160, 0], opacity: [0, 1, 0.85, 0] }}
                transition={{ duration: 1.3, repeat: Infinity, delay: threat.delay, ease: 'easeIn' }}
              />

              {/* High-energy impact spark at firewall wall surface */}
              <motion.circle
                cx={threat.hitX}
                cy={threat.hitY}
                r="6"
                fill="#3B82F6"
                initial={{ r: 2, opacity: 0 }}
                animate={{ r: [2, 22, 32], opacity: [0, 0.95, 0] }}
                transition={{ duration: 1.3, repeat: Infinity, delay: threat.delay + 0.55, ease: 'easeOut' }}
              />

              {/* Deflected blue perimeter flash */}
              <motion.line
                x1={threat.hitX}
                y1={threat.hitY}
                x2={threat.bounceX}
                y2={threat.bounceY}
                stroke="#2B66FF"
                strokeWidth="2"
                strokeDasharray="30 80"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 0.9, 0] }}
                transition={{ duration: 1.3, repeat: Infinity, delay: threat.delay + 0.6 }}
              />
            </g>
          ))}
        </svg>
      )}

      {/* Tab 04: Flowing Quantum Cryptographic Infinity Stream (Lobe L: 426, 432; C: 615, 499; R: 770, 466) */}
      {activeTab === 3 && (
        <svg 
          viewBox="0 0 1200 900" 
          className="w-full h-full object-contain"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Fitted 3D isometric infinity path */}
          <path
            d="M 615 499 C 520 400, 350 360, 350 450 C 350 540, 520 580, 615 499 C 710 410, 880 390, 880 480 C 880 570, 710 590, 615 499 Z"
            fill="none"
            stroke="#2B66FF"
            strokeWidth="2.5"
            strokeDasharray="6 8"
            opacity="0.3"
          />

          {/* Flowing illuminated quantum pulse stream along the path */}
          <motion.path
            d="M 615 499 C 520 400, 350 360, 350 450 C 350 540, 520 580, 615 499 C 710 410, 880 390, 880 480 C 880 570, 710 590, 615 499 Z"
            fill="none"
            stroke="#2B66FF"
            strokeWidth="3.5"
            strokeDasharray="90 340"
            initial={{ strokeDashoffset: 430 }}
            animate={{ strokeDashoffset: [430, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
          />

          {/* Cryptographic key rotation node pulses at exact landmarks */}
          <motion.circle
            cx="426"
            cy="432"
            r="8"
            fill="#10B981"
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="770"
            cy="466"
            r="8"
            fill="#2B66FF"
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.circle
            cx="615"
            cy="499"
            r="7"
            fill="#F59E0B"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
        </svg>
      )}
    </div>
  );
};
