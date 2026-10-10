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
              <g transform="translate(55, 80)" filter="url(#afCardShadow)">
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
              <g transform="translate(675, 80)" filter="url(#afCardShadow)">
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
            Story: Unenrolled device detected -> FIDO2 WebAuthn Challenge Enforced
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
              <linearGradient id="afCardGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.94" />
              </linearGradient>
              <linearGradient id="afLaptopFace" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F0F9FF" />
                <stop offset="100%" stopColor="#BAE6FD" />
              </linearGradient>
              <linearGradient id="afLaptopScreen" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E293B" />
              </linearGradient>
              <linearGradient id="afShieldLeftFace" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#F0F7FF" />
                <stop offset="100%" stopColor="#DBEAFE" />
              </linearGradient>
              <linearGradient id="afShieldRightFace" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>
              <pattern id="afDotGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1.1" fill="#2B66FF" opacity="0.08" />
              </pattern>
            </defs>

            {/* Blueprint Grid & Floor Shadows */}
            <rect x="40" y="40" width="920" height="560" fill="url(#afDotGrid)" />
            <ellipse cx="500" cy="515" rx="270" ry="42" fill="#1E3A8A" opacity="0.18" filter="url(#afFloorShadow)" />
            <ellipse cx="500" cy="515" rx="170" ry="26" fill="#2B66FF" opacity="0.22" filter="url(#afFloorShadow)" />

            {/* Ground Rails */}
            <line x1="160" y1="360" x2="500" y2="480" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.22" />
            <line x1="500" y1="480" x2="840" y2="360" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.22" />

            {/* --- CENTER STAGE: WORKSTATION TERMINAL (500, 405) --- */}
            <g transform="translate(500, 405)">
              {/* Concentric Biometric Verification Rings */}
              <g transform="scale(1.30, 0.63)">
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
                    opacity={0.35 + i * 0.15}
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

              {/* 3D Isometric Workstation Body (Sleek Titanium) */}
              <polygon
                points="-95,15 0,-32 95,15 0,62"
                fill="url(#afLaptopFace)"
                stroke="#2B66FF"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <polygon
                points="-75,15 0,-22 75,15 0,52"
                fill="#EFF6FF"
                stroke="#38BDF8"
                strokeWidth="1.6"
              />
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

              {/* 3D Upright Display (Unrecognized Client Prompt) */}
              <g transform="translate(-15, -95) skewY(26.565)">
                <rect x="0" y="0" width="115" height="88" rx="6" fill="url(#afLaptopScreen)" stroke="#2B66FF" strokeWidth="2.2" />
                <rect x="5" y="5" width="105" height="78" rx="3" fill="#0A0F1D" />
                <circle cx="16" cy="18" r="4" fill="#EF4444" />
                <circle cx="28" cy="18" r="4" fill="#F59E0B" />
                <circle cx="40" cy="18" r="4" fill="#10B981" />
                <text x="14" y="38" fontSize="10.5" fill="#EF4444" fontWeight="900" fontFamily="system-ui, sans-serif">
                  UNRECOGNIZED CLIENT
                </text>
                <line x1="10" y1="44" x2="105" y2="44" stroke="#2B66FF" strokeWidth="1" opacity="0.4" />
                <text x="14" y="58" fontSize="9" fill="#38BDF8" fontWeight="700" fontFamily="monospace">
                  ID: MAC-OS-SONOMA-17
                </text>
                <text x="14" y="70" fontSize="8.5" fill="#94A3B8" fontWeight="700" fontFamily="monospace">
                  AUTH: FIDO2 REQUIRED
                </text>
                <rect x="10" y="76" width="90" height="4" rx="2" fill="#2563EB" opacity="0.8" />
              </g>

              {/* 3D Defensive Shield with Keyhole Crest (Clear of Right Card) */}
              <g transform="translate(195, -30)" filter="url(#afShieldShadow)">
                <ellipse cx="0" cy="78" rx="34" ry="9" fill="#1E3A8A" opacity="0.35" filter="url(#afFloorShadow)" />
                <polygon points="-28,0 0,-16 28,0 0,10" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="2.2" strokeLinejoin="round" />
                <polygon points="-28,0 0,10 0,66 -28,42" fill="url(#afShieldLeftFace)" stroke="#2B66FF" strokeWidth="2.2" strokeLinejoin="round" />
                <polygon points="0,10 28,0 28,42 0,66" fill="url(#afShieldRightFace)" stroke="#2B66FF" strokeWidth="2.2" strokeLinejoin="round" />
                {/* Security Keyhole Emblem */}
                <circle cx="0" cy="26" r="6" fill="#2B66FF" />
                <polygon points="-3,26 3,26 4.5,40 -4.5,40" fill="#2B66FF" />
                <circle cx="0" cy="12" r="3.5" fill="#38BDF8" />
              </g>
            </g>

            {/* Meaningful Data Connectors */}
            <path
              d="M 190 225 C 190 310, 360 410, 440 410"
              fill="none"
              stroke="#2B66FF"
              strokeWidth="2.0"
              strokeDasharray="5 5"
              opacity="0.65"
            />
            <path
              d="M 810 225 C 810 300, 730 375, 695 375"
              fill="none"
              stroke="#10B981"
              strokeWidth="2.0"
              strokeDasharray="5 5"
              opacity="0.65"
            />

            {/* LEFT CARD: UNKNOWN DEVICE */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <g transform="translate(55, 80)" filter="url(#afCardShadow)">
                <rect x="0" y="0" width="270" height="145" rx="10" fill="url(#afCardGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 260 0 Q 270 0 270 10 L 270 12 L 0 12 Z" fill="#2B66FF" />

                <g transform="translate(16, 26)">
                  <rect x="0" y="0" width="145" height="22" rx="11" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                  <circle cx="11" cy="11" r="4" fill="#2B66FF" />
                  <text x="21" y="15" fontSize="11" fill="#1D4ED8" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em">
                    POLICY TRIGGERED
                  </text>
                </g>

                <text x="16" y="76" fontSize="19" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">
                  macOS Sonoma
                </text>
                <text x="16" y="98" fontSize="13" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Unenrolled Hardware Fingerprint
                </text>

                <line x1="16" y1="110" x2="254" y2="110" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="16" y="117" width="140" height="18" rx="4" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                <text x="23" y="130" fontSize="10.5" fill="#1D4ED8" fontWeight="700" fontFamily="system-ui, sans-serif">
                  Active Filter Enforced
                </text>
              </g>
            </motion.g>

            {/* RIGHT CARD: FIDO2 CHALLENGE */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
            >
              <g transform="translate(675, 80)" filter="url(#afCardShadow)">
                <rect x="0" y="0" width="270" height="145" rx="10" fill="url(#afCardGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 260 0 Q 270 0 270 10 L 270 12 L 0 12 Z" fill="#10B981" />

                <g transform="translate(16, 26)">
                  <rect x="0" y="0" width="142" height="22" rx="11" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                  <circle cx="11" cy="11" r="4" fill="#10B981" />
                  <text x="21" y="15" fontSize="11" fill="#047857" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em">
                    MFA CHALLENGE
                  </text>
                </g>

                <text x="16" y="76" fontSize="19" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">
                  FIDO2 Security Key
                </text>
                <text x="16" y="98" fontSize="13" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Hardware Authentication Prompt
                </text>

                <line x1="16" y1="110" x2="254" y2="110" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="16" y="117" width="160" height="18" rx="4" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                <text x="23" y="130" fontSize="10.5" fill="#059669" fontWeight="700" fontFamily="system-ui, sans-serif">
                  Access Restricted · Gate Locked
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
              <g transform="translate(55, 80)" filter="url(#afCardShadow)">
                <rect x="0" y="0" width="270" height="145" rx="10" fill="url(#afCardGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 260 0 Q 270 0 270 10 L 270 12 L 0 12 Z" fill="#EF4444" />

                <g transform="translate(16, 26)">
                  <rect x="0" y="0" width="144" height="22" rx="11" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
                  <circle cx="11" cy="11" r="4" fill="#EF4444" />
                  <text x="21" y="15" fontSize="11" fill="#DC2626" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em">
                    ATTACK DETECTED
                  </text>
                </g>

                <text x="16" y="76" fontSize="19" fill="#DC2626" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">
                  14 Rapid Logins
                </text>
                <text x="16" y="98" fontSize="13" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Brute-Force Stuffing Pattern
                </text>

                <line x1="16" y1="110" x2="254" y2="110" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="16" y="117" width="160" height="18" rx="4" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
                <text x="23" y="130" fontSize="10.5" fill="#DC2626" fontWeight="700" fontFamily="system-ui, sans-serif">
                  Threshold Exceeded · Locked
                </text>
              </g>
            </motion.g>

            {/* RIGHT CARD: TARPIT ACTIVE */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
            >
              <g transform="translate(675, 80)" filter="url(#afCardShadow)">
                <rect x="0" y="0" width="270" height="145" rx="10" fill="url(#afCardGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 260 0 Q 270 0 270 10 L 270 12 L 0 12 Z" fill="#F59E0B" />

                <g transform="translate(16, 26)">
                  <rect x="0" y="0" width="144" height="22" rx="11" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
                  <circle cx="11" cy="11" r="4" fill="#D97706" />
                  <text x="21" y="15" fontSize="11" fill="#B45309" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="0.04em">
                    TARPIT QUARANTINE
                  </text>
                </g>

                <text x="16" y="76" fontSize="19" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">
                  Delay: <tspan fill="#D97706">5,000 ms</tspan>
                </text>
                <text x="16" y="98" fontSize="13" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
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
