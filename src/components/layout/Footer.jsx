import React from 'react';
import SocialLinks from '../ui/SocialLinks';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #2D1508 0%, #1E0D04 100%)',
        borderTop: '1px solid #4A2010',
      }}
    >
      {/* Top brass rule */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #D4A055 20%, #F0C878 50%, #D4A055 80%, transparent 100%)',
        }}
      />

      <div className="max-w-5xl mx-auto pt-10 pb-8 px-6">

        {/* Fixed side elements — desktop */}
        <div className="hidden lg:fixed lg:bottom-0 lg:left-10 lg:flex lg:flex-col lg:items-center gap-5">
          <SocialLinks orientation="vertical" />
          <div
            className="w-px h-24"
            style={{ background: 'linear-gradient(180deg, #C8A878 0%, transparent 100%)' }}
          />
        </div>

        <div className="hidden lg:fixed lg:bottom-0 lg:right-10 lg:flex lg:flex-col lg:items-center gap-5">
          <a
            href="mailto:nishadkindre@gmail.com"
            className="font-mono text-xs transition-colors duration-150"
            style={{
              writingMode: 'vertical-rl',
              color: '#C8A878',
              letterSpacing: '0.12em',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#D4A055')}
            onMouseLeave={e => (e.currentTarget.style.color = '#C8A878')}
          >
            nishadkindre@gmail.com
          </a>
          <div
            className="w-px h-24"
            style={{ background: 'linear-gradient(180deg, #C8A878 0%, transparent 100%)' }}
          />
        </div>

        {/* Mobile footer */}
        <div className="lg:hidden text-center mb-8">
          <SocialLinks orientation="horizontal" className="justify-center mb-5" />
          <a
            href="mailto:nishadkindre@gmail.com"
            className="font-mono text-xs block transition-colors duration-150"
            style={{ color: '#C8A878', letterSpacing: '0.06em' }}
          >
            nishadkindre@gmail.com
          </a>
        </div>

        {/* Brass divider */}
        <div className="divider-brass mb-6" />

        {/* Footer credit */}
        <div className="text-center">
          <p className="font-mono text-xs" style={{ color: '#7A5840' }}>
            Designed & built with care by{' '}
            <a
              href="https://github.com/nishadkindre"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors duration-150"
              style={{ color: '#C8A878' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#D4A055')}
              onMouseLeave={e => (e.currentTarget.style.color = '#C8A878')}
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
