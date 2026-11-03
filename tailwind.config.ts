import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          bg: '#0a0a0a',
          panel: '#121212',
          card: '#18181b',
          border: '#27272a',
          accent: '#ffee00',
          red: '#ff3300',
          text: '#fafafa',
          muted: '#a1a1aa',
          darkmuted: '#52525b',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Courier New', 'Courier', 'monospace'],
        sans: ['Inter', 'Geist', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #ffee00',
        'brutal-red': '4px 4px 0px 0px #ff3300',
        'brutal-white': '4px 4px 0px 0px #ffffff',
        'brutal-dark': '4px 4px 0px 0px #27272a',
      },
    },
  },
  plugins: [],
}
export default config
