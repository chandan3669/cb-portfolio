'use client'

import React from 'react'
import { PROFILE_DATA } from '@/data/portfolioData'
import { NanoCustomBrutalLogo } from '@/components/IconPack'

export const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-24 sm:pb-28 bg-[#080a08] border-t-2 border-[#1f2a22] font-mono text-xs text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Custom Emblem + Name */}
        <div className="flex items-center gap-2.5 font-mono">
          <div className="p-1 bg-[#080a08] border border-[#00ff66] shrink-0">
            <NanoCustomBrutalLogo size={20} />
          </div>
          <span className="text-white font-bold tracking-wider text-sm sm:text-base">
            CHANDAN KUMAR BARMAN
          </span>
          <span className="text-zinc-500 hidden sm:inline text-xs">
            // TECHNICAL_BRUTALISM
          </span>
        </div>

        {/* Center Factual Tag */}
        <div className="text-center text-[#00ff66] bg-black px-3 py-1.5 border border-black font-bold text-xs max-w-full overflow-x-auto">
          STRICTLY_FACTUAL // ZERO_DUMMY_DATA // VERIFIED_CONTACTS
        </div>

        {/* Right Side Links (Given ample right & bottom margin to avoid floating button overlap) */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-6 gap-y-3 font-bold pr-0 sm:pr-16 lg:pr-20">
          <span className="text-zinc-400 text-xs">© {new Date().getFullYear()} @chandan3669</span>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="text-[#ff0055] hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            EMAIL
          </a>
          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#00ff66] transition-colors underline-offset-4 hover:underline"
          >
            GITHUB
          </a>
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0a66c2] hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            LINKEDIN
          </a>
          <a
            href={PROFILE_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff66] hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            RESUME (PDF)
          </a>
        </div>

      </div>
    </footer>
  )
}
