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
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 bg-nb-white relative overflow-x-hidden"
    >
      {/* Diagonal stripe corner accent — desktop only */}
      <div
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none select-none hidden xl:block stripe-bg opacity-20"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}
        aria-hidden="true"
      />

      {/* Giant outlined "NK" watermark — desktop only */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none hidden lg:block leading-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-outline-ghost block"
          style={{ fontSize: 'clamp(7rem, 20vw, 16rem)', lineHeight: 0.85 }}
        >
          NK
        </span>
      </div>

      {/* Floating sticker badges — xl+ only */}
      {/* <div
        className="absolute hidden xl:block pointer-events-none select-none"
        style={{ top: '28%', right: '5.5rem' }}
        aria-hidden="true"
      >
        <div className="-rotate-6 border-2 border-nb-black bg-nb-yellow px-4 py-2 shadow-brutal font-mono text-sm font-bold text-nb-black">
          🟢 Open to Work
        </div>
      </div> */}

      {/* <div
        className="absolute hidden xl:block pointer-events-none select-none"
        style={{ bottom: '30%', right: '7.5rem' }}
        aria-hidden="true"
      >
        <div className="rotate-3 border-2 border-nb-black bg-nb-white px-4 py-2 shadow-brutal-sm font-mono text-sm font-bold text-nb-black">
          2+ yrs XP 💻
        </div>
      </div> */}

      {/* Main content */}
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Greeting tag */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="font-mono text-sm font-medium text-nb-muted border border-nb-gray-mid px-3 py-1 bg-nb-gray">
              Hi!👋, I'm
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display font-black text-nb-black text-clamp-4xl md:text-clamp-5xl leading-[1.05] mb-4">
            Nishad{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Kindre.</span>
              <span
                className="absolute bottom-1 left-0 w-full h-4 bg-nb-yellow -z-0"
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Tagline */}
          <h2 className="font-display font-bold text-nb-muted text-clamp-3xl md:text-clamp-4xl leading-tight mb-8">
            I build things for the web.
          </h2>

          {/* Description */}
          <p className="font-sans text-nb-muted text-lg leading-relaxed mb-12 max-w-2xl border-l-4 border-nb-black pl-5">
            Full-stack developer specializing in building exceptional digital experiences.
            Currently crafting accessible, human-centered products with React, Node.js, and
            cloud services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => scrollToElement('projects')} size="lg">
              Check out my work ↓
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
