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

      {/* Tab 02: Real-Time Radar / Sonar Telemetry Interface Animation */}
      {activeTab === 1 && (
        <svg 
          viewBox="0 0 1200 900" 
          className="w-full h-full object-contain"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <radialGradient id="radarSweep3D" cx="0" cy="0" r="235" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#2B66FF" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#2B66FF" stopOpacity="0" />
            </radialGradient>

            <filter id="alertGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="sweepGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="dishShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#2B66FF" floodOpacity="0.14" />
            </filter>

            <filter id="radarFloorGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="18" />
            </filter>
          </defs>

          {/* Soft grounding floor shadow under radar base platform */}
          <ellipse 
            cx="578" 
            cy="650" 
            rx="270" 
            ry="48" 
            fill="rgba(43, 102, 255, 0.10)" 
            filter="url(#radarFloorGlow)" 
          />

          {/* =========================================================================
              ISOMETRIC 3D RADAR DISH & CONCENTRIC RINGS (Centered at cx: 578.5, cy: 444.0)
              ========================================================================= */}
          <g transform="translate(578.5, 444) rotate(-3)" filter="url(#dishShadow)">
            <g transform="scale(1, 0.49)">

              {/* Complete, perfectly circular concentric radar rings of dense uniform blue dots */}
              {[55, 110, 165, 220].map((r, i) => (
                <circle 
                  key={i} 
                  cx="0" 
                  cy="0" 
                  r={r} 
                  fill="none" 
                  stroke="#2B66FF" 
                  strokeWidth="2.2"  
                  strokeDasharray="3 3" 
                  opacity={0.45 + i * 0.12} 
                />
              ))}

              {/* Outer range perimeter boundary */}
              <circle cx="0" cy="0" r="235" fill="none" stroke="#2B66FF" strokeWidth="2.2" strokeDasharray="3 3" opacity="0.6" />

              {/* Smooth continuous elliptical orbital data pulses */}
              <motion.circle
                cx="0"
                cy="0"
                r="110"
                fill="none"
                stroke="#2B66FF"
                strokeWidth="3"
                strokeDasharray="45 160"
                animate={{ strokeDashoffset: [205, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'linear' }}
                opacity="0.85"
              />
              <motion.circle
                cx="0"
                cy="0"
                r="165"
                fill="none"
                stroke="#2B66FF"
                strokeWidth="3"
                strokeDasharray="60 250"
                animate={{ strokeDashoffset: [0, 310] }}
                transition={{ duration: 5.6, repeat: Infinity, ease: 'linear' }}
                opacity="0.8"
              />

              {/* 360° Rotating Radar Beam Sweep with gradient detection cone & scanline */}
              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'linear' }}
              >
                <path d="M 0 0 L 235 0 A 235 235 0 0 1 117.5 203.5 Z" fill="url(#radarSweep3D)" filter="url(#sweepGlow)" opacity="0.95" />
                {/* Bright leading-edge scanline */}
                <line x1="0" y1="0" x2="235" y2="0" stroke="#60A5FA" strokeWidth="3.5" opacity="1" />
                {/* Trailing edge */}
                <line x1="0" y1="0" x2="117.5" y2="203.5" stroke="#2B66FF" strokeWidth="1.5" opacity="0.5" />
              </motion.g>

              {/* Central hub core pulse */}
              <circle cx="0" cy="0" r="12" fill="#2B66FF" opacity="0.85" />
              <motion.circle 
                cx="0" 
                cy="0" 
                r="18" 
                fill="none" 
                stroke="#2B66FF" 
                strokeWidth="1.5"
                animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0.2, 0.8] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Target detection pings precisely anchored to dish landmark features */}
              {[
                { x: -74, y: 151, color: '#F59E0B', label: 'ALERT', delay: 0.2 },
                { x: 135, y: -70, color: '#10B981', label: 'OK', delay: 1.8 },
                { x: -120, y: -85, color: '#2B66FF', label: '●', delay: 2.6 },
                { x: 115, y: 125, color: '#10B981', label: 'DATA', delay: 1.0 },
              ].map((blip, i) => (
                <g key={i} transform={`translate(${blip.x}, ${blip.y})`}>
                  <motion.circle
                    r="5.5"
                    fill={blip.color}
                    animate={{ opacity: [0.35, 1, 0.35], scale: [0.9, 1.35, 0.9] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: blip.delay }}
                  />
                  <motion.circle
                    r="12"
                    fill="none"
                    stroke={blip.color}
                    strokeWidth="1.6"
                    initial={{ r: 6, opacity: 0.9 }}
                    animate={{ r: 24, opacity: 0 }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: blip.delay, ease: 'easeOut' }}
                  />
                  <text x="8" y="4" fontSize="10" fill={blip.color} opacity="0.75" fontFamily="monospace">{blip.label}</text>
                </g>
              ))}

            </g>
          </g>

          {/* =========================================================================
              FLOATING HOLOGRAPHIC UI PANELS ANCHORED ABOVE THE RADAR
              ========================================================================= */}
          {/* Panel 1: Left Holographic Telemetry Panel (x: 345..439, y: 254..389) with Line Chart Waveform */}
          <motion.g
            animate={{ y: [0, -3.5, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Holographic frame bracket matching perspective trapezoid */}
            <path
              d="M 347 288 L 427 258 L 427 340 L 347 370 Z"
              fill="none"
              stroke="#2B66FF"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              opacity="0.45"
            />
            <path
              d="M 347 288 L 427 258 L 427 340 L 347 370 Z"
              fill="rgba(43, 102, 255, 0.04)"
            />
            {/* Live streaming telemetry line chart waveform */}
            <motion.path
              d="M 356 345 Q 366 318, 378 330 T 399 308 T 422 322"
              fill="none"
              stroke="#2B66FF"
              strokeWidth="2.2"
              strokeLinecap="round"
              opacity="0.9"
              animate={{ opacity: [0.65, 1, 0.65] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            {/* Warning alert indicator dot on panel 1 */}
            <motion.circle
              cx="388"
              cy="292"
              r="4"
              fill="#F59E0B"
              animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
          </motion.g>

          {/* Panel 2: Right Holographic Bar Chart Panel (x: 650..799, y: 240..409) */}
          <motion.g
            animate={{ y: [0, -3.5, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, delay: 0.4, ease: 'easeInOut' }}
          >
            {/* Holographic frame bracket matching perspective trapezoid */}
            <path
              d="M 669 258 L 781 302 L 781 384 L 669 340 Z"
              fill="none"
              stroke="#2B66FF"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              opacity="0.45"
            />
            <path
              d="M 669 258 L 781 302 L 781 384 L 669 340 Z"
              fill="rgba(43, 102, 255, 0.04)"
            />
            {/* 4 Animated Real-Time Throughput Activity Bars */}
            {[
              { x: 694, yBase: 346, baseH: 38, delay: 0 },
              { x: 718, yBase: 355, baseH: 55, delay: 0.2 },
              { x: 742, yBase: 364, baseH: 44, delay: 0.4 },
              { x: 764, yBase: 373, baseH: 62, delay: 0.1 },
            ].map((bar, i) => (
              <motion.line
                key={i}
                x1={bar.x}
                y1={bar.yBase}
                x2={bar.x}
                y2={bar.yBase - bar.baseH}
                stroke="#2B66FF"
                strokeWidth="3.5"
                strokeLinecap="round"
                opacity="0.9"
                animate={{
                  y2: [bar.yBase - bar.baseH, bar.yBase - (bar.baseH * 0.55), bar.yBase - bar.baseH],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  delay: bar.delay,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.g>

          {/* =========================================================================
              MODERN SHIELD ICON WITH YELLOW ALERT TRIANGLE (x: 800..923, y: 290..489)
              ========================================================================= */}
          <motion.g
            animate={{ y: [0, -2.5, 0] }}
            transition={{ duration: 4.0, repeat: Infinity, delay: 0.2, ease: 'easeInOut' }}
          >
            {/* Yellow alert triangle badge on shield face */}
            <polygon 
              points="866,342 876,360 856,360" 
              fill="#F59E0B" 
              stroke="#D97706" 
              strokeWidth="1"
              filter="url(#alertGlow)"
            />
            <line x1="866" y1="347" x2="866" y2="353" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="866" cy="357" r="0.9" fill="#fff" />

            {/* Glowing alert pulse aura behind the triangle */}
            <motion.circle
              cx="866"
              cy="353"
              r="12"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="1.5"
              animate={{ r: [8, 22], opacity: [0.8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />

            {/* Subtle cobalt shield contour accent aura */}
            <path
              d="M 822 334 Q 866 316, 910 334 Q 910 405, 866 450 Q 822 405, 822 334 Z"
              fill="none"
              stroke="#2B66FF"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              opacity="0.35"
            />
          </motion.g>
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
