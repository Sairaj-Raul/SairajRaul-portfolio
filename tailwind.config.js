/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060809',
          900: '#0a0d0f',
          850: '#0e1214',
          800: '#12181b',
          750: '#161e22',
          700: '#1d272c',
          border: '#1f2b31',
          'border-light': '#2a3a42',
        },
        neon: {
          DEFAULT: '#10f576',
          400: '#34f78e',
          500: '#10f576',
          600: '#05d962',
          glow: 'rgba(16, 245, 118, 0.15)',
        },
        emerald: {
          accent: '#059669',
          glow: 'rgba(5, 150, 105, 0.15)',
        },
        muted: {
          DEFAULT: '#94a3b8',
          dark: '#64748b',
          light: '#cbd5e1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'neon-sm': '0 0 15px -3px rgba(16, 245, 118, 0.2)',
        'neon': '0 0 25px -4px rgba(16, 245, 118, 0.25)',
        'neon-lg': '0 0 45px -5px rgba(16, 245, 118, 0.35)',
        'dark-card': '0 8px 30px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
};
