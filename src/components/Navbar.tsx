import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX, X, Sparkles } from 'lucide-react';
import { sound } from './AudioFeedback';

interface NavbarProps {
  onOpenDemo: (tab?: 'scanner' | 'docs' | 'trial') => void;
  onOpenCaseStudy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, onOpenCaseStudy }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    const isNowOn = sound.toggleMute();
    setSoundEnabled(isNowOn);
    if (isNowOn) sound.playClick(880);
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#built-for-enterprise' },
    { label: 'Collection', href: '#security-showcase' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    sound.playClick(600);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full z-40 bg-white border-b border-[#DCE3ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }}
          className="flex items-center gap-2.5 group"
        >
          {/* Logo Mark */}
          <div className="w-8 h-8 relative flex items-center justify-center transition-transform group-hover:scale-105">
            <svg viewBox="0 0 44 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-auto">
              <path 
                d="M1.2 8.4C10.5 2.1 23.8 0 35.5 5.8C42.2 9.1 43.8 13.9 43.8 17.5C33.4 18.2 20.2 16.1 1.2 8.4Z" 
                fill="#2B66FF" 
              />
              <path 
                d="M1.2 8.4C12.5 12.2 28.1 18.5 43.8 17.5C39.5 22.8 28.5 25.5 18.4 24.2C8.2 22.9 2.8 16.5 1.2 8.4Z" 
                fill="#1E4ED8" 
                fillOpacity="0.85"
              />
            </svg>
          </div>
          <span className="font-sans font-extrabold text-xl tracking-tight text-[#0F1115]">
            Dataguard
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-9 text-sm font-medium text-[#1A1F2B]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(link.href);
              }}
              className="text-[#1A1F2B] hover:text-[#2B66FF] transition-colors relative py-1"
            >
              {link.label}
            </a>
          ))}

          {/* Quick Trigger for Behance Design System Modal */}
          <button
            onClick={() => {
              sound.playClick(720);
              onOpenCaseStudy();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono-tech text-[#2B66FF] bg-[#2B66FF]/10 rounded border border-[#2B66FF]/20 hover:bg-[#2B66FF]/15 transition-all"
            title="View Behance Design Spec & Tokens"
          >
            <Sparkles size={12} />
            <span>Design Specs</span>
          </button>
        </nav>

        {/* Action Controls & CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Mute toggle */}
          <button
            onClick={toggleSound}
            className="p-2 text-[#8CA3C4] hover:text-[#1A1F2B] hover:bg-[#F5F7FA] rounded-md transition-colors"
            title={soundEnabled ? 'Mute micro-audio' : 'Unmute micro-audio'}
            aria-label="Toggle Sound"
          >
            {soundEnabled ? <Volume2 size={17} /> : <VolumeX size={17} />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => {
              sound.playClick(800);
              onOpenDemo('scanner');
            }}
            className="group relative px-6 py-2.5 bg-[#2B66FF] hover:bg-[#1E52DB] text-white text-xs font-mono-tech tracking-wider uppercase rounded-none transition-all duration-200 flex items-center gap-2 shadow-tech hover:shadow-blue-glow"
          >
            <span>GET STARTED</span>
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger (matching module_08 2-line layout) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              sound.playClick(500);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 text-[#0F1115] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <div className="w-6 flex flex-col items-end gap-1.5 py-1">
                <span className="w-6 h-0.5 bg-[#0F1115] rounded-full" />
                <span className="w-4 h-0.5 bg-[#0F1115] rounded-full" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#DCE3ED] bg-white px-6 py-5 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="block text-base font-medium text-[#1A1F2B] hover:text-[#2B66FF] py-1"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#DCE3ED] space-y-3">
              <button
                onClick={() => {
                  sound.playClick(720);
                  setMobileMenuOpen(false);
                  onOpenCaseStudy();
                }}
                className="w-full py-2 px-3 text-xs font-mono-tech text-[#2B66FF] bg-[#2B66FF]/10 rounded border border-[#2B66FF]/20 flex items-center justify-center gap-2"
              >
                <Sparkles size={14} />
                <span>View Design System & Specs</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick(800);
                  setMobileMenuOpen(false);
                  onOpenDemo('scanner');
                }}
                className="w-full py-3 bg-[#2B66FF] text-white text-xs font-mono-tech tracking-wider uppercase flex items-center justify-center gap-2 shadow-tech"
              >
                <span>GET STARTED</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
