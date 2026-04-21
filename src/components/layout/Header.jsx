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
      className={`fixed top-0 left-0 right-0 z-50 bg-nb-white transition-all duration-200 ${
        isScrolled ? 'border-b-2 border-nb-black' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); scrollToElement('hero'); }}
          className="font-mono text-xl font-bold text-nb-black hover:text-nb-black transition-colors duration-150 group"
        >
          <span className="bg-nb-yellow px-1 group-hover:bg-nb-yellow-hover transition-colors duration-150">&lt;NK /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              onClick={e => { e.preventDefault(); handleNavClick(link.url); }}
              className={`nav-link ${activeSection === link.url.replace('#', '') ? 'active' : ''}`}
            >
              <span className="font-mono text-xs text-nb-muted mr-1">0{index + 1}.</span>
              {link.name}
            </a>
          ))}
          <Button href="/resume.pdf" variant="primary" size="sm" className="ml-2">
            Resume
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 border-2 border-nb-black bg-nb-gray hover:bg-nb-yellow transition-colors duration-150"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-4 bg-nb-black transition-all duration-200 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-4 bg-nb-black transition-all duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-0.5 w-4 bg-nb-black transition-all duration-200 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-nb-white border-l-2 border-nb-black transform transition-transform duration-250 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 w-8 h-8 border-2 border-nb-black flex items-center justify-center bg-nb-gray hover:bg-nb-yellow transition-colors duration-150"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="font-mono text-sm font-bold">×</span>
        </button>

        <div className="flex flex-col items-start justify-center h-full px-10 gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              onClick={e => { e.preventDefault(); handleNavClick(link.url); }}
              className="nav-link font-mono text-lg font-medium"
            >
              <span className="text-xs text-nb-muted mr-2">0{index + 1}.</span>
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
          className="md:hidden fixed inset-0 bg-nb-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;

