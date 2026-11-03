'use client'

import React from 'react'
import { PROFILE_DATA } from '@/data/portfolioData'
import { FileText } from 'lucide-react'
import { 
  WafShieldBrutalIcon, 
  BgpNetworkBrutalIcon, 
  OpenCvBrutalIcon, 
  EspressifBrutalIcon 
} from '@/components/IconPack'

export const About: React.FC = () => {
  const coreCompetencies = [
    {
      title: "CYBER-SECURITY & WAF ENGINES",
      icon: WafShieldBrutalIcon,
      desc: "Cybersecurity research, real-time Web Application Firewall (WAF) security, penetration testing, API security auditing, and network threat defense.",
    },
    {
      title: "AI & MACHINE LEARNING",
      icon: OpenCvBrutalIcon,
      desc: "Automatic Number Plate Recognition (ANPR) with OpenCV, geospatial CLIP vision feature extraction models, PyTorch deep learning, and LLM inferencing backends.",
    },
    {
      title: "FULL-STACK WEB DEVELOPMENT",
      icon: BgpNetworkBrutalIcon,
      desc: "Modern TypeScript and JavaScript frontend architectures, HTML5/CSS3, WebGL 3D graphics (Three.js), RESTful APIs, and full-stack web applications.",
    },
    {
      title: "HARDWARE & SYSTEMS SECURITY",
      icon: EspressifBrutalIcon,
      desc: "ESP32 microcontroller firmware engineering, RF frequency testing, embedded hardware security audit suites, and IoT environmental sensor networks.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 border-b-2 border-[#1f2a22] bg-[#0b0e0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-[#00ff66] tracking-widest mb-1 font-bold">
            // 02. ABOUT_ENGINEER
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            FACTUAL <span className="text-[#00ff66] bg-black px-2 inline-block">PROFILE</span> & COMPETENCIES
          </h2>
          <div className="w-24 h-1 bg-[#00ff66] mt-3"></div>
        </div>

        {/* Top Grid: Bio + Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          
          {/* Bio Statement Block (Left 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <p className="p-6 bg-[#0f1410] border-2 border-[#1f2a22] font-mono text-sm sm:text-base border-l-4 border-l-[#00ff66] font-medium text-white leading-relaxed h-full flex items-center">
              "Chandan Kumar Barman is a cybersecurity researcher and software engineer based in Bhubaneswar, India. Passionate about building resilient security architectures, intelligent AI/ML systems, and high-performance web applications. Driven by a deep curiosity for how complex systems work and how to defend them."
            </p>
            <p className="text-xs text-zinc-400 font-mono">
              // VERIFICATION: All portfolio items presented on this site are directly backed by verified repositories under GitHub handle <span className="text-white bg-[#141a15] px-2 py-0.5 border border-[#1f2a22] font-bold">chandan3669</span>.
            </p>
          </div>

          {/* Factual Metadata Sheet (Right 5 cols) */}
          <div className="lg:col-span-5 p-6 bg-[#0f1410] border-2 border-[#1f2a22] font-mono text-xs space-y-3">
            <div className="text-[#00ff66] font-bold border-b border-[#1f2a22] pb-2 text-sm flex items-center justify-between">
              <span>FACT SHEET // IDENTITY</span>
              <span className="text-zinc-500 text-xs">CB-3669</span>
            </div>
            
            <div className="flex justify-between border-b border-[#1f2a22] py-1">
              <span className="text-zinc-400">FULL NAME:</span>
              <span className="text-white font-bold">{PROFILE_DATA.name}</span>
            </div>

            <div className="flex justify-between border-b border-[#1f2a22] py-1">
              <span className="text-zinc-400">CORE FOCUS:</span>
              <span className="text-[#00ff66] font-bold">CYBERSEC // AI-ML // WEB</span>
            </div>

            <div className="flex justify-between border-b border-[#1f2a22] py-1">
              <span className="text-zinc-400">DIRECT EMAIL:</span>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="text-[#ff0055] hover:underline font-bold"
              >
                {PROFILE_DATA.email}
              </a>
            </div>

            <div className="flex justify-between border-b border-[#1f2a22] py-1">
              <span className="text-zinc-400">GITHUB HANDLE:</span>
              <span className="text-[#00ff66] font-bold">@{PROFILE_DATA.handle}</span>
            </div>

            <div className="flex justify-between border-b border-[#1f2a22] py-1">
              <span className="text-zinc-400">LINKEDIN:</span>
              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0a66c2] hover:underline font-bold"
              >
                chandan-barman-cybersecurity
              </a>
            </div>

            <div className="flex justify-between border-b border-[#1f2a22] py-1">
              <span className="text-zinc-400">RESUME / CV:</span>
              <a
                href={PROFILE_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00ff66] hover:underline font-bold inline-flex items-center gap-1"
                title="View Resume PDF"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{PROFILE_DATA.resumeFileName}</span>
              </a>
            </div>

            <div className="flex justify-between py-1">
              <span className="text-zinc-400">LOCATION:</span>
              <span className="text-white font-bold">{PROFILE_DATA.location}</span>
            </div>
          </div>

        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCompetencies.map((comp, idx) => {
            const IconComponent = comp.icon
            return (
              <div
                key={idx}
                className="brutal-box p-6 bg-[#0f1410] border-2 border-[#1f2a22] hover:border-[#00ff66] transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#00ff66] text-black border border-black font-bold">
                    <IconComponent size={24} />
                  </div>
                  <span className="font-mono text-xs text-zinc-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-mono font-bold text-sm text-white mb-2 tracking-wide">
                  {comp.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
