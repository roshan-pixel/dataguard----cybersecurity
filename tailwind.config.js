/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dg: {
          dark: '#0F1115',
          navy: '#1A1F2B',
          bg: '#F5F7FA',
          white: '#FFFFFF',
          blue: '#2B66FF',
          blueBright: '#3B82F6',
          blueLight: '#4F85FF',
          blueTint: '#EBF1FF',
          steel: '#8CA3C4',
          steelLight: '#A9B8CC',
          border: '#DCE3ED',
          borderDark: '#1E2430',
          muted: '#6B7280',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
        pixel: ['"Silkscreen"', '"Micro 5"', 'monospace'],
      },
      boxShadow: {
        'tech': '0 4px 20px -2px rgba(43, 102, 255, 0.12)',
        'tech-card': '0 10px 30px -5px rgba(15, 17, 21, 0.06)',
        'blue-glow': '0 0 25px rgba(59, 130, 246, 0.4)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(0%)', opacity: '0.4' },
          '50%': { transform: 'translateY(80%)', opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
