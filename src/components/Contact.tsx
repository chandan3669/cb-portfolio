'use client'

import React from 'react'
import { PROFILE_DATA } from '@/data/portfolioData'
import { Github, MapPin, ExternalLink, Terminal, Linkedin, Mail, FileText } from 'lucide-react'

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 border-b-2 border-[#1f2a22] bg-[#0b0e0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-mono text-xs text-[#00ff66] tracking-widest mb-1 font-bold">
            // 06. TRANSMISSION_CHANNEL
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-tight">
            DIRECT <span className="text-[#00ff66] bg-black px-2 inline-block text-white">CONTACT</span> & CONNECTIVITY
          </h2>
          <div className="w-24 h-1 bg-[#00ff66] mt-3"></div>
        </div>

        {/* Minimal High-Contrast Brutalist Card */}
        <div className="brutal-box p-8 md:p-12 bg-[#0f1410] border-2 border-[#00ff66] shadow-[6px_6px_0px_0px_#00ff66] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00ff66] bg-black px-3 py-1 border border-black font-bold">
              <Terminal className="w-4 h-4" />
              <span>CHANNEL: DIRECT_EMAIL // GITHUB // LINKEDIN // RESUME</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white uppercase font-mono tracking-tight">
              CONNECT WITH CHANDAN KUMAR BARMAN
            </h3>

            <p className="text-zinc-300 text-sm max-w-2xl leading-relaxed">
              For security vulnerability discussions, research inquiries, or professional opportunities, reach out directly via Email or LinkedIn.
            </p>

            <div className="flex flex-wrap gap-4 font-mono text-xs pt-2">
              <div className="flex items-center gap-2 text-white bg-[#141a15] px-3 py-2 border border-[#1f2a22] font-bold">
                <Mail className="w-4 h-4 text-[#ff0055]" />
                <span>EMAIL: {PROFILE_DATA.email}</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-[#141a15] px-3 py-2 border border-[#1f2a22] font-bold">
                <MapPin className="w-4 h-4 text-[#00ff66]" />
                <span>LOCATION: {PROFILE_DATA.location.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-[#141a15] px-3 py-2 border border-[#1f2a22] font-bold">
                <Github className="w-4 h-4 text-[#00ff66]" />
                <span>GITHUB: @{PROFILE_DATA.handle}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 font-mono">
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="brutal-btn-red py-4 px-6 text-center text-sm w-full font-bold"
            >
              <Mail className="w-5 h-5 text-white" />
              <span>SEND EMAIL</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>

            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-primary bg-[#0a66c2] hover:bg-[#004182] text-white border-[#0a66c2] py-3.5 px-6 text-center text-xs w-full font-bold"
            >
              <Linkedin className="w-4 h-4 text-white" />
              <span>CONNECT ON LINKEDIN</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>

            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-secondary py-3 px-6 text-center text-xs w-full"
            >
              <Github className="w-4 h-4 text-[#00ff66]" />
              <span>OPEN GITHUB PROFILE</span>
            </a>

            <a
              href={PROFILE_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-btn-primary py-3.5 px-6 text-center text-xs w-full font-bold bg-[#00ff66] text-black border-2 border-black hover:bg-white hover:text-black shadow-[2px_2px_0px_0px_#000000]"
            >
              <FileText className="w-4 h-4 text-black" />
              <span>VIEW RESUME ({PROFILE_DATA.resumeFileName})</span>
              <ExternalLink className="w-3.5 h-3.5 text-black" />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}
