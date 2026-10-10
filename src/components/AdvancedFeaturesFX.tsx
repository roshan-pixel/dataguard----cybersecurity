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
            Story: Malicious IP detected -> Intercepted at Edge -> Blocked by Hero Shield
            ========================================================================= */}
        {selectedAlert === 'ip' && (
          <motion.svg
            key="af-ip"
            viewBox="0 0 1000 640"
            className="w-full h-full object-contain select-none"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <defs>
              {/* Soft Ground Floor Shadow */}
              <filter id="afFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
              </filter>

              {/* High-Tech Card Shadow */}
              <filter id="afCardShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.09" />
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
              </filter>

              {/* Hero Shield 3D Shadow */}
              <filter id="afShieldShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#1E3A8A" floodOpacity="0.28" />
              </filter>

              {/* Subtle Cyan/Blue Glow */}
              <filter id="afGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Deflection Spark Glow */}
              <filter id="afSparkGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Glassmorphic Card Fill */}
              <linearGradient id="afCardGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.94" />
              </linearGradient>

              {/* Hero Shield Bevel Gradients */}
              <linearGradient id="afShieldTopBevel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#EFF6FF" />
              </linearGradient>
              <linearGradient id="afShieldLeftFace" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F0F7FF" />
                <stop offset="100%" stopColor="#DBEAFE" />
              </linearGradient>
              <linearGradient id="afShieldRightFace" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="50%" stopColor="#BFDBFE" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>

              {/* Cohesive Brand Blue Radar Sweep */}
              <radialGradient id="afRadarSweep" cx="0" cy="0" r="220" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.75" />
                <stop offset="45%" stopColor="#2B66FF" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#2B66FF" stopOpacity="0" />
              </radialGradient>

              {/* Laser Beam Gradient: Threat Red to Containment Cyan */}
              <linearGradient id="afLaserBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#EF4444" stopOpacity="0.8" />
                <stop offset="90%" stopColor="#38BDF8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>

              {/* Background Dot Grid */}
              <pattern id="afDotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1.1" fill="#2B66FF" opacity="0.08" />
              </pattern>
            </defs>

            {/* --- BACKGROUND FOUNDATION --- */}
            <rect x="40" y="40" width="920" height="560" fill="url(#afDotGrid)" />

            {/* Floor Contact Shadows */}
            <ellipse cx="500" cy="515" rx="270" ry="42" fill="#1E3A8A" opacity="0.18" filter="url(#afFloorShadow)" />
            <ellipse cx="500" cy="515" rx="170" ry="26" fill="#2B66FF" opacity="0.22" filter="url(#afFloorShadow)" />

            {/* Ground Alignment Grid Rails */}
            <line x1="160" y1="360" x2="500" y2="480" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.22" />
            <line x1="500" y1="480" x2="840" y2="360" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.22" />

            {/* --- CENTER STAGE: RADAR SCANNER HUB (500, 410) --- */}
            <g transform="translate(500, 410) rotate(-3)">
              <g transform="scale(1.30, 0.63)">
                {/* Concentric Range Rings in Cohesive Brand Cobalt */}
                {[55, 110, 165, 215].map((r, i) => (
                  <circle
                    key={i}
                    cx="0"
                    cy="0"
                    r={r}
                    fill="none"
                    stroke="#2B66FF"
                    strokeWidth="2.0"
                    strokeDasharray="4 4"
                    opacity={0.35 + i * 0.12}
                  />
                ))}
                {/* Outer Perimeter Range Ring */}
                <circle cx="0" cy="0" r="220" fill="none" stroke="#2B66FF" strokeWidth="2.2" opacity="0.55" />

                {/* Rotating Sweep Beam: Centered Strictly at (0, 0) */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="3.4s"
                    repeatCount="indefinite"
                  />
                  <path d="M 0 0 L 220 0 A 220 220 0 0 1 110 190.5 Z" fill="url(#afRadarSweep)" />
                  <line x1="0" y1="0" x2="220" y2="0" stroke="#60A5FA" strokeWidth="3.2" opacity="1" />
                  <line x1="0" y1="0" x2="220" y2="0" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />
                </g>

                {/* Central Gateway Core */}
                <circle cx="0" cy="0" r="18" fill="#1E3A8A" stroke="#2B66FF" strokeWidth="2.4" />
                <circle cx="0" cy="0" r="9" fill="#38BDF8" filter="url(#afGlow)" />
                <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
              </g>

              {/* --- THREAT NODE ON RADAR DISH: (-130, 35) local -> ~ (331, 432) global --- */}
              <g transform="translate(-130, 35)">
                {/* Expanding Warning Rings */}
                <motion.circle
                  cx="0"
                  cy="0"
                  r="9"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="2.2"
                  animate={{ r: [9, 28], opacity: [0.95, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                />
                <motion.circle
                  cx="0"
                  cy="0"
                  r="9"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="1.6"
                  animate={{ r: [9, 22], opacity: [0.8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4, ease: 'easeOut' }}
                />
                {/* Threat Node Solid Sphere */}
                <circle cx="0" cy="0" r="9" fill="#EF4444" />
                <circle cx="-2.5" cy="-2.5" r="2.8" fill="#FFFFFF" opacity="0.75" />
              </g>

              {/* --- INTERCEPTION BEAM: Direct path from Threat Node (-130, 35) to Hero Shield (45, -55) --- */}
              {/* Outer Beam Energy Halo */}
              <line
                x1="-130"
                y1="35"
                x2="45"
                y2="-55"
                stroke="#EF4444"
                strokeWidth="5"
                opacity="0.32"
                filter="url(#afGlow)"
              />
              <line
                x1="-130"
                y1="35"
                x2="45"
                y2="-55"
                stroke="url(#afLaserBeam)"
                strokeWidth="3.2"
                strokeDasharray="6 4"
                opacity="0.95"
              />
              {/* High-Speed Threat Data Packet Intercepted in Transit */}
              <motion.circle
                cx="-130"
                cy="35"
                r="5.5"
                fill="#EF4444"
                filter="url(#afGlow)"
                animate={{ cx: [-130, 45], cy: [35, -55], opacity: [1, 0.4] }}
                transition={{ duration: 1.0, repeat: Infinity, ease: 'easeIn' }}
              />
              <motion.circle
                cx="-130"
                cy="35"
                r="2.5"
                fill="#FFFFFF"
                animate={{ cx: [-130, 45], cy: [35, -55], opacity: [1, 0.4] }}
                transition={{ duration: 1.0, repeat: Infinity, ease: 'easeIn' }}
              />

              {/* --- HERO DEFENSIVE SHIELD: Centered on Dish at (545, 345) global -> (45, -60) local --- */}
              {/* Perfectly clear of Right Card (which begins at x=675) with zero overlap */}
              <g transform="translate(45, -60) scale(1.15)" filter="url(#afShieldShadow)">
                {/* Shield Floor Contact Shadow */}
                <ellipse cx="0" cy="78" rx="34" ry="9" fill="#1E3A8A" opacity="0.35" filter="url(#afFloorShadow)" />

                {/* Deflection Barrier Energy Shockwave at Point of Impact */}
                <motion.path
                  d="M -36,-10 Q -46,30 -36,65"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="3.2"
                  filter="url(#afSparkGlow)"
                  animate={{ opacity: [0.3, 1, 0.3], strokeWidth: [2.5, 4.2, 2.5] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Impact Sparks Deflecting Malicious Traffic */}
                <g transform="translate(-32, 26)">
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="6"
                    fill="#38BDF8"
                    filter="url(#afGlow)"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                  <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                  <motion.line
                    x1="0"
                    y1="0"
                    x2="-10"
                    y2="-12"
                    stroke="#38BDF8"
                    strokeWidth="1.6"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  />
                  <motion.line
                    x1="0"
                    y1="0"
                    x2="-12"
                    y2="8"
                    stroke="#38BDF8"
                    strokeWidth="1.6"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                  />
                </g>

                {/* 3D Volumetric Hero Shield Body (Dimensions: ~62px width, ~76px height) */}
                {/* Top Extruded Bevel */}
                <polygon
                  points="-30,-4 0,-18 30,-4 0,8"
                  fill="url(#afShieldTopBevel)"
                  stroke="#2B66FF"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                {/* Left Beveled Facet (Specular Highlight) */}
                <polygon
                  points="-30,-4 0,8 0,68 -30,42"
                  fill="url(#afShieldLeftFace)"
                  stroke="#2B66FF"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                {/* Right Beveled Facet (Rich Ambient Shading) */}
                <polygon
                  points="0,8 30,-4 30,42 0,68"
                  fill="url(#afShieldRightFace)"
                  stroke="#2B66FF"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />

                {/* Center Defense Emblem: Shield Crest + Emerald Checkmark */}
                <circle cx="0" cy="30" r="16" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="1.8" />
                <circle cx="0" cy="30" r="12" fill="#ECFDF5" />
                <path
                  d="M -6,30 L -1,35 L 7,24"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Top Specular Edge Highlight */}
                <line x1="-24" y1="-2" x2="0" y2="8" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9" strokeLinecap="round" />
              </g>
            </g>

            {/* --- MEANINGFUL DATA CONNECTOR LINES --- */}
            {/* Left Connector: Links Left Threat Card bottom (190, 225) to Threat Node (331, 432) */}
            <path
              d="M 190 225 C 190 320, 250 432, 331 432"
              fill="none"
              stroke="#EF4444"
              strokeWidth="2.0"
              strokeDasharray="5 5"
              opacity="0.65"
            />
            {/* Animated Packet along Left Connector */}
            <motion.circle
              cx="190"
              cy="225"
              r="3.5"
              fill="#EF4444"
              animate={{ cx: [190, 240, 331], cy: [225, 360, 432] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Right Connector: Links Right Card bottom (810, 225) to Hero Shield (545, 345) */}
            <path
              d="M 810 225 C 810 305, 660 345, 545 345"
              fill="none"
              stroke="#10B981"
              strokeWidth="2.0"
              strokeDasharray="5 5"
              opacity="0.65"
            />
            {/* Animated Packet along Right Connector */}
            <motion.circle
              cx="810"
              cy="225"
              r="3.5"
              fill="#10B981"
              animate={{ cx: [810, 710, 545], cy: [225, 310, 345] }}
              transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* =========================================================================
                LEFT CARD: SUSPICIOUS IP DETECTED (2-3 Large, High-Contrast Legible Lines)
                ========================================================================= */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <g transform="translate(55, 75)" filter="url(#afCardShadow)">
                {/* Card Base */}
                <rect x="0" y="0" width="270" height="145" rx="10" fill="url(#afCardGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                {/* Top Accent Strip: Threat Alert Red */}
                <path d="M 0 10 Q 0 0 10 0 L 260 0 Q 270 0 270 10 L 270 12 L 0 12 Z" fill="#EF4444" />

                {/* Line 1: Header Category Pill */}
                <g transform="translate(16, 26)">
                  <rect x="0" y="0" width="138" height="22" rx="11" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
                  <circle cx="11" cy="11" r="4" fill="#EF4444" />
                  <text x="21" y="15" fontSize="11" fill="#DC2626" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.04em">
                    THREAT DETECTED
                  </text>
                </g>

                {/* Line 2: Large Crystal-Clear IP (20.5px Bold) */}
                <text
                  x="16"
                  y="77"
                  fontSize="20.5"
                  fill="#0F172A"
                  fontWeight="800"
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                  letterSpacing="-0.02em"
                >
                  198.51.100.24
                </text>

                {/* Line 3: Clean Plain-Language Detail */}
                <text
                  x="16"
                  y="100"
                  fontSize="13.5"
                  fill="#475569"
                  fontWeight="600"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  High-Risk Proxy · Anomaly Detected
                </text>

                {/* Bottom Divider & Action Pill */}
                <line x1="16" y1="112" x2="254" y2="112" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="16" y="118" width="130" height="18" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                <text
                  x="23"
                  y="131"
                  fontSize="10.5"
                  fill="#64748B"
                  fontWeight="700"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  Flagged for Edge Isolation
                </text>
              </g>
            </motion.g>

            {/* =========================================================================
                RIGHT CARD: BLOCKED AT EDGE (2-3 Large, High-Contrast Legible Lines)
                ========================================================================= */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
            >
              <g transform="translate(675, 75)" filter="url(#afCardShadow)">
                {/* Card Base */}
                <rect x="0" y="0" width="270" height="145" rx="10" fill="url(#afCardGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                {/* Top Accent Strip: Edge Defense Green */}
                <path d="M 0 10 Q 0 0 10 0 L 260 0 Q 270 0 270 10 L 270 12 L 0 12 Z" fill="#10B981" />

                {/* Line 1: Header Category Pill */}
                <g transform="translate(16, 26)">
                  <rect x="0" y="0" width="144" height="22" rx="11" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                  <circle cx="11" cy="11" r="4" fill="#10B981" />
                  <text x="21" y="15" fontSize="11" fill="#047857" fontWeight="700" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.04em">
                    MITIGATED AT EDGE
                  </text>
                </g>

                {/* Line 2: Large Hero Metric (20.5px Bold) */}
                <text
                  x="16"
                  y="77"
                  fontSize="20.5"
                  fill="#0F172A"
                  fontWeight="800"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  letterSpacing="-0.02em"
                >
                  Response: <tspan fill="#059669">1.2 ms</tspan>
                </text>

                {/* Line 3: Clean Plain-Language Detail */}
                <text
                  x="16"
                  y="100"
                  fontSize="13.5"
                  fill="#475569"
                  fontWeight="600"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  Zero-Trust Edge Quarantine
                </text>

                {/* Bottom Divider & Action Pill */}
                <line x1="16" y1="110" x2="254" y2="110" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="16" y="117" width="155" height="18" rx="4" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                <text
                  x="23"
                  y="130"
                  fontSize="10.5"
                  fill="#059669"
                  fontWeight="700"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  Protected · Access Denied
                </text>
              </g>
            </motion.g>
          </motion.svg>
        )}

        {/* =========================================================================
            STATE 2: UNKNOWN DEVICE // ACTIVE FILTER
            Story: Unenrolled device detected -> Hardware FIDO2 Security Key Enforced
            ========================================================================= */}
        {selectedAlert === 'device' && (
          <motion.svg
            key="af-device"
            viewBox="0 0 1000 640"
            className="w-full h-full object-contain select-none"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <defs>
              <filter id="afFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
              </filter>
              <filter id="afCardShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.09" />
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
              </filter>
              <filter id="afShieldShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#1E3A8A" floodOpacity="0.28" />
              </filter>
              <filter id="afGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="afKeyGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="afCardGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.94" />
              </linearGradient>

              {/* FIDO2 Gold Connector & Capacitive Touch Sensor */}
              <linearGradient id="afKeyGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>

              {/* FIDO2 Matte Slate Key Body */}
              <linearGradient id="afKeyBody" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0A0F1D" />
              </linearGradient>

              {/* Metallic Space-Gray Laptop Chassis */}
              <linearGradient id="afLaptopChassis" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="35%" stopColor="#F1F5F9" />
                <stop offset="100%" stopColor="#CBD5E1" />
              </linearGradient>
              <linearGradient id="afLaptopChamferLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>
              <linearGradient id="afLaptopChamferRight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#64748B" />
              </linearGradient>

              <pattern id="afDotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1.1" fill="#2B66FF" opacity="0.08" />
              </pattern>
            </defs>

            {/* Blueprint Grid & Ground Floor Shadows */}
            <rect x="40" y="40" width="920" height="560" fill="url(#afDotGrid)" />
            {/* Amber warning shadow under laptop, Cobalt security shadow under key & scan rings */}
            <ellipse cx="430" cy="515" rx="220" ry="38" fill="#F59E0B" opacity="0.14" filter="url(#afFloorShadow)" />
            <ellipse cx="510" cy="515" rx="270" ry="42" fill="#1E3A8A" opacity="0.20" filter="url(#afFloorShadow)" />

            {/* Ground Alignment Rails */}
            <line x1="160" y1="360" x2="500" y2="480" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.22" />
            <line x1="500" y1="480" x2="840" y2="360" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.22" />

            {/* --- CENTER STAGE: BIOMETRIC & IDENTITY SCAN RINGS --- */}
            <g transform="translate(470, 420) rotate(-3)">
              <g transform="scale(1.30, 0.63)">
                {[70, 130, 195, 245].map((r, i) => (
                  <circle
                    key={i}
                    cx="0"
                    cy="0"
                    r={r}
                    fill="none"
                    stroke="#2B66FF"
                    strokeWidth="2.0"
                    strokeDasharray="5 5"
                    opacity={0.32 + i * 0.12}
                  />
                ))}
                {/* Rotating Cyan Identity Radar Scan Beam */}
                <motion.circle
                  cx="0"
                  cy="0"
                  r="195"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.8"
                  strokeDasharray="70 190"
                  animate={{ strokeDashoffset: [0, 520] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
                />
              </g>
            </g>

            {/* --- HERO OBJECT 1: 3D METALLIC WORKSTATION LAPTOP (400, 390) --- */}
            <g transform="translate(400, 390)">
              {/* Ground Contact Shadow directly under Laptop Chassis */}
              <polygon points="-125,25 0,-40 125,25 0,90" fill="#0F172A" opacity="0.32" filter="url(#afFloorShadow)" />

              {/* 3D Base Chassis - Top Anodized Aluminum Deck */}
              <polygon
                points="-115,18 0,-36 115,18 0,72"
                fill="url(#afLaptopChassis)"
                stroke="#94A3B8"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              {/* Left Front Chamfer / Thickness Extrusion */}
              <polygon
                points="-115,18 0,72 0,85 -115,31"
                fill="url(#afLaptopChamferLeft)"
                stroke="#94A3B8"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Right Front Chamfer / Thickness Extrusion */}
              <polygon
                points="0,72 115,18 115,31 0,85"
                fill="url(#afLaptopChamferRight)"
                stroke="#64748B"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Specular Metallic Edge Highlight along Top Rim */}
              <line x1="-115" y1="18" x2="0" y2="72" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" opacity="0.95" />

              {/* Recessed Dark Titanium Keyboard Bed */}
              <polygon
                points="-88,14 0,-26 88,14 0,54"
                fill="#0F172A"
                stroke="#334155"
                strokeWidth="1.4"
              />
              {/* Backlit Chiclet Keyboard Grid Lines */}
              {[-60, -36, -12, 12, 36, 60].map((kx, idx) => (
                <line
                  key={idx}
                  x1={kx}
                  y1={-2 + idx * 4}
                  x2={kx + 16}
                  y2={18 + idx * 4}
                  stroke="#38BDF8"
                  strokeWidth="1.2"
                  opacity="0.65"
                />
              ))}

              {/* Integrated Trackpad */}
              <polygon
                points="-26,44 0,33 26,44 0,55"
                fill="#E2E8F0"
                stroke="#94A3B8"
                strokeWidth="1.2"
              />

              {/* USB-C Port Cutout on Right Chassis Flank (Facing the Security Key) */}
              <g transform="translate(100, 22)">
                <rect x="0" y="-3" width="9" height="5" rx="1.5" fill="#0A0F1D" stroke="#64748B" strokeWidth="1" />
                <rect x="2" y="-1.5" width="5" height="2" rx="0.5" fill="#FBBF24" />
              </g>

              {/* Solid Mechanical Cylindrical Display Hinge */}
              <rect x="-65" y="-40" width="130" height="8" rx="4" fill="#475569" stroke="#334155" strokeWidth="1.4" />
              <line x1="-60" y1="-36" x2="60" y2="-36" stroke="#94A3B8" strokeWidth="1.2" opacity="0.9" />

              {/* 3D Upright Display Screen - Physically Attached to Hinge */}
              <g transform="translate(-85, -158)">
                {/* Aluminum Outer Lid Bezel */}
                <rect x="0" y="0" width="170" height="122" rx="7" fill="#0F172A" stroke="#334155" strokeWidth="2.2" filter="url(#afCardShadow)" />
                {/* Display Screen Deep OLED Glass */}
                <rect x="6" y="6" width="158" height="110" rx="4" fill="#080C16" />

                {/* Top Traffic Lights */}
                <circle cx="16" cy="16" r="3.5" fill="#EF4444" />
                <circle cx="26" cy="16" r="3.5" fill="#F59E0B" />
                <circle cx="36" cy="16" r="3.5" fill="#10B981" />

                {/* Amber/Red Alert Header Pill */}
                <g transform="translate(14, 25)">
                  <rect x="0" y="0" width="142" height="18" rx="9" fill="#450A0A" stroke="#EF4444" strokeWidth="1" />
                  <circle cx="10" cy="9" r="3" fill="#EF4444" />
                  <text x="18" y="12.5" fontSize="9" fill="#FCA5A5" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="0.04em">
                    UNENROLLED DEVICE
                  </text>
                </g>

                {/* Hero Client Identification (Large, Crisp, High-Contrast) */}
                <text x="14" y="62" fontSize="15" fill="#FFFFFF" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.01em">
                  macOS Sonoma
                </text>
                <text x="14" y="78" fontSize="10.5" fill="#94A3B8" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Hardware ID: Unrecognized
                </text>

                {/* FIDO2 Challenge Action Prompt Bar */}
                <rect x="10" y="86" width="150" height="24" rx="4" fill="#172554" stroke="#38BDF8" strokeWidth="1.2" />
                <circle cx="21" cy="98" r="3.5" fill="#FBBF24" />
                <text x="30" y="102" fontSize="10" fill="#38BDF8" fontWeight="800" fontFamily="system-ui, sans-serif">
                  FIDO2 Prompt: Touch Key...
                </text>
              </g>
            </g>

            {/* --- HERO OBJECT 2: PROMINENT 3D FLOATING FIDO2 SECURITY KEY TOKEN (610, 335) --- */}
            <motion.g
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <g transform="translate(610, 335)">
                {/* Floating Shadow under Key */}
                <ellipse cx="0" cy="108" rx="30" ry="8" fill="#1E3A8A" opacity="0.28" filter="url(#afFloorShadow)" />

                {/* Gold USB-C Connector Tongue (Pointing toward the Laptop's USB Port) */}
                <g transform="translate(-30, 24) rotate(-22)">
                  <rect x="0" y="-9" width="22" height="18" rx="2" fill="url(#afKeyGold)" stroke="#B45309" strokeWidth="1.2" />
                  <line x1="5" y1="-5" x2="17" y2="-5" stroke="#78350F" strokeWidth="1.2" />
                  <line x1="5" y1="0" x2="17" y2="0" stroke="#78350F" strokeWidth="1.2" />
                  <line x1="5" y1="5" x2="17" y2="5" stroke="#78350F" strokeWidth="1.2" />
                </g>

                {/* Security Key Main Body (Substantial 56x94mm Token) */}
                <rect
                  x="-28"
                  y="-8"
                  width="56"
                  height="94"
                  rx="10"
                  fill="url(#afKeyBody)"
                  stroke="#38BDF8"
                  strokeWidth="2.2"
                  filter="url(#afShieldShadow)"
                />

                {/* Top Bevel Highlight */}
                <path d="M -26 0 Q -26 -6 -20 -6 L 20 -6 Q 26 -6 26 0" fill="none" stroke="#60A5FA" strokeWidth="1.6" />

                {/* Cryptographic Shield Emblem at Key Top */}
                <path
                  d="M 0,5 L 9,9 L 9,18 Q 0,24 0,24 Q 0,24 -9,18 L -9,9 Z"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle cx="0" cy="13" r="2.5" fill="#38BDF8" />

                {/* Golden Capacitive Touch Sensor (Center) with Radiating Auras */}
                <g transform="translate(0, 42)">
                  {/* Expanding Capacitive Touch Pulse Waves */}
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="15"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2.6"
                    animate={{ r: [15, 36], opacity: [0.95, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                  />
                  <motion.circle
                    cx="0"
                    cy="0"
                    r="15"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="2.0"
                    animate={{ r: [15, 28], opacity: [0.85, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.35, ease: 'easeOut' }}
                  />

                  {/* Gold Capacitive Sensor Brass Button */}
                  <circle cx="0" cy="0" r="15" fill="url(#afKeyGold)" stroke="#B45309" strokeWidth="2.0" />
                  <circle cx="0" cy="0" r="11" fill="none" stroke="#78350F" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="0" cy="0" r="7" fill="url(#afKeyGold)" />

                  {/* Fingerprint Touch Icon */}
                  <path d="M -4,0 Q 0,-4 4,0 Q 0,4 -4,0" fill="none" stroke="#78350F" strokeWidth="1.6" strokeLinecap="round" />
                </g>

                {/* Lanyard Cutout Loop at Bottom */}
                <circle cx="0" cy="74" r="8" fill="#0A0F1D" stroke="#38BDF8" strokeWidth="1.6" />
                <circle cx="0" cy="74" r="4.5" fill="#1E293B" />
              </g>
            </motion.g>

            {/* --- ENCRYPTED WEBAUTHN DATA RAY: Key Touch Sensor to Laptop USB Port --- */}
            <line
              x1="575"
              y1="365"
              x2="505"
              y2="410"
              stroke="#38BDF8"
              strokeWidth="3.0"
              strokeDasharray="5 4"
              filter="url(#afGlow)"
              opacity="0.9"
            />
            {/* Glowing Handshake Packets Traveling from Key to Laptop */}
            <motion.circle
              cx="575"
              cy="365"
              r="4.5"
              fill="#38BDF8"
              filter="url(#afGlow)"
              animate={{ cx: [575, 505], cy: [365, 410], opacity: [1, 0.4] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut' }}
            />
            <motion.circle
              cx="575"
              cy="365"
              r="2.2"
              fill="#FFFFFF"
              animate={{ cx: [575, 505], cy: [365, 410], opacity: [1, 0.4] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut' }}
            />

            {/* --- PURPOSEFUL DATA CONNECTOR LINES --- */}
            {/* Left Connector (Amber): Links Left Risk Card to Laptop */}
            <path
              d="M 190 220 C 190 300, 290 330, 350 330"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2.2"
              strokeDasharray="5 5"
              opacity="0.8"
            />
            <motion.circle
              cx="190"
              cy="220"
              r="3.5"
              fill="#F59E0B"
              animate={{ cx: [190, 270, 350], cy: [220, 280, 330] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Right Connector (Cobalt): Links Right Challenge Card to FIDO2 Key */}
            <path
              d="M 810 220 C 810 290, 690 340, 640 340"
              fill="none"
              stroke="#2B66FF"
              strokeWidth="2.2"
              strokeDasharray="5 5"
              opacity="0.8"
            />
            <motion.circle
              cx="810"
              cy="220"
              r="3.5"
              fill="#2B66FF"
              animate={{ cx: [810, 730, 640], cy: [220, 290, 340] }}
              transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* =========================================================================
                LEFT CARD: UNENROLLED DEVICE (Amber Risk State, 2-3 Large High-Contrast Lines)
                ========================================================================= */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <g transform="translate(55, 75)" filter="url(#afCardShadow)">
                <rect x="0" y="0" width="270" height="145" rx="10" fill="url(#afCardGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                {/* Amber Warning Stripe */}
                <path d="M 0 10 Q 0 0 10 0 L 260 0 Q 270 0 270 10 L 270 12 L 0 12 Z" fill="#F59E0B" />

                {/* Line 1: Header Category Pill */}
                <g transform="translate(16, 26)">
                  <rect x="0" y="0" width="144" height="22" rx="11" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
                  <circle cx="11" cy="11" r="4" fill="#F59E0B" />
                  <text x="21" y="15" fontSize="11" fill="#B45309" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em">
                    UNENROLLED DEVICE
                  </text>
                </g>

                {/* Line 2: Large Crystal-Clear Device Name (20.5px Bold) */}
                <text x="16" y="77" fontSize="20.5" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">
                  macOS Sonoma
                </text>

                {/* Line 3: Clean Plain-Language Detail */}
                <text x="16" y="100" fontSize="13.5" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Unrecognized Client Fingerprint
                </text>

                {/* Bottom Divider & Action Pill */}
                <line x1="16" y1="112" x2="254" y2="112" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="16" y="118" width="158" height="18" rx="4" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
                <text x="23" y="131" fontSize="10.5" fill="#B45309" fontWeight="700" fontFamily="system-ui, sans-serif">
                  Zero-Trust Policy Enforced
                </text>
              </g>
            </motion.g>

            {/* =========================================================================
                RIGHT CARD: SECURITY KEY CHALLENGE (Cobalt Challenge Gate, 2-3 Large Lines)
                ========================================================================= */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
            >
              <g transform="translate(675, 75)" filter="url(#afCardShadow)">
                <rect x="0" y="0" width="270" height="145" rx="10" fill="url(#afCardGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                {/* Brand Cobalt Challenge Stripe */}
                <path d="M 0 10 Q 0 0 10 0 L 260 0 Q 270 0 270 10 L 270 12 L 0 12 Z" fill="#2B66FF" />

                {/* Line 1: Header Category Pill */}
                <g transform="translate(16, 26)">
                  <rect x="0" y="0" width="160" height="22" rx="11" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                  <circle cx="11" cy="11" r="4" fill="#2B66FF" />
                  <text x="21" y="15" fontSize="11" fill="#1D4ED8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em">
                    SECURITY KEY CHALLENGE
                  </text>
                </g>

                {/* Line 2: Large Hero Metric (20.5px Bold) */}
                <text x="16" y="77" fontSize="20.5" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">
                  FIDO2 Key Required
                </text>

                {/* Line 3: Clean Plain-Language Detail */}
                <text x="16" y="100" fontSize="13.5" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Touch Security Key to Authenticate
                </text>

                {/* Bottom Divider & Action Pill */}
                <line x1="16" y1="112" x2="254" y2="112" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="16" y="118" width="165" height="18" rx="4" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                <text x="23" y="131" fontSize="10.5" fill="#1D4ED8" fontWeight="700" fontFamily="system-ui, sans-serif">
                  Access Locked · Awaiting Touch
                </text>
              </g>
            </motion.g>
          </motion.svg>
        )}

        {/* =========================================================================
            STATE 3: FAILED AUTHENTICATION // TARPIT RULE
            Story: Brute-force bursts detected -> Held in exponential latency tarpit
            ========================================================================= */}
        {selectedAlert === 'auth' && (
          <motion.svg
            key="af-auth"
            viewBox="0 0 1000 640"
            className="w-full h-full object-contain select-none"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <defs>
              <filter id="afFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
              </filter>
              <filter id="afCardShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0F172A" floodOpacity="0.09" />
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
              </filter>
              <filter id="afShieldShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#B45309" floodOpacity="0.25" />
              </filter>
              <filter id="afGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="afCardGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.94" />
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
              <pattern id="afDotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1.1" fill="#2B66FF" opacity="0.08" />
              </pattern>
            </defs>

            {/* Blueprint Grid & Floor Shadows */}
            <rect x="40" y="40" width="920" height="560" fill="url(#afDotGrid)" />
            <ellipse cx="500" cy="515" rx="270" ry="42" fill="#B45309" opacity="0.18" filter="url(#afFloorShadow)" />
            <ellipse cx="500" cy="515" rx="170" ry="26" fill="#F59E0B" opacity="0.22" filter="url(#afFloorShadow)" />

            {/* Ground Rails */}
            <line x1="160" y1="360" x2="500" y2="480" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.22" />
            <line x1="500" y1="480" x2="840" y2="360" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.22" />

            {/* --- CENTER STAGE: TARPIT CONTAINMENT VAULT (500, 405) --- */}
            <g transform="translate(500, 405)">
              {/* Concentric Tarpit Latency Spiral Coils with Orbiting Packets */}
              <g transform="scale(1.30, 0.63)">
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
                    opacity={0.35 + i * 0.12}
                  />
                ))}

                {/* Viscous Slow-Motion Orbit Track (14 Packets Held with Perfect Circular Spacing) */}
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="12s"
                    repeatCount="indefinite"
                  />
                  {/* Track 1: Inner Orbit (r=110) — 6 packets evenly spaced at 60° */}
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
                      <circle cx={pos.x} cy={pos.y} r="2.2" fill="#FFFFFF" />
                    </g>
                  ))}

                  {/* Track 2: Outer Orbit (r=165) — 8 packets evenly spaced at 45° */}
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

              {/* 3D Isometric Containment Vault Hexagon */}
              <polygon
                points="-70,0 0,-35 70,0 0,35"
                fill="url(#afVaultTop)"
                stroke="#D97706"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <polygon
                points="-70,0 0,35 0,105 -70,70"
                fill="url(#afVaultSide)"
                stroke="#B45309"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <polygon
                points="0,35 70,0 70,70 0,105"
                fill="#92400E"
                stroke="#B45309"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />

              {/* Amber Quarantine Padlock on Front Seam */}
              <g transform="translate(0, 65)">
                <circle cx="0" cy="0" r="16" fill="#F59E0B" filter="url(#afGlow)" />
                <circle cx="0" cy="0" r="10" fill="#78350F" />
                <rect x="-3" y="-3" width="6" height="12" rx="1.5" fill="#FDE68A" />
                <circle cx="0" cy="-3" r="3" fill="#FDE68A" />
              </g>

              {/* 3D Defensive Shield on Right (Clear of Right Card) */}
              <g transform="translate(195, -30)" filter="url(#afShieldShadow)">
                <ellipse cx="0" cy="78" rx="34" ry="9" fill="#B45309" opacity="0.35" filter="url(#afFloorShadow)" />
                <polygon points="-28,0 0,-16 28,0 0,10" fill="#FFFBEB" stroke="#D97706" strokeWidth="2.2" strokeLinejoin="round" />
                <polygon points="-28,0 0,10 0,66 -28,42" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.2" strokeLinejoin="round" />
                <polygon points="0,10 28,0 28,42 0,66" fill="#FDE68A" stroke="#D97706" strokeWidth="2.2" strokeLinejoin="round" />
                {/* Exclamation Warning Crest */}
                <circle cx="0" cy="36" r="3.2" fill="#D97706" />
                <line x1="0" y1="18" x2="0" y2="30" stroke="#D97706" strokeWidth="3.2" strokeLinecap="round" />
                <circle cx="0" cy="10" r="3.5" fill="#EF4444" />
              </g>
            </g>

            {/* Meaningful Data Connectors */}
            <path
              d="M 190 225 C 190 310, 320 410, 390 410"
              fill="none"
              stroke="#EF4444"
              strokeWidth="2.0"
              strokeDasharray="5 5"
              opacity="0.65"
            />
            <path
              d="M 810 225 C 810 300, 730 375, 695 375"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="2.0"
              strokeDasharray="5 5"
              opacity="0.65"
            />

            {/* LEFT CARD: FAILED AUTHENTICATION */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <g transform="translate(55, 75)" filter="url(#afCardShadow)">
                <rect x="0" y="0" width="270" height="145" rx="10" fill="url(#afCardGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 260 0 Q 270 0 270 10 L 270 12 L 0 12 Z" fill="#EF4444" />

                <g transform="translate(16, 26)">
                  <rect x="0" y="0" width="144" height="22" rx="11" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
                  <circle cx="11" cy="11" r="4" fill="#EF4444" />
                  <text x="21" y="15" fontSize="11" fill="#DC2626" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em">
                    ATTACK DETECTED
                  </text>
                </g>

                <text x="16" y="77" fontSize="20.5" fill="#DC2626" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">
                  14 Rapid Logins
                </text>
                <text x="16" y="100" fontSize="13.5" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Brute-Force Stuffing Pattern
                </text>

                <line x1="16" y1="112" x2="254" y2="112" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="16" y="118" width="160" height="18" rx="4" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
                <text x="23" y="131" fontSize="10.5" fill="#DC2626" fontWeight="700" fontFamily="system-ui, sans-serif">
                  Threshold Exceeded · Locked
                </text>
              </g>
            </motion.g>

            {/* RIGHT CARD: TARPIT ACTIVE */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
            >
              <g transform="translate(675, 75)" filter="url(#afCardShadow)">
                <rect x="0" y="0" width="270" height="145" rx="10" fill="url(#afCardGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 260 0 Q 270 0 270 10 L 270 12 L 0 12 Z" fill="#F59E0B" />

                <g transform="translate(16, 26)">
                  <rect x="0" y="0" width="144" height="22" rx="11" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
                  <circle cx="11" cy="11" r="4" fill="#D97706" />
                  <text x="21" y="15" fontSize="11" fill="#B45309" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em">
                    TARPIT QUARANTINE
                  </text>
                </g>

                <text x="16" y="77" fontSize="20.5" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">
                  Delay: <tspan fill="#D97706">5,000 ms</tspan>
                </text>
                <text x="16" y="100" fontSize="13.5" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Exponential Penalty Hold
                </text>

                <line x1="16" y1="110" x2="254" y2="110" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="16" y="117" width="158" height="18" rx="4" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                <text x="23" y="130" fontSize="10.5" fill="#059669" fontWeight="700" fontFamily="system-ui, sans-serif">
                  CPU Preserved · Network Safe
                </text>
              </g>
            </motion.g>
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
};
