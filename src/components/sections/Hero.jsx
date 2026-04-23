import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { scrollToElement } from '../../utils/helpers';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(160deg, #F8F2E6 0%, #F4EFE6 40%, #EDE4D4 100%)',
      }}
    >
      {/* Paper grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Decorative corner — aged paper fold */}
      <div
        className="absolute top-0 right-0 w-0 h-0 hidden xl:block"
        style={{
          borderStyle: 'solid',
          borderWidth: '0 120px 120px 0',
          borderColor: 'transparent #EAD8C0 transparent transparent',
          filter: 'drop-shadow(-3px 3px 6px rgba(60,30,10,0.12))',
        }}
        aria-hidden="true"
      />

      {/* Ghost monogram watermark */}
      <div
        className="absolute bottom-4 right-0 pointer-events-none select-none hidden lg:block leading-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black block text-outline-ghost"
          style={{ fontSize: 'clamp(6rem, 18vw, 14rem)', lineHeight: 0.88, opacity: 0.5 }}
        >
          NK
        </span>
      </div>

      {/* Horizontal ruling lines — writing paper feel */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(184,130,58,0.07) 47px, rgba(184,130,58,0.07) 48px)',
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Greeting tag — wax-stamped label */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span
              className="font-mono text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-sm"
              style={{
                color: '#7A5840',
                background: 'linear-gradient(135deg, #F0DDB8 0%, #E4CDA0 100%)',
                border: '1px solid #C8A878',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55), 0 1px 3px rgba(60,30,10,0.14)',
              }}
            >
              Hi 👋, I'm
            </span>
          </div>

          {/* Name — engraved display type */}
          <h1
            className="font-display font-black leading-[1.04] mb-4"
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              color: '#1E140A',
              textShadow: '0 2px 0 rgba(255,255,255,0.50), 0 -1px 0 rgba(0,0,0,0.04)',
              letterSpacing: '-0.01em',
            }}
          >
            Nishad{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Kindre.</span>
              {/* Brass underline accent */}
              <span
                className="absolute bottom-1 left-0 w-full rounded-sm"
                style={{
                  height: '10px',
                  background: 'linear-gradient(90deg, #D4A055 0%, #B8823A 100%)',
                  zIndex: 0,
                  opacity: 0.55,
                  boxShadow: '0 1px 0 rgba(255,255,255,0.40)',
                }}
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Tagline */}
          <h2
            className="font-display font-semibold leading-tight mb-8"
            style={{
              fontSize: 'clamp(1.6rem, 4vw, 3rem)',
              color: '#7A5840',
              fontStyle: 'italic',
            }}
          >
            I build things for the web.
          </h2>

          {/* Description — elegant serif paragraph */}
          <p
            className="font-sans text-lg leading-relaxed mb-12 max-w-2xl pl-5"
            style={{
              color: '#5A3E2A',
              borderLeft: '3px solid',
              borderImage: 'linear-gradient(180deg, #D4A055 0%, #B8823A 100%) 1',
            }}
          >
            Full-stack developer specialising in building exceptional digital experiences.
            Currently crafting accessible, human-centred products with React, Node.js, and
            cloud services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollToElement('projects')} size="lg">
              View My Work ↓
            </Button>
            <Button href="mailto:nishadkindre@gmail.com" variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
