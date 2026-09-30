import React from 'react';
import { motion } from 'framer-motion';

export const LogoBar: React.FC = () => {
  const logos = [
    {
      name: 'Calendly',
      svg: (
        <svg viewBox="0 0 110 32" fill="currentColor" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity">
          <text x="0" y="22" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="19" letterSpacing="-0.5px">Calendly</text>
        </svg>
      )
    },
    {
      name: 'classpass',
      svg: (
        <svg viewBox="0 0 120 32" fill="currentColor" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity">
          <g transform="translate(0, 4)">
            <path d="M7 3C4.2 3 2 5.2 2 8s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm8 0c-1.3 0-2.5.5-3.4 1.3C12.5 5.5 13 6.7 13 8s-.5 2.5-1.4 3.7c.9.8 2.1 1.3 3.4 1.3 2.8 0 5-2.2 5-5s-2.2-5-5-5z" fill="currentColor" />
            <text x="26" y="14" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="600" fontSize="17" letterSpacing="-0.5px">classpass</text>
          </g>
        </svg>
      )
    },
    {
      name: 'GitHub',
      svg: (
        <svg viewBox="0 0 100 32" fill="currentColor" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity">
          <g transform="translate(0, 4)">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            <text x="22" y="13" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="16" letterSpacing="-0.5px">GitHub</text>
          </g>
        </svg>
      )
    },
    {
      name: 'Basecamp',
      svg: (
        <svg viewBox="0 0 120 32" fill="currentColor" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity">
          <g transform="translate(0, 4)">
            <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="2.2" />
            <path d="M4 11C6 7 10 7 12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <text x="24" y="14" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="700" fontSize="16" letterSpacing="-0.5px">Basecamp</text>
          </g>
        </svg>
      )
    },
    {
      name: 'attentive',
      svg: (
        <svg viewBox="0 0 110 32" fill="currentColor" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity">
          <text x="0" y="21" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.8px">attentive<tspan fontSize="12" dy="-5">®</tspan></text>
        </svg>
      )
    },
    {
      name: 'Gumroad',
      svg: (
        <svg viewBox="0 0 110 32" fill="currentColor" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity">
          <text x="0" y="21" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="19" letterSpacing="-0.5px">GUMROAD</text>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-white border-b border-[#DCE3ED] py-7 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-[#2B66FF] inline-block" />
          <span className="font-mono-tech text-xs tracking-wider uppercase text-[#1A1F2B] font-bold">
            Trusted By Leading Security Teams
          </span>
        </div>

        {/* Logos List */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-10 items-center justify-items-center text-[#1A1F2B]">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="flex items-center justify-center p-2 hover:scale-105 transition-transform cursor-pointer"
              title={`Protected by Dataguard: ${logo.name}`}
            >
              {logo.svg}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
