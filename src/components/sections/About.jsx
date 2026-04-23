import React from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { skills } from '../../utils/constants';

const About = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-6 lg:px-20 bg-parchment"
      style={{
        background: 'linear-gradient(160deg, #EDE4D4 0%, #E8DDD0 60%, #E0D4C4 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="01" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Bio Text */}
          <div className="lg:col-span-2">
            <div
              className={`space-y-5 text-lg leading-relaxed transition-all duration-700 ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ color: '#4A2C1A' }}
            >
              <p>
                Hello! I'm Nishad Kindre, and I enjoy creating things that live on the internet.
                I started my development journey in 2023 and haven't looked back since.
                There's something addictive about solving problems with code and seeing users
                interact with what you've built.
              </p>
              <p>
                Fast-forward to today, I've had the privilege of working at a{' '}
                <a
                  href="https://medtigo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold transition-all"
                  style={{ color: '#8C5E20', textDecoration: 'underline', textDecorationColor: '#C8A878', textUnderlineOffset: '3px' }}
                >
                  US based company
                </a>{' '}
                since 2024. My focus is building accessible, inclusive products for
                end users & developers.
              </p>
              <p className="font-semibold" style={{ color: '#1E140A' }}>Technologies I work with:</p>
            </div>

            {/* Skills — stamped label chips */}
            <div
              className={`mt-6 transition-all duration-700 delay-200 ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <ul className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <li key={skill} className="tag-brutal">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile Photo — classic photo-paper frame */}
          <div
            className={`lg:col-span-1 transition-all duration-700 delay-300 ${
              hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="relative inline-block group">
              {/* Main photo with photo-frame effect */}
              <div
                className="w-64 h-64 overflow-hidden relative photo-frame"
                style={{ borderRadius: '2px' }}
              >
                <img
                  src="./nishad.png"
                  alt="Nishad Kindre"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Glossy overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.12) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Offset backing — aged card stock */}
              <div
                className="absolute rounded-sm"
                style={{
                  top: '12px',
                  left: '12px',
                  width: '256px',
                  height: '256px',
                  background: 'linear-gradient(135deg, #C8A878 0%, #A07848 100%)',
                  border: '1px solid #8C6030',
                  zIndex: -1,
                  transition: 'top 0.2s ease, left 0.2s ease',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
