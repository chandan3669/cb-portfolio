'use client'

import React, { useState, useEffect } from 'react'
import { PROFILE_DATA } from '@/data/portfolioData'
import { Menu, X, Linkedin, Check, Copy, FileText } from 'lucide-react'
import { NanoCustomBrutalLogo } from '@/components/IconPack'

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [copiedEmail, setCopiedEmail] = useState(false)

  const navLinks = [
    { num: '01.', name: 'HERO', href: '#hero', id: 'hero' },
    { num: '02.', name: 'ABOUT', href: '#about', id: 'about' },
    { num: '03.', name: 'SECURITY', href: '#security', id: 'security' },
    { num: '04.', name: 'PROJECTS', href: '#projects', id: 'projects' },
    { num: '05.', name: 'SKILLS', href: '#skills', id: 'skills' },
    { num: '06.', name: 'CONTACT', href: '#contact', id: 'contact' },
  ]

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollPos = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i]
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080a08]/95 border-b-2 border-[#1f2a22] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Tag (Custom Extraordinary Cybernetic Terminal Emblem) */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="p-2 bg-[#080a08] border-2 border-[#00ff66] group-hover:border-white group-hover:scale-105 transition-all shadow-[3px_3px_0px_0px_#00ff66] shrink-0 flex items-center justify-center">
              <NanoCustomBrutalLogo size={28} />
            </div>
            <div className="font-mono flex flex-col items-start gap-1">
              <span className="text-white font-extrabold text-sm sm:text-base tracking-wider group-hover:text-[#00ff66] transition-colors">
                CHANDAN_KUMAR_BARMAN
              </span>
              <span className="text-[10px] text-black bg-[#00ff66] px-2 py-0.5 font-black border border-black uppercase tracking-wider">
                // SEC_RESEARCH
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 flex flex-col items-center justify-center min-w-[76px] transition-all font-mono border-2 ${
                    isActive
                      ? 'bg-[#00ff66] text-black border-black font-black shadow-[3px_3px_0px_0px_#000000] -translate-y-0.5'
                      : 'bg-[#0f1410] text-zinc-300 border-[#1f2a22] hover:border-[#00ff66] hover:bg-[#141a15] hover:text-white font-bold'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-black font-black' : 'text-zinc-500'}`}>
                    {link.num}
                  </span>
                  <span className="font-black tracking-wide text-xs">
                    {link.name}
                  </span>
                </a>
              )
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 font-mono">
            
            {/* COPY EMAIL Button */}
            <button
              onClick={handleCopyEmail}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#ff0055] border-2 border-black text-white font-bold text-xs hover:bg-black hover:text-[#ff0055] transition-all shadow-[2px_2px_0px_0px_#000000]"
              title="Copy Email Address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-[#00ff66]" /> : <Copy className="w-4 h-4 text-white" />}
              <span className="font-extrabold uppercase">{copiedEmail ? 'COPIED!' : 'COPY EMAIL'}</span>
            </button>

            {/* RESUME Button */}
            <a
              href={PROFILE_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#00ff66] border-2 border-black text-black font-extrabold text-xs hover:bg-white hover:text-black transition-all shadow-[2px_2px_0px_0px_#000000]"
              title="View / Download Resume (PDF)"
            >
              <FileText className="w-4 h-4 text-black" />
              <span className="font-extrabold uppercase">RESUME</span>
            </a>

            {/* LINKEDIN Button */}
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 bg-[#0f1410] border-2 border-[#1f2a22] hover:border-[#00ff66] text-white hover:text-black hover:bg-[#00ff66] font-bold text-xs transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-[#0a66c2]" />
              <span className="font-extrabold uppercase">LINKEDIN</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 bg-[#0f1410] border-2 border-[#1f2a22] text-zinc-200 hover:text-black hover:bg-[#00ff66]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080a08] border-b-2 border-[#00ff66]">
          <div className="px-4 pt-2 pb-6 space-y-2 font-mono text-sm">
            <div className="py-2 text-xs text-[#00ff66] border-b border-[#1f2a22] font-bold">
              SYS_MENU // SELECT_DESTINATION
            </div>
            
            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-3 border-2 transition-all font-mono flex flex-col items-center justify-center text-center ${
                      isActive
                        ? 'bg-[#00ff66] text-black border-black font-black shadow-[2px_2px_0px_0px_#000000]'
                        : 'bg-[#0f1410] border-[#1f2a22] text-zinc-200 hover:bg-[#00ff66] hover:text-black font-bold'
                    }`}
                  >
                    <span className={`text-[10px] ${isActive ? 'text-black' : 'text-zinc-500'}`}>{link.num}</span>
                    <span className="font-extrabold text-xs">{link.name}</span>
                  </a>
                )
              })}
            </div>
            
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                className="w-full text-center py-3 bg-[#ff0055] text-white font-bold border-2 border-black flex items-center justify-center gap-2"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-[#00ff66]" /> : <Copy className="w-4 h-4 text-white" />}
                <span>{copiedEmail ? 'EMAIL COPIED TO CLIPBOARD!' : `COPY EMAIL (${PROFILE_DATA.email})`}</span>
              </button>

              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-[#0a66c2] text-white font-bold border-2 border-black"
              >
                LINKEDIN // chandan-barman-cybersecurity
              </a>

              <a
                href={PROFILE_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-[#00ff66] text-black font-extrabold border-2 border-black flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_#000000]"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME ({PROFILE_DATA.resumeFileName})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
