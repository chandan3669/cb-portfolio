import React from 'react'

interface IconProps {
  size?: number
  className?: string
}

// --------------------------------------------------------------------------
// BESPOKE CUSTOM EXTRAORDINARY NANO LOGO EMBLEM
// A high-contrast cybernetic terminal skull shield emblem designed for Chandan
// --------------------------------------------------------------------------
export const NanoCustomBrutalLogo: React.FC<IconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer Chamfered Hexagonal Shield */}
    <path
      d="M24 3L43 10V24C43 35.5 35 42.5 24 45C13 42.5 5 35.5 5 24V10L24 3Z"
      fill="#000000"
      stroke="#00ff66"
      strokeWidth="2.5"
      strokeLinejoin="miter"
    />
    
    {/* Inner Cybernetic Shield Outline */}
    <path
      d="M24 7L38 13V23.5C38 32.5 31.5 38 24 40.5C16.5 38 10 32.5 10 23.5V13L24 7Z"
      fill="#0f1410"
      stroke="#00ff66"
      strokeWidth="1.5"
    />

    {/* Terminal Prompt Chevron `>` */}
    <path
      d="M16 18L23 23.5L16 29"
      stroke="#00ff66"
      strokeWidth="3"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />

    {/* Flashing Terminal Cursor `_` */}
    <line
      x1="26"
      y1="29"
      x2="33"
      y2="29"
      stroke="#00ff66"
      strokeWidth="3"
      strokeLinecap="square"
    />

    {/* Top Node Matrix Dots */}
    <circle cx="24" cy="12" r="1.5" fill="#00ff66" />
    <circle cx="18" cy="10" r="1" fill="#ff0055" />
    <circle cx="30" cy="10" r="1" fill="#00f0ff" />

    {/* Circuit Trace Bottom Lines */}
    <path d="M24 33V37" stroke="#00ff66" strokeWidth="1.5" strokeDasharray="1 1" />
  </svg>
)

// --------------------------------------------------------------------------
// REPOSITORY TECH STACK ICONS
// --------------------------------------------------------------------------
export const RustBrutalIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 6L7 10V14L12 18L17 14V10L12 6Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
)

export const PythonBrutalIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M11.9 2C8.6 2 8 3.5 8 5.2V7H12.2V7.5H6C4.3 7.5 3 8.7 3 11.5C3 14.3 4.1 15.5 6 15.5H7.5V13.8C7.5 11.8 9.1 10.2 11.1 10.2H16.5C18.2 10.2 19 9.3 19 7.5C19 5.7 17.8 2 11.9 2ZM10 4.5C10.6 4.5 11 4.9 11 5.5C11 6.1 10.6 6.5 10 6.5C9.4 6.5 9 6.1 9 5.5C9 4.9 9.4 4.5 10 4.5Z" fill="currentColor"/>
    <path d="M12.1 22C15.4 22 16 20.5 16 18.8V17H11.8V16.5H18C19.7 16.5 21 15.3 21 12.5C21 9.7 19.9 8.5 18 8.5H16.5V10.2C16.5 12.2 14.9 13.8 12.9 13.8H7.5C5.8 13.8 5 14.7 5 16.5C5 18.3 6.2 22 12.1 22ZM14 19.5C13.4 19.5 13 19.1 13 18.5C13 17.9 13.4 17.5 14 17.5C14.6 17.5 15 17.9 15 18.5C15 19.1 14.6 19.5 14 19.5Z" fill="currentColor"/>
  </svg>
)

export const CppBrutalIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="2" y="3" width="20" height="18" stroke="currentColor" strokeWidth="2"/>
    <path d="M9.5 15C8.1 15 7 13.7 7 12C7 10.3 8.1 9 9.5 9C10.4 9 11.2 9.5 11.6 10.3" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
    <path d="M14 12H17M15.5 10.5V13.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M19 12H22M20.5 10.5V13.5" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

export const WafShieldBrutalIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L4 5V11C4 16.5 7.5 20.8 12 22C16.5 20.8 20 16.5 20 11V5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="miter"/>
    <path d="M12 7V17M8 11L12 7L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
  </svg>
)

export const EspressifBrutalIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 2V4M12 2V4M16 2V4M8 20V22M12 20V22M16 20V22M2 8H4M2 12H4M2 16H4M20 8H22M20 12H22M20 16H22" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
  </svg>
)

export const OpenCvBrutalIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="7" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const BgpNetworkBrutalIcon: React.FC<IconProps> = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
    <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
    <rect x="9" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 9V12H18V9M12 12V15" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

// Dynamic Tech Stack Icon Lookup Helper
export const TechIcon: React.FC<{ name: string; size?: number; className?: string }> = ({ name, size = 16, className = "" }) => {
  const lower = name.toLowerCase()

  if (lower.includes('rust')) return <RustBrutalIcon size={size} className={className} />
  if (lower.includes('python') || lower.includes('pytorch') || lower.includes('opencv')) return <PythonBrutalIcon size={size} className={className} />
  if (lower.includes('c++') || lower.includes('cpp')) return <CppBrutalIcon size={size} className={className} />
  if (lower.includes('waf') || lower.includes('security') || lower.includes('cyber')) return <WafShieldBrutalIcon size={size} className={className} />
  if (lower.includes('esp32') || lower.includes('hardware') || lower.includes('embedded') || lower.includes('iot')) return <EspressifBrutalIcon size={size} className={className} />
  if (lower.includes('network') || lower.includes('bgp')) return <BgpNetworkBrutalIcon size={size} className={className} />
  
  return <WafShieldBrutalIcon size={size} className={className} />
}
