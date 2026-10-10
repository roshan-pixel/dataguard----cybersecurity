import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdvancedFeaturesFXProps {
  selectedAlert: 'ip' | 'device' | 'auth';
}

export const AdvancedFeaturesFX: React.FC<AdvancedFeaturesFXProps> = ({ selectedAlert }) => {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[440px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {/* =========================================================================
            STATE 1: SUSPICIOUS IP ACTIVITY // AI FLAGGED
            ========================================================================= */}
        {selectedAlert === 'ip' && (
          <motion.svg
            key="af-ip"
            viewBox="0 0 1000 640"
            className="w-full h-full object-contain select-none"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <defs>
              <filter id="afFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="14" />
              </filter>
              <filter id="afGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="afPillShadow" x="-15%" y="-20%" width="130%" height="150%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.15" />
              </filter>
              <linearGradient id="afPanelGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.98)" />
                <stop offset="100%" stopColor="rgba(240, 249, 255, 0.92)" />
              </linearGradient>
              <radialGradient id="afIpRadarSweep" cx="0" cy="0" r="215" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
                <stop offset="25%" stopColor="#EF4444" stopOpacity="0.65" />
                <stop offset="65%" stopColor="#EF4444" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
              </radialGradient>
              <pattern id="afDotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1" fill="#2B66FF" opacity="0.10" />
              </pattern>
            </defs>

            {/* Blueprint Grid & Floor Shadows */}
            <rect x="40" y="40" width="920" height="560" fill="url(#afDotGrid)" opacity="0.6" />
            <ellipse cx="490" cy="510" rx="260" ry="45" fill="rgba(239, 68, 68, 0.16)" filter="url(#afFloorShadow)" />
            <ellipse cx="490" cy="510" rx="160" ry="28" fill="rgba(43, 102, 255, 0.22)" filter="url(#afFloorShadow)" />

            {/* Isometric Baseline Guide Rails */}
            <line x1="140" y1="280" x2="490" y2="460" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />
            <line x1="490" y1="460" x2="860" y2="280" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />

            {/* 3D Isometric Anomaly Radar Scanner Hub at Center (490, 400) */}
            <g transform="translate(490, 400) rotate(-3)">
              <g transform="scale(1.30, 0.63)">
                {/* Concentric Isometric Range Rings */}
                {[50, 100, 150, 205].map((r, i) => (
                  <circle
                    key={i}
                    cx="0"
                    cy="0"
                    r={r}
                    fill="none"
                    stroke="#2B66FF"
                    strokeWidth="2.0"
                    strokeDasharray="4 4"
                    opacity={0.38 + i * 0.12}
                  />
                ))}
                <circle cx="0" cy="0" r="215" fill="none" stroke="#EF4444" strokeWidth="2.2" opacity="0.55" />

                {/* Rotating Sweep Beam: Locked Strictly to Axis Point (0, 0) */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="3.4s"
                    repeatCount="indefinite"
                  />
                  <path d="M 0 0 L 215 0 A 215 215 0 0 1 107.5 186.2 Z" fill="url(#afIpRadarSweep)" />
                  <line x1="0" y1="0" x2="215" y2="0" stroke="#EF4444" strokeWidth="3.2" opacity="1" />
                  <line x1="0" y1="0" x2="215" y2="0" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.9" />
                </g>

                {/* Red Anomaly IP Emitter Node at (-120, 65) */}
                <circle cx="-120" cy="65" r="7.5" fill="#EF4444" />
                <motion.circle
                  cx="-120"
                  cy="65"
                  r="15"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="2.0"
                  animate={{ r: [7.5, 26], opacity: [0.95, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />

                {/* AI Laser Interception Beam from Center to Node */}
                <line x1="0" y1="0" x2="-120" y2="65" stroke="#38BDF8" strokeWidth="2.4" strokeDasharray="6 4" opacity="0.85" />
                <motion.circle
                  cx="0"
                  cy="0"
                  r="4.5"
                  fill="#38BDF8"
                  animate={{ cx: [0, -120], cy: [0, 65], opacity: [1, 0.4] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                />

                {/* Center Gateway Core */}
                <circle cx="0" cy="0" r="16" fill="#1E3A8A" stroke="#2B66FF" strokeWidth="2.2" />
                <circle cx="0" cy="0" r="8" fill="#38BDF8" filter="url(#afGlow)" />
                <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
              </g>

              {/* 3D Isometric Defensive Shield on the Right Side of the Dish (Matching sec4_radar.png) */}
              <g transform="translate(195, -30)">
                <ellipse cx="0" cy="85" rx="36" ry="10" fill="rgba(43, 102, 255, 0.2)" filter="url(#afFloorShadow)" />
                {/* Shield Top Extrusion */}
                <polygon points="-24,0 0,-14 24,0 0,10" fill="#F0F7FF" stroke="#2B66FF" strokeWidth="2" strokeLinejoin="round" />
                {/* Shield Left Face */}
                <polygon points="-24,0 0,10 0,65 -24,42" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="2" strokeLinejoin="round" />
                {/* Shield Right Face */}
                <polygon points="0,10 24,0 24,42 0,65" fill="#DBEAFE" stroke="#2B66FF" strokeWidth="2" strokeLinejoin="round" />
                {/* Checkmark Icon */}
                <path d="M -8,25 L -2,32 L 10,18" fill="none" stroke="#2B66FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="0" cy="10" r="3" fill="#10B981" />
              </g>
            </g>

            {/* --- LEFT 3D-ALIGNED SIDE BOX: SUSPICIOUS IP ACTIVITY // AI FLAGGED --- */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Suspended Ceiling Mount: Connected directly to top center edge */}
              <line x1="182" y1="10" x2="182" y2="76" stroke="#2B66FF" strokeWidth="2" strokeDasharray="3 4" opacity="0.5" />
              <rect x="172" y="6" width="20" height="7" rx="2" fill="#2B66FF" />
              <circle cx="182" cy="9.5" r="2" fill="#38BDF8" />

              {/* Floor Anchor Line */}
              <line x1="182" y1="252" x2="182" y2="301" stroke="#2B66FF" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.4" />
              <ellipse cx="182" cy="301" rx="8" ry="4" fill="none" stroke="#2B66FF" strokeWidth="1.2" opacity="0.5" />

              <g transform="translate(45, 145) skewY(-26.565)">
                <rect x="0" y="0" width="274" height="175" rx="8" fill="url(#afPanelGlass)" stroke="#2B66FF" strokeWidth="2.2" filter="url(#afPillShadow)" />
                <rect x="5" y="5" width="264" height="165" rx="5" fill="none" stroke="#EF4444" strokeWidth="1.4" opacity="0.8" />
                
                {/* Header: Exact Title */}
                <circle cx="18" cy="20" r="5" fill="#EF4444" />
                <text x="32" y="24" fontSize="14" fill="#0F172A" fontWeight="900" fontFamily="monospace">
                  SUSPICIOUS IP ACTIVITY
                </text>
                <line x1="10" y1="32" x2="264" y2="32" stroke="#2B66FF" strokeWidth="1.4" opacity="0.35" />

                {/* Sub-badge: Exact Tag */}
                <rect x="12" y="38" width="105" height="22" rx="4" fill="#EFF6FF" stroke="#2B66FF" strokeWidth="1.2" />
                <text x="20" y="53" fontSize="12" fill="#2B66FF" fontWeight="900" fontFamily="monospace">
                  AI FLAGGED
                </text>

                {/* Telemetry Data Fields */}
                <text x="12" y="78" fontSize="13.5" fill="#EF4444" fontWeight="900" fontFamily="monospace">
                  • 194.26.29.112 (TOR EXIT)
                </text>
                <text x="12" y="99" fontSize="13" fill="#1E3A8A" fontWeight="900" fontFamily="monospace">
                  ASN: 44103 BULLETPROOF
                </text>
                <text x="12" y="119" fontSize="12.5" fill="#64748B" fontWeight="800" fontFamily="monospace">
                  GEO-VELOCITY: ANOMALOUS
                </text>

                {/* Status Tag */}
                <rect x="12" y="134" width="250" height="26" rx="4" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.4" />
                <text x="22" y="151" fontSize="12.5" fill="#DC2626" fontWeight="900" fontFamily="monospace">
                  RISK: 99.8% // CRITICAL
                </text>
              </g>
            </motion.g>

            {/* --- RIGHT 3D-ALIGNED SIDE BOX: AI DEFENSE // EDGE --- */}
            {/* 100% 3D Isometric Aligned Parallel to Left Box (skewY -26.565) */}
            <motion.g
              animate={{ y: [0, -3.8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
            >
              {/* Suspended Ceiling Mount: Connected directly to top center edge */}
              <line x1="817" y1="10" x2="817" y2="126" stroke="#2B66FF" strokeWidth="2" strokeDasharray="3 4" opacity="0.5" />
              <rect x="807" y="6" width="20" height="7" rx="2" fill="#2B66FF" />
              <circle cx="817" cy="9.5" r="2" fill="#38BDF8" />

              {/* Floor Anchor Line */}
              <line x1="817" y1="301" x2="817" y2="360" stroke="#2B66FF" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.4" />
              <ellipse cx="817" cy="360" rx="8" ry="4" fill="none" stroke="#2B66FF" strokeWidth="1.2" opacity="0.5" />

              <g transform="translate(680, 195) skewY(-26.565)">
                <rect x="0" y="0" width="274" height="175" rx="8" fill="url(#afPanelGlass)" stroke="#2B66FF" strokeWidth="2.2" filter="url(#afPillShadow)" />
                <rect x="5" y="5" width="264" height="165" rx="5" fill="none" stroke="#10B981" strokeWidth="1.4" opacity="0.8" />
                
                {/* Header */}
                <circle cx="18" cy="20" r="5" fill="#10B981" />
                <text x="32" y="24" fontSize="14" fill="#0F172A" fontWeight="900" fontFamily="monospace">
                  AI DEFENSE // EDGE
                </text>
                <line x1="10" y1="32" x2="264" y2="32" stroke="#2B66FF" strokeWidth="1.4" opacity="0.35" />

                {/* Sub-badge: ACTION: BLOCKED */}
                <rect x="12" y="38" width="135" height="22" rx="4" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.2" />
                <text x="20" y="53" fontSize="12" fill="#047857" fontWeight="900" fontFamily="monospace">
                  ACTION: BLOCKED
                </text>

                {/* 4 Animated Telemetry Bars */}
                <g transform="translate(180, 38)">
                  {[
                    { x: 0, h: 18, delay: 0 },
                    { x: 14, h: 26, delay: 0.2 },
                    { x: 28, h: 22, delay: 0.4 },
                    { x: 42, h: 30, delay: 0.1 },
                  ].map((bar, idx) => (
                    <motion.rect
                      key={idx}
                      x={bar.x}
                      y={30 - bar.h}
                      width="8"
                      height={bar.h}
                      rx="2"
                      fill="#2B66FF"
                      animate={{ height: [bar.h, bar.h * 0.4, bar.h] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: bar.delay }}
                    />
                  ))}
                </g>

                {/* Telemetry Data Fields */}
                <text x="12" y="78" fontSize="13" fill="#1E3A8A" fontWeight="900" fontFamily="monospace">
                  RESPONSE: &lt; 1.2ms (EDGE)
                </text>
                <text x="12" y="99" fontSize="13" fill="#64748B" fontWeight="800" fontFamily="monospace">
                  FILTER: BGP / CDN SHIELD
                </text>
                <text x="12" y="119" fontSize="12.5" fill="#2563EB" fontWeight="900" fontFamily="monospace">
                  ZERO-TRUST: QUARANTINED
                </text>

                {/* Status Tag */}
                <rect x="12" y="134" width="250" height="26" rx="4" fill="#EFF6FF" stroke="#2B66FF" strokeWidth="1.4" />
                <text x="22" y="151" fontSize="12.5" fill="#1D4ED8" fontWeight="900" fontFamily="monospace">
                  AI FLAGGED // MITIGATED
                </text>
              </g>
            </motion.g>

            {/* Top Telemetry Status Badge */}
            <g transform="translate(325, 20)">
              <rect x="0" y="0" width="350" height="36" rx="8" fill="#FFFFFF" stroke="#EF4444" strokeWidth="2" filter="url(#afPillShadow)" />
              <circle cx="20" cy="18" r="5" fill="#EF4444" />
              <text x="34" y="23" fontSize="12.5" fill="#0F172A" fontWeight="900" fontFamily="monospace" letterSpacing="0.02em">
                SUSPICIOUS IP // AI FLAGGED (BLOCKED)
              </text>
            </g>
          </motion.svg>
        )}

        {/* =========================================================================
            STATE 2: UNKNOWN DEVICE // ACTIVE FILTER
            ========================================================================= */}
        {selectedAlert === 'device' && (
          <motion.svg
            key="af-device"
            viewBox="0 0 1000 640"
            className="w-full h-full object-contain select-none"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <defs>
              <filter id="afFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="14" />
              </filter>
              <filter id="afGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="afPillShadow" x="-15%" y="-20%" width="130%" height="150%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.15" />
              </filter>
              <linearGradient id="afPanelGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.98)" />
                <stop offset="100%" stopColor="rgba(240, 249, 255, 0.92)" />
              </linearGradient>
              {/* 3D Laptop Titanium Body Gradients */}
              <linearGradient id="afLaptopFace" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F0F9FF" />
                <stop offset="100%" stopColor="#BAE6FD" />
              </linearGradient>
              <linearGradient id="afLaptopScreen" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
              <pattern id="afDotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1" fill="#2B66FF" opacity="0.10" />
              </pattern>
            </defs>

            {/* Blueprint Grid & Floor Shadows */}
            <rect x="40" y="40" width="920" height="560" fill="url(#afDotGrid)" opacity="0.6" />
            <ellipse cx="490" cy="510" rx="260" ry="45" fill="rgba(43, 102, 255, 0.20)" filter="url(#afFloorShadow)" />
            <ellipse cx="490" cy="510" rx="150" ry="26" fill="rgba(56, 189, 248, 0.25)" filter="url(#afFloorShadow)" />

            {/* Guide Rails */}
            <line x1="140" y1="280" x2="490" y2="460" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />
            <line x1="490" y1="460" x2="860" y2="280" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />

            {/* 3D Isometric Client Terminal & Workstation (Center at 490, 395) */}
            <g transform="translate(490, 395)">
              {/* Concentric Biometric Verification Scanning Rings */}
              <g transform="scale(1.30, 0.62)">
                {[65, 120, 175].map((r, i) => (
                  <circle
                    key={i}
                    cx="0"
                    cy="0"
                    r={r}
                    fill="none"
                    stroke="#2B66FF"
                    strokeWidth="2.0"
                    strokeDasharray="4 6"
                    opacity={0.38 + i * 0.15}
                  />
                ))}
                {/* Rotating Security Scan Ring */}
                <motion.circle
                  cx="0"
                  cy="0"
                  r="175"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.6"
                  strokeDasharray="60 160"
                  animate={{ strokeDashoffset: [0, 440] }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'linear' }}
                />
              </g>

              {/* 3D Isometric Laptop / Terminal Base Body (Clean Metallic Finish — No stray dots) */}
              <polygon
                points="-95,15 0,-32 95,15 0,62"
                fill="url(#afLaptopFace)"
                stroke="#2B66FF"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              {/* Laptop Keyboard Bed */}
              <polygon
                points="-75,15 0,-22 75,15 0,52"
                fill="#EFF6FF"
                stroke="#38BDF8"
                strokeWidth="1.6"
              />
              {/* Keyboard Grid Lines */}
              {[-40, -15, 10, 35, 60].map((kx, idx) => (
                <line
                  key={idx}
                  x1={kx}
                  y1={2 + idx * 3}
                  x2={kx + 12}
                  y2={16 + idx * 3}
                  stroke="#93C5FD"
                  strokeWidth="1.2"
                  opacity="0.75"
                />
              ))}

              {/* 3D Vertical Upright Display Screen (skewed 26.565deg) */}
              <g transform="translate(-15, -95) skewY(26.565)">
                {/* Screen Outer Bezel */}
                <rect x="0" y="0" width="115" height="88" rx="6" fill="url(#afLaptopScreen)" stroke="#2B66FF" strokeWidth="2.2" />
                {/* Screen Display Active Terminal */}
                <rect x="5" y="5" width="105" height="78" rx="3" fill="#0A0F1D" />
                {/* Screen Header Dots */}
                <circle cx="16" cy="18" r="4" fill="#EF4444" />
                <circle cx="28" cy="18" r="4" fill="#F59E0B" />
                <circle cx="40" cy="18" r="4" fill="#10B981" />
                {/* Screen Warning Content */}
                <text x="14" y="38" fontSize="10.5" fill="#EF4444" fontWeight="900" fontFamily="monospace">
                  UNRECOGNIZED CLIENT
                </text>
                <line x1="10" y1="44" x2="105" y2="44" stroke="#2B66FF" strokeWidth="1" opacity="0.4" />
                <text x="14" y="58" fontSize="9" fill="#38BDF8" fontWeight="800" fontFamily="monospace">
                  ID: MAC-OS-SONOMA-17
                </text>
                <text x="14" y="70" fontSize="8.5" fill="#94A3B8" fontWeight="800" fontFamily="monospace">
                  AUTH: FIDO2 REQUIRED
                </text>
                <rect x="10" y="76" width="90" height="4" rx="2" fill="#2563EB" opacity="0.8" />
              </g>

              {/* 3D Isometric Defensive Shield on the Right Side */}
              <g transform="translate(195, -30)">
                <ellipse cx="0" cy="85" rx="36" ry="10" fill="rgba(43, 102, 255, 0.2)" filter="url(#afFloorShadow)" />
                <polygon points="-24,0 0,-14 24,0 0,10" fill="#F0F7FF" stroke="#2B66FF" strokeWidth="2" strokeLinejoin="round" />
                <polygon points="-24,0 0,10 0,65 -24,42" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="2" strokeLinejoin="round" />
                <polygon points="0,10 24,0 24,42 0,65" fill="#DBEAFE" stroke="#2B66FF" strokeWidth="2" strokeLinejoin="round" />
                {/* Keyhole Icon */}
                <circle cx="0" cy="24" r="5" fill="#2B66FF" />
                <polygon points="-2.5,24 2.5,24 4,36 -4,36" fill="#2B66FF" />
                <circle cx="0" cy="10" r="3" fill="#38BDF8" />
              </g>
            </g>

            {/* --- LEFT 3D-ALIGNED SIDE BOX: UNKNOWN DEVICE // ACTIVE FILTER --- */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Suspended Ceiling Mount: Connected directly to top center edge */}
              <line x1="182" y1="10" x2="182" y2="76" stroke="#2B66FF" strokeWidth="2" strokeDasharray="3 4" opacity="0.5" />
              <rect x="172" y="6" width="20" height="7" rx="2" fill="#2B66FF" />
              <circle cx="182" cy="9.5" r="2" fill="#38BDF8" />

              {/* Floor Anchor Line */}
              <line x1="182" y1="252" x2="182" y2="301" stroke="#2B66FF" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.4" />
              <ellipse cx="182" cy="301" rx="8" ry="4" fill="none" stroke="#2B66FF" strokeWidth="1.2" opacity="0.5" />

              <g transform="translate(45, 145) skewY(-26.565)">
                <rect x="0" y="0" width="274" height="175" rx="8" fill="url(#afPanelGlass)" stroke="#2B66FF" strokeWidth="2.2" filter="url(#afPillShadow)" />
                <rect x="5" y="5" width="264" height="165" rx="5" fill="none" stroke="#38BDF8" strokeWidth="1.4" opacity="0.8" />
                
                {/* Header: Exact Title */}
                <circle cx="18" cy="20" r="5" fill="#2B66FF" />
                <text x="32" y="24" fontSize="14.5" fill="#0F172A" fontWeight="900" fontFamily="monospace">
                  UNKNOWN DEVICE
                </text>
                <line x1="10" y1="32" x2="264" y2="32" stroke="#2B66FF" strokeWidth="1.4" opacity="0.35" />

                {/* Sub-badge: Exact Tag */}
                <rect x="12" y="38" width="115" height="22" rx="4" fill="#EFF6FF" stroke="#2B66FF" strokeWidth="1.2" />
                <text x="20" y="53" fontSize="12" fill="#2B66FF" fontWeight="900" fontFamily="monospace">
                  ACTIVE FILTER
                </text>

                {/* Telemetry Data Fields */}
                <text x="12" y="78" fontSize="13.5" fill="#1E3A8A" fontWeight="900" fontFamily="monospace">
                  • macOS SONOMA / SAFARI
                </text>
                <text x="12" y="99" fontSize="13" fill="#2563EB" fontWeight="900" fontFamily="monospace">
                  CLIENT ID: UNENROLLED
                </text>
                <text x="12" y="119" fontSize="12.5" fill="#64748B" fontWeight="800" fontFamily="monospace">
                  FINGERPRINT: UNRECOGNIZED
                </text>

                {/* Status Tag */}
                <rect x="12" y="134" width="250" height="26" rx="4" fill="#EFF6FF" stroke="#2B66FF" strokeWidth="1.4" />
                <text x="22" y="151" fontSize="12.5" fill="#1D4ED8" fontWeight="900" fontFamily="monospace">
                  ACTIVE FILTER: ENFORCED
                </text>
              </g>
            </motion.g>

            {/* --- RIGHT 3D-ALIGNED SIDE BOX: FIDO2 CHALLENGE --- */}
            {/* 100% 3D Isometric Aligned Parallel to Left Box (skewY -26.565) */}
            <motion.g
              animate={{ y: [0, -3.8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
            >
              {/* Suspended Ceiling Mount: Connected directly to top center edge */}
              <line x1="817" y1="10" x2="817" y2="126" stroke="#2B66FF" strokeWidth="2" strokeDasharray="3 4" opacity="0.5" />
              <rect x="807" y="6" width="20" height="7" rx="2" fill="#2B66FF" />
              <circle cx="817" cy="9.5" r="2" fill="#38BDF8" />

              {/* Floor Anchor Line */}
              <line x1="817" y1="301" x2="817" y2="360" stroke="#2B66FF" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.4" />
              <ellipse cx="817" cy="360" rx="8" ry="4" fill="none" stroke="#2B66FF" strokeWidth="1.2" opacity="0.5" />

              <g transform="translate(680, 195) skewY(-26.565)">
                <rect x="0" y="0" width="274" height="175" rx="8" fill="url(#afPanelGlass)" stroke="#2B66FF" strokeWidth="2.2" filter="url(#afPillShadow)" />
                <rect x="5" y="5" width="264" height="165" rx="5" fill="none" stroke="#10B981" strokeWidth="1.4" opacity="0.8" />
                
                {/* Header */}
                <circle cx="18" cy="20" r="5" fill="#10B981" />
                <text x="32" y="24" fontSize="14" fill="#0F172A" fontWeight="900" fontFamily="monospace">
                  FIDO2 CHALLENGE
                </text>
                <line x1="10" y1="32" x2="264" y2="32" stroke="#2B66FF" strokeWidth="1.4" opacity="0.35" />

                {/* Sub-badge: MFA PROMPTED */}
                <rect x="12" y="38" width="125" height="22" rx="4" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.2" />
                <text x="20" y="53" fontSize="12" fill="#047857" fontWeight="900" fontFamily="monospace">
                  MFA PROMPTED
                </text>

                {/* 4 Animated Biometric Activity Bars */}
                <g transform="translate(180, 38)">
                  {[
                    { x: 0, h: 22, delay: 0 },
                    { x: 14, h: 28, delay: 0.2 },
                    { x: 28, h: 16, delay: 0.4 },
                    { x: 42, h: 26, delay: 0.1 },
                  ].map((bar, idx) => (
                    <motion.rect
                      key={idx}
                      x={bar.x}
                      y={30 - bar.h}
                      width="8"
                      height={bar.h}
                      rx="2"
                      fill="#10B981"
                      animate={{ height: [bar.h, bar.h * 0.45, bar.h] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: bar.delay }}
                    />
                  ))}
                </g>

                {/* Telemetry Data Fields */}
                <text x="12" y="78" fontSize="13" fill="#1E3A8A" fontWeight="900" fontFamily="monospace">
                  HARDWARE KEY: PROMPTED
                </text>
                <text x="12" y="99" fontSize="13" fill="#64748B" fontWeight="800" fontFamily="monospace">
                  AUTH: WEBAUTHN v2 LEVEL-2
                </text>
                <text x="12" y="119" fontSize="12.5" fill="#2563EB" fontWeight="900" fontFamily="monospace">
                  GATE: ACCESS RESTRICTED
                </text>

                {/* Status Tag */}
                <rect x="12" y="134" width="250" height="26" rx="4" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.4" />
                <text x="22" y="151" fontSize="12.5" fill="#065F46" fontWeight="900" fontFamily="monospace">
                  ACTIVE FILTER // PENDING MFA
                </text>
              </g>
            </motion.g>

            {/* Top Telemetry Status Badge */}
            <g transform="translate(325, 20)">
              <rect x="0" y="0" width="350" height="36" rx="8" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="2" filter="url(#afPillShadow)" />
              <circle cx="20" cy="18" r="5" fill="#2B66FF" />
              <text x="34" y="23" fontSize="12.5" fill="#0F172A" fontWeight="900" fontFamily="monospace" letterSpacing="0.02em">
                UNKNOWN DEVICE // ACTIVE FILTER (MFA)
              </text>
            </g>
          </motion.svg>
        )}

        {/* =========================================================================
            STATE 3: FAILED AUTHENTICATION // TARPIT RULE
            ========================================================================= */}
        {selectedAlert === 'auth' && (
          <motion.svg
            key="af-auth"
            viewBox="0 0 1000 640"
            className="w-full h-full object-contain select-none"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <defs>
              <filter id="afFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="14" />
              </filter>
              <filter id="afGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="afPillShadow" x="-15%" y="-20%" width="130%" height="150%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.15" />
              </filter>
              <linearGradient id="afPanelGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.98)" />
                <stop offset="100%" stopColor="rgba(240, 249, 255, 0.92)" />
              </linearGradient>
              <linearGradient id="afVaultTop" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#FEF3C7" />
              </linearGradient>
              <linearGradient id="afVaultSide" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <pattern id="afDotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1" fill="#2B66FF" opacity="0.10" />
              </pattern>
            </defs>

            {/* Blueprint Grid & Floor Shadows */}
            <rect x="40" y="40" width="920" height="560" fill="url(#afDotGrid)" opacity="0.6" />
            <ellipse cx="490" cy="510" rx="260" ry="45" fill="rgba(245, 158, 11, 0.20)" filter="url(#afFloorShadow)" />
            <ellipse cx="490" cy="510" rx="150" ry="26" fill="rgba(239, 68, 68, 0.22)" filter="url(#afFloorShadow)" />

            {/* Guide Rails */}
            <line x1="140" y1="280" x2="490" y2="460" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />
            <line x1="490" y1="460" x2="860" y2="280" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />

            {/* 3D Isometric Tarpit Containment Vault & Circular Orbit Coils (Center at 490, 395) */}
            <g transform="translate(490, 395)">
              {/* Concentric Tarpit Latency Spiral Coils with Orbiting Packets */}
              <g transform="scale(1.30, 0.62)">
                {[55, 110, 165, 215].map((r, i) => (
                  <circle
                    key={i}
                    cx="0"
                    cy="0"
                    r={r}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="2.0"
                    strokeDasharray="6 8"
                    opacity={0.38 + i * 0.12}
                  />
                ))}

                {/* Slow Viscous Energy Cycle */}
                <motion.circle
                  cx="0"
                  cy="0"
                  r="165"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="3.2"
                  strokeDasharray="70 200"
                  animate={{ strokeDashoffset: [0, 540] }}
                  transition={{ duration: 7.2, repeat: Infinity, ease: 'linear' }}
                />

                {/* 14 Trapped Brute-Force Packets Rotating with Exact Proper Gaps & Perfect Center Anchor (0, 0) */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="12s"
                    repeatCount="indefinite"
                  />
                  {/* Track 1: Inner Orbit (r=110) — 6 nodes spaced strictly at 60° intervals */}
                  {[
                    { x: 110, y: 0 },
                    { x: 55, y: 95.3 },
                    { x: -55, y: 95.3 },
                    { x: -110, y: 0 },
                    { x: -55, y: -95.3 },
                    { x: 55, y: -95.3 },
                  ].map((pos, idx) => (
                    <g key={`inner-${idx}`}>
                      <circle cx={pos.x} cy={pos.y} r="5.5" fill="#EF4444" />
                      <circle cx={pos.x} cy={pos.y} r="2.5" fill="#FFFFFF" />
                    </g>
                  ))}

                  {/* Track 2: Outer Orbit (r=165) — 8 nodes spaced strictly at 45° intervals (offset 22.5°) */}
                  {[
                    { x: 152.4, y: 63.1 },
                    { x: 63.1, y: 152.4 },
                    { x: -63.1, y: 152.4 },
                    { x: -152.4, y: 63.1 },
                    { x: -152.4, y: -63.1 },
                    { x: -63.1, y: -152.4 },
                    { x: 63.1, y: -152.4 },
                    { x: 152.4, y: -63.1 },
                  ].map((pos, idx) => (
                    <g key={`outer-${idx}`}>
                      <circle cx={pos.x} cy={pos.y} r="5.0" fill="#F59E0B" />
                      <circle cx={pos.x} cy={pos.y} r="2.0" fill="#FFFFFF" />
                    </g>
                  ))}
                </g>
              </g>

              {/* 3D Isometric Tarpit Vault Hexagon/Cube Base (Perfect 2:1 Geometry) */}
              {/* Vault Floor Contact Shadow */}
              <ellipse cx="0" cy="105" rx="75" ry="25" fill="#B45309" opacity="0.35" filter="url(#afFloorShadow)" />

              {/* Top Cap Rhombus */}
              <polygon
                points="-70,0 0,-35 70,0 0,35"
                fill="url(#afVaultTop)"
                stroke="#D97706"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              {/* Left Front Facet */}
              <polygon
                points="-70,0 0,35 0,105 -70,70"
                fill="url(#afVaultSide)"
                stroke="#B45309"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              {/* Right Front Facet */}
              <polygon
                points="0,35 70,0 70,70 0,105"
                fill="#92400E"
                stroke="#B45309"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />

              {/* Amber Quarantine Padlock/Lock Core on Vault Front Seam */}
              <g transform="translate(0, 65)">
                <circle cx="0" cy="0" r="16" fill="#F59E0B" filter="url(#afGlow)" />
                <circle cx="0" cy="0" r="10" fill="#78350F" />
                <rect x="-3" y="-3" width="6" height="12" rx="1.5" fill="#FDE68A" />
                <circle cx="0" cy="-3" r="3" fill="#FDE68A" />
              </g>

              {/* 3D Isometric Defensive Shield on the Right Side */}
              <g transform="translate(195, -30)">
                <ellipse cx="0" cy="85" rx="36" ry="10" fill="rgba(245, 158, 11, 0.2)" filter="url(#afFloorShadow)" />
                <polygon points="-24,0 0,-14 24,0 0,10" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" strokeLinejoin="round" />
                <polygon points="-24,0 0,10 0,65 -24,42" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" strokeLinejoin="round" />
                <polygon points="0,10 24,0 24,42 0,65" fill="#FDE68A" stroke="#D97706" strokeWidth="2" strokeLinejoin="round" />
                {/* Hazard Exclamation Icon */}
                <circle cx="0" cy="35" r="3" fill="#D97706" />
                <line x1="0" y1="18" x2="0" y2="28" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
                <circle cx="0" cy="10" r="3" fill="#EF4444" />
              </g>
            </g>

            {/* --- LEFT 3D-ALIGNED SIDE BOX: FAILED AUTHENTICATION // TARPIT RULE --- */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Suspended Ceiling Mount: Connected directly to top center edge */}
              <line x1="182" y1="10" x2="182" y2="76" stroke="#2B66FF" strokeWidth="2" strokeDasharray="3 4" opacity="0.5" />
              <rect x="172" y="6" width="20" height="7" rx="2" fill="#2B66FF" />
              <circle cx="182" cy="9.5" r="2" fill="#38BDF8" />

              {/* Floor Anchor Line */}
              <line x1="182" y1="252" x2="182" y2="301" stroke="#2B66FF" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.4" />
              <ellipse cx="182" cy="301" rx="8" ry="4" fill="none" stroke="#2B66FF" strokeWidth="1.2" opacity="0.5" />

              <g transform="translate(45, 145) skewY(-26.565)">
                <rect x="0" y="0" width="274" height="175" rx="8" fill="url(#afPanelGlass)" stroke="#2B66FF" strokeWidth="2.2" filter="url(#afPillShadow)" />
                <rect x="5" y="5" width="264" height="165" rx="5" fill="none" stroke="#F59E0B" strokeWidth="1.4" opacity="0.8" />
                
                {/* Header: Exact Title */}
                <circle cx="18" cy="20" r="5" fill="#EF4444" />
                <text x="32" y="24" fontSize="14" fill="#0F172A" fontWeight="900" fontFamily="monospace">
                  FAILED AUTHENTICATION
                </text>
                <line x1="10" y1="32" x2="264" y2="32" stroke="#2B66FF" strokeWidth="1.4" opacity="0.35" />

                {/* Sub-badge: Exact Tag */}
                <rect x="12" y="38" width="105" height="22" rx="4" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.2" />
                <text x="20" y="53" fontSize="12" fill="#B45309" fontWeight="900" fontFamily="monospace">
                  TARPIT RULE
                </text>

                {/* Telemetry Data Fields */}
                <text x="12" y="78" fontSize="13.5" fill="#EF4444" fontWeight="900" fontFamily="monospace">
                  • 14 FAILED ATTEMPTS
                </text>
                <text x="12" y="99" fontSize="13" fill="#1E3A8A" fontWeight="900" fontFamily="monospace">
                  TYPE: BRUTE-FORCE BURST
                </text>
                <text x="12" y="119" fontSize="12.5" fill="#64748B" fontWeight="800" fontFamily="monospace">
                  BURST: 35 REQ / SEC
                </text>

                {/* Status Tag */}
                <rect x="12" y="134" width="250" height="26" rx="4" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.4" />
                <text x="22" y="151" fontSize="12.5" fill="#DC2626" fontWeight="900" fontFamily="monospace">
                  ATTACK INTERCEPTED
                </text>
              </g>
            </motion.g>

            {/* --- RIGHT 3D-ALIGNED SIDE BOX: TARPIT PROTOCOL --- */}
            {/* 100% 3D Isometric Aligned Parallel to Left Box (skewY -26.565) */}
            <motion.g
              animate={{ y: [0, -3.8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
            >
              {/* Suspended Ceiling Mount: Connected directly to top center edge */}
              <line x1="817" y1="10" x2="817" y2="126" stroke="#2B66FF" strokeWidth="2" strokeDasharray="3 4" opacity="0.5" />
              <rect x="807" y="6" width="20" height="7" rx="2" fill="#2B66FF" />
              <circle cx="817" cy="9.5" r="2" fill="#38BDF8" />

              {/* Floor Anchor Line */}
              <line x1="817" y1="301" x2="817" y2="360" stroke="#2B66FF" strokeWidth="1.4" strokeDasharray="3 4" opacity="0.4" />
              <ellipse cx="817" cy="360" rx="8" ry="4" fill="none" stroke="#2B66FF" strokeWidth="1.2" opacity="0.5" />

              <g transform="translate(680, 195) skewY(-26.565)">
                <rect x="0" y="0" width="274" height="175" rx="8" fill="url(#afPanelGlass)" stroke="#2B66FF" strokeWidth="2.2" filter="url(#afPillShadow)" />
                <rect x="5" y="5" width="264" height="165" rx="5" fill="none" stroke="#F59E0B" strokeWidth="1.4" opacity="0.8" />
                
                {/* Header */}
                <circle cx="18" cy="20" r="5" fill="#F59E0B" />
                <text x="32" y="24" fontSize="14" fill="#0F172A" fontWeight="900" fontFamily="monospace">
                  TARPIT PROTOCOL
                </text>
                <line x1="10" y1="32" x2="264" y2="32" stroke="#2B66FF" strokeWidth="1.4" opacity="0.35" />

                {/* Sub-badge: QUARANTINE ACTIVE */}
                <rect x="12" y="38" width="145" height="22" rx="4" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.2" />
                <text x="20" y="53" fontSize="12" fill="#B45309" fontWeight="900" fontFamily="monospace">
                  QUARANTINE ACTIVE
                </text>

                {/* 4 Animated Latency Holding Bars */}
                <g transform="translate(185, 38)">
                  {[
                    { x: 0, h: 26, delay: 0 },
                    { x: 14, h: 18, delay: 0.2 },
                    { x: 28, h: 28, delay: 0.4 },
                    { x: 42, h: 20, delay: 0.1 },
                  ].map((bar, idx) => (
                    <motion.rect
                      key={idx}
                      x={bar.x}
                      y={30 - bar.h}
                      width="8"
                      height={bar.h}
                      rx="2"
                      fill="#F59E0B"
                      animate={{ height: [bar.h, bar.h * 0.4, bar.h] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: bar.delay }}
                    />
                  ))}
                </g>

                {/* Telemetry Data Fields */}
                <text x="12" y="78" fontSize="13" fill="#D97706" fontWeight="900" fontFamily="monospace">
                  DELAY: 5,000ms / REQ
                </text>
                <text x="12" y="99" fontSize="13" fill="#1E3A8A" fontWeight="900" fontFamily="monospace">
                  HOLD: EXPONENTIAL BACKOFF
                </text>
                <text x="12" y="119" fontSize="12.5" fill="#64748B" fontWeight="800" fontFamily="monospace">
                  CPU OVERHEAD: 0.001%
                </text>

                {/* Status Tag */}
                <rect x="12" y="134" width="250" height="26" rx="4" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.4" />
                <text x="22" y="151" fontSize="12.5" fill="#B45309" fontWeight="900" fontFamily="monospace">
                  TARPIT RULE // QUARANTINE
                </text>
              </g>
            </motion.g>

            {/* Top Telemetry Status Badge */}
            <g transform="translate(325, 20)">
              <rect x="0" y="0" width="350" height="36" rx="8" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="2" filter="url(#afPillShadow)" />
              <circle cx="20" cy="18" r="5" fill="#F59E0B" />
              <text x="34" y="23" fontSize="12.5" fill="#0F172A" fontWeight="900" fontFamily="monospace" letterSpacing="0.02em">
                FAILED AUTH // TARPIT RULE (QUARANTINE)
              </text>
            </g>
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
};
