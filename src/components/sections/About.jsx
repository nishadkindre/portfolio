import React from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { skills } from '../../utils/constants';

const About = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="py-24 px-6 lg:px-20 bg-nb-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="01" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Bio Text */}
          <div className="lg:col-span-2">
            <div
              className={`space-y-5 text-nb-muted text-lg leading-relaxed transition-all duration-700 ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <p>
                Hello! I'm Nishad Kindre, and I enjoy creating things that live on the internet.
                I started my development journey in 2023 and haven't looked back since.
                There's something addictive about solving problems with code and seeing users
                interact with what you've built.
              </p>
              <p>
                Fast-forward to today, I've had the privilege of working at a {' '}
                <a
                  href="https://medtigo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-nb-black underline underline-offset-2 decoration-nb-yellow hover:decoration-2 transition-all"
                >
                  US based company
                </a>{' '}
                since 2024. My focus is building accessible, inclusive products for
                end users & developers.
              </p>
              <p className="font-medium text-nb-black">Technologies I work with:</p>
            </div>

            {/* Skills */}
            <div
              className={`mt-6 transition-all duration-700 delay-200 ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <ul className="flex flex-wrap gap-2 font-mono text-sm">
                {skills.map(skill => (
                  <li key={skill} className="tag-brutal">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`lg:col-span-1 transition-all duration-700 delay-300 ${
              hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="relative inline-block group">
              <div className="w-64 h-64 border-2 border-nb-black overflow-hidden bg-nb-gray">
                <img
                  src="./nishad.png"
                  alt="Nishad Kindre"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* hard offset shadow block */}
              <div className="absolute top-3 left-3 w-64 h-64 border-2 border-nb-black bg-nb-yellow -z-10 transition-all duration-200 group-hover:top-4 group-hover:left-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
