import type { Metadata } from 'next'
import './globals.css'

const faviconSvgDataUri = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" fill="%23080a08"/><path d="M24 3L43 10V24C43 35.5 35 42.5 24 45C13 42.5 5 35.5 5 24V10L24 3Z" fill="%23080a08" stroke="%2300ff66" stroke-width="3"/><path d="M16 18L23 23.5L16 29" stroke="%2300ff66" stroke-width="3" stroke-linecap="square"/><line x1="26" y1="29" x2="33" y2="29" stroke="%2300ff66" stroke-width="3" stroke-linecap="square"/><circle cx="24" cy="12" r="2" fill="%2300ff66"/></svg>`

export const metadata: Metadata = {
  title: 'Chandan Kumar Barman | Cybersecurity & ML Engineer',
  description: 'Production-grade Technical Brutalism portfolio of Chandan Kumar Barman. Cybersecurity research, WAF security, BGP simulation, computer vision ANPR, and systems engineering.',
  icons: {
    icon: [
      { url: faviconSvgDataUri, type: 'image/svg+xml' },
    ],
    shortcut: faviconSvgDataUri,
    apple: faviconSvgDataUri,
  },
  keywords: [
    'Chandan Kumar Barman',
    'chandan3669',
    'Cybersecurity Engineer',
    'WAF Security',
    'BGP Simulation',
    'ANPR OpenCV',
    'Full Stack Web Developer',
    'Technical Brutalism',
    'Bhubaneswar India',
  ],
  authors: [{ name: 'Chandan Kumar Barman', url: 'https://github.com/chandan3669' }],
  creator: 'Chandan Kumar Barman',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/chandan3669',
    title: 'Chandan Kumar Barman | Cybersecurity & ML Engineer',
    description: 'Offensive Security, WAF Security, BGP Simulation, ANPR, and systems engineering research portfolio.',
    siteName: 'Chandan Kumar Barman Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandan Kumar Barman | Cybersecurity & ML Engineer',
    description: 'Cybersecurity research, computer vision, and systems engineering.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href={faviconSvgDataUri} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={faviconSvgDataUri} />
      </head>
      <body className="bg-[#080a08] text-white antialiased selection:bg-[#00ff66] selection:text-black">
        {children}
      </body>
    </html>
  )
}
