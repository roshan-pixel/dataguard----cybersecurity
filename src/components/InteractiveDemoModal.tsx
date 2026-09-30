import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Terminal, Copy, Check, ArrowRight, Activity, Lock, Globe } from 'lucide-react';
import { sound } from './AudioFeedback';
import { dataguardApi } from '../api/managementApi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'scanner' | 'docs' | 'trial';
}

export const InteractiveDemoModal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose,
  initialTab = 'scanner'
}) => {
  const [activeTab, setActiveTab] = useState<'scanner' | 'docs' | 'trial'>(initialTab);
  const [domainInput, setDomainInput] = useState('stripe.com');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStep, setScanStep] = useState<string>('');
  const [scanComplete, setScanComplete] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [docsSubTab, setDocsSubTab] = useState<'sdk' | 'http-api'>('sdk');

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handleStartScan = () => {
    sound.playClick(720);
    setIsScanning(true);
    setScanProgress(0);
    setScanComplete(false);

    const steps = [
      'Resolving Authoritative DNS & BGP Routing...',
      'Auditing TLS 1.3 Ciphers & Forward Secrecy...',
      'Testing Zero-Trust Perimeter & Identity Gateways...',
      'Simulating DDoS & API Ingress Shielding...',
      'Verifying 256-bit AES-GCM Encrypted Enclaves...'
    ];

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setScanProgress((prev) => Math.min(prev + 20, 100));
      setScanStep(steps[current % steps.length]);

      if (current >= 5) {
        clearInterval(interval);
        dataguardApi.runPerimeterAudit({
          targetDomain: domainInput,
          scanDepth: 'STANDARD',
          includePortScan: true,
          verifyTlsCipherSuites: true,
        });
        setIsScanning(false);
        setScanComplete(true);
        sound.playBeep(940);
      }
    }, 600);
  };

  const copyCode = (text: string) => {
    sound.playClick(800);
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white border border-[#DCE3ED] rounded-xl shadow-2xl overflow-hidden text-[#0F1115]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCE3ED] bg-[#F5F7FA]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] animate-pulse" />
              <div className="flex items-center gap-1.5">
                <span className="font-mono-tech text-xs tracking-wider uppercase text-[#6B7280]">Dataguard Terminal</span>
                <span className="text-xs text-[#8CA3C4]">• v2.4.0-stable</span>
              </div>
            </div>

            <button 
              onClick={() => { sound.playClick(440); onClose(); }}
              className="p-1 text-[#6B7280] hover:text-[#0F1115] hover:bg-[#DCE3ED]/50 rounded transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#DCE3ED] px-6 bg-white gap-6 text-sm">
            <button
              onClick={() => { sound.playClick(600); setActiveTab('scanner'); }}
              className={`py-3 font-medium border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'scanner' 
                  ? 'border-[#2B66FF] text-[#2B66FF]' 
                  : 'border-transparent text-[#6B7280] hover:text-[#0F1115]'
              }`}
            >
              <Activity size={15} />
              Perimeter Scanner
            </button>

            <button
              onClick={() => { sound.playClick(600); setActiveTab('docs'); }}
              className={`py-3 font-medium border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'docs' 
                  ? 'border-[#2B66FF] text-[#2B66FF]' 
                  : 'border-transparent text-[#6B7280] hover:text-[#0F1115]'
              }`}
            >
              <Terminal size={15} />
              SDK Quickstart
            </button>

            <button
              onClick={() => { sound.playClick(600); setActiveTab('trial'); }}
              className={`py-3 font-medium border-b-2 transition-all flex items-center gap-1.5 ${
                activeTab === 'trial' 
                  ? 'border-[#2B66FF] text-[#2B66FF]' 
                  : 'border-transparent text-[#6B7280] hover:text-[#0F1115]'
              }`}
            >
              <Lock size={15} />
              Free Trial Sandbox
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'scanner' && (
              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-[#0F1115]">Live Enterprise Perimeter Audit</h3>
                  <p className="text-sm text-[#6B7280]">
                    Simulate how Dataguard Zero-Trust filters incoming ingress traffic and inspects identity tokens.
                  </p>
                </div>

                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8CA3C4]" size={16} />
                    <input 
                      type="text" 
                      value={domainInput}
                      onChange={(e) => setDomainInput(e.target.value)}
                      placeholder="e.g. company.com" 
                      className="w-full pl-9 pr-4 py-2.5 text-sm font-mono-tech border border-[#DCE3ED] rounded-lg focus:outline-none focus:border-[#2B66FF]"
                    />
                  </div>
                  <button 
                    disabled={isScanning}
                    onClick={handleStartScan}
                    className="px-5 py-2.5 bg-[#2B66FF] hover:bg-[#1E52DB] text-white text-xs font-mono-tech uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {isScanning ? 'Auditing...' : 'Run Audit'}
                    <ArrowRight size={14} />
                  </button>
                </div>

                {isScanning && (
                  <div className="space-y-2 p-4 bg-[#F5F7FA] border border-[#DCE3ED] rounded-lg">
                    <div className="flex justify-between text-xs font-mono-tech text-[#6B7280]">
                      <span>{scanStep}</span>
                      <span>{scanProgress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#DCE3ED] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#2B66FF] transition-all duration-300"
                        style={{ width: `${scanProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {scanComplete && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg space-y-2"
                  >
                    <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
                      <ShieldCheck size={18} className="text-emerald-600" />
                      Perimeter Analysis Complete for {domainInput}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-xs font-mono-tech text-[#1A1F2B]">
                      <div className="p-2 bg-white rounded border border-emerald-100">
                        <span className="block text-[#6B7280]">Zero-Trust</span>
                        <span className="text-emerald-600 font-bold">100% Compliant</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-emerald-100">
                        <span className="block text-[#6B7280]">Threat Risk</span>
                        <span className="text-emerald-600 font-bold">Low (0.01%)</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-emerald-100">
                        <span className="block text-[#6B7280]">Latency</span>
                        <span className="text-[#2B66FF] font-bold">1.2ms Avg</span>
                      </div>
                      <div className="p-2 bg-white rounded border border-emerald-100">
                        <span className="block text-[#6B7280]">Enclave</span>
                        <span className="text-emerald-600 font-bold">AES-256 GCM</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {activeTab === 'docs' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#0F1115]">API & SDK Integration</h3>
                    <p className="text-sm text-[#6B7280]">
                      Integrate via Node.js/Python SDK or the HTTP Management & Diagnostic REST API.
                    </p>
                  </div>
                </div>

                {/* Sub-selector */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#F5F7FA] rounded-lg border border-[#DCE3ED]">
                  <button
                    onClick={() => { sound.playClick(600); setDocsSubTab('sdk'); }}
                    className={`py-1.5 text-xs font-mono-tech uppercase tracking-wider rounded transition-colors ${
                      docsSubTab === 'sdk' ? 'bg-white text-[#2B66FF] shadow-sm font-bold' : 'text-[#6B7280]'
                    }`}
                  >
                    Cloud SDK
                  </button>
                  <button
                    onClick={() => { sound.playClick(600); setDocsSubTab('http-api'); }}
                    className={`py-1.5 text-xs font-mono-tech uppercase tracking-wider rounded transition-colors ${
                      docsSubTab === 'http-api' ? 'bg-white text-[#2B66FF] shadow-sm font-bold' : 'text-[#6B7280]'
                    }`}
                  >
                    HTTP Diagnostic API
                  </button>
                </div>

                {docsSubTab === 'sdk' ? (
                  <div className="relative bg-[#0F1115] text-[#F5F7FA] p-4 rounded-lg font-mono-tech text-xs leading-relaxed overflow-x-auto">
                    <button 
                      onClick={() => copyCode(`import { Dataguard } from '@dataguard/sdk';\n\nconst guard = new Dataguard({\n  apiKey: process.env.DATAGUARD_API_KEY,\n  enforceZeroTrust: true\n});\n\nexport const handler = guard.protect(async (req) => {\n  return { status: 200, secure: true };\n});`)}
                      className="absolute right-3 top-3 p-1.5 text-gray-400 hover:text-white bg-gray-800 rounded transition-colors"
                      title="Copy snippet"
                    >
                      {copiedCode ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                    <pre className="text-gray-300">
{`// 1. Install Dataguard Enterprise SDK
npm install @dataguard/sdk

// 2. Wrap your HTTP handlers with Zero-Trust enforcement
import { Dataguard } from '@dataguard/sdk';

const guard = new Dataguard({
  apiKey: process.env.DATAGUARD_API_KEY,
  nodeId: 'edge-us-east-01',
  enforceZeroTrust: true,
  threatDetection: 'real-time'
});

export const handler = guard.protect(async (req) => {
  return { status: 200, secure: true, verified: req.identity };
});`}
                    </pre>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="relative bg-[#0F1115] text-[#F5F7FA] p-4 rounded-lg font-mono-tech text-xs leading-relaxed overflow-x-auto">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-800 text-[#4F85FF] font-bold">
                        <span>GET /api/v1/health/diagnostic</span>
                        <button 
                          onClick={() => copyCode(`curl -X GET "https://api.dataguard.ai/v1/health/diagnostic" \\\n  -H "Authorization: Bearer dg_live_997" \\\n  -H "X-Dataguard-Node-Id: edge-01"`)}
                          className="p-1 text-gray-400 hover:text-white bg-gray-800 rounded transition-colors"
                        >
                          <Copy size={12} />
                        </button>
                      </div>
                      <pre className="text-emerald-400">
{`// Response 200 OK:
{
  "status": "UP",
  "version": "2.4.0-enterprise",
  "cluster": { "region": "us-east-va", "nodesOnline": 128, "avgLatencyMs": 1.42 },
  "engine": { "threatSignatures": 2489100, "aiAccuracy": 0.9992 },
  "metrics": { "throughputReqSec": 324500, "cpuLoad": 14.8 }
}`}
                      </pre>
                    </div>

                    <div className="relative bg-[#0F1115] text-[#F5F7FA] p-4 rounded-lg font-mono-tech text-xs leading-relaxed overflow-x-auto">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-800 text-[#4F85FF] font-bold">
                        <span>POST /api/v1/security/perimeter-audit</span>
                        <button 
                          onClick={() => copyCode(`curl -X POST "https://api.dataguard.ai/v1/security/perimeter-audit" \\\n  -H "Authorization: Bearer dg_live_997" \\\n  -H "Content-Type: application/json" \\\n  -d '{"targetDomain":"company.com","scanDepth":"STANDARD"}'`)}
                          className="p-1 text-gray-400 hover:text-white bg-gray-800 rounded transition-colors"
                        >
                          <Copy size={12} />
                        </button>
                      </div>
                      <pre className="text-emerald-400">
{`// Response 200 OK:
{
  "scanId": "scan_88f921",
  "overallScore": 94,
  "tlsStatus": { "grade": "A+", "protocol": "TLSv1.3" },
  "openPorts": [80, 443],
  "zeroTrustCompliance": true
}`}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'trial' && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0F1115]">Start 14-Day Enterprise Sandbox</h3>
                  <p className="text-sm text-[#6B7280]">
                    Full access to AI threat modeling, zero-trust SSO tunnels, and 24/7 audit logs.
                  </p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); alert("Welcome to Dataguard Sandbox! Credentials sent."); onClose(); }} className="space-y-3">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-[#6B7280] mb-1">Work Email</label>
                    <input 
                      type="email" 
                      required 
                      defaultValue="security@enterprise.corp"
                      className="w-full px-3.5 py-2.5 text-sm font-mono-tech border border-[#DCE3ED] rounded-lg focus:outline-none focus:border-[#2B66FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-[#6B7280] mb-1">Company / Organization</label>
                    <input 
                      type="text" 
                      required 
                      defaultValue="Acme Security Inc"
                      className="w-full px-3.5 py-2.5 text-sm font-mono-tech border border-[#DCE3ED] rounded-lg focus:outline-none focus:border-[#2B66FF]"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-3 bg-[#2B66FF] hover:bg-[#1E52DB] text-white text-xs font-mono-tech uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    Activate Sandbox Environment
                    <ArrowRight size={14} />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="px-6 py-3 bg-[#F5F7FA] border-t border-[#DCE3ED] flex items-center justify-between text-xs text-[#8CA3C4] font-mono-tech">
            <span>SOC2 Type II • ISO 27001 Certified</span>
            <button onClick={onClose} className="hover:text-[#0F1115]">Dismiss (Esc)</button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
