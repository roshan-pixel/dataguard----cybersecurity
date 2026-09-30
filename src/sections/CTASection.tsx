import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Crosshair } from '../components/Crosshair';
import { sound } from '../components/AudioFeedback';

interface CTASectionProps {
  onOpenDemo: (tab?: 'scanner' | 'docs' | 'trial') => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="contact" className="relative w-full bg-white border-b border-[#DCE3ED] pt-16 sm:pt-24 pb-0 overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-[#0F1115] leading-[1.12]">
              Secure your business with intelligent{' '}
              <span className="font-pixel text-[#4F85FF] tracking-tight inline-block hover:scale-105 transition-transform cursor-default">
                cybersecurity
              </span>{' '}
              solutions
            </h2>
          </div>

          <div className="max-w-xs md:pt-3">
            <p className="text-xs sm:text-sm font-mono-tech text-[#1A1F2B] leading-relaxed">
              Protect digital operations with intelligent security infrastructure
            </p>
          </div>
        </div>

        {/* Buttons Layer */}
        <div className="flex flex-wrap items-center gap-4 py-6 relative z-20">
          <button
            onClick={() => {
              sound.playClick(800);
              onOpenDemo('scanner');
            }}
            className="group px-7 py-3.5 bg-[#2B66FF] hover:bg-[#1E52DB] text-white text-xs font-mono-tech tracking-wider uppercase rounded-none transition-all flex items-center gap-2.5 shadow-tech hover:shadow-blue-glow"
          >
            <span>START SECURING NOW</span>
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => {
              sound.playClick(600);
              onOpenDemo('trial');
            }}
            className="px-6 py-3.5 bg-white hover:bg-[#F5F7FA] text-[#0F1115] text-xs font-mono-tech tracking-wider uppercase border border-black rounded-none transition-all"
          >
            START FREE TRIAL
          </button>
        </div>
      </div>

      {/* Full-width Halftone Mountain Wave at Bottom */}
      <div className="relative w-full h-[180px] sm:h-[260px] lg:h-[320px] mt-4 flex items-end justify-center pointer-events-none select-none overflow-hidden">
        <motion.img 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src="/assets/clean_mountain_wave.png" 
          alt="Halftone Mountain Landscape" 
          className="w-full h-full object-cover object-bottom"
        />
      </div>
    </section>
  );
};
