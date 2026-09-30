import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Network, ShieldCheck } from 'lucide-react';
import { Crosshair } from '../components/Crosshair';
import { sound } from '../components/AudioFeedback';

export const BuiltForEnterprise: React.FC = () => {
  const features = [
    {
      id: 'zero-trust',
      icon: <Link2 className="text-[#2B66FF]" size={22} />,
      title: 'Zero-Trust Access',
      description: 'Secure every login and connection.',
      tooltip: 'Continuous behavioral verification for every microservice request.'
    },
    {
      id: 'real-time',
      icon: <Network className="text-[#2B66FF]" size={22} />,
      title: 'Real-Time Monitoring',
      description: 'Detect threats instantly, 24/7.',
      tooltip: 'AI anomaly detection across 10M+ events per second.'
    },
    {
      id: 'data-protection',
      icon: <ShieldCheck className="text-[#2B66FF]" size={22} />,
      title: 'Data Protection',
      description: 'Keep sensitive information encrypted.',
      tooltip: 'End-to-end hardware-backed enclave encryption keys.'
    }
  ];

  return (
    <section id="built-for-enterprise" className="relative w-full bg-white border-b border-[#DCE3ED] py-16 sm:py-24">
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
              Built For Modern Enterprise Protection
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#1A1F2B] font-normal leading-relaxed">
              We create intelligent cybersecurity solutions that help businesses secure access
            </p>
          </div>
        </div>

        {/* 3 Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => sound.playClick(650 + index * 60)}
              className="group p-6 rounded-xl border border-transparent hover:border-[#DCE3ED] hover:bg-[#F5F7FA] transition-all cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-[#EBF1FF] flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold font-sans text-[#0F1115] mb-2 tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6B7280] font-normal leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout & Stats Bar */}
        <div className="border border-[#DCE3ED] rounded-xl p-6 sm:p-8 bg-[#F5F7FA]/70 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6">
            <p className="text-base sm:text-lg font-medium text-[#0F1115] leading-snug">
              Keeping enterprise systems secure across every device
            </p>
          </div>

          <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-[#DCE3ED] pt-4 md:pt-0 md:pl-8">
            <div className="font-sans font-bold text-2xl text-[#0F1115]">
              AI-Powered
            </div>
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#6B7280] mt-1">
              Threat Detection
            </div>
          </div>

          <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-[#DCE3ED] pt-4 md:pt-0 md:pl-8">
            <div className="font-sans font-bold text-2xl text-[#0F1115]">
              256-bit
            </div>
            <div className="font-mono-tech text-xs uppercase tracking-wider text-[#6B7280] mt-1">
              Data Encryption
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
