import React from 'react';
import SocialLinks from '../ui/SocialLinks';

const Footer = () => {
  return (
    <footer className="pt-10 pb-4 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Social Links - Hidden on mobile, shown as side element on desktop */}
        <div className="hidden lg:fixed lg:bottom-0 lg:left-10 lg:flex lg:flex-col lg:items-center">
          <SocialLinks orientation="vertical" />
          <div className="w-px h-24 bg-text-400 mt-4"></div>
        </div>

        {/* Email - Hidden on mobile, shown as side element on desktop */}
        <div className="hidden lg:fixed lg:bottom-0 lg:right-10 lg:flex lg:flex-col lg:items-center">
          <a
            href="mailto:nishadkindre@gmail.com"
            className="font-mono text-sm text-text-300 hover:text-primary-400 transition-colors duration-200 vertical-text"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            nishadkindre@gmail.com
          </a>
          <div className="w-px h-24 bg-text-400 mt-4"></div>
        </div>

        {/* Mobile Footer Content */}
        <div className="lg:hidden text-center">
          <SocialLinks orientation="horizontal" className="justify-center mb-6" />
          <a href="mailto:nishadkindre@gmail.com" className="font-mono text-sm text-text-300 hover:text-primary-400 transition-colors duration-200 block mb-6">
            nishadkindre@gmail.com
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center text-text-400 font-mono text-xs">
          <p className="mb-2">
            Built by{' '}
            <a href="https://github.com/nishadkindre" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
              Nishad Kindre
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
