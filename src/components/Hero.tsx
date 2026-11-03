'use client'

import React, { useState } from 'react'
import { PROFILE_DATA, PROJECTS_DATA } from '@/data/portfolioData'
import { ArrowDownRight, Github, Shield, MapPin, Linkedin, Mail, Check, Terminal, FileText, Download } from 'lucide-react'
import { 
  PythonBrutalIcon, 
  CppBrutalIcon, 
  OpenCvBrutalIcon,
  WafShieldBrutalIcon
} from '@/components/IconPack'

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [terminalCmd, setTerminalCmd] = useState<string>('status')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email).catch(() => {})
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section id="hero" className="relative py-12 sm:py-16 md:py-24 border-b-2 border-[#1f2a22] brutal-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Classification Header Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b-2 border-[#1f2a22] font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-0.5 bg-[#00ff66] text-black font-bold border border-black text-[11px] sm:text-xs">
              UNCLASSIFIED // FACTUAL_PORTFOLIO
            </span>
            <span className="hidden sm:inline-block text-zinc-500">
              ID: CB-3669-SEC
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-white font-bold text-[11px] sm:text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#00ff66]" />
            <span>{PROFILE_DATA.location.toUpperCase()}</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Title & Bio Block (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0f1410] border-2 border-[#1f2a22] text-[#00ff66] font-mono text-xs tracking-wider font-bold">
              <Shield className="w-4 h-4 text-[#ff0055]" />
              <span>// CYBER-SECURITY // AI/ML // WEB DEVELOPMENT</span>
            </div>

            {/* Oversized Typography Name */}
            <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter uppercase leading-tight sm:leading-none break-words">
              CHANDAN <br />
              <span className="text-[#00ff66] bg-black px-2 inline-block border-2 border-black">KUMAR</span> <br />
              BARMAN
            </h1>

            {/* Sub-Headline */}
            <p className="font-mono text-sm sm:text-base md:text-lg text-zinc-200 max-w-xl border-l-4 border-[#00ff66] pl-3 sm:pl-4 py-1 font-bold">
              {PROFILE_DATA.title}
            </p>

            {/* Human-Written Professional Bio Paragraph */}
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
              {PROFILE_DATA.bio}
            </p>

            {/* Tech Icon Pack Showcase Bar */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 font-mono text-xs">
              <span className="text-zinc-400 font-bold w-full sm:w-auto">// CORE_STACK:</span>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#141a15] border border-[#1f2a22] text-white font-bold text-[11px] sm:text-xs hover:border-[#00ff66] transition-colors">
                  <PythonBrutalIcon size={14} className="text-[#00ff66]" /> Python
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#141a15] border border-[#1f2a22] text-white font-bold text-[11px] sm:text-xs hover:border-[#00ff66] transition-colors">
                  <WafShieldBrutalIcon size={14} className="text-[#00ff66]" /> Nmap
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#141a15] border border-[#1f2a22] text-white font-bold text-[11px] sm:text-xs hover:border-[#00ff66] transition-colors">
                  <WafShieldBrutalIcon size={14} className="text-[#00ff66]" /> Wireshark
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#141a15] border border-[#1f2a22] text-white font-bold text-[11px] sm:text-xs hover:border-[#00ff66] transition-colors">
                  <OpenCvBrutalIcon size={14} className="text-[#00ff66]" /> OpenCV
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#141a15] border border-[#1f2a22] text-white font-bold text-[11px] sm:text-xs hover:border-[#00ff66] transition-colors">
                  <CppBrutalIcon size={14} className="text-[#00ff66]" /> C++
                </span>
              </div>
            </div>

            {/* Action Buttons - Fully Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 pt-2 font-mono">
              <a
                href={PROFILE_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn-primary py-3.5 px-4 text-xs sm:text-sm text-center w-full bg-[#00ff66] text-black font-extrabold hover:bg-white hover:text-black border-2 border-black"
                title="View Resume PDF"
              >
                <FileText className="w-4 h-4 text-black" />
                <span>RESUME</span>
              </a>

              <a
                href="#projects"
                className="brutal-btn-primary py-3.5 px-4 text-xs sm:text-sm text-center w-full"
              >
                <span>PROJECTS</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="brutal-btn-red py-3.5 px-4 text-xs sm:text-sm text-center w-full"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#00ff66]" /> : <Mail className="w-4 h-4 text-white" />}
                <span>{copiedEmail ? 'COPIED!' : 'EMAIL ME'}</span>
              </button>

              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn-secondary py-3.5 px-4 text-xs sm:text-sm text-center w-full hover:border-[#0a66c2]"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span>LINKEDIN</span>
              </a>

              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn-secondary py-3.5 px-4 text-xs sm:text-sm text-center w-full"
              >
                <Github className="w-4 h-4 text-[#00ff66]" />
                <span>GITHUB</span>
              </a>
            </div>

            {/* Interactive Quick Command Switcher Box */}
            <div className="p-4 bg-[#0f1410] border-2 border-[#1f2a22] font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-zinc-400 border-b border-[#1f2a22] pb-2">
                <span className="flex items-center gap-1.5 text-[#00ff66] font-bold">
                  <Terminal className="w-3.5 h-3.5" />
                  INTERACTIVE_TERMINAL
                </span>
                <span className="text-[10px] text-zinc-500">SELECT_COMMAND</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {['status', 'repos', 'focus', 'contact', 'resume'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => setTerminalCmd(cmd)}
                    className={`px-2.5 py-1 border transition-all text-[11px] font-bold ${
                      terminalCmd === cmd
                        ? 'bg-[#00ff66] text-black border-black shadow-[2px_2px_0px_0px_#000000]'
                        : 'bg-[#141a15] text-zinc-300 border-[#1f2a22] hover:border-[#00ff66] hover:text-white'
                    }`}
                  >
                    $ {cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Output */}
              <div className="p-3 bg-black border border-[#1f2a22] text-[11px] space-y-1 font-mono">
                {terminalCmd === 'status' && (
                  <p className="text-[#00ff66]">
                    <span className="text-zinc-500">&gt;</span> STATUS: OPERATIONAL // {PROJECTS_DATA.length} ORIGINAL REPOS VERIFIED // 0 FORKED REPOS
                  </p>
                )}
                {terminalCmd === 'repos' && (
                  <p className="text-[#00ff66]">
                    <span className="text-zinc-500">&gt;</span> ORIGINAL CODEBASES: real-time-waf-rust, anpr-system, bgp-realtime-simulation, support-ai-backend, SmartEnvironment-iot
                  </p>
                )}
                {terminalCmd === 'focus' && (
                  <p className="text-cyan-400">
                    <span className="text-zinc-500">&gt;</span> FOCUS: Cybersecurity Fundamentals, Nmap, Wireshark, AI & Machine Learning, Web Development
                  </p>
                )}
                {terminalCmd === 'contact' && (
                  <p className="text-[#ff0055]">
                    <span className="text-zinc-500">&gt;</span> CONTACT: cb8583646@gmail.com // linkedin.com/in/chandan-barman-cybersecurity
                  </p>
                )}
                {terminalCmd === 'resume' && (
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[#00ff66]">
                    <p>
                      <span className="text-zinc-500">&gt;</span> RESUME: {PROFILE_DATA.resumeFileName} [VERIFIED // READY]
                    </p>
                    <a
                      href={PROFILE_DATA.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black bg-[#00ff66] px-2 py-0.5 font-bold hover:bg-white text-[10px] inline-flex items-center gap-1 border border-black"
                    >
                      OPEN_PDF &gt;
                    </a>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Profile Photo Panel (Right 5 cols) - DARK CYBER BACKGROUND STYLING */}
          <div className="lg:col-span-5 space-y-6 max-w-md mx-auto lg:max-w-none w-full">
            
            {/* Outer Wrapper with Chamfer Cutout & Electric Green Border */}
            <div className="relative p-2 bg-[#0f1410] border-2 border-[#00ff66] chamfer-top-left shadow-[4px_4px_0px_0px_#00ff66] sm:shadow-[6px_6px_0px_0px_#00ff66]">
              
              {/* Inner Cutout Frame with Deep Cyber Dark Backdrop */}
              <div className="relative w-full aspect-[4/5] bg-[#080a08] border-2 border-[#1f2a22] chamfer-top-left overflow-hidden group">
                
                {/* Clean Portrait Photo with Dark Matrix Blend Filter */}
                <img
                  src="/chandan.jpg"
                  alt="Chandan Kumar Barman - Cybersecurity & ML Engineer"
                  className="w-full h-full object-cover object-center filter contrast-125 brightness-90 mix-blend-luminosity group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    if (!target.src.includes('hero.png')) {
                      target.src = 'https://raw.githubusercontent.com/chandan3669/chandan3669.github.io/main/hero.png'
                    }
                  }}
                />

                {/* Dark Cyber Green Atmospheric Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a08] via-[#080a08]/30 to-emerald-950/20 pointer-events-none" />

                {/* Top-Left Red Badge Overlay */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-black/95 text-[#ff0055] border-2 border-[#ff0055] px-2 sm:px-3 py-1 font-mono font-bold text-[10px] sm:text-xs tracking-wider uppercase shadow-[2px_2px_0px_0px_#000000]">
                  CB_SEC // VALID
                </div>

                {/* Bottom-Right Electric Green Square Badge Overlay with Chamfer Cutout */}
                <div className="absolute bottom-0 right-0 z-20 bg-[#00ff66] text-black border-t-2 border-l-2 border-black px-3 sm:px-5 py-2 sm:py-3 font-mono font-black text-xs sm:text-sm uppercase chamfer-bottom-right shadow-[-2px_-2px_0px_0px_#000000]">
                  CB_DEV
                </div>

              </div>

              {/* Bottom Tagline */}
              <div className="pt-2 pb-1 flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-zinc-400 px-1.5 font-bold">
                <span className="text-[#00ff66]">// CUTOUT_SPEC: CYBERSEC // AI/ML // WEB</span>
                <span className="text-[#00ff66]">VERIFIED</span>
              </div>
            </div>

            {/* System Status Box */}
            <div className="brutal-box p-4 sm:p-5 border-2 border-[#1f2a22] bg-[#0f1410]">
              <div className="flex items-center justify-between pb-2.5 border-b border-[#1f2a22] font-mono text-xs">
                <span className="text-zinc-400">// VERIFICATION_LOG</span>
                <span className="text-[#00ff66] font-bold">ORIGINAL_REPOS_ONLY</span>
              </div>
              
              <div className="mt-3 space-y-2 font-mono text-[11px] sm:text-xs">
                <div className="flex justify-between items-center py-1 border-b border-[#1f2a22]">
                  <span className="text-zinc-400">DIRECT EMAIL:</span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-[#ff0055] hover:underline font-bold text-right truncate max-w-[170px] sm:max-w-none"
                    title="Click to copy email"
                  >
                    {copiedEmail ? 'COPIED TO CLIPBOARD!' : PROFILE_DATA.email}
                  </button>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-[#1f2a22]">
                  <span className="text-zinc-400">CORE FOCUS:</span>
                  <span className="text-[#00ff66] font-bold">CYBERSEC / AI-ML / WEB</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-[#1f2a22]">
                  <span className="text-zinc-400">ORIGINAL REPOS:</span>
                  <span className="text-white font-bold bg-[#141a15] px-2 py-0.5 border border-[#1f2a22]">{PROJECTS_DATA.length} VERIFIED</span>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-[#1f2a22]">
                  <span className="text-zinc-400">LINKEDIN:</span>
                  <a
                    href={PROFILE_DATA.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0a66c2] hover:underline font-bold truncate max-w-[150px] sm:max-w-none"
                  >
                    chandan-barman-cybersecurity
                  </a>
                </div>

                <div className="flex justify-between items-center py-1 border-b border-[#1f2a22]">
                  <span className="text-zinc-400">RESUME / CV:</span>
                  <a
                    href={PROFILE_DATA.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ff66] hover:underline font-bold inline-flex items-center gap-1"
                    title="View Resume PDF"
                  >
                    <span>{PROFILE_DATA.resumeFileName}</span>
                    <Download className="w-3 h-3 text-[#00ff66]" />
                  </a>
                </div>

                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-400">LOCATION:</span>
                  <span className="text-zinc-300 font-bold">BHUBANESWAR, INDIA</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
