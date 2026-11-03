'use client'

import React from 'react'
import { PROFILE_DATA } from '@/data/portfolioData'
import { Shield, Brain, Globe, Cpu } from 'lucide-react'
import { TechIcon } from '@/components/IconPack'

export const Skills: React.FC = () => {
  // 3 Core Focus Categories: CYBER-SECURITY, AI/ML, and WEB DEVELOPMENT
  const loadoutPanels = [
    {
      id: 'cybersecurity',
      title: 'CYBER-SECURITY',
      subtitle: 'DEFENSE // AUDITING // RECON',
      themeColor: '#ff0055', // Signal Red
      borderColor: 'border-[#ff0055]',
      badgeBg: 'bg-[#ff0055]',
      badgeText: 'text-white',
      titleColor: 'text-[#ff0055]',
      icon: Shield,
      skills: [
        'Cybersecurity Fundamentals',
        'Nmap',
        'Wireshark',
        'Tcpdump',
        'Burp Suite',
        'Shodan',
        'XSS',
        'John the Ripper',
        'PsTools (Forensics)',
        'Network Traffic Analysis',
      ],
    },
    {
      id: 'aiml',
      title: 'AI & MACHINE LEARNING',
      subtitle: 'VISION // LLMS // MODELS',
      themeColor: '#00ff66', // Electric Emerald Green
      borderColor: 'border-[#00ff66]',
      badgeBg: 'bg-[#00ff66]',
      badgeText: 'text-black',
      titleColor: 'text-[#00ff66]',
      icon: Brain,
      skills: [
        'OpenCV & Computer Vision',
        'Automatic Number Plate Recognition (ANPR)',
        'PyTorch & Deep Learning',
        'Geospatial CLIP Feature Models',
        'LLM Backend Architecture',
        'FastAPI Model Inferencing',
        'Python Data Science Stack',
        'Neural Network Pipelines',
      ],
    },
    {
      id: 'webdev',
      title: 'WEB DEVELOPMENT',
      subtitle: 'FULL-STACK // APIS // FRONTEND',
      themeColor: '#00f0ff', // Electric Cyan
      borderColor: 'border-[#00f0ff]',
      badgeBg: 'bg-[#00f0ff]',
      badgeText: 'text-black',
      titleColor: 'text-[#00f0ff]',
      icon: Globe,
      skills: [
        'JavaScript (ES6+)',
        'TypeScript Systems',
        'HTML5 & Modern CSS3',
        'React & Next.js Architecture',
        'WebGL & 3D Three.js Graphics',
        'RESTful API Engineering',
        'Solidity & Web3 Interfaces',
        'Responsive Web Design',
      ],
    },
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 border-b-2 border-[#1f2a22] bg-[#080a08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-[#00ff66] tracking-widest mb-1 font-bold">
              // 05. TECHNICAL_CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight font-mono">
              SYSTEM <span className="text-[#00ff66] bg-black px-2 inline-block">LOADOUT</span>
            </h2>
          </div>

          {/* Right-Aligned Cyber Badge Banner */}
          <div className="flex flex-col items-start md:items-end font-mono">
            <div className="px-3 py-1 bg-[#00ff66] text-black font-extrabold text-xs tracking-wider uppercase border border-black chamfer-bottom-right mb-1">
              WEAPONRY LOADOUT
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-[#00ff66] tracking-tight uppercase">
              SKILLS
            </h3>
          </div>
        </div>

        {/* 3 Weaponry Loadout Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {loadoutPanels.map((panel) => {
            const IconComponent = panel.icon

            return (
              <div
                key={panel.id}
                className={`relative p-6 bg-[#0f1410] border-2 ${panel.borderColor} chamfer-top-left flex flex-col justify-between transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] group`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between mb-8 pb-4 border-b border-[#1f2a22]">
                    
                    {/* Polygon Icon Badge */}
                    <div className={`p-3 ${panel.badgeBg} ${panel.badgeText} border border-black font-mono font-bold chamfer-top-left shadow-[2px_2px_0px_0px_#000000]`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Right-Aligned Category Title */}
                    <div className="text-right font-mono">
                      <div className="text-[10px] text-zinc-500 font-bold tracking-wider mb-0.5">
                        // {panel.subtitle}
                      </div>
                      <h3 className={`text-base sm:text-lg font-extrabold uppercase tracking-tight max-w-[170px] ${panel.titleColor}`}>
                        {panel.title}
                      </h3>
                    </div>
                  </div>

                  {/* Horizontal List of Skill Items */}
                  <div className="space-y-0 font-mono text-xs sm:text-sm">
                    {panel.skills.map((skillItem, sIdx) => (
                      <div
                        key={sIdx}
                        className="py-2.5 border-b border-[#1f2a22] flex items-center justify-between text-zinc-300 hover:text-white hover:border-[#00ff66] transition-colors px-1 group/row"
                      >
                        <div className="flex items-center gap-2">
                          <TechIcon name={skillItem} size={14} className="text-zinc-500 group-hover/row:text-[#00ff66] transition-colors" />
                          <span className="font-medium text-xs sm:text-sm">{skillItem}</span>
                        </div>
                        <span className="text-[10px] text-zinc-600 font-bold group-hover/row:text-[#00ff66] transition-colors">
                          OK
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer Specification */}
                <div className="pt-6 mt-4 border-t border-[#1f2a22] flex items-center justify-between font-mono text-[11px] text-zinc-500 font-bold">
                  <span>SPEC // VERIFIED</span>
                  <span className={panel.titleColor}>LOADED</span>
                </div>

              </div>
            )
          })}
        </div>

        {/* Global Stack Summary Bar */}
        <div className="mt-12 brutal-box p-4 bg-[#0f1410] border-2 border-[#1f2a22] font-mono text-xs text-zinc-400 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#00ff66]" />
            <span className="text-white font-bold">// CORE_PRACTICE:</span>
            <span>CYBER-SECURITY // AI & MACHINE LEARNING // WEB DEVELOPMENT</span>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="px-2 py-0.5 bg-black border border-[#1f2a22] text-[#ff0055] font-bold">CYBER-SECURITY</span>
            <span className="px-2 py-0.5 bg-black border border-[#1f2a22] text-[#00ff66] font-bold">AI/ML</span>
            <span className="px-2 py-0.5 bg-black border border-[#1f2a22] text-[#00f0ff] font-bold">WEB DEVELOPMENT</span>
          </div>
        </div>

      </div>
    </section>
  )
}
