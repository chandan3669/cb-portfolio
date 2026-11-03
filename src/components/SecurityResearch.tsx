'use client'

import React from 'react'
import { PROJECTS_DATA } from '@/data/portfolioData'
import { ExternalLink, Github, Terminal } from 'lucide-react'
import { 
  WafShieldBrutalIcon, 
  BgpNetworkBrutalIcon, 
  OpenCvBrutalIcon
} from '@/components/IconPack'

export const SecurityResearch: React.FC = () => {
  return (
    <section id="security" className="py-12 sm:py-16 md:py-24 border-b-2 border-[#1f2a22] bg-[#080a08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-[#00ff66] tracking-widest mb-1 font-bold">
            // 03. CORE_RESEARCH_PROJECTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            ORIGINAL <span className="text-[#00ff66] bg-black px-2 inline-block">CYBER-SECURITY</span> & SYSTEMS
          </h2>
          <div className="w-24 h-1 bg-[#00ff66] mt-3"></div>
        </div>

        {/* Featured Spotlight Card: Real-Time WAF Engine */}
        <div className="mb-12 brutal-box p-6 md:p-10 bg-[#0f1410] border-2 border-[#00ff66] shadow-[6px_6px_0px_0px_#00ff66]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#1f2a22] font-mono text-xs">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#00ff66] text-black border border-black font-bold">
                <WafShieldBrutalIcon size={18} />
              </div>
              <span className="text-[#00ff66] font-bold text-sm">
                FLAGSHIP PROJECT // WAF SECURITY ENGINE
              </span>
            </div>
            <span className="px-2.5 py-1 bg-black border border-[#00ff66] text-[#00ff66] font-bold">
              VERIFIED ORIGINAL CODEBASE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase font-mono tracking-tight">
                real-time-waf-rust
              </h3>
              
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans">
                A high-performance real-time Web Application Firewall (WAF) engine. Designed to perform zero-allocation HTTP header inspection, malicious payload signature matching (SQLi, XSS, RCE), and ultra-low latency packet filtering before traffic reaches backend servers.
              </p>

              <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                <span className="brutal-tag text-white font-bold bg-[#141a15]">Systems Security</span>
                <span className="brutal-tag text-white font-bold bg-[#141a15]">WAF Security Engine</span>
                <span className="brutal-tag text-white font-bold bg-[#141a15]">Zero-Allocation Parsing</span>
                <span className="brutal-tag text-white font-bold bg-[#141a15]">Low-Latency HTTP Inspection</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 font-mono">
              <a
                href="https://github.com/chandan3669/real-time-waf-rust"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn-primary py-4 px-6 text-center text-sm w-full font-bold"
              >
                <Github className="w-5 h-5 text-black" />
                <span>INSPECT REPOSITORY</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <div className="p-4 bg-black border border-[#1f2a22] text-[11px] font-mono text-zinc-400 space-y-1">
                <div className="flex justify-between">
                  <span>CATEGORY:</span>
                  <span className="text-[#00ff66] font-bold">CYBER-SECURITY</span>
                </div>
                <div className="flex justify-between">
                  <span>AUTHOR:</span>
                  <span className="text-white font-bold">@chandan3669</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Secondary Spotlight Original Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: BGP Realtime Simulation */}
          <div className="brutal-box p-6 bg-[#0f1410] border-2 border-[#1f2a22] hover:border-[#00ff66] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1f2a22]">
                <div className="p-2 bg-[#00ff66] text-black border border-black font-bold">
                  <BgpNetworkBrutalIcon size={18} />
                </div>
                <span className="font-mono text-xs text-zinc-500 font-bold">NETWORKING</span>
              </div>
              <h4 className="font-mono font-bold text-lg text-white mb-2">bgp-realtime-simulation</h4>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Real-time BGP routing protocol simulator designed to model Autonomous System (AS) path propagation, route advertisement, and network topology shifts.
              </p>
            </div>
            
            <div className="pt-4 border-t border-[#1f2a22] flex items-center justify-between font-mono text-xs">
              <span className="text-zinc-500 text-[10px] font-bold">PYTHON // BGP</span>
              <a
                href="https://github.com/chandan3669/bgp-realtime-simulation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff66] hover:underline flex items-center gap-1 font-bold"
              >
                <span>REPO</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: ANPR System */}
          <div className="brutal-box p-6 bg-[#0f1410] border-2 border-[#1f2a22] hover:border-[#00ff66] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1f2a22]">
                <div className="p-2 bg-[#00ff66] text-black border border-black font-bold">
                  <OpenCvBrutalIcon size={18} />
                </div>
                <span className="font-mono text-xs text-zinc-500 font-bold">AI & ML</span>
              </div>
              <h4 className="font-mono font-bold text-lg text-white mb-2">anpr-system</h4>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Automatic Number Plate Recognition system utilizing computer vision techniques and deep learning models for vehicle plate detection and OCR character recognition.
              </p>
            </div>
            
            <div className="pt-4 border-t border-[#1f2a22] flex items-center justify-between font-mono text-xs">
              <span className="text-zinc-500 text-[10px] font-bold">PYTHON // OPENCV</span>
              <a
                href="https://github.com/chandan3669/anpr-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff66] hover:underline flex items-center gap-1 font-bold"
              >
                <span>REPO</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: Support AI Backend */}
          <div className="brutal-box p-6 bg-[#0f1410] border-2 border-[#1f2a22] hover:border-[#00ff66] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1f2a22]">
                <div className="p-2 bg-[#00ff66] text-black border border-black font-bold">
                  <Terminal size={18} />
                </div>
                <span className="font-mono text-xs text-zinc-500 font-bold">BACKEND</span>
              </div>
              <h4 className="font-mono font-bold text-lg text-white mb-2">support-ai-backend</h4>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Backend architecture powering an AI automated support service, integrating REST APIs with language model inferencing pipelines and FastAPI.
              </p>
            </div>
            
            <div className="pt-4 border-t border-[#1f2a22] flex items-center justify-between font-mono text-xs">
              <span className="text-zinc-500 text-[10px] font-bold">PYTHON // FASTAPI</span>
              <a
                href="https://github.com/chandan3669/support-ai-backend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff66] hover:underline flex items-center gap-1 font-bold"
              >
                <span>REPO</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
