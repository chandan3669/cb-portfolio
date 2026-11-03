import React from 'react'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { SecurityResearch } from '@/components/SecurityResearch'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080a08] text-white selection:bg-[#00ff66] selection:text-black">
      {/* Fixed Top Navigation Bar */}
      <Navbar />

      {/* Main Content Stream */}
      <main className="pt-20">
        <Hero />
        <About />
        <SecurityResearch />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Sticky Back to Top Button */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </div>
  )
}
