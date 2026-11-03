'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 400) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 bg-[#00ff66] text-black font-mono font-extrabold text-xs px-3 py-2 sm:px-3.5 sm:py-2.5 border-2 border-black shadow-[3px_3px_0px_0px_#000000] hover:bg-black hover:text-[#00ff66] transition-all flex items-center gap-1.5 cursor-pointer"
      title="Back to Top"
      aria-label="Back to Top"
    >
      <ArrowUp className="w-4 h-4" />
      <span className="hidden sm:inline">TOP ↑</span>
    </button>
  )
}
