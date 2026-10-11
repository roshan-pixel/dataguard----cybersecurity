import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SimpleStepsFXProps {
  activeStep: number;
}

export const SimpleStepsFX: React.FC<SimpleStepsFXProps> = ({ activeStep }) => {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[450px] flex items-center justify-center overflow-hidden bg-[#FBFDFF] rounded-xl border border-[#E2E8F0] shadow-inner select-none">
      <AnimatePresence mode="wait">
        {/* =========================================================================
            SCENE 1: MONITOR ACTIVITY (activeStep === 0)
            True Hub-and-Spoke Telemetry Ingestion Architecture
            ========================================================================= */}
        {activeStep === 0 && (
          <motion.svg
            key="ss-monitor"
            viewBox="0 0 960 520"
            className="w-full h-full object-contain"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <defs>
              <filter id="ssFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="14" />
              </filter>
              <filter id="ssCardShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0F172A" floodOpacity="0.09" />
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
              </filter>
              <filter id="ssHubShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#1E3A8A" floodOpacity="0.25" />
              </filter>
              <filter id="ssGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="ssPanelGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.99" />
                <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.95" />
              </linearGradient>

              {/* Ingestion Hub Gradients */}
              <linearGradient id="ssHubTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#EFF6FF" />
                <stop offset="100%" stopColor="#DBEAFE" />
              </linearGradient>
              <linearGradient id="ssHubFacetLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#DBEAFE" />
                <stop offset="100%" stopColor="#93C5FD" />
              </linearGradient>
              <linearGradient id="ssHubFacetRight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#93C5FD" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
              <linearGradient id="ssIngestionBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2B66FF" stopOpacity="0.95" />
              </linearGradient>

              {/* Blueprint Dot Grid */}
              <pattern id="ssDotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1.1" fill="#2B66FF" opacity="0.14" />
              </pattern>
            </defs>

            {/* Background Blueprint Grid with Full Margin Frame */}
            <rect x="18" y="18" width="924" height="484" fill="url(#ssDotGrid)" />

            {/* Precision 4-Corner Crosshairs */}
            <g stroke="#2B66FF" strokeWidth="1.5" opacity="0.5">
              {/* Top-Left */}
              <line x1="24" y1="18" x2="24" y2="30" />
              <line x1="18" y1="24" x2="30" y2="24" />
              {/* Top-Right */}
              <line x1="936" y1="18" x2="936" y2="30" />
              <line x1="930" y1="24" x2="942" y2="24" />
              {/* Bottom-Left */}
              <line x1="24" y1="490" x2="24" y2="502" />
              <line x1="18" y1="496" x2="30" y2="496" />
              {/* Bottom-Right */}
              <line x1="936" y1="490" x2="936" y2="502" />
              <line x1="930" y1="496" x2="942" y2="496" />
            </g>

            {/* Ground Contact Shadow under Central Architecture */}
            <ellipse cx="480" cy="330" rx="240" ry="32" fill="#1E3A8A" opacity="0.18" filter="url(#ssFloorShadow)" />

            {/* =========================================================================
                TOP HEADER PILL: Positioned at y=16 with 36px clearance from cards
                ========================================================================= */}
            <g transform="translate(270, 16)">
              <rect x="0" y="0" width="420" height="34" rx="8" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="2.0" filter="url(#ssCardShadow)" />
              <circle cx="20" cy="17" r="5" fill="#2B66FF" />
              <text x="36" y="22" fontSize="13.5" fill="#0F172A" fontWeight="900" fontFamily="monospace" letterSpacing="0.02em">
                STEP 01 // MONITOR ACTIVITY (AI INGESTION)
              </text>
            </g>

            {/* =========================================================================
                INGESTION CONDUITS (Endpoint Sources -> Central Gateway)
                Directional arrows and moving cyan telemetry packets
                ========================================================================= */}

            {/* Left Conduit: Edge Proxies (185, 335) -> Central Gateway (410, 255) */}
            <g>
              <line x1="230" y1="330" x2="410" y2="265" stroke="#2B66FF" strokeWidth="2.8" strokeDasharray="6 4" opacity="0.65" />
              {/* Directional Chevrons */}
              <polygon points="280,305 292,301 282,314" fill="#2B66FF" />
              <polygon points="345,283 357,279 347,292" fill="#2B66FF" />
              {/* Traveling Telemetry Data Packet */}
              <motion.circle
                cx="230"
                cy="330"
                r="4.6"
                fill="#38BDF8"
                filter="url(#ssGlow)"
                animate={{ cx: [230, 410], cy: [330, 265], opacity: [1, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeIn' }}
              />
              <motion.circle
                cx="230"
                cy="330"
                r="2.2"
                fill="#FFFFFF"
                animate={{ cx: [230, 410], cy: [330, 265], opacity: [1, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeIn' }}
              />
            </g>

            {/* Top Conduit: Cloud Clusters (480, 115) -> Central Gateway (480, 215) */}
            <g>
              <line x1="480" y1="135" x2="480" y2="215" stroke="#0284C7" strokeWidth="2.8" strokeDasharray="6 4" opacity="0.65" />
              {/* Directional Chevrons */}
              <polygon points="474,168 480,178 486,168" fill="#0284C7" />
              {/* Traveling Telemetry Data Packet */}
              <motion.circle
                cx="480"
                cy="135"
                r="4.6"
                fill="#38BDF8"
                filter="url(#ssGlow)"
                animate={{ cx: [480, 480], cy: [135, 215], opacity: [1, 0.4] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.3, ease: 'easeIn' }}
              />
            </g>

            {/* Right Conduit: Employee Workstations (775, 335) -> Central Gateway (550, 255) */}
            <g>
              <line x1="730" y1="330" x2="550" y2="265" stroke="#2B66FF" strokeWidth="2.8" strokeDasharray="6 4" opacity="0.65" />
              {/* Directional Chevrons */}
              <polygon points="680,305 668,301 678,314" fill="#2B66FF" />
              <polygon points="615,283 603,279 613,292" fill="#2B66FF" />
              {/* Traveling Telemetry Data Packet */}
              <motion.circle
                cx="730"
                cy="330"
                r="4.6"
                fill="#38BDF8"
                filter="url(#ssGlow)"
                animate={{ cx: [730, 550], cy: [330, 265], opacity: [1, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: 0.6, ease: 'easeIn' }}
              />
              <motion.circle
                cx="730"
                cy="330"
                r="2.2"
                fill="#FFFFFF"
                animate={{ cx: [730, 550], cy: [330, 265], opacity: [1, 0.4] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: 0.6, ease: 'easeIn' }}
              />
            </g>

            {/* =========================================================================
                CENTER: 3D ISOMETRIC AI INGESTION CORE & CONVERGENCE FUNNEL (480, 255)
                ========================================================================= */}
            <g transform="translate(480, 255)" filter="url(#ssHubShadow)">
              {/* Contact Shadow under Hub */}
              <ellipse cx="0" cy="50" rx="95" ry="22" fill="#0F172A" opacity="0.32" filter="url(#ssFloorShadow)" />

              {/* 3D Isometric Octagonal Ingestion Platform Deck */}
              <polygon
                points="-84,0 -42,-26 42,-26 84,0 42,26 -42,26"
                fill="url(#ssHubTop)"
                stroke="#2B66FF"
                strokeWidth="2.4"
              />
              {/* Extruded Front-Left Facet */}
              <polygon
                points="-84,0 -42,26 -42,46 -84,20"
                fill="url(#ssHubFacetLeft)"
                stroke="#2B66FF"
                strokeWidth="2.2"
              />
              {/* Extruded Front-Right Facet */}
              <polygon
                points="-42,26 42,26 42,46 -42,46"
                fill="url(#ssHubFacetRight)"
                stroke="#2B66FF"
                strokeWidth="2.2"
              />
              {/* Extruded Far-Right Facet */}
              <polygon
                points="42,26 84,0 84,20 42,46"
                fill="url(#ssHubFacetLeft)"
                stroke="#2B66FF"
                strokeWidth="2.2"
              />

              {/* Concentric Holographic Ingestion Intake Vortex Rings */}
              <ellipse cx="0" cy="0" rx="58" ry="18" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeDasharray="6 4" opacity="0.85" />
              <ellipse cx="0" cy="0" rx="38" ry="12" fill="none" stroke="#2B66FF" strokeWidth="2.0" opacity="0.95" />

              {/* Pulsing Ingestion Wave */}
              <motion.ellipse
                cx="0"
                cy="0"
                rx="20"
                ry="7"
                fill="#EFF6FF"
                stroke="#38BDF8"
                strokeWidth="2.4"
                animate={{ rx: [20, 56], ry: [7, 18], opacity: [1, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
              />

              {/* Central Processor Core */}
              <polygon points="-24,-15 0,-26 24,-15 0,-4" fill="#0F172A" stroke="#38BDF8" strokeWidth="2.0" />
              <polygon points="-24,-15 0,-4 0,10 -24,-1" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.8" />
              <polygon points="0,-4 24,-15 24,-1 0,10" fill="#334155" stroke="#38BDF8" strokeWidth="1.8" />

              {/* Glowing Ingestion Core LED */}
              <circle cx="0" cy="-9" r="5" fill="#10B981" filter="url(#ssGlow)" />
              <circle cx="0" cy="-9" r="2.2" fill="#FFFFFF" />

              {/* Ingestion Hub Monospace Nameplate (Enlarged) */}
              <rect x="-75" y="52" width="150" height="24" rx="5" fill="#0F172A" stroke="#2B66FF" strokeWidth="1.6" />
              <text x="0" y="68" fontSize="12" fill="#38BDF8" fontWeight="900" fontFamily="monospace" textAnchor="middle">
                AI INGESTION CORE
              </text>
            </g>

            {/* =========================================================================
                THREE DISTINCT LABELED ENDPOINT SOURCES (Enlarged Typography)
                ========================================================================= */}

            {/* SOURCE 1: EDGE PROXIES (185, 335) */}
            <g transform="translate(185, 335)">
              {/* Floor Shadow */}
              <ellipse cx="0" cy="28" rx="36" ry="11" fill="#1E3A8A" opacity="0.32" filter="url(#ssFloorShadow)" />

              {/* 3D Server Blade Rack Chassis */}
              <polygon points="-28,-11 0,-24 28,-11 0,2" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="2.0" />
              <polygon points="-28,-11 0,2 0,40 -28,27" fill="#F1F5F9" stroke="#2B66FF" strokeWidth="1.8" />
              <polygon points="0,2 28,-11 28,27 0,40" fill="#CBD5E1" stroke="#2B66FF" strokeWidth="1.8" />

              {/* Server Blades & Blinking Activity LEDs */}
              {[4, 12, 20].map((ly, idx) => (
                <g key={idx}>
                  <line x1="-22" y1={ly} x2="-4" y2={ly + 8} stroke="#2B66FF" strokeWidth="1.6" opacity="0.75" />
                  <circle cx="-17" cy={ly + 2} r="1.8" fill="#10B981" />
                  <circle cx="-11" cy={ly + 5} r="1.8" fill="#38BDF8" />
                </g>
              ))}

              {/* Subnet Tag (Enlarged Text & Comfortable Box) */}
              <rect x="-65" y="46" width="130" height="38" rx="6" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="1.6" filter="url(#ssCardShadow)" />
              <text x="0" y="61" fontSize="13.5" fill="#0F172A" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle">
                EDGE PROXIES
              </text>
              <text x="0" y="76" fontSize="12" fill="#475569" fontWeight="800" fontFamily="monospace" textAnchor="middle">
                10.0.1.x subnet
              </text>
            </g>

            {/* SOURCE 2: CLOUD CLUSTERS (480, 100) */}
            <g transform="translate(480, 100)">
              <ellipse cx="0" cy="30" rx="42" ry="10" fill="#1E3A8A" opacity="0.25" filter="url(#ssFloorShadow)" />

              {/* Layered 3D Multi-Cloud Cluster */}
              <polygon points="-36,0 0,-16 36,0 0,16" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.0" />
              <polygon points="-36,0 0,16 0,26 -36,10" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.6" />
              <polygon points="0,16 36,0 36,10 0,26" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.6" />

              {/* Cloud Node Symbol */}
              <path
                d="M -12,0 C -14,-6 -6,-10 0,-7 C 5,-11 13,-7 13,0 C 16,0 17,5 14,7 L -12,7 Z"
                fill="#0284C7"
                opacity="0.9"
              />

              {/* Label Tag (Enlarged) */}
              <rect x="-95" y="-34" width="190" height="26" rx="5" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.6" filter="url(#ssCardShadow)" />
              <circle cx="-80" cy="-21" r="4" fill="#0284C7" />
              <text x="-70" y="-17" fontSize="12.5" fill="#0369A1" fontWeight="900" fontFamily="system-ui, sans-serif">
                CLOUD CLUSTERS (AWS/GCP)
              </text>
            </g>

            {/* SOURCE 3: EMPLOYEE WORKSTATIONS (775, 335) */}
            <g transform="translate(775, 335)">
              {/* Floor Shadow */}
              <ellipse cx="0" cy="28" rx="36" ry="11" fill="#1E3A8A" opacity="0.32" filter="url(#ssFloorShadow)" />

              {/* 3D Metallic Workstation Laptop */}
              <polygon points="-28,2 0,-11 28,2 0,15" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="2.0" />
              <polygon points="-28,2 0,15 0,22 -28,9" fill="#E2E8F0" stroke="#2B66FF" strokeWidth="1.6" />
              <polygon points="0,15 28,2 28,9 0,22" fill="#CBD5E1" stroke="#2B66FF" strokeWidth="1.6" />

              {/* Upright Display Screen */}
              <rect x="-24" y="-30" width="48" height="30" rx="3" fill="#0F172A" stroke="#2B66FF" strokeWidth="1.8" />
              <rect x="-21" y="-27" width="42" height="24" rx="2" fill="#080C16" />
              <line x1="-16" y1="-19" x2="6" y2="-19" stroke="#38BDF8" strokeWidth="1.6" />
              <line x1="-16" y1="-13" x2="-2" y2="-13" stroke="#10B981" strokeWidth="1.6" />

              {/* Workstation Label Tag (Enlarged Text & Comfortable Box) */}
              <rect x="-75" y="46" width="150" height="38" rx="6" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="1.6" filter="url(#ssCardShadow)" />
              <text x="0" y="61" fontSize="13.5" fill="#0F172A" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle">
                WORKSTATIONS
              </text>
              <text x="0" y="76" fontSize="12" fill="#475569" fontWeight="800" fontFamily="monospace" textAnchor="middle">
                Zero-Trust Clients
              </text>
            </g>

            {/* =========================================================================
                SCALE FLEET BADGE: PLACED DIRECTLY BELOW LEFT CARD AT (45, 216)
                100% CLEAN ZONE - ZERO OVERLAP WITH TERMINAL WINDOW!
                ========================================================================= */}
            <g transform="translate(45, 216)" filter="url(#ssCardShadow)">
              <rect x="0" y="0" width="240" height="28" rx="6" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
              <circle cx="14" cy="14" r="4" fill="#2B66FF" />
              <text x="24" y="18.5" fontSize="12" fill="#1D4ED8" fontWeight="900" fontFamily="monospace">
                +42,900 ACTIVE FLEET NODES
              </text>
            </g>

            {/* =========================================================================
                THE DIAGNOSTIC TERMINAL CONSOLE: CENTERED AT (280, 385)
                Width: 400px, Height: 96px - ZERO COLLISION WITH FLEET BADGE
                ========================================================================= */}
            <g transform="translate(280, 385)" filter="url(#ssCardShadow)">
              <rect x="0" y="0" width="400" height="96" rx="8" fill="#0B0F19" stroke="#1E293B" strokeWidth="2.0" />
              {/* Header Bar */}
              <rect x="0" y="0" width="400" height="22" rx="8" fill="#151E2E" />
              <circle cx="14" cy="11" r="3.5" fill="#EF4444" />
              <circle cx="23" cy="11" r="3.5" fill="#F59E0B" />
              <circle cx="32" cy="11" r="3.5" fill="#10B981" />
              <text x="46" y="15.5" fontSize="11.5" fill="#94A3B8" fontWeight="800" fontFamily="monospace">
                telemetry-daemon // live-tail
              </text>

              {/* Console Output Lines (High-Contrast & Large Fonts) */}
              <text x="16" y="42" fontSize="13.5" fill="#38BDF8" fontWeight="900" fontFamily="monospace">
                $ telemetry_stream.init()
              </text>
              <text x="16" y="62" fontSize="12.5" fill="#10B981" fontWeight="800" fontFamily="monospace">
                ✓ 42,910 endpoints connected (latency: 12ms)
              </text>
              <text x="16" y="80" fontSize="12" fill="#94A3B8" fontWeight="700" fontFamily="monospace">
                ✓ stream throughput: 4.8 GB/s (loss: 0.00%)
              </text>
            </g>

            {/* =========================================================================
                FLOATING TELEMETRY CARDS (Enlarged Typography & High Contrast)
                ========================================================================= */}

            {/* Left Card: 42,910 Endpoints Active */}
            <motion.g animate={{ y: [0, -3.5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
              <g transform="translate(45, 68)" filter="url(#ssCardShadow)">
                <rect x="0" y="0" width="240" height="136" rx="10" fill="url(#ssPanelGlass)" stroke="#E2E8F0" strokeWidth="1.6" />
                {/* Cobalt Header Strip */}
                <path d="M 0 10 Q 0 0 10 0 L 230 0 Q 240 0 240 10 L 240 12 L 0 12 Z" fill="#2B66FF" />

                {/* Category Pill */}
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="155" height="23" rx="11.5" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.4" />
                  <circle cx="11" cy="11.5" r="4" fill="#2B66FF" />
                  <text x="20" y="15.5" fontSize="12.5" fill="#1D4ED8" fontWeight="900" fontFamily="system-ui, sans-serif">
                    ENDPOINT FLEET
                  </text>
                </g>

                {/* Primary Metric (Enlarged to 21px bold) */}
                <text x="14" y="74" fontSize="21" fill="#0F172A" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">
                  42,910 Active Nodes
                </text>

                {/* Subtitle (Enlarged to 13.5px) */}
                <text x="14" y="96" fontSize="13.5" fill="#1E293B" fontWeight="700" fontFamily="system-ui, sans-serif">
                  Edge Proxies, Cloud & Laptops
                </text>

                {/* Divider and Verified CPU Metric */}
                <line x1="14" y1="107" x2="226" y2="107" stroke="#E2E8F0" strokeWidth="1.2" />
                <rect x="14" y="112" width="168" height="20" rx="4" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.2" />
                <text x="22" y="126" fontSize="12.5" fill="#0F172A" fontWeight="900" fontFamily="monospace">
                  &lt;0.01% CPU OVERHEAD
                </text>
              </g>
            </motion.g>

            {/* Right Card: AI Ingestion Delivery */}
            <motion.g animate={{ y: [0, -3.5, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}>
              <g transform="translate(675, 68)" filter="url(#ssCardShadow)">
                <rect x="0" y="0" width="240" height="136" rx="10" fill="url(#ssPanelGlass)" stroke="#E2E8F0" strokeWidth="1.6" />
                {/* Cyan Header Strip */}
                <path d="M 0 10 Q 0 0 10 0 L 230 0 Q 240 0 240 10 L 240 12 L 0 12 Z" fill="#0284C7" />

                {/* Category Pill */}
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="155" height="23" rx="11.5" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1.4" />
                  <circle cx="11" cy="11.5" r="4" fill="#0284C7" />
                  <text x="20" y="15.5" fontSize="12.5" fill="#0369A1" fontWeight="900" fontFamily="system-ui, sans-serif">
                    INGESTION STREAM
                  </text>
                </g>

                {/* Primary Metric (Enlarged to 21px bold) */}
                <text x="14" y="74" fontSize="21" fill="#0F172A" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="-0.02em">
                  99.99% Delivery
                </text>

                {/* Subtitle (Enlarged to 13.5px) */}
                <text x="14" y="96" fontSize="13.5" fill="#1E293B" fontWeight="700" fontFamily="system-ui, sans-serif">
                  Sub-Second Stream Latency
                </text>

                {/* Divider and status */}
                <line x1="14" y1="107" x2="226" y2="107" stroke="#E2E8F0" strokeWidth="1.2" />
                <rect x="14" y="112" width="170" height="20" rx="4" fill="#E0F2FE" stroke="#BAE6FD" strokeWidth="1.2" />
                <text x="22" y="126" fontSize="12" fill="#0369A1" fontWeight="900" fontFamily="monospace">
                  STATUS: LIVE &bull; 0% LOSS
                </text>
              </g>
            </motion.g>
          </motion.svg>
        )}

        {/* =========================================================================
            SCENE 2: DETECT THREATS (activeStep === 1)
            Story: Multi-layer heuristics & transformer models flagging unauthorized access
            ========================================================================= */}
        {activeStep === 1 && (
          <motion.svg
            key="ss-detect"
            viewBox="0 0 960 520"
            className="w-full h-full object-contain"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <defs>
              <filter id="ssFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
              </filter>
              <filter id="ssCardShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0F172A" floodOpacity="0.08" />
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
              </filter>
              <filter id="ssGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="ssPanelGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.94" />
              </linearGradient>
              <pattern id="ssDotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1.1" fill="#2B66FF" opacity="0.08" />
              </pattern>
            </defs>

            {/* Background Grid */}
            <rect x="20" y="20" width="920" height="480" fill="url(#ssDotGrid)" />
            <ellipse cx="480" cy="420" rx="270" ry="36" fill="#EF4444" opacity="0.14" filter="url(#ssFloorShadow)" />

            {/* Center Transformer Heuristic Radar Scanner */}
            <g transform="translate(480, 270)">
              {/* Concentric Threat Range Rings */}
              {[60, 120, 180, 230].map((r, i) => (
                <circle
                  key={i}
                  cx="0"
                  cy="0"
                  r={r}
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="1.8"
                  strokeDasharray="5 5"
                  opacity={0.3 + i * 0.12}
                />
              ))}

              {/* Rotating Threat Scan Sweep */}
              <g>
                <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="3.0s" repeatCount="indefinite" />
                <path d="M 0 0 L 230 0 A 230 230 0 0 1 115 199 Z" fill="#EF4444" fillOpacity="0.15" />
                <line x1="0" y1="0" x2="230" y2="0" stroke="#EF4444" strokeWidth="2.5" />
              </g>

              {/* 3D Infinity Loop in Interception Mode */}
              <path
                d="M -150,0 C -150,-70 -50,-70 0,0 C 50,70 150,70 150,0 C 150,-70 50,-70 0,0 C -50,70 -150,70 -150,0 Z"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="20"
                strokeLinecap="round"
              />
              <path
                d="M -150,0 C -150,-70 -50,-70 0,0 C 50,70 150,70 150,0 C 150,-70 50,-70 0,0 C -50,70 -150,70 -150,0 Z"
                fill="none"
                stroke="#2B66FF"
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* Intercepted Threat Vector Rays Targeting Loop */}
              {[
                { x1: -280, y1: -70, x2: -60, y2: 0 },
                { x1: -280, y1: 50, x2: -60, y2: 0 },
                { x1: -280, y1: 140, x2: -60, y2: 0 },
              ].map((ray, idx) => (
                <g key={idx}>
                  <line x1={ray.x1} y1={ray.y1} x2={ray.x2} y2={ray.y2} stroke="#EF4444" strokeWidth="2.6" strokeDasharray="6 4" />
                  <motion.circle
                    cx={ray.x1}
                    cy={ray.y1}
                    r="5.5"
                    fill="#EF4444"
                    filter="url(#ssGlow)"
                    animate={{ cx: [ray.x1, ray.x2], cy: [ray.y1, ray.y2], opacity: [1, 0.4] }}
                    transition={{ duration: 0.9 + idx * 0.2, repeat: Infinity, ease: 'easeIn' }}
                  />
                </g>
              ))}

              {/* Red Target Reticle over Rogue Access Attempt */}
              <g transform="translate(-60, 0)">
                <circle cx="0" cy="0" r="18" fill="none" stroke="#EF4444" strokeWidth="2.0" />
                <line x1="-24" y1="0" x2="24" y2="0" stroke="#EF4444" strokeWidth="1.6" />
                <line x1="0" y1="-24" x2="0" y2="24" stroke="#EF4444" strokeWidth="1.6" />
                <circle cx="0" cy="0" r="5" fill="#EF4444" filter="url(#ssGlow)" />
              </g>

              {/* Center Lock Badge in Alert State */}
              <g transform="translate(0, 15)">
                <rect x="-18" y="-4" width="36" height="30" rx="5" fill="#450A0A" stroke="#EF4444" strokeWidth="2.0" />
                <path d="M -10,-4 L -10,-15 C -10,-22 10,-22 10,-15 L 10,-4" fill="none" stroke="#EF4444" strokeWidth="3.0" strokeLinecap="round" />
                <circle cx="0" cy="11" r="3.5" fill="#FCA5A5" />
              </g>
            </g>

            {/* --- FLOATING TELEMETRY CARDS --- */}
            {/* Left Card */}
            <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
              <g transform="translate(45, 55)" filter="url(#ssCardShadow)">
                <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#ssPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill="#EF4444" />
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="145" height="20" rx="10" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3.5" fill="#EF4444" />
                  <text x="18" y="14" fontSize="10.5" fill="#DC2626" fontWeight="800" fontFamily="system-ui, sans-serif">
                    THREAT DETECTED
                  </text>
                </g>
                <text x="14" y="70" fontSize="18" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                  Unauthorized Access
                </text>
                <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Privilege Escalation Flagged
                </text>
                <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="14" y="110" width="140" height="17" rx="3" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
                <text x="20" y="122" fontSize="10" fill="#DC2626" fontWeight="700" fontFamily="monospace">
                  INTERCEPTION ACTIVE
                </text>
              </g>
            </motion.g>

            {/* Right Card */}
            <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}>
              <g transform="translate(665, 55)" filter="url(#ssCardShadow)">
                <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#ssPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill="#EF4444" />
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="145" height="20" rx="10" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3.5" fill="#F59E0B" />
                  <text x="18" y="14" fontSize="10.5" fill="#B45309" fontWeight="800" fontFamily="system-ui, sans-serif">
                    HEURISTIC MODEL
                  </text>
                </g>
                <text x="14" y="70" fontSize="18" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                  0 False Positives
                </text>
                <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Transformer Confidence: 99.98%
                </text>
                <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="14" y="110" width="150" height="17" rx="3" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
                <text x="20" y="122" fontSize="10" fill="#B45309" fontWeight="700" fontFamily="monospace">
                  RECORDED IN LAST 72H
                </text>
              </g>
            </motion.g>

            {/* Top Center Status Pill */}
            <g transform="translate(290, 20)">
              <rect x="0" y="0" width="380" height="32" rx="7" fill="#FFFFFF" stroke="#EF4444" strokeWidth="1.8" filter="url(#ssCardShadow)" />
              <circle cx="18" cy="16" r="4.5" fill="#EF4444" />
              <text x="30" y="21" fontSize="11.5" fill="#0F172A" fontWeight="800" fontFamily="monospace">
                STEP 02 // DETECT THREATS (TRANSFORMER MODEL)
              </text>
            </g>
          </motion.svg>
        )}

        {/* =========================================================================
            SCENE 3: SECURE OPERATIONS (activeStep === 2)
            Story: Dynamic token revocation & automated enclave re-keying
            ========================================================================= */}
        {activeStep === 2 && (
          <motion.svg
            key="ss-secure"
            viewBox="0 0 960 520"
            className="w-full h-full object-contain"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <defs>
              <filter id="ssFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
              </filter>
              <filter id="ssCardShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0F172A" floodOpacity="0.08" />
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
              </filter>
              <filter id="ssGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="ssPanelGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.94" />
              </linearGradient>
              <pattern id="ssDotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1.1" fill="#2B66FF" opacity="0.08" />
              </pattern>
            </defs>

            {/* Background Grid */}
            <rect x="20" y="20" width="920" height="480" fill="url(#ssDotGrid)" />
            <ellipse cx="480" cy="420" rx="270" ry="36" fill="#10B981" opacity="0.16" filter="url(#ssFloorShadow)" />

            {/* Center Cryptographic Enclave Lattice */}
            <g transform="translate(480, 270)">
              {/* Expanding Enclave Re-Keying Wave */}
              <motion.circle
                cx="0"
                cy="0"
                r="70"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.4"
                strokeDasharray="6 6"
                animate={{ r: [70, 150], opacity: [0.9, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
              />

              {/* 3D Infinity Loop in Enclave Armor */}
              <path
                d="M -150,0 C -150,-70 -50,-70 0,0 C 50,70 150,70 150,0 C 150,-70 50,-70 0,0 C -50,70 -150,70 -150,0 Z"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="22"
                strokeLinecap="round"
              />
              <path
                d="M -150,0 C -150,-70 -50,-70 0,0 C 50,70 150,70 150,0 C 150,-70 50,-70 0,0 C -50,70 -150,70 -150,0 Z"
                fill="none"
                stroke="#10B981"
                strokeWidth="9"
                strokeLinecap="round"
              />

              {/* Honeycomb Cryptographic Defense Lattice */}
              {[-130, -50, 50, 130].map((hx, idx) => (
                <polygon
                  key={idx}
                  points={`${hx},-12 ${hx + 24},-26 ${hx + 48},-12 ${hx + 48},16 ${hx + 24},30 ${hx},16`}
                  fill="#ECFDF5"
                  fillOpacity="0.45"
                  stroke="#10B981"
                  strokeWidth="2.0"
                  strokeDasharray="4 3"
                />
              ))}

              {/* Luminous Enclave Padlock (Center) */}
              <g transform="translate(0, 10)">
                <rect x="-22" y="-6" width="44" height="36" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="2.4" />
                <path d="M -12,-6 L -12,-18 C -12,-26 12,-26 12,-18 L 12,-6" fill="none" stroke="#10B981" strokeWidth="3.4" strokeLinecap="round" />
                <circle cx="0" cy="12" r="4.5" fill="#A7F3D0" />
                <path d="M -5,12 L -1,16 L 6,9" fill="none" stroke="#064E3B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </g>

            {/* --- FLOATING TELEMETRY CARDS --- */}
            {/* Left Card */}
            <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
              <g transform="translate(45, 55)" filter="url(#ssCardShadow)">
                <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#ssPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill="#10B981" />
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="145" height="20" rx="10" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3.5" fill="#10B981" />
                  <text x="18" y="14" fontSize="10.5" fill="#047857" fontWeight="800" fontFamily="system-ui, sans-serif">
                    ENCLAVE GUARD
                  </text>
                </g>
                <text x="14" y="70" fontSize="18" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                  Session Token Rotated
                </text>
                <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Duration: 0.8ms · Re-Keyed
                </text>
                <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="14" y="110" width="145" height="17" rx="3" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                <text x="20" y="122" fontSize="10" fill="#047857" fontWeight="700" fontFamily="monospace">
                  DYNAMIC TOKEN REVOCATION
                </text>
              </g>
            </motion.g>

            {/* Right Card */}
            <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}>
              <g transform="translate(665, 55)" filter="url(#ssCardShadow)">
                <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#ssPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill="#10B981" />
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="145" height="20" rx="10" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3.5" fill="#10B981" />
                  <text x="18" y="14" fontSize="10.5" fill="#047857" fontWeight="800" fontFamily="system-ui, sans-serif">
                    LATERAL PREVENTION
                  </text>
                </g>
                <text x="14" y="70" fontSize="18" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                  Zero Lateral Drift
                </text>
                <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Instantaneous Zero-Trust Isolation
                </text>
                <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="14" y="110" width="150" height="17" rx="3" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                <text x="20" y="122" fontSize="10" fill="#047857" fontWeight="700" fontFamily="monospace">
                  ENCLAVE ISOLATION LOCKED
                </text>
              </g>
            </motion.g>

            {/* Top Center Status Pill */}
            <g transform="translate(290, 20)">
              <rect x="0" y="0" width="380" height="32" rx="7" fill="#FFFFFF" stroke="#10B981" strokeWidth="1.8" filter="url(#ssCardShadow)" />
              <circle cx="18" cy="16" r="4.5" fill="#10B981" />
              <text x="30" y="21" fontSize="11.5" fill="#0F172A" fontWeight="800" fontFamily="monospace">
                STEP 03 // SECURE OPERATIONS (ENCLAVE GUARD)
              </text>
            </g>
          </motion.svg>
        )}

        {/* =========================================================================
            SCENE 4: RESPOND (activeStep === 3)
            Story: Autonomous incident response pipelines quarantining compromised identities
                   and generating cryptographic audit proofs. Target: 198.51.100.22
            ========================================================================= */}
        {activeStep === 3 && (
          <motion.svg
            key="ss-respond"
            viewBox="0 0 960 520"
            className="w-full h-full object-contain"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <defs>
              <filter id="ssFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
              </filter>
              <filter id="ssCardShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0F172A" floodOpacity="0.08" />
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
              </filter>
              <filter id="ssGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="ssPanelGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.94" />
              </linearGradient>
              <pattern id="ssDotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1.1" fill="#2B66FF" opacity="0.08" />
              </pattern>
            </defs>

            {/* Background Grid */}
            <rect x="20" y="20" width="920" height="480" fill="url(#ssDotGrid)" />
            <ellipse cx="480" cy="420" rx="270" ry="36" fill="#F59E0B" opacity="0.18" filter="url(#ssFloorShadow)" />

            {/* Center Stage: Quarantine Isolation Cage & Cryptographic Audit Ledger */}
            <g transform="translate(480, 270)">
              {/* Floor Shadow */}
              <ellipse cx="0" cy="65" rx="160" ry="24" fill="#B45309" opacity="0.28" filter="url(#ssFloorShadow)" />

              {/* 3D Isometric Containment Vault */}
              <g transform="translate(0, 0)">
                <polygon points="-70,0 0,-35 70,0 0,35" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2.4" />
                <polygon points="-70,0 0,35 0,90 -70,55" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.4" />
                <polygon points="0,35 70,0 70,55 0,90" fill="#FDE68A" stroke="#B45309" strokeWidth="2.4" />

                {/* Compromised Rogue Threat Node Trapped Inside Vault */}
                <motion.circle
                  cx="0"
                  cy="25"
                  r="12"
                  fill="#EF4444"
                  filter="url(#ssGlow)"
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 1.0, repeat: Infinity }}
                />
                <circle cx="0" cy="25" r="4.5" fill="#FFFFFF" />

                {/* Laser Quarantine Containment Grid */}
                {[-45, -22, 0, 22, 45].map((gx, idx) => (
                  <motion.line
                    key={idx}
                    x1={gx}
                    y1="-18"
                    x2={gx}
                    y2="72"
                    stroke="#F59E0B"
                    strokeWidth="2.2"
                    strokeDasharray="5 3"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: idx * 0.15 }}
                  />
                ))}

                {/* Quarantine Padlock on Front */}
                <g transform="translate(0, 60)">
                  <circle cx="0" cy="0" r="14" fill="#F59E0B" filter="url(#ssGlow)" />
                  <circle cx="0" cy="0" r="8" fill="#78350F" />
                  <rect x="-2.5" y="-2.5" width="5" height="10" rx="1" fill="#FFFBEB" />
                  <circle cx="0" cy="-2.5" r="2.5" fill="#FFFBEB" />
                </g>
              </g>

              {/* Immutable Cryptographic Audit Proof Seal */}
              <g transform="translate(0, -95)">
                <rect x="-140" y="0" width="280" height="34" rx="6" fill="#0F172A" stroke="#F59E0B" strokeWidth="1.8" filter="url(#ssCardShadow)" />
                <circle cx="-120" cy="17" r="4.5" fill="#10B981" />
                <text x="-105" y="22" fontSize="11" fill="#38BDF8" fontWeight="800" fontFamily="monospace">
                  PROOF: SHA256[9F8B...21A] VERIFIED
                </text>
              </g>

              {/* Target Quarantined IP Badge */}
              <g transform="translate(0, 115)">
                <rect x="-120" y="0" width="240" height="26" rx="5" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.4" />
                <text x="0" y="18" fontSize="12" fill="#DC2626" fontWeight="900" fontFamily="monospace" textAnchor="middle">
                  TARGET: 198.51.100.22 (ISOLATED)
                </text>
              </g>
            </g>

            {/* --- FLOATING TELEMETRY CARDS --- */}
            {/* Left Card */}
            <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
              <g transform="translate(45, 55)" filter="url(#ssCardShadow)">
                <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#ssPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill="#F59E0B" />
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="145" height="20" rx="10" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3.5" fill="#F59E0B" />
                  <text x="18" y="14" fontSize="10.5" fill="#B45309" fontWeight="800" fontFamily="system-ui, sans-serif">
                    INCIDENT PIPELINE
                  </text>
                </g>
                <text x="14" y="70" fontSize="18" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                  Threat Quarantined
                </text>
                <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Identity Isolated Immediately
                </text>
                <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="14" y="110" width="140" height="17" rx="3" fill="#FFFBEB" stroke="#FDE68A" strokeWidth="1" />
                <text x="20" y="122" fontSize="10" fill="#B45309" fontWeight="700" fontFamily="monospace">
                  ACTION_EXECUTOR: DONE
                </text>
              </g>
            </motion.g>

            {/* Right Card */}
            <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}>
              <g transform="translate(665, 55)" filter="url(#ssCardShadow)">
                <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#ssPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill="#10B981" />
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="145" height="20" rx="10" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3.5" fill="#10B981" />
                  <text x="18" y="14" fontSize="10.5" fill="#047857" fontWeight="800" fontFamily="system-ui, sans-serif">
                    CRYPTOGRAPHIC AUDIT
                  </text>
                </g>
                <text x="14" y="70" fontSize="18" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                  Proof Generated
                </text>
                <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Immutable Audit Chain Logged
                </text>
                <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="14" y="110" width="150" height="17" rx="3" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                <text x="20" y="122" fontSize="10" fill="#047857" fontWeight="700" fontFamily="monospace">
                  LEDGER PROOF SIGNED
                </text>
              </g>
            </motion.g>

            {/* Top Center Status Pill */}
            <g transform="translate(260, 20)">
              <rect x="0" y="0" width="440" height="32" rx="7" fill="#FFFFFF" stroke="#F59E0B" strokeWidth="1.8" filter="url(#ssCardShadow)" />
              <circle cx="18" cy="16" r="4.5" fill="#F59E0B" />
              <text x="30" y="21" fontSize="11.5" fill="#0F172A" fontWeight="800" fontFamily="monospace">
                STEP 04 // AUTONOMOUS RESPOND (QUARANTINE 198.51.100.22)
              </text>
            </g>
          </motion.svg>
        )}
      </AnimatePresence>
    </div>
  );
};
