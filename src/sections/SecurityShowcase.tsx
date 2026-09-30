import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Crosshair } from '../components/Crosshair';
import { sound } from '../components/AudioFeedback';

interface SecurityShowcaseProps {
  onOpenDemo: (tab?: 'scanner' | 'docs' | 'trial') => void;
}

export const SecurityShowcase: React.FC<SecurityShowcaseProps> = ({ onOpenDemo }) => {
  const [activeTab, setActiveTab] = useState(1); // 0-indexed: 1 is '02 Real-Time Monitoring'

  const tabs = [
    {
      num: '01',
      title: 'Zero-Trust Security',
      headline: 'Zero-Trust Security',
      desc: 'verify every user, machine, and request dynamically without perimeter trust assumptions.',
      image: '/assets/sec3_shield_lens.png',
    },
    {
      num: '02',
      title: 'Real-Time Monitoring',
      headline: 'Real-Time Monitoring',
      desc: 'sensitive business data with intelligent cybersecurity solutions designed for modern digital operations.',
      image: '/assets/sec3_shield_lens.png',
    },
    {
      num: '03',
      title: 'Threat Detection',
      headline: 'Threat Detection',
      desc: 'intercept zero-day exploits, credential stuffing, and unauthorized exfiltration in under 5ms.',
      image: '/assets/sec3_shield_lens.png',
    },
    {
      num: '04',
      title: 'Data Encryption',
      headline: 'Data Encryption',
      desc: 'protect customer credentials and core enterprise pipelines with post-quantum resilient encryption.',
      image: '/assets/sec3_shield_lens.png',
    }
  ];

  return (
    <section id="security-showcase" className="relative w-full bg-white border-b border-[#DCE3ED] py-16 sm:py-24">
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
              Security Built For Modern Enterprises
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#1A1F2B] font-normal leading-relaxed">
              We deliver intelligent cybersecurity solutions designed to protect teams
            </p>
          </div>
        </div>

        {/* Content Body: Tabs on Left, Showcase Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-12">
          
          {/* Left: Tab List */}
          <div className="lg:col-span-4 space-y-4">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={tab.num}
                  onClick={() => {
                    sound.playClick(600 + index * 50);
                    setActiveTab(index);
                  }}
                  className={`group flex items-center justify-between p-4 cursor-pointer transition-all rounded-lg ${
                    isActive 
                      ? 'bg-[#F5F7FA] text-[#0F1115] font-bold' 
                      : 'text-[#8CA3C4] hover:text-[#1A1F2B] hover:bg-[#F5F7FA]/50 font-normal'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono-tech text-xs tracking-wider">
                      {tab.num}
                    </span>
                    <span className="font-sans text-lg tracking-tight">
                      {tab.title}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="activeArrow"
                      className="text-[#2B66FF] flex items-center"
                    >
                      <ArrowLeft size={18} />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Interactive 3D Showcase Card */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* The exact Behance Box graphic containing avatar pill, 3D halftone shield, crosshairs & LEARN MORE button */}
              <div className="relative w-full rounded-xl overflow-hidden border border-[#DCE3ED] shadow-tech-card group bg-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full"
                  >
                    <img 
                      src={tabs[activeTab].image} 
                      alt={tabs[activeTab].title}
                      className="w-full h-auto object-contain select-none"
                    />

                    {/* Interactive Click target over the LEARN MORE button */}
                    <button
                      onClick={() => {
                        sound.playClick(800);
                        onOpenDemo('scanner');
                      }}
                      className="absolute bottom-[24%] right-[10%] sm:bottom-[23%] sm:right-[9%] w-[130px] h-[36px] bg-transparent hover:bg-white/10 rounded cursor-pointer"
                      title="Learn More About Real-Time Monitoring"
                      aria-label="Learn More"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Card Footer Details matching reference */}
              <div className="pt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold font-sans text-[#0F1115]">
                    {tabs[activeTab].headline}
                  </h4>
                </div>
                <div className="max-w-md">
                  <p className="text-xs sm:text-sm text-[#6B7280] font-normal leading-relaxed">
                    {tabs[activeTab].desc}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
