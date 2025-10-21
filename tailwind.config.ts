import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB3D9',
        secondary: '#00D4FF',
        dark: '#1a1a2e',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #FFB3D9 0%, #00D4FF 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
