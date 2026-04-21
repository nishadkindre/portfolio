/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nb: {
          white: '#FAFAF5',      // cream background
          black: '#0D0D0D',      // near-black
          yellow: '#FFE500',     // primary accent
          'yellow-hover': '#F0D800',
          red: '#FF3B3B',        // secondary accent
          blue: '#0052FF',       // tertiary accent
          green: '#00C853',
          gray: '#EDEDE5',       // subtle card bg / tag bg
          'gray-mid': '#C8C6BE', // borders for subtle elements
          muted: '#6B6860',      // body text muted
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', '"Courier New"', 'monospace'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'clamp-sm':  'clamp(0.875rem, 1vw, 1rem)',
        'clamp-base':'clamp(1rem, 1.2vw, 1.125rem)',
        'clamp-lg':  'clamp(1.125rem, 1.5vw, 1.25rem)',
        'clamp-xl':  'clamp(1.25rem, 2vw, 1.5rem)',
        'clamp-2xl': 'clamp(1.5rem, 3vw, 2rem)',
        'clamp-3xl': 'clamp(2rem, 4vw, 3rem)',
        'clamp-4xl': 'clamp(2.5rem, 5vw, 4rem)',
        'clamp-5xl': 'clamp(3rem, 8vw, 5.5rem)',
      },
      boxShadow: {
        brutal:    '4px 4px 0px #0D0D0D',
        'brutal-sm': '2px 2px 0px #0D0D0D',
        'brutal-lg': '6px 6px 0px #0D0D0D',
        'brutal-xl': '8px 8px 0px #0D0D0D',
        'brutal-yellow': '4px 4px 0px #FFE500',
        'brutal-red':    '4px 4px 0px #FF3B3B',
      },
      animation: {
        'fade-in':     'fadeIn 0.5s ease-out',
        'slide-up':    'slideUp 0.5s ease-out',
        'ticker':      'ticker 30s linear infinite',
        'ticker-fast': 'ticker 15s linear infinite',
        'ticker-rev':  'ticker 22s linear infinite reverse',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    }
  },
  plugins: []
};
