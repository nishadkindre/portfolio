import React, { useState, useEffect } from 'react';
import { navLinks } from '../../utils/constants';
import { scrollToElement } from '../../utils/helpers';
import useScrollspy from '../../hooks/useScrollspy';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollspy(['hero', 'about', 'experience', 'projects', 'contact']);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = url => {
    scrollToElement(url.replace('#', ''));
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-leather transition-all duration-200 ${
        isScrolled
          ? 'shadow-sk-nav border-b border-[#4A2010]'
          : 'border-b border-[#4A2010]/60'
      }`}
      style={{
        background: 'linear-gradient(180deg, #3A1A08 0%, #2D1508 60%, #241004 100%)',
      }}
    >
      {/* Top decorative brass rule */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #D4A055 20%, #F0C878 50%, #D4A055 80%, transparent 100%)',
        }}
      />

      <nav className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Logo — embossed letterpress monogram */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); scrollToElement('hero'); }}
          className="group flex items-center gap-2"
          aria-label="Home"
        >
          {/* Brass medallion */}
          <span
            className="w-9 h-9 flex items-center justify-center rounded-full text-xs font-bold font-mono tracking-wider"
            style={{
              background: 'linear-gradient(145deg, #D4A055 0%, #B8823A 40%, #8C5E20 100%)',
              border: '1px solid #7A4E18',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.20), 0 2px 6px rgba(60,30,10,0.40)',
              color: '#FBF7F2',
              textShadow: '0 1px 2px rgba(0,0,0,0.40)',
              transition: 'box-shadow 0.15s ease',
            }}
          >
            NK
          </span>
          <span
            className="font-display font-bold text-lg hidden sm:block"
            style={{
              color: '#E8D0A8',
              textShadow: '0 1px 0 rgba(0,0,0,0.50), 0 -1px 0 rgba(255,255,255,0.05)',
              letterSpacing: '0.02em',
            }}
          >
            Nishad Kindre
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              onClick={e => { e.preventDefault(); handleNavClick(link.url); }}
              className={`nav-link ${activeSection === link.url.replace('#', '') ? 'active' : ''}`}
            >
              <span
                className="font-mono text-[10px] mr-1.5"
                style={{ color: '#B8823A', verticalAlign: '1px' }}
              >
                0{index + 1}.
              </span>
              {link.name}
            </a>
          ))}
          <Button href="/resume.pdf" variant="primary" size="sm" className="ml-1">
            Resume
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-sm"
          style={{
            background: 'linear-gradient(175deg, #4A2010 0%, #3A1508 100%)',
            border: '1px solid #7A4E18',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10), 0 2px 4px rgba(0,0,0,0.30)',
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px w-4 bg-[#D4A055] transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
          <span className={`block h-px w-4 bg-[#D4A055] transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-4 bg-[#D4A055] transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
        </button>
      </nav>

      {/* Bottom decorative rule */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(184,130,58,0.35) 30%, rgba(184,130,58,0.35) 70%, transparent 100%)',
        }}
      />

      {/* Mobile Menu — leather side panel */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-4/5 max-w-xs transform transition-transform duration-280 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(170deg, #3A1A08 0%, #2D1508 100%)',
          borderLeft: '1px solid #7A4E18',
          boxShadow: '-6px 0 32px rgba(0,0,0,0.55)',
        }}
      >
        {/* Top brass rule */}
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent 0%, #D4A055 50%, transparent 100%)' }} />

        {/* Close button */}
        <button
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-sm font-mono font-bold text-base"
          style={{
            background: 'linear-gradient(175deg, #4A2010 0%, #2D1508 100%)',
            border: '1px solid #7A4E18',
            color: '#D4A055',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="flex flex-col items-start justify-center h-full px-10 gap-9">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              onClick={e => { e.preventDefault(); handleNavClick(link.url); }}
              className="nav-link font-mono text-lg font-medium"
            >
              <span className="text-[10px] text-[#B8823A] mr-2">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
          <Button href="/resume.pdf" variant="primary" className="mt-4">
            Resume
          </Button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40"
          style={{ background: 'rgba(20,8,2,0.65)' }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;

