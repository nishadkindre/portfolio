/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nb: {
          // ── Parchment surfaces ──────────────────────
          white: '#F4EFE6',          // parchment page background
          black: '#1E140A',          // warm near-black ink
          // ── Brass accent (replaces yellow) ──────────
          yellow: '#B8823A',         // brass amber — primary accent
          'yellow-hover': '#D4A055', // lighter brass — hover state
          // ── Supporting tones ────────────────────────
          red: '#8C3020',            // deep burgundy
          blue: '#3A5C8C',           // steel blue
          green: '#4A7A55',          // sage green
          gray: '#EAE0D2',           // warm cream-gray — alt section bg
          'gray-mid': '#C8B09A',     // warm tan — borders
          muted: '#7A5840',          // warm brown — muted text
          // ── Leather (header / footer) ────────────────
          leather: '#2D1508',
          'leather-mid': '#4A2010',
          'leather-light': '#7A3A18',
          // ── Extra palettes ───────────────────────────
          'brass-pale': '#F0DDB8',   // pale brass tint — tag bg
          cream: '#FBF7F2',          // lightest surface — cards
        }
      },
      fontFamily: {
        // Elegant serif trio for skeuomorphism
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['"Lora"',            'Georgia', 'serif'],
        mono:    ['"IBM Plex Mono"',   '"Courier New"', 'monospace'],
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
        // ── Soft warm multi-layer shadows ─────────────
        brutal:      '0 4px 16px rgba(60,30,10,0.16), 0 2px 6px rgba(60,30,10,0.10), inset 0 1px 0 rgba(255,255,255,0.35)',
        'brutal-sm': '0 2px 8px rgba(60,30,10,0.12), 0 1px 3px rgba(60,30,10,0.08)',
        'brutal-lg': '0 8px 28px rgba(60,30,10,0.18), 0 3px 10px rgba(60,30,10,0.11), inset 0 1px 0 rgba(255,255,255,0.30)',
        'brutal-xl': '0 16px 48px rgba(60,30,10,0.22), 0 6px 18px rgba(60,30,10,0.13)',
        'brutal-yellow': '0 4px 16px rgba(184,130,58,0.40)',
        'brutal-red':    '0 4px 16px rgba(140,48,32,0.35)',
        // ── Speciality shadows ─────────────────────────
        'sk-inset':      'inset 0 2px 6px rgba(60,30,10,0.12), inset 0 1px 2px rgba(60,30,10,0.08)',
        'sk-btn-pressed':'inset 0 3px 7px rgba(60,30,10,0.28), inset 0 1px 3px rgba(60,30,10,0.18)',
        'sk-nav':        '0 3px 14px rgba(20,8,2,0.45), inset 0 1px 0 rgba(255,255,255,0.05)',
        'sk-photo':      '0 0 0 8px #F0E4CC, 0 0 0 10px #C8A878, 6px 10px 30px rgba(60,30,10,0.35)',
        'sk-tag':        'inset 0 1px 0 rgba(255,255,255,0.55), 0 1px 2px rgba(60,30,10,0.10)',
      },
      animation: {
        'fade-in':     'fadeIn 0.5s ease-out',
        'slide-up':    'slideUp 0.5s ease-out',
        'ticker':      'ticker 30s linear infinite',
        'ticker-fast': 'ticker 15s linear infinite',
        'ticker-rev':  'ticker 22s linear infinite reverse',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        ticker:  { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
    }
  },
  plugins: []
};
