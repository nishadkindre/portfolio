import React from 'react';
import SocialLinks from '../ui/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-nb-white border-t-2 border-nb-black pt-8 pb-6 px-6">
      {/* Full-bleed outlined name */}
      {/* <div className="border-b-2 border-nb-black px-4 pt-8 pb-3 overflow-hidden">
        <h2
          className="font-display font-black uppercase leading-none tracking-tight text-outline-name"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 9rem)' }}
        >
          NISHAD KINDRE
        </h2>
      </div> */}

      <div className="max-w-5xl mx-auto">
        {/* Side elements for desktop */}
        <div className="hidden lg:fixed lg:bottom-0 lg:left-10 lg:flex lg:flex-col lg:items-center gap-4">
          <SocialLinks orientation="vertical" />
          <div className="w-0.5 h-24 bg-nb-black" />
        </div>

        <div className="hidden lg:fixed lg:bottom-0 lg:right-10 lg:flex lg:flex-col lg:items-center gap-4">
          <a
            href="mailto:nishadkindre@gmail.com"
            className="font-mono text-xs text-nb-muted hover:text-nb-black transition-colors duration-150"
            style={{ writingMode: 'vertical-rl' }}
          >
            nishadkindre@gmail.com
          </a>
          <div className="w-0.5 h-24 bg-nb-black" />
        </div>

        {/* Mobile footer */}
        <div className="lg:hidden text-center mb-6">
          <SocialLinks orientation="horizontal" className="justify-center mb-4" />
          <a href="mailto:nishadkindre@gmail.com" className="font-mono text-xs text-nb-muted hover:text-nb-black transition-colors duration-150 block">
            nishadkindre@gmail.com
          </a>
        </div>

        {/* Footer credit */}
        <div className="text-center">
          <p className="font-mono text-xs text-nb-muted">
            Built with ♥ by{' '}
            <a
              href="https://github.com/nishadkindre"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nb-black font-semibold underline underline-offset-2 decoration-nb-yellow hover:decoration-2 transition-all"
            >
              Nishad Kindre
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
