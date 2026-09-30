import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { LogoBar } from './components/LogoBar';
import { BuiltForEnterprise } from './sections/BuiltForEnterprise';
import { SecurityShowcase } from './sections/SecurityShowcase';
import { AdvancedFeatures } from './sections/AdvancedFeatures';
import { SimpleSteps } from './sections/SimpleSteps';
import { Testimonials } from './sections/Testimonials';
import { CTASection } from './sections/CTASection';
import { Footer } from './sections/Footer';
import { InteractiveDemoModal } from './components/InteractiveDemoModal';
import { CaseStudyDrawer } from './sections/CaseStudyDrawer';
import { LayoutTemplate, Maximize2 } from 'lucide-react';
import { sound } from './components/AudioFeedback';

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoTab, setDemoTab] = useState<'scanner' | 'docs' | 'trial'>('scanner');
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);
  const [framedView, setFramedView] = useState(true); // Behance Showcase Frame mode by default!

  const handleOpenDemo = (tab: 'scanner' | 'docs' | 'trial' = 'scanner') => {
    setDemoTab(tab);
    setDemoModalOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${framedView ? 'bg-[#4D82F3] sm:py-8 sm:px-6' : 'bg-white'}`}>
      
      {/* Container - When in Behance Frame View, renders the rounded blueprint container exactly like module_00 & module_07 */}
      <div 
        className={`mx-auto bg-white transition-all duration-300 relative ${
          framedView 
            ? 'max-w-[1440px] sm:rounded-3xl sm:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] sm:border sm:border-white/40 overflow-hidden' 
            : 'w-full'
        }`}
      >
        {/* Navigation */}
        <Navbar 
          onOpenDemo={handleOpenDemo}
          onOpenCaseStudy={() => setCaseStudyOpen(true)}
        />

        {/* Hero Section */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* Social Proof Logo Bar */}
        <LogoBar />

        {/* Section 2: Built For Modern Enterprise Protection */}
        <BuiltForEnterprise />

        {/* Section 3: Security Built For Modern Enterprises (Interactive Showcase) */}
        <SecurityShowcase onOpenDemo={handleOpenDemo} />

        {/* Section 4: Advanced Security Features For Modern Enterprises */}
        <AdvancedFeatures onOpenDemo={handleOpenDemo} />

        {/* Section 5: Smart Security In Three Simple Steps */}
        <SimpleSteps />

        {/* Section 6: Trusted By Modern Enterprises Worldwide */}
        <Testimonials />

        {/* Section 7: CTA Section */}
        <CTASection onOpenDemo={handleOpenDemo} />

        {/* Section 8: Footer with giant watermark */}
        <Footer />
      </div>

      {/* Floating Presentation Controls */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 bg-white/95 backdrop-blur border border-[#DCE3ED] shadow-xl p-1.5 rounded-full">
        <button
          onClick={() => {
            sound.playClick(750);
            setFramedView(!framedView);
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-tech transition-all ${
            framedView 
              ? 'bg-[#2B66FF] text-white font-bold shadow-sm' 
              : 'text-[#6B7280] hover:text-[#0F1115]'
          }`}
          title="Toggle between Behance Showcase Frame and Fullscreen Bleed"
        >
          {framedView ? <LayoutTemplate size={13} /> : <Maximize2 size={13} />}
          <span>{framedView ? 'Behance Frame' : 'Full Width'}</span>
        </button>

        <button
          onClick={() => {
            sound.playClick(650);
            setCaseStudyOpen(true);
          }}
          className="px-3 py-1.5 rounded-full text-xs font-mono-tech text-[#2B66FF] hover:bg-[#EBF1FF] transition-colors"
          title="View Original Behance Design Specs & Tokens"
        >
          Design Tokens
        </button>
      </div>

      {/* Interactive Terminal & Scanner Modal */}
      <InteractiveDemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)}
        initialTab={demoTab}
      />

      {/* Case Study & Design Tokens Drawer */}
      <CaseStudyDrawer 
        isOpen={caseStudyOpen} 
        onClose={() => setCaseStudyOpen(false)} 
      />

    </div>
  );
}

export default App;
