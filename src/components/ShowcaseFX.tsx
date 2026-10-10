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

      {/* Tab 02: Real-Time Radar Sweep on 3D Dish (Focal: 703, 403) */}
      {activeTab === 1 && (
        <svg 
          viewBox="0 0 1200 900" 
          className="w-full h-full object-contain"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Radar Dish Elliptical Isometric Plane */}
          <g transform="translate(703, 403) rotate(-22) scale(1, 0.62)">
            {/* Concentric radar range rings matching the 3D dish rim */}
            <circle cx="0" cy="0" r="70" fill="none" stroke="#2B66FF" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.35" />
            <circle cx="0" cy="0" r="140" fill="none" stroke="#2B66FF" strokeWidth="1.5" strokeDasharray="4 8" opacity="0.3" />
            <circle cx="0" cy="0" r="210" fill="none" stroke="#2B66FF" strokeWidth="2" opacity="0.4" />

            {/* 360° Rotating Radar Beam Sweep */}
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'linear' }}
            >
              <defs>
                <linearGradient id="radarSweep3D" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2B66FF" stopOpacity="0.45" />
                  <stop offset="60%" stopColor="#2B66FF" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#2B66FF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M 0 0 L 220 0 A 220 220 0 0 1 155 155 Z" fill="url(#radarSweep3D)" />
              <line x1="0" y1="0" x2="220" y2="0" stroke="#2B66FF" strokeWidth="2.5" opacity="0.9" />
            </motion.g>

            {/* Target pings precisely positioned on the radar dish */}
            {[
              { x: 90, y: -60, color: '#10B981', delay: 0.3 },
              { x: -110, y: 70, color: '#2B66FF', delay: 1.6 },
              { x: 140, y: 90, color: '#F59E0B', delay: 2.1 },
              { x: -70, y: -110, color: '#10B981', delay: 0.9 },
            ].map((blip, i) => (
              <g key={i} transform={`translate(${blip.x}, ${blip.y})`}>
                <motion.circle
                  r="5"
                  fill={blip.color}
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.4, 0.9] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: blip.delay }}
                />
                <motion.circle
                  r="12"
                  fill="none"
                  stroke={blip.color}
                  strokeWidth="1.5"
                  initial={{ r: 5, opacity: 0.8 }}
                  animate={{ r: 20, opacity: 0 }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: blip.delay, ease: 'easeOut' }}
                />
              </g>
            ))}
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
