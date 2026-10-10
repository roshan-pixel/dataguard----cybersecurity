import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle, Smartphone, ShieldAlert } from 'lucide-react';
import { Crosshair } from '../components/Crosshair';
import { sound } from '../components/AudioFeedback';
import { AdvancedFeaturesFX } from '../components/AdvancedFeaturesFX';

interface AdvancedFeaturesProps {
  onOpenDemo: (tab?: 'scanner' | 'docs' | 'trial') => void;
}

export const AdvancedFeatures: React.FC<AdvancedFeaturesProps> = ({ onOpenDemo }) => {
  const [selectedAlert, setSelectedAlert] = useState<'ip' | 'device' | 'auth'>('device');

  const alertData = {
    ip: {
      title: 'Suspicious IP Activity',
      desc: 'Automatic geo-velocity anomaly detection blocks anomalous proxy networks and bulletproof ASN ranges.',
      source: '194.26.29.112 (Tor Exit Node)',
      status: 'Blocked at Edge'
    },
    device: {
      title: 'Unknown Device',
      desc: 'Enforce hardware security key (FIDO2/WebAuthn) verification when unrecognized client fingerprints appear.',
      source: 'Unenrolled macOS Sonoma / Safari',
      status: 'MFA Challenge Prompted'
    },
    auth: {
      title: 'Failed Authentication',
      desc: 'Brute-force and credential stuffing prevention with exponential tarpitting and cryptographic challenges.',
      source: '14 consecutive attempts',
      status: 'Rate-Limited & Quarantined'
    }
  };

  return (
    <section id="capabilities" className="relative w-full bg-white border-b border-[#DCE3ED] py-16 sm:py-24">
      {/* Precision Crosshairs */}
      <div className="absolute top-4 left-6 z-20">
        <Crosshair />
      </div>
      <div className="absolute top-4 right-6 z-20">
        <Crosshair />
      </div>
      <div className="absolute bottom-4 left-6 z-20">
        <Crosshair />
      </div>
      <div className="absolute bottom-4 right-6 z-20">
        <Crosshair />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-14 border-b border-[#DCE3ED]">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-[#0F1115] leading-[1.15]">
              Advanced Security Features For Modern Enterprises
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#1A1F2B] font-normal leading-relaxed">
              Protect your business with intelligent cybersecurity solutions designed to secure access
            </p>
          </div>
        </div>

        {/* Feature 1: Prevent Unauthorized Access (Radar Scanner) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-14 border-b border-[#DCE3ED]">
          
          {/* Left: Alert Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              {/* Alert 1 */}
              <button
                onClick={() => {
                  sound.playClick(600);
                  setSelectedAlert('ip');
                }}
                className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                  selectedAlert === 'ip'
                    ? 'border-[#2B66FF] bg-[#F5F7FA] text-[#2B66FF] font-semibold'
                    : 'border-[#DCE3ED] bg-white text-[#6B7280] hover:text-[#0F1115]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle size={17} className={selectedAlert === 'ip' ? 'text-[#2B66FF]' : 'text-[#8CA3C4]'} />
                  <span className="text-sm font-sans">Suspicious IP Activity</span>
                </div>
                <span className="font-mono-tech text-xs uppercase px-2 py-0.5 rounded bg-[#EBF1FF] text-[#2B66FF]">
                  AI Flagged
                </span>
              </button>

              {/* Alert 2 (Default Active in reference) */}
              <button
                onClick={() => {
                  sound.playClick(600);
                  setSelectedAlert('device');
                }}
                className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                  selectedAlert === 'device'
                    ? 'border-[#2B66FF] bg-[#F5F7FA] text-[#2B66FF] font-semibold'
                    : 'border-[#DCE3ED] bg-white text-[#6B7280] hover:text-[#0F1115]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Smartphone size={17} className={selectedAlert === 'device' ? 'text-[#2B66FF]' : 'text-[#8CA3C4]'} />
                  <span className="text-sm font-sans">Unknown Device</span>
                </div>
                <span className="font-mono-tech text-xs uppercase px-2 py-0.5 rounded bg-[#EBF1FF] text-[#2B66FF]">
                  Active Filter
                </span>
              </button>

              {/* Alert 3 */}
              <button
                onClick={() => {
                  sound.playClick(600);
                  setSelectedAlert('auth');
                }}
                className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between ${
                  selectedAlert === 'auth'
                    ? 'border-[#2B66FF] bg-[#F5F7FA] text-[#2B66FF] font-semibold'
                    : 'border-[#DCE3ED] bg-white text-[#6B7280] hover:text-[#0F1115]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShieldAlert size={17} className={selectedAlert === 'auth' ? 'text-[#2B66FF]' : 'text-[#8CA3C4]'} />
                  <span className="text-sm font-sans">Failed Authentication</span>
                </div>
                <span className="font-mono-tech text-xs uppercase px-2 py-0.5 rounded bg-[#EBF1FF] text-[#2B66FF]">
                  Tarpit Rule
                </span>
              </button>
            </div>

            {/* Context paragraph matching reference */}
            <div className="pt-4">
              <p className="text-sm text-[#1A1F2B] font-normal leading-relaxed">
                {alertData[selectedAlert].desc}
              </p>
              <div className="mt-3 p-3 bg-[#F5F7FA] border border-[#DCE3ED] rounded-lg text-xs font-mono-tech text-[#6B7280]">
                <div><span className="text-[#8CA3C4]">Payload:</span> {alertData[selectedAlert].source}</div>
                <div><span className="text-[#8CA3C4]">Resolution:</span> <span className="text-[#2B66FF]">{alertData[selectedAlert].status}</span></div>
              </div>
            </div>
          </div>

          {/* Right: Radar Scanning Card */}
          <div className="lg:col-span-7">
            <div className="relative border border-[#DCE3ED] rounded-xl p-6 sm:p-8 bg-white shadow-tech-card group">
              <div className="absolute top-3 left-3">
                <Crosshair size={12} />
              </div>
              <div className="absolute top-3 right-3">
                <Crosshair size={12} />
              </div>
              <div className="absolute bottom-3 left-3">
                <Crosshair size={12} />
              </div>
              <div className="absolute bottom-3 right-3">
                <Crosshair size={12} />
              </div>

              {/* Dynamic 3D Isometric Alert Scene */}
              <AdvancedFeaturesFX selectedAlert={selectedAlert} />

              {/* Sub-label and square arrow button matching reference */}
              <div className="pt-6 border-t border-[#DCE3ED] flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold font-sans text-[#0F1115]">
                    Prevent Unauthorized Access
                  </h4>
                </div>
                <button
                  onClick={() => {
                    sound.playClick(700);
                    onOpenDemo('scanner');
                  }}
                  className="w-10 h-10 bg-[#2B66FF] hover:bg-[#1E52DB] text-white flex items-center justify-center rounded transition-all hover:scale-105"
                  aria-label="Prevent Unauthorized Access details"
                >
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Feature 2: Real-Time Threat Detection (Brick Firewall & 99.9% Stat) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-14">
          
          {/* Left: 99.9% Stat */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-sans text-[#0F1115] mb-2">
                Real-Time Threat Detection
              </h3>
              <p className="text-sm text-[#6B7280]">
                connected systems instantly.
              </p>
            </div>

            {/* Giant Stat 99.9% */}
            <div className="pt-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-6xl sm:text-7xl font-sans font-bold tracking-tight text-[#0F1115]"
              >
                99.9%
              </motion.div>
              <div className="text-sm font-medium text-[#1A1F2B] mt-2">
                Threat Detection Accuracy
              </div>
            </div>
          </div>

          {/* Right: Firewall & Shield Card */}
          <div className="lg:col-span-7">
            <div className="relative border border-[#DCE3ED] rounded-xl p-6 sm:p-8 bg-white shadow-tech-card group">
              <div className="absolute top-3 left-3">
                <Crosshair size={12} />
              </div>
              <div className="absolute top-3 right-3">
                <Crosshair size={12} />
              </div>
              <div className="absolute bottom-3 left-3">
                <Crosshair size={12} />
              </div>
              <div className="absolute bottom-3 right-3">
                <Crosshair size={12} />
              </div>

              {/* Firewall Illustration with pill badges directly integrated */}
              <div className="relative w-full h-[280px] sm:h-[340px] flex items-center justify-center">
                <img 
                  src="/assets/sec4_firewall.png" 
                  alt="3D Brick Firewall and Shield" 
                  className="max-h-full max-w-full object-contain drop-shadow-sm select-none"
                />

                {/* Interactive Click target over the arrow button */}
                <button
                  onClick={() => {
                    sound.playClick(700);
                    onOpenDemo('trial');
                  }}
                  className="absolute bottom-[6%] right-[5%] w-[42px] h-[42px] bg-transparent hover:bg-white/10 rounded cursor-pointer"
                  title="Explore AI Threat Detection"
                  aria-label="Explore AI Threat Detection"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
