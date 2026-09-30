import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { Crosshair } from '../components/Crosshair';
import { sound } from '../components/AudioFeedback';

export const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      author: 'Daniel',
      role: 'CTO, Nexora Systems',
      quote: 'The platform helped our teams secure access across every device without slowing productivity',
      rating: '5.0',
      stars: 5,
      compliance: 'SOC2 Type II • ISO 27001'
    },
    {
      author: 'Alex Smith',
      role: 'VP of Enterprise Security, CloudScale',
      quote: 'Dataguard reduced our threat response window from 45 minutes down to under 2 seconds across all Kubernetes clusters.',
      rating: '5.0',
      stars: 5,
      compliance: 'Zero-Trust Architecture'
    },
    {
      author: 'Andreas Mitchell',
      role: 'Head of AI Security Operations, FinEdge',
      quote: 'The behavioral anomaly engine stopped a sophisticated credential stuffing assault before any customer accounts were touched.',
      rating: '5.0',
      stars: 5,
      compliance: 'FedRAMP Moderate'
    }
  ];

  return (
    <section id="testimonials" className="relative w-full bg-white border-b border-[#DCE3ED] py-16 sm:py-24">
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
              Trusted By Modern Enterprises Worldwide
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#1A1F2B] font-normal leading-relaxed">
              Businesses rely on our intelligent cybersecurity solutions to protect sensitive systems
            </p>
          </div>
        </div>

        {/* Testimonials Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-14">
          
          {/* Left: Halftone Portrait Alex Smith */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <div 
              onClick={() => {
                sound.playClick(680);
                setActiveTestimonial(1);
              }}
              className="relative group cursor-pointer border border-[#DCE3ED] p-4 rounded-xl bg-white shadow-tech-card hover:border-[#2B66FF] transition-all"
            >
              <img 
                src="/assets/portrait_alex.png" 
                alt="Alex Smith - Enterprise Security" 
                className="w-full max-w-[280px] h-auto object-contain select-none"
              />

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono-tech text-sm font-bold text-[#0F1115]">5.0</span>
                  <div className="flex text-[#2B66FF]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#2B66FF" stroke="#2B66FF" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono-tech text-[#2B66FF]">
                  <ShieldCheck size={14} />
                  <span>Verified CSO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Featured Black Quote Card */}
          <div className="lg:col-span-4">
            <motion.div 
              key={activeTestimonial}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#0F1115] text-white p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-800"
            >
              <Quote className="text-[#2B66FF] mb-6 opacity-80" size={32} />

              <p className="text-base sm:text-lg font-normal leading-relaxed text-gray-200 mb-8">
                “{testimonials[activeTestimonial].quote}”
              </p>

              <div className="pt-6 border-t border-gray-800">
                <div className="font-sans font-bold text-lg text-white">
                  {testimonials[activeTestimonial].author}
                </div>
                <div className="font-mono-tech text-xs text-[#8CA3C4] mt-0.5">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>

              {/* Mini switcher dots */}
              <div className="flex gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      sound.playClick(600 + idx * 50);
                      setActiveTestimonial(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      activeTestimonial === idx ? 'w-6 bg-[#2B66FF]' : 'w-2 bg-gray-700 hover:bg-gray-500'
                    }`}
                    aria-label={`Show quote ${idx + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Halftone Portrait Andreas Mitchell */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div 
              onClick={() => {
                sound.playClick(680);
                setActiveTestimonial(2);
              }}
              className="relative group cursor-pointer border border-[#DCE3ED] p-4 rounded-xl bg-white shadow-tech-card hover:border-[#2B66FF] transition-all"
            >
              <img 
                src="/assets/portrait_andreas.png" 
                alt="Andreas Mitchell - AI Security Operations" 
                className="w-full max-w-[280px] h-auto object-contain select-none"
              />

              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs font-mono-tech text-[#6B7280]">
                  AI Operations
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono-tech text-[#2B66FF]">
                  <ShieldCheck size={14} />
                  <span>Enterprise</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
