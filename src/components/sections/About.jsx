import React from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { skills } from '../../utils/constants';

const About = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  return (
    <section id="about" ref={ref} className="py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="01" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Bio Text */}
          <div className="lg:col-span-2">
            <div className={`space-y-6 text-text-400 text-lg leading-relaxed transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p>
                Hello! I'm Nishad Kindre, and I enjoy creating things that live on the internet. I started my development journey in 2023 and haven't looked back since. There's something addictive
                about solving problems with code and seeing users interact with what you've built.
              </p>

              <p>
                Fast-forward to today, and I've had the privilege of working at{' '}
                <a href="https://medtigo.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">
                  a health-tech start-up
                </a>
                {' '}
                since 2024. My main focus these days is building accessible, inclusive products for developers and end users.
              </p>

              <p>Here are a few technologies I've been working with recently:</p>
            </div>

            {/* Skills Grid */}
            <div className={`mt-8 transition-all duration-1000 delay-200 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <ul className="grid grid-cols-2 gap-2 text-sm font-mono">
                {skills.map((skill, index) => (
                  <li key={skill} className="flex items-center text-text-400" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="text-primary-400 mr-3">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-400 ${hasIntersected ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative group max-w-xs mx-auto lg:mx-0">
              {/* Image Container */}
              <div className="relative">
                {/* Placeholder for profile image */}
                <div className="w-64 h-64 bg-dark-700 rounded-sm flex items-center justify-center shadow-2xl overflow-hidden">
                  <img src="./nishad.png" alt="Nishad Kindre" className="w-full h-full object-cover rounded-sm transition-transform duration-700 group-hover:scale-105" />
                  {/* Overlay - matches image size exactly */}
                  {/* <div className="absolute top-0 left-0 w-full h-full bg-primary-500 bg-opacity-20 rounded-sm pointer-events-none transition-opacity duration-500 group-hover:bg-opacity-0"></div> */}
                </div>
                {/* <div className='absolute top-0 left-0 w-64 h-64 bg-dark-700 bg-opacity-20 rounded-sm flex items-center justify-center shadow-2xl overflow-hidden group-hover:bg-opacity-0' /> */}
              </div>
              {/* Border Animation */}
              <div className="absolute top-2 left-2 w-64 h-64 border-2 border-primary-400 rounded-sm -z-10 transition-all duration-300 group-hover:top-4 group-hover:left-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
