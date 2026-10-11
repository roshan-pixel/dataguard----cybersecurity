import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Activity, ShieldAlert, Lock, Zap, Terminal } from 'lucide-react';
import { sound } from './AudioFeedback';

export type FirewallStepKey = 'monitor' | 'detect' | 'secure' | 'respond';

interface FirewallFXProps {
  onOpenDemo?: (tab?: 'scanner' | 'docs' | 'trial') => void;
}

interface StepMeta {
  key: FirewallStepKey;
  pillLabel: string;
  title: string;
  description: string;
  expandedDetail: string;
  log: string;
  badge: string;
  badgeColor: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const FirewallFX: React.FC<FirewallFXProps> = ({ onOpenDemo }) => {
  const [activeStep, setActiveStep] = useState<FirewallStepKey>('monitor');

  const stepsMeta: Record<FirewallStepKey, StepMeta> = {
    monitor: {
      key: 'monitor',
      pillLabel: 'Monitor Activity',
      title: 'Monitor Activity',
      description: 'connected devices using AI-powered monitoring systems.',
      expandedDetail: 'Continuous ingestion of telemetry across edge proxies, cloud clusters, and employee endpoints with zero CPU overhead.',
      log: 'telemetry_stream.init() -> 42,910 endpoints reporting status: OK',
      badge: 'AI MONITORING ACTIVE',
      badgeColor: '#2B66FF',
      icon: Activity,
    },
    detect: {
      key: 'detect',
      pillLabel: 'Detect Threats',
      title: 'Detect Threats',
      description: 'identify suspicious activity, unauthorized access',
      expandedDetail: 'Multi-layer heuristics and transformer-based behavioral models flag privilege escalation and anomalous token exchanges.',
      log: 'anomaly_detector: 0 false positives recorded in last 72 hours',
      badge: 'THREAT DETECTED // INTERCEPTING',
      badgeColor: '#EF4444',
      icon: ShieldAlert,
    },
    secure: {
      key: 'secure',
      pillLabel: 'Secure Operations',
      title: 'Secure Operations',
      description: 'connected devices using AI-powered monitoring systems.',
      expandedDetail: 'Dynamic token revocation, automated enclave re-keying, and instantaneous zero-trust isolation prevent lateral movement.',
      log: 'enclave_guard: session_token_rotated duration: 0.8ms',
      badge: 'ZERO-TRUST ENCLAVE LOCKED',
      badgeColor: '#10B981',
      icon: Lock,
    },
    respond: {
      key: 'respond',
      pillLabel: 'Respond',
      title: 'Respond',
      description: 'Respond instantly and isolate threats.',
      expandedDetail: 'Autonomous incident response pipelines quarantine compromised identities and generate cryptographic audit proofs.',
      log: 'action_executor: threat_quarantined target_ip: 198.51.100.22',
      badge: 'QUARANTINE PIPELINE EXECUTED',
      badgeColor: '#F59E0B',
      icon: Zap,
    },
  };

  const current = stepsMeta[activeStep];

  // Helper brick generator for the 3D isometric wall
  // Wall center: ~ (500, 270)
  // Isogrid transformation: skewY(-15) and isometric facet angles
  const brickCourses = [
    // Row 0 (Top course)
    [
      { x: 340, y: 160, w: 72, h: 28 },
      { x: 420, y: 160, w: 72, h: 28 },
      { x: 500, y: 160, w: 72, h: 28 },
      { x: 580, y: 160, w: 72, h: 28 },
    ],
    // Row 1
    [
      { x: 300, y: 196, w: 72, h: 28 },
      { x: 380, y: 196, w: 72, h: 28 },
      { x: 460, y: 196, w: 72, h: 28 },
      { x: 540, y: 196, w: 72, h: 28 },
      { x: 620, y: 196, w: 72, h: 28 },
    ],
    // Row 2
    [
      { x: 340, y: 232, w: 72, h: 28 },
      { x: 420, y: 232, w: 72, h: 28 },
      { x: 500, y: 232, w: 72, h: 28 },
      { x: 580, y: 232, w: 72, h: 28 },
    ],
    // Row 3 (Bottom course)
    [
      { x: 300, y: 268, w: 72, h: 28 },
      { x: 380, y: 268, w: 72, h: 28 },
      { x: 460, y: 268, w: 72, h: 28 },
      { x: 540, y: 268, w: 72, h: 28 },
      { x: 620, y: 268, w: 72, h: 28 },
    ],
  ];

  return (
    <div className="w-full flex flex-col">
      {/* 3D Isometric Interactive Canvas */}
      <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden bg-[#FBFDFF] rounded-xl border border-[#E2E8F0] shadow-inner">
        <AnimatePresence mode="wait">
          <motion.svg
            key={activeStep}
            viewBox="0 0 960 520"
            className="w-full h-full object-contain select-none"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <defs>
              {/* Soft Ground Floor Shadow */}
              <filter id="fwFloorShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
              </filter>

              {/* Card Drop Shadow */}
              <filter id="fwCardShadow" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0F172A" floodOpacity="0.08" />
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.04" />
              </filter>

              {/* Shield Volumetric Shadow */}
              <filter id="fwShieldShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#1E3A8A" floodOpacity="0.25" />
              </filter>

              {/* Cyan / Blue Glow */}
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

              {/* Brick Facet Gradients */}
              <linearGradient id="fwBrickTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E0EDFF" />
              </linearGradient>
              <linearGradient id="fwBrickFront" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
              <linearGradient id="fwBrickSide" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="100%" stopColor="#94A3B8" />
              </linearGradient>

              {/* Laser Beam Gradients */}
              <linearGradient id="fwLaserThreat" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.95" />
                <stop offset="70%" stopColor="#EF4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.9" />
              </linearGradient>

              {/* Background Dot Grid */}
              <pattern id="fwDotGrid" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="14" cy="14" r="1.1" fill="#2B66FF" opacity="0.08" />
              </pattern>

              {/* Halftone Dot Pattern for 3D Wall Texture */}
              <pattern id="fwHalftoneBricks" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="4" r="1.2" fill="#2B66FF" opacity="0.18" />
              </pattern>
            </defs>

            {/* Background Grid */}
            <rect x="20" y="20" width="920" height="480" fill="url(#fwDotGrid)" />

            {/* Floor Contact Shadows */}
            <ellipse cx="490" cy="425" rx="280" ry="36" fill="#1E3A8A" opacity="0.18" filter="url(#fwFloorShadow)" />
            <ellipse cx="490" cy="425" rx="160" ry="22" fill="#2B66FF" opacity="0.20" filter="url(#fwFloorShadow)" />

            {/* Isometric Ground Alignment Guides */}
            <line x1="140" y1="320" x2="490" y2="425" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />
            <line x1="490" y1="425" x2="840" y2="320" stroke="#2B66FF" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />

            {/* =========================================================================
                CENTER STAGE: 3D ISOMETRIC BRICK FIREWALL & VOLUMETRIC SHIELD
                ========================================================================= */}
            <g transform="translate(480, 270)">
              {/* --- 3D BRICK FIREWALL STRUCTURE --- */}
              <g transform="translate(-480, -270)">
                {/* Wall Base Shadow */}
                <ellipse cx="490" cy="335" rx="210" ry="24" fill="#0F172A" opacity="0.22" filter="url(#fwFloorShadow)" />

                {/* Extruded Isometric Bricks */}
                {brickCourses.map((course, rowIdx) =>
                  course.map((brick, bIdx) => {
                    const skewOffset = rowIdx * 14;
                    const bx = brick.x + skewOffset;
                    const by = brick.y + rowIdx * 12;
                    const depth = 22;

                    return (
                      <g key={`brick-${rowIdx}-${bIdx}`} className="transition-opacity duration-300">
                        {/* Brick Front Face */}
                        <polygon
                          points={`${bx},${by} ${bx + brick.w},${by - 12} ${bx + brick.w},${by + brick.h - 12} ${bx},${by + brick.h}`}
                          fill="url(#fwBrickFront)"
                          stroke="#2B66FF"
                          strokeWidth="1.6"
                          strokeOpacity={activeStep === 'secure' ? '0.7' : '0.4'}
                        />
                        {/* Halftone texture overlay on front face */}
                        <polygon
                          points={`${bx},${by} ${bx + brick.w},${by - 12} ${bx + brick.w},${by + brick.h - 12} ${bx},${by + brick.h}`}
                          fill="url(#fwHalftoneBricks)"
                          opacity={activeStep === 'secure' ? 0.6 : 0.3}
                        />

                        {/* Brick Top Face (Isometric Extrusion) */}
                        <polygon
                          points={`${bx},${by} ${bx + depth},${by - depth} ${bx + brick.w + depth},${by - 12 - depth} ${bx + brick.w},${by - 12}`}
                          fill="url(#fwBrickTop)"
                          stroke="#2B66FF"
                          strokeWidth="1.4"
                          strokeOpacity={activeStep === 'secure' ? '0.8' : '0.5'}
                        />

                        {/* Brick Right Face (Depth Shade) */}
                        <polygon
                          points={`${bx + brick.w},${by - 12} ${bx + brick.w + depth},${by - 12 - depth} ${bx + brick.w + depth},${by + brick.h - 12 - depth} ${bx + brick.w},${by + brick.h - 12}`}
                          fill="url(#fwBrickSide)"
                          stroke="#2B66FF"
                          strokeWidth="1.4"
                          strokeOpacity="0.4"
                        />

                        {/* Specular Top Edge Glint */}
                        <line
                          x1={bx + depth}
                          y1={by - depth}
                          x2={bx + brick.w + depth}
                          y2={by - 12 - depth}
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          opacity="0.8"
                        />
                      </g>
                    );
                  })
                )}
              </g>

              {/* --- VOLUMETRIC DEFENSIVE SHIELD (Center Pivot) --- */}
              <g transform="translate(-15, -45) scale(1.18)" filter="url(#fwShieldShadow)">
                {/* Shield Floor Shadow */}
                <ellipse cx="0" cy="80" rx="36" ry="10" fill="#1E3A8A" opacity="0.32" filter="url(#fwFloorShadow)" />

                {/* Deflection Shockwave Barrier (Active on Detect or Respond) */}
                {(activeStep === 'detect' || activeStep === 'respond') && (
                  <motion.path
                    d="M -42,-12 Q -54,32 -42,72"
                    fill="none"
                    stroke={activeStep === 'detect' ? '#38BDF8' : '#F59E0B'}
                    strokeWidth="3.6"
                    filter="url(#fwSparkGlow)"
                    animate={{ opacity: [0.4, 1, 0.4], strokeWidth: [2.5, 4.5, 2.5] }}
                    transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}

                {/* Deflection Sparks */}
                {activeStep === 'detect' && (
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
                )}

                {/* 3D Shield Geometry */}
                {/* Top Extruded Bevel */}
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
                <circle
                  cx="0"
                  cy="32"
                  r="13"
                  fill={activeStep === 'secure' ? '#ECFDF5' : activeStep === 'respond' ? '#FFFBEB' : '#EFF6FF'}
                />
                <path
                  d="M -7,32 L -2,37 L 7,26"
                  fill="none"
                  stroke={activeStep === 'secure' ? '#10B981' : activeStep === 'respond' ? '#F59E0B' : '#2B66FF'}
                  strokeWidth="3.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Specular Highlight */}
                <line x1="-26" y1="-3" x2="0" y2="9" stroke="#FFFFFF" strokeWidth="2.6" opacity="0.9" strokeLinecap="round" />
              </g>

              {/* Cryptographic Honeycomb Grid on Secure Operations */}
              {activeStep === 'secure' && (
                <motion.g
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {[-120, -40, 40, 120].map((hx, idx) => (
                    <polygon
                      key={idx}
                      points={`${hx},-10 ${hx + 24},-24 ${hx + 48},-10 ${hx + 48},18 ${hx + 24},32 ${hx},18`}
                      fill="#ECFDF5"
                      fillOpacity="0.35"
                      stroke="#10B981"
                      strokeWidth="2.0"
                      strokeDasharray="4 3"
                    />
                  ))}
                </motion.g>
              )}
            </g>

            {/* =========================================================================
                DYNAMIC VISUAL SCENES PER STEP
                ========================================================================= */}

            {/* --- STATE 1: MONITOR ACTIVITY --- */}
            {activeStep === 'monitor' && (
              <g>
                {/* Connected Client Endpoint Nodes */}
                {[
                  { cx: 200, cy: 370, label: 'EDGE-NODE 01', ip: '10.0.1.14' },
                  { cx: 290, cy: 435, label: 'IOT CLUSTER', ip: '10.0.4.88' },
                  { cx: 680, cy: 435, label: 'WORKSTATION', ip: '10.0.2.51' },
                  { cx: 770, cy: 370, label: 'CLOUD INGRESS', ip: '10.0.9.02' },
                ].map((node, idx) => (
                  <g key={idx} transform={`translate(${node.cx}, ${node.cy})`}>
                    {/* Floor shadow */}
                    <ellipse cx="0" cy="18" rx="24" ry="7" fill="#1E3A8A" opacity="0.25" filter="url(#fwFloorShadow)" />
                    {/* Node pedestal */}
                    <polygon points="-22,0 0,-12 22,0 0,12" fill="#FFFFFF" stroke="#2B66FF" strokeWidth="1.6" />
                    <polygon points="-22,0 0,12 0,22 -22,10" fill="#E2E8F0" stroke="#2B66FF" strokeWidth="1.4" />
                    <polygon points="0,12 22,0 22,10 0,22" fill="#CBD5E1" stroke="#2B66FF" strokeWidth="1.4" />
                    {/* Glowing status ring */}
                    <motion.circle
                      cx="0"
                      cy="0"
                      r="16"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="1.8"
                      animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.2, 0.8] }}
                      transition={{ duration: 2.2, repeat: Infinity, delay: idx * 0.3 }}
                    />
                    <circle cx="0" cy="0" r="4.5" fill="#2B66FF" />
                    <circle cx="0" cy="0" r="2.0" fill="#FFFFFF" />

                    {/* Beam connecting to central firewall */}
                    <line
                      x1="0"
                      y1="0"
                      x2={465 - node.cx}
                      y2={225 - node.cy}
                      stroke="#2B66FF"
                      strokeWidth="1.8"
                      strokeDasharray="4 4"
                      opacity="0.45"
                    />
                    {/* Moving telemetry data packet */}
                    <motion.circle
                      cx="0"
                      cy="0"
                      r="3.2"
                      fill="#38BDF8"
                      animate={{
                        cx: [0, 465 - node.cx],
                        cy: [0, 225 - node.cy],
                        opacity: [1, 0.3],
                      }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: idx * 0.45, ease: 'easeIn' }}
                    />
                  </g>
                ))}
              </g>
            )}

            {/* --- STATE 2: DETECT THREATS --- */}
            {activeStep === 'detect' && (
              <g>
                {/* Malicious Attack Vector Rays */}
                {[
                  { x1: 140, y1: 240, x2: 440, y2: 230 },
                  { x1: 160, y1: 290, x2: 440, y2: 245 },
                  { x1: 180, y1: 340, x2: 445, y2: 260 },
                  { x1: 210, y1: 390, x2: 450, y2: 275 },
                ].map((ray, idx) => (
                  <g key={idx}>
                    <line
                      x1={ray.x1}
                      y1={ray.y1}
                      x2={ray.x2}
                      y2={ray.y2}
                      stroke="url(#fwLaserThreat)"
                      strokeWidth="2.8"
                      strokeDasharray="6 4"
                    />
                    {/* High-speed malicious threat packet */}
                    <motion.circle
                      cx={ray.x1}
                      cy={ray.y1}
                      r="4.8"
                      fill="#EF4444"
                      filter="url(#fwGlow)"
                      animate={{ cx: [ray.x1, ray.x2], cy: [ray.y1, ray.y2], opacity: [1, 0.3] }}
                      transition={{ duration: 0.9 + idx * 0.15, repeat: Infinity, ease: 'easeIn' }}
                    />
                    <motion.circle
                      cx={ray.x1}
                      cy={ray.y1}
                      r="2.2"
                      fill="#FFFFFF"
                      animate={{ cx: [ray.x1, ray.x2], cy: [ray.y1, ray.y2], opacity: [1, 0.3] }}
                      transition={{ duration: 0.9 + idx * 0.15, repeat: Infinity, ease: 'easeIn' }}
                    />
                  </g>
                ))}
              </g>
            )}

            {/* --- STATE 3: SECURE OPERATIONS --- */}
            {activeStep === 'secure' && (
              <g>
                {/* Enclave Re-Keying Pulse Beams */}
                <motion.circle
                  cx="465"
                  cy="225"
                  r="75"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2.4"
                  strokeDasharray="6 6"
                  animate={{ r: [75, 140], opacity: [0.9, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                />
                <motion.circle
                  cx="465"
                  cy="225"
                  r="75"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.0"
                  animate={{ r: [75, 110], opacity: [0.8, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 0.4, ease: 'easeOut' }}
                />
              </g>
            )}

            {/* --- STATE 4: RESPOND (Quarantine Isolation) --- */}
            {activeStep === 'respond' && (
              <g>
                {/* Quarantine Isolation Cell for Threat Target: 198.51.100.22 */}
                <g transform="translate(230, 320)">
                  {/* Floor contact shadow */}
                  <ellipse cx="0" cy="35" rx="42" ry="14" fill="#B45309" opacity="0.32" filter="url(#fwFloorShadow)" />

                  {/* 3D Quarantine Isometric Cube Cage */}
                  <polygon points="-36,0 0,-18 36,0 0,18" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2.2" />
                  <polygon points="-36,0 0,18 0,54 -36,36" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.2" />
                  <polygon points="0,18 36,0 36,36 0,54" fill="#FDE68A" stroke="#B45309" strokeWidth="2.2" />

                  {/* Red Threat Node Trapped Inside Quarantine Cage */}
                  <motion.circle
                    cx="0"
                    cy="18"
                    r="8.5"
                    fill="#EF4444"
                    filter="url(#fwGlow)"
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{ duration: 1.0, repeat: Infinity }}
                  />
                  <circle cx="0" cy="18" r="3.5" fill="#FFFFFF" />

                  {/* Quarantine Laser Containment Bars */}
                  {[-24, -12, 0, 12, 24].map((lx, idx) => (
                    <motion.line
                      key={idx}
                      x1={lx}
                      y1="-8"
                      x2={lx}
                      y2="42"
                      stroke="#F59E0B"
                      strokeWidth="2.0"
                      strokeDasharray="4 2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: idx * 0.15 }}
                    />
                  ))}

                  {/* Quarantine Target Label Tag */}
                  <rect x="-65" y="62" width="130" height="22" rx="4" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.2" />
                  <text x="0" y="77" fontSize="10.5" fill="#DC2626" fontWeight="900" fontFamily="monospace" textAnchor="middle">
                    ISOLATED: 198.51.100.22
                  </text>
                </g>

                {/* Containment Ray Connecting Quarantine to Firewall */}
                <path
                  d="M 230 320 C 310 320, 380 250, 465 225"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="2.2"
                  strokeDasharray="5 4"
                  opacity="0.8"
                />
                <motion.circle
                  cx="230"
                  cy="320"
                  r="3.8"
                  fill="#F59E0B"
                  animate={{ cx: [230, 340, 465], cy: [320, 280, 225] }}
                  transition={{ duration: 2.0, repeat: Infinity, ease: 'easeInOut' }}
                />
              </g>
            )}

            {/* =========================================================================
                FLOATING TELEMETRY CARDS (High-Contrast & Clean Layout)
                ========================================================================= */}

            {/* Left Telemetry Card */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <g transform="translate(45, 55)" filter="url(#fwCardShadow)">
                <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#fwPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                {/* Top Accent Strip */}
                <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill={current.badgeColor} />

                {/* Category Pill */}
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="145" height="20" rx="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3.5" fill={current.badgeColor} />
                  <text x="18" y="14" fontSize="10.5" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                    {current.badge}
                  </text>
                </g>

                {/* Primary Metric / Status */}
                <text x="14" y="70" fontSize="17" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                  {activeStep === 'monitor' && '42,910 Devices'}
                  {activeStep === 'detect' && 'High-Risk Threat'}
                  {activeStep === 'secure' && 'Enclave Active'}
                  {activeStep === 'respond' && 'Target Quarantined'}
                </text>

                {/* Subtitle */}
                <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  {activeStep === 'monitor' && 'AI telemetry continuous'}
                  {activeStep === 'detect' && 'Burst intercepted at wall'}
                  {activeStep === 'secure' && 'Token rotated in 0.8ms'}
                  {activeStep === 'respond' && '198.51.100.22 isolated'}
                </text>

                {/* Divider and status */}
                <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="14" y="110" width="130" height="17" rx="3" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
                <text x="20" y="122" fontSize="10" fill="#64748B" fontWeight="700" fontFamily="monospace">
                  STATUS: VERIFIED
                </text>
              </g>
            </motion.g>

            {/* Right Telemetry Card */}
            <motion.g
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
            >
              <g transform="translate(665, 55)" filter="url(#fwCardShadow)">
                <rect x="0" y="0" width="250" height="135" rx="10" fill="url(#fwPanelGlass)" stroke="#E2E8F0" strokeWidth="1.5" />
                {/* Top Accent Strip */}
                <path d="M 0 10 Q 0 0 10 0 L 240 0 Q 250 0 250 10 L 250 12 L 0 12 Z" fill="#2B66FF" />

                {/* Category Pill */}
                <g transform="translate(14, 24)">
                  <rect x="0" y="0" width="145" height="20" rx="10" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                  <circle cx="10" cy="10" r="3.5" fill="#2B66FF" />
                  <text x="18" y="14" fontSize="10.5" fill="#1D4ED8" fontWeight="800" fontFamily="system-ui, sans-serif">
                    DEFENSE LEDGER
                  </text>
                </g>

                {/* Primary Metric */}
                <text x="14" y="70" fontSize="17" fill="#0F172A" fontWeight="800" fontFamily="system-ui, sans-serif">
                  {activeStep === 'monitor' && '0.001% Overhead'}
                  {activeStep === 'detect' && '0 False Positives'}
                  {activeStep === 'secure' && 'Zero Lateral Drift'}
                  {activeStep === 'respond' && 'Audit Proof Signed'}
                </text>

                {/* Subtitle */}
                <text x="14" y="92" fontSize="12" fill="#475569" fontWeight="600" fontFamily="system-ui, sans-serif">
                  {activeStep === 'monitor' && 'No host performance penalty'}
                  {activeStep === 'detect' && 'Transformer anomaly score'}
                  {activeStep === 'secure' && 'Zero-Trust perimeter locked'}
                  {activeStep === 'respond' && 'Immutable cryptographic log'}
                </text>

                {/* Divider and status */}
                <line x1="14" y1="104" x2="236" y2="104" stroke="#F1F5F9" strokeWidth="1.2" />
                <rect x="14" y="110" width="150" height="17" rx="3" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1" />
                <text x="20" y="122" fontSize="10" fill="#1D4ED8" fontWeight="700" fontFamily="monospace">
                  AUTONOMOUS ENGINE
                </text>
              </g>
            </motion.g>

            {/* Top Interactive Banner Badge */}
            <g transform="translate(320, 20)">
              <rect x="0" y="0" width="320" height="32" rx="7" fill="#FFFFFF" stroke={current.badgeColor} strokeWidth="1.8" filter="url(#fwCardShadow)" />
              <circle cx="18" cy="16" r="4.5" fill={current.badgeColor} />
              <text x="30" y="21" fontSize="11.5" fill="#0F172A" fontWeight="800" fontFamily="monospace">
                {current.badge}
              </text>
            </g>
          </motion.svg>
        </AnimatePresence>
      </div>

      {/* Interactive Controls & Pill Selectors */}
      <div className="mt-5 pt-4 border-t border-[#DCE3ED]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* 4 Interactive Pills */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2">
            {(Object.keys(stepsMeta) as FirewallStepKey[]).map((key) => {
              const step = stepsMeta[key];
              const isSelected = activeStep === key;
              const Icon = step.icon;

              return (
                <button
                  key={key}
                  onClick={() => {
                    sound.playClick(600 + (key === 'monitor' ? 0 : key === 'detect' ? 50 : key === 'secure' ? 100 : 150));
                    setActiveStep(key);
                  }}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono-tech transition-all flex items-center gap-2 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#2B66FF] text-white border-[#2B66FF] shadow-sm font-bold'
                      : 'bg-white text-[#475569] border-[#DCE3ED] hover:bg-[#F8FAFC] hover:border-[#CBD5E1]'
                  }`}
                  aria-pressed={isSelected}
                  title={`Switch to ${step.title}`}
                >
                  <Icon size={14} className={isSelected ? 'text-white' : 'text-[#8CA3C4]'} />
                  <span>{step.pillLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Blue Square Action Button */}
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

        {/* Dynamic Context & Console Telemetry Log */}
        <div className="mt-4 p-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
          <div className="flex items-center justify-between text-xs font-sans text-[#1A1F2B]">
            <div className="font-semibold text-[#0F172A] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.badgeColor }} />
              {current.title}
            </div>
            <span className="text-[#64748B] text-[11px] font-mono-tech">{current.description}</span>
          </div>
          <p className="text-xs text-[#475569] mt-1.5 leading-relaxed">
            {current.expandedDetail}
          </p>
          <div className="mt-2.5 pt-2 border-t border-[#E2E8F0] flex items-center gap-2 font-mono-tech text-[11px] text-emerald-700 bg-emerald-50/70 p-2 rounded">
            <Terminal size={13} className="text-emerald-600 flex-shrink-0" />
            <span className="truncate">$ {current.log}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
