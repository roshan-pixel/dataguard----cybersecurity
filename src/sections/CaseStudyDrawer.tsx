import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Copy, ExternalLink, Sparkles } from 'lucide-react';
import { sound } from '../components/AudioFeedback';

interface CaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyDrawer: React.FC<CaseStudyProps> = ({ isOpen, onClose }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { hex: '#1A1F2B', name: 'Navy Foundation', light: false },
    { hex: '#F5F7FA', name: 'Cool Neutral Bg', light: true },
    { hex: '#FFFFFF', name: 'Pure White', light: true },
    { hex: '#3B82F6', name: 'Electric Accent', light: false },
    { hex: '#0F1115', name: 'Deep Black Canvas', light: false },
    { hex: '#8CA3C4', name: 'Slate Accent', light: true },
    { hex: '#A9B8CC', name: 'Steel Tint', light: true },
    { hex: '#DCE3ED', name: 'Border Tone', light: true },
    { hex: '#6B7280', name: 'Cool Gray Muted', light: false },
  ];

  const copyColor = (hex: string) => {
    sound.playClick(800);
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-[#DCE3ED] rounded-2xl shadow-2xl overflow-y-auto text-[#0F1115]"
        >
          {/* Top Banner with Blue Background matching module_01 */}
          <div className="bg-[#4D82F3] text-white p-6 sm:p-10 rounded-t-2xl relative">
            <button 
              onClick={() => { sound.playClick(440); onClose(); }}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
              aria-label="Close Case Study"
            >
              <X size={18} />
            </button>

            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-mono-tech">
                <Sparkles size={12} />
                <span>Behance Reference Case Study</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-sans">
                About <span className="font-pixel text-white">Project:</span>
              </h2>
              <p className="text-sm sm:text-base text-blue-50 leading-relaxed font-normal">
                Dataguard is a modern cybersecurity brand focused on making enterprise data access intelligent, secure, and effortless. The landing page introduces an AI-powered security platform through a clean, confident digital experience that combines product storytelling with real-time threat visuals.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-10">
            {/* Customer Request Section matching module_01 */}
            <div className="border border-[#DCE3ED] rounded-xl p-6 sm:p-8 bg-[#F5F7FA]">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces" 
                  alt="Alex Whitman" 
                  className="w-16 h-16 rounded-xl object-cover border border-[#DCE3ED]"
                />
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold font-sans">
                    Customer <span className="font-pixel text-[#2B66FF]">Request:</span>
                  </h3>
                  <blockquote className="text-base sm:text-lg text-[#1A1F2B] font-normal leading-relaxed italic">
                    “We wanted a digital experience that reflects how serious we are about <span className="font-pixel text-[#2B66FF] not-italic">security</span>. The goal was to show our AI-driven protection, real-time monitoring, and zero-trust architecture in a way that feels modern, <span className="font-pixel text-[#2B66FF] not-italic">trustworthy</span>, and easy to understand.”
                  </blockquote>
                  <div className="text-xs font-mono-tech text-[#6B7280]">
                    — Alex Whitman, Founder, DataGuard
                  </div>
                </div>
              </div>
            </div>

            {/* Design Tokens & Typography matching module_03 */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-sans text-[#0F1115]">
                  Typography & <span className="font-pixel text-[#2B66FF]">Colors:</span>
                </h3>
                <p className="text-sm text-[#6B7280] mt-1">
                  The visual identity is built around deep navy and charcoal foundations, balanced with soft cool neutrals and a sharp blue accent. Click any color swatch to copy its hex value.
                </p>
              </div>

              {/* Color Swatches Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {colors.map((c) => (
                  <button
                    key={c.hex}
                    onClick={() => copyColor(c.hex)}
                    style={{ backgroundColor: c.hex }}
                    className={`p-4 rounded-xl text-left border border-black/10 transition-transform hover:scale-[1.02] flex flex-col justify-between h-24 ${
                      c.light ? 'text-[#0F1115]' : 'text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-xs font-bold">{c.hex}</span>
                      {copiedColor === c.hex ? <Check size={14} className="text-emerald-500" /> : <Copy size={13} className="opacity-60" />}
                    </div>
                    <span className="text-xs font-sans opacity-85 font-medium">{c.name}</span>
                  </button>
                ))}
              </div>

              {/* Typography Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#DCE3ED]">
                <div className="p-4 bg-[#F5F7FA] rounded-xl border border-[#DCE3ED]">
                  <div className="text-xs font-mono-tech text-[#2B66FF] mb-1">01 / Display Bitmapped</div>
                  <div className="font-pixel text-xl text-[#0F1115] mb-1">GEIST PIXEL</div>
                  <div className="text-xs text-[#6B7280]">Used for emphasis words like "access", "anytime", and technical headers.</div>
                </div>

                <div className="p-4 bg-[#F5F7FA] rounded-xl border border-[#DCE3ED]">
                  <div className="text-xs font-mono-tech text-[#2B66FF] mb-1">02 / Technical Monospace</div>
                  <div className="font-mono-tech text-base font-bold text-[#0F1115] mb-1">GEIST MONO</div>
                  <div className="text-xs text-[#6B7280]">Used for metrics, system logs, code snippets, and button typography.</div>
                </div>

                <div className="p-4 bg-[#F5F7FA] rounded-xl border border-[#DCE3ED]">
                  <div className="text-xs font-mono-tech text-[#2B66FF] mb-1">03 / Body & Heading</div>
                  <div className="font-sans text-xl font-bold text-[#0F1115] mb-1">NEUE MONTREAL</div>
                  <div className="text-xs text-[#6B7280]">Clean geometric grotesk for authoritative enterprise clarity.</div>
                </div>
              </div>
            </div>

            {/* Project Metadata */}
            <div className="pt-6 border-t border-[#DCE3ED] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono-tech">
              <div>
                <span className="block text-[#8CA3C4]">Client/</span>
                <span className="text-[#0F1115] font-bold">Dataguard</span>
              </div>
              <div>
                <span className="block text-[#8CA3C4]">Category/</span>
                <span className="text-[#0F1115] font-bold">Enterprise Cybersecurity</span>
              </div>
              <div>
                <span className="block text-[#8CA3C4]">Project/</span>
                <span className="text-[#0F1115] font-bold">Digital Experience</span>
              </div>
              <div>
                <span className="block text-[#8CA3C4]">Date/</span>
                <span className="text-[#0F1115] font-bold">2026</span>
              </div>
            </div>

            {/* Link to Behance */}
            <div className="flex justify-end pt-2">
              <a 
                href="https://www.behance.net/gallery/255038607/Dataguard-Cybersecurity-Landing-Page-Design" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#2B66FF] hover:underline"
              >
                <span>View original Behance design project</span>
                <ExternalLink size={12} />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
