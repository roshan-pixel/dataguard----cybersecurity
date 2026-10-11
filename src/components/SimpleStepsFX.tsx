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
            Story: AI monitoring systems ingesting telemetry across 42,910 devices
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
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
              </filter>
              <filter id="ssCardShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0F172A" floodOpacity="0.08" />
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
              </filter>
              <filter id="ssGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="ssPanelGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.94" />
              </linearGradient>
              <linearGradient id="ssInfinityTrack" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2B66FF" />
                <stop offset="50%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#2B66FF" />
              </linearGradient>
              <pattern id="ssDotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1.1" fill="#2B66FF" opacity="0.08" />
              </pattern>
            </defs>

            {/* Background Grid */}
            <rect x="20" y="20" width="920" height="480" fill="url(#ssDotGrid)" />
            <ellipse cx="480" cy="420" rx="270" ry="36" fill="#1E3A8A" opacity="0.18" filter="url(#ssFloorShadow)" />

            {/* Ground Guides */}
            <line x1="140" y1="320" x2="480" y2="420" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />
            <line x1="480" y1="420" x2="820" y2="320" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />

            {/* --- CENTER: 3D INFINITY TELEMETRY PIPELINE --- */}
            <g transform="translate(480, 270)">
              {/* Floor Shadow */}
              <ellipse cx="0" cy="65" rx="190" ry="26" fill="#0F172A" opacity="0.25" filter="url(#ssFloorShadow)" />

              {/* 3D Infinity Loop Track */}
              <path
                d="M -150,0 C -150,-70 -50,-70 0,0 C 50,70 150,70 150,0 C 150,-70 50,-70 0,0 C -50,70 -150,70 -150,0 Z"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="24"
                strokeLinecap="round"
              />
              <path
                d="M -150,0 C -150,-70 -50,-70 0,0 C 50,70 150,70 150,0 C 150,-70 50,-70 0,0 C -50,70 -150,70 -150,0 Z"
                fill="none"
                stroke="#2B66FF"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.85"
              />

              {/* Moving Ingestion Telemetry Packets along Infinity Track */}
              <motion.circle
                cx="-150"
                cy="0"
                r="6.5"
                fill="#38BDF8"
                filter="url(#ssGlow)"
                animate={{
                  offsetDistance: ['0%', '100%'],
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
              />

              {/* Left Code Window `< / >` */}
              <g transform="translate(-105, -75)">
                <rect x="0" y="0" width="76" height="56" rx="5" fill="#0F172A" stroke="#334155" strokeWidth="1.8" filter="url(#ssCardShadow)" />
                <rect x="0" y="0" width="76" height="12" rx="5" fill="#1E293B" />
                <circle cx="8" cy="6" r="2" fill="#EF4444" />
                <circle cx="15" cy="6" r="2" fill="#F59E0B" />
                <circle cx="22" cy="6" r="2" fill="#10B981" />
                <text x="38" y="38" fontSize="18" fill="#38BDF8" fontWeight="900" fontFamily="monospace" textAnchor="middle">
                  &lt; / &gt;
                </text>
              </g>

              {/* Right Diagnostic Checklist Window */}
              <g transform="translate(30, -75)">
                <rect x="0" y="0" width="76" height="56" rx="5" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="1.8" filter="url(#ssCardShadow)" />
                <rect x="0" y="0" width="76" height="12" rx="5" fill="#EFF6FF" />
                <line x1="8" y1="22" x2="68" y2="22" stroke="#2B66FF" strokeWidth="2.0" strokeDasharray="6 3" />
                <line x1="8" y1="32" x2="55" y2="32" stroke="#38BDF8" strokeWidth="2.0" strokeDasharray="6 3" />
                <line x1="8" y1="42" x2="62" y2="42" stroke="#10B981" strokeWidth="2.0" strokeDasharray="6 3" />
              </g>

              {/* Center Lock Badge */}
              <g transform="translate(0, 15)">
                <rect x="-18" y="-4" width="36" height="30" rx="5" fill="#0F172A" stroke="#2B66FF" strokeWidth="2.0" />
                <path d="M -10,-4 L -10,-15 C -10,-22 10,-22 10,-15 L 10,-4" fill="none" stroke="#2B66FF" strokeWidth="3.0" strokeLinecap="round" />
                <circle cx="0" cy="11" r="3.5" fill="#38BDF8" />
              </g>
            </g>

            {/* --- CONNECTED CLIENT DEVICES MESH (Foreground) --- */}
            {[
              { cx: 180, cy: 375, name: 'EDGE PROXY', ip: '10.0.1.14' },
              { cx: 300, cy: 430, name: 'IOT FLEET', ip: '10.0.4.88' },
              { cx: 660, cy: 430, name: 'WORKSTATION', ip: '10.0.2.51' },
              { cx: 780, cy: 375, name: 'CLOUD CLUSTER', ip: '10.0.9.02' },
            ].map((device, idx) => (
              <g key={idx} transform={`translate(${device.cx}, ${device.cy})`}>
                <ellipse cx="0" cy="18" rx="24" ry="7" fill="#1E3A8A" opacity="0.25" filter="url(#ssFloorShadow)" />
                <polygon points="-20,0 0,-11 20,0 0,11" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="1.6" />
                <polygon points="-20,0 0,11 0,20 -20,9" fill="#E2E8F0" stroke="#2B66FF" strokeWidth="1.4" />
                <polygon points="0,11 20,0 20,9 0,20" fill="#CBD5E1" stroke="#2B66FF" strokeWidth="1.4" />
                <circle cx="0" cy="0" r="4.5" fill="#2B66FF" />
                <circle cx="0" cy="0" r="2" fill="#FFFFFF" />

                {/* Telemetry Ingestion Ray to Center */}
                <line x1="0" y1="0" x2={480 - device.cx} y2={270 - device.cy} stroke="#2B66FF" strokeWidth="1.8" strokeDasharray="4 4" opacity="0.45" />
                <motion.circle
                  cx="0"
                  cy="0"
                  r="3.2"
                  fill="#38BDF8"
                  animate={{ cx: [0, 480 - device.cx], cy: [0, 270 - device.cy], opacity: [1, 0.3] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: idx * 0.4, ease: 'easeIn' }}
                />
              </g>
            ))}

            {/* --- FLOATING TELEMETRY CARDS --- */}
            {/* Left Card */}
            <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}>
              <g transform="translate(45, 55)" filter="url(#ssCardShadow)">
                <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#ssPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill="#2B66FF" />
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="145" height="20" rx="10" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3.5" fill="#2B66FF" />
                  <text x="18" y="14" fontSize="10.5" fill="#1D4ED8" fontWeight="800" fontFamily="system-ui, sans-serif">
                    TELEMETRY STREAM
                  </text>
                </g>
                <text x="14" y="70" fontSize="18" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                  42,910 Endpoints
                </text>
                <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  AI Continuous Monitoring · Status: OK
                </text>
                <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="14" y="110" width="130" height="17" rx="3" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                <text x="20" y="122" fontSize="10" fill="#64748B" fontWeight="700" fontFamily="monospace">
                  0.001% CPU OVERHEAD
                </text>
              </g>
            </motion.g>

            {/* Right Card */}
            <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}>
              <g transform="translate(665, 55)" filter="url(#ssCardShadow)">
                <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#ssPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill="#38BDF8" />
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="145" height="20" rx="10" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3.5" fill="#10B981" />
                  <text x="18" y="14" fontSize="10.5" fill="#15803D" fontWeight="800" fontFamily="system-ui, sans-serif">
                    AI INGESTION ACTIVE
                  </text>
                </g>
                <text x="14" y="70" fontSize="18" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                  Zero Packet Drop
                </text>
                <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  Edge Proxies & Cloud Clusters Synced
                </text>
                <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="14" y="110" width="150" height="17" rx="3" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                <text x="20" y="122" fontSize="10" fill="#1D4ED8" fontWeight="700" fontFamily="monospace">
                  AUTONOMOUS TELEMETRY
                </text>
              </g>
            </motion.g>

            {/* Top Center Status Pill */}
            <g transform="translate(290, 20)">
              <rect x="0" y="0" width="380" height="32" rx="7" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="1.8" filter="url(#ssCardShadow)" />
              <circle cx="18" cy="16" r="4.5" fill="#2B66FF" />
              <text x="30" y="21" fontSize="11.5" fill="#0F172A" fontWeight="800" fontFamily="monospace">
                STEP 01 // MONITOR ACTIVITY (AI INGESTION)
              </text>
            </g>
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
