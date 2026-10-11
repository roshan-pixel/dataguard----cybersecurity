import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Crosshair } from '../components/Crosshair';
import { sound } from '../components/AudioFeedback';
import { SimpleStepsFX } from '../components/SimpleStepsFX';

export const SimpleSteps: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(0);

  const steps = [
    {
      title: 'Monitor Activity',
      description: 'connected devices using AI-powered monitoring systems.',
      expandedDetail: 'Continuous ingestion of telemetry across edge proxies, cloud clusters, and employee endpoints with <0.01% CPU overhead.',
      log: 'telemetry_stream.init() -> 42,910 endpoints reporting status: OK'
    },
    {
      title: 'Detect Threats',
      description: 'identify suspicious activity, unauthorized access',
      expandedDetail: 'Multi-layer heuristics and transformer-based behavioral models flag privilege escalation and anomalous token exchanges.',
      log: 'anomaly_detector: 0 false positives recorded in last 72 hours'
    },
    {
      title: 'Secure Operations',
      description: 'connected devices using AI-powered monitoring systems.',
      expandedDetail: 'Dynamic token revocation, automated enclave re-keying, and instantaneous zero-trust isolation prevent lateral movement.',
      log: 'enclave_guard: session_token_rotated duration: 0.8ms'
    },
    {
      title: 'Respond',
      description: 'Respond instantly and isolate threats.',
      expandedDetail: 'Autonomous incident response pipelines quarantine compromised identities and generate cryptographic audit proofs.',
      log: 'action_executor: threat_quarantined target_ip: 198.51.100.22'
    }
  ];

  return (
    <section id="steps" className="relative w-full bg-white border-b border-[#DCE3ED] py-16 sm:py-24">
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
              Smart Security In Three Simple Steps
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#1A1F2B] font-normal leading-relaxed">
              Protect your business with intelligent cybersecurity infrastructure designed to detect
            </p>
          </div>
        </div>

        {/* Content Body: Left Graphic, Right Dark Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-14">
          
          {/* Left: 4 Dynamic Interactive 3D Scenes for Monitor, Detect, Secure, and Respond */}
          <div className="lg:col-span-6">
            <div className="relative border border-[#DCE3ED] rounded-xl p-4 sm:p-6 bg-white flex flex-col shadow-tech-card">
              <div className="absolute top-3 left-3 z-10">
                <Crosshair size={12} />
              </div>
              <div className="absolute top-3 right-3 z-10">
                <Crosshair size={12} />
              </div>
              <div className="absolute bottom-3 left-3 z-10">
                <Crosshair size={12} />
              </div>
              <div className="absolute bottom-3 right-3 z-10">
                <Crosshair size={12} />
              </div>

              {/* Dynamic 3D Scene corresponding to the active step */}
              <SimpleStepsFX activeStep={activeStep ?? 0} />

              {/* Live Active Step Console Status */}
              <div className="w-full mt-4 p-3 rounded-lg bg-[#0F1115] border border-[#1E2430] text-xs font-mono-tech text-white flex items-center justify-between">
                <div className="flex items-center gap-2 truncate text-emerald-400">
                  <span className="text-gray-500">$</span>
                  <span className="truncate">{steps[activeStep ?? 0].log}</span>
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider px-2 py-0.5 rounded bg-gray-800 flex-shrink-0">
                  {steps[activeStep ?? 0].title}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Dark Accordion / Step Blocks matching Behance reference */}
          <div className="lg:col-span-6 space-y-4">
            {steps.map((step, index) => {
              const isOpen = activeStep === index;
              return (
                <div
                  key={step.title}
                  onClick={() => {
                    sound.playClick(600 + index * 40);
                    setActiveStep(isOpen ? null : index);
                  }}
                  className={`cursor-pointer rounded-lg transition-all p-5 bg-[#0F1115] text-white border ${
                    isOpen ? 'border-[#2B66FF]' : 'border-[#1E2430] hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="text-base sm:text-lg font-bold font-sans text-white">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400 font-normal">
                        {step.description}
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playClick(700);
                        setActiveStep(isOpen ? null : index);
                      }}
                      className="w-8 h-8 flex-shrink-0 bg-[#2B66FF] hover:bg-[#1E52DB] text-white flex items-center justify-center rounded transition-transform hover:scale-105"
                      aria-label={`Toggle ${step.title}`}
                    >
                      {isOpen ? <ChevronDown size={14} /> : <ArrowRight size={14} />}
                    </button>
                  </div>

                  {/* Expanded telemetry info */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pt-4 mt-4 border-t border-gray-800 text-xs text-gray-300 space-y-2"
                      >
                        <p className="leading-relaxed">
                          {step.expandedDetail}
                        </p>
                        <div className="bg-[#1A1F2B] p-2.5 rounded font-mono-tech text-[11px] text-emerald-400">
                          $ {step.log}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
