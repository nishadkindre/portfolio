import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { scrollToElement } from '../../utils/helpers';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleCTAClick = () => {
    scrollToElement('projects');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Greeting */}
          <h1 className="font-mono text-primary-400 text-base md:text-lg mb-5" style={{ animationDelay: '0.1s' }}>
            Hi, my name is
          </h1>

          {/* Name */}
          <h2 className="text-text-100 font-bold text-clamp-4xl md:text-clamp-5xl leading-tight mb-2" style={{ animationDelay: '0.2s' }}>
            Nishad Kindre.
          </h2>

          {/* Tagline */}
          <h3 className="text-text-300 font-bold text-clamp-3xl md:text-clamp-4xl leading-tight mb-8" style={{ animationDelay: '0.3s' }}>
            I build things for the web.
          </h3>

          {/* Description */}
          <div className="max-w-2xl" style={{ animationDelay: '0.4s' }}>
            <p className="text-text-400 text-lg leading-relaxed mb-12">
              I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products using modern web technologies
              like React, Node.js, and cloud services.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.5s' }}>
            <Button onClick={handleCTAClick} size="lg" className="text-base px-8 py-4">
              Check out my work!
            </Button>
            <Button href="mailto:nishadkindre@gmail.com" variant="outline" size="lg" className="text-base px-8 py-4">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="flex justify-center mt-6">
          <div className="w-6 h-10 border-2 border-text-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
