import React from 'react';
import { Crosshair } from '../components/Crosshair';
import { sound } from '../components/AudioFeedback';

export const Footer: React.FC = () => {
  const footerLinks = {
    home: ['Projects', 'Contact', 'Features'],
    company: ['About Us', 'Careers', 'Contact'],
    howItWorks: ['Use case', 'Discover'],
    product: ['Growth', 'Process', 'Support']
  };

  return (
    <footer className="relative w-full bg-white pt-16 pb-8 overflow-hidden">
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
        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-16 font-mono-tech text-xs">
          
          {/* Col 1: Home */}
          <div>
            <div className="font-bold text-[#0F1115] mb-4">Home</div>
            <ul className="space-y-2.5 text-[#1A1F2B]">
              {footerLinks.home.map((item) => (
                <li key={item}>
                  <a 
                    href="#hero" 
                    onClick={() => sound.playClick(500)}
                    className="hover:text-[#2B66FF] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Company */}
          <div>
            <div className="font-bold text-[#0F1115] mb-4">Company</div>
            <ul className="space-y-2.5 text-[#1A1F2B]">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a 
                    href="#built-for-enterprise" 
                    onClick={() => sound.playClick(500)}
                    className="hover:text-[#2B66FF] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: How it works */}
          <div>
            <div className="font-bold text-[#0F1115] mb-4">How it works</div>
            <ul className="space-y-2.5 text-[#1A1F2B]">
              {footerLinks.howItWorks.map((item) => (
                <li key={item}>
                  <a 
                    href="#steps" 
                    onClick={() => sound.playClick(500)}
                    className="hover:text-[#2B66FF] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Product */}
          <div>
            <div className="font-bold text-[#0F1115] mb-4">Product</div>
            <ul className="space-y-2.5 text-[#1A1F2B]">
              {footerLinks.product.map((item) => (
                <li key={item}>
                  <a 
                    href="#capabilities" 
                    onClick={() => sound.playClick(500)}
                    className="hover:text-[#2B66FF] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Socials */}
          <div className="col-span-2 md:col-span-1 md:text-right space-y-3">
            {/* 3 Blue Circular Social Buttons */}
            <div className="flex md:justify-end gap-2">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => sound.playClick(700)}
                className="w-7 h-7 rounded-full bg-[#2B66FF] text-white flex items-center justify-center text-[10px] font-bold hover:scale-110 transition-transform"
                title="X / Twitter"
              >
                𝕏
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => sound.playClick(700)}
                className="w-7 h-7 rounded-full bg-[#2B66FF] text-white flex items-center justify-center text-[10px] font-bold hover:scale-110 transition-transform"
                title="LinkedIn"
              >
                in
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                onClick={() => sound.playClick(700)}
                className="w-7 h-7 rounded-full bg-[#2B66FF] text-white flex items-center justify-center text-[10px] font-bold hover:scale-110 transition-transform"
                title="Instagram"
              >
                ig
              </a>
            </div>

            <div className="text-xs font-mono-tech text-[#1A1F2B]">
              support.dataguard
            </div>
            <div className="text-xs font-mono-tech text-[#1A1F2B]">
              +92 (319 949 2066)
            </div>
          </div>

        </div>

        {/* Giant Dataguard Brand Watermark */}
        <div className="w-full py-8 my-4 select-none pointer-events-none opacity-90 flex items-center justify-center">
          <img 
            src="/assets/footer_logo_watermark.png" 
            alt="Dataguard Brand Watermark" 
            className="w-full max-h-[140px] sm:max-h-[180px] object-contain"
          />
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#DCE3ED] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-tech text-[#8CA3C4] gap-2">
          <div>Built for focus</div>
          <div>© 2026 Dataguard. All Rights Reserved.</div>
          <div>Start Listening Instantly</div>
        </div>

      </div>
    </footer>
  );
};
