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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = url => {
    const sectionId = url.replace('#', '');
    scrollToElement(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900 bg-opacity-90 backdrop-blur-md shadow-lg border-b border-dark-700' : 'bg-transparent'}`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={e => {
              e.preventDefault();
              scrollToElement('hero');
            }}
            className="text-primary-400 font-mono text-xl font-bold hover:text-primary-300 transition-colors duration-200"
          >
            {'<NK />'}
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              onClick={e => {
                e.preventDefault();
                handleNavClick(link.url);
              }}
              className={`nav-link font-mono text-sm ${activeSection === link.url.replace('#', '') ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-primary-400 text-xs">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <Button href="/resume.pdf" variant="outline" size="sm" className="ml-4">
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden relative w-6 h-6 flex flex-col justify-center items-center" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <span className={`block h-0.5 w-6 bg-primary-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`} />
          <span className={`block h-0.5 w-6 bg-primary-400 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block h-0.5 w-6 bg-primary-400 transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-3/4 bg-dark-800 border-l border-dark-700 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              onClick={e => {
                e.preventDefault();
                handleNavClick(link.url);
              }}
              className="nav-link font-mono text-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-primary-400 text-sm">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <Button href="/resume.pdf" variant="outline" className="mt-8">
            Resume
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Header;
