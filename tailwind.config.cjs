/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0a0f', // Deep space black
          900: '#101211', // Primary dark background
          800: '#1a1a2e', // Secondary dark background
          700: '#16213e', // Tertiary dark background
          600: '#1f2937' // Card backgrounds
        },
        primary: {
          500: '#6366f1', // Modern indigo primary
          400: '#818cf8', // Lighter primary
          300: '#a5b4fc', // Even lighter primary
          200: '#c7d2fe' // Very light primary
        },
        accent: {
          500: '#f59e0b', // Vibrant amber accent
          400: '#fbbf24', // Lighter amber
          300: '#fcd34d', // Even lighter amber
          200: '#fde68a' // Very light amber
        },
        text: {
          100: '#f8fafc', // Primary text (white)
          200: '#e2e8f0', // Secondary text (light gray)
          300: '#cbd5e1', // Tertiary text (medium gray)
          400: '#94a3b8', // Muted text (dark gray)
          500: '#64748b' // Very muted text
        },
        success: '#10b981', // Modern green
        warning: '#f59e0b', // Amber warning
        error: '#ef4444' // Modern red
      },
      fontFamily: {
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', 'monospace'],
        sans: ['Calibre', 'Inter', 'San Francisco', 'SF Pro Text', '-apple-system', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'clamp-sm': 'clamp(0.875rem, 1vw, 1rem)',
        'clamp-base': 'clamp(1rem, 1.2vw, 1.125rem)',
        'clamp-lg': 'clamp(1.125rem, 1.5vw, 1.25rem)',
        'clamp-xl': 'clamp(1.25rem, 2vw, 1.5rem)',
        'clamp-2xl': 'clamp(1.5rem, 3vw, 2rem)',
        'clamp-3xl': 'clamp(2rem, 4vw, 3rem)',
        'clamp-4xl': 'clamp(2.5rem, 5vw, 4rem)',
        'clamp-5xl': 'clamp(3rem, 8vw, 5rem)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-accent': '0 0 20px rgba(245, 158, 11, 0.3)',
        'xl-primary': '0 10px 30px -15px rgba(99, 102, 241, 0.4)',
        'xl-accent': '0 10px 30px -15px rgba(245, 158, 11, 0.4)'
      }
    }
  },
  plugins: []
};
