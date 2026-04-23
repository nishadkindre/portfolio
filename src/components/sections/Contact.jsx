import React from 'react';
import Button from '../ui/Button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const Contact = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 lg:px-20"
      style={{
        background: 'linear-gradient(160deg, #EDE4D4 0%, #E8DDD0 60%, #E0D4C4 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Wax-sealed invitation card */}
          <div
            className="relative rounded-sm p-10 md:p-16 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, #FFFDF8 0%, #F8F2E4 50%, #F0E8D4 100%)',
              border: '1px solid #C8A878',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.80), 0 12px 40px rgba(60,30,10,0.18), 0 4px 12px rgba(60,30,10,0.12)',
            }}
          >
            {/* Corner ornaments */}
            <span
              className="absolute top-4 left-4 font-mono text-xl select-none pointer-events-none"
              style={{ color: '#C8A878', opacity: 0.55 }}
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="absolute top-4 right-4 font-mono text-xl select-none pointer-events-none"
              style={{ color: '#C8A878', opacity: 0.55 }}
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="absolute bottom-4 left-4 font-mono text-xl select-none pointer-events-none"
              style={{ color: '#C8A878', opacity: 0.55 }}
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="absolute bottom-4 right-4 font-mono text-xl select-none pointer-events-none"
              style={{ color: '#C8A878', opacity: 0.55 }}
              aria-hidden="true"
            >
              ✦
            </span>

            {/* Brass rule top */}
            <div className="divider-brass mb-8" />

            <p
              className="font-mono text-xs font-medium tracking-[0.25em] uppercase mb-4"
              style={{ color: '#B8823A' }}
            >
              04 · What's Next?
            </p>

            <h2
              className="font-display font-black leading-tight mb-6"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                color: '#1E140A',
                textShadow: '0 2px 0 rgba(255,255,255,0.55), 0 -1px 0 rgba(0,0,0,0.04)',
              }}
            >
              Get In Touch
            </h2>

            <p
              className="text-lg leading-relaxed mb-10 max-w-xl mx-auto"
              style={{ color: '#5A3E2A' }}
            >
              My inbox is always open. Whether you have a question, an opportunity, or just want
              to say hi — I'll try my best to get back to you!
            </p>

            <Button href="mailto:nishadkindre@gmail.com" variant="primary" size="lg">
              Say Hello ✉
            </Button>

            {/* Brass rule bottom */}
            <div className="divider-brass mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
