import React, { useState } from 'react';
import OtherProjectCard from '../ui/OtherProjectCard';
import Button from '../ui/Button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { otherProjects } from '../../utils/constants';

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const [ref, , hasIntersected] = useIntersectionObserver();
  const displayedProjects = showMore ? otherProjects : otherProjects.slice(0, 6);

  return (
    <section ref={ref} className="py-24 px-6 lg:px-20 bg-nb-gray">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2
            className={`font-display font-black text-nb-black text-3xl md:text-4xl mb-3 transition-all duration-700 ${
              hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Other Noteworthy Projects
          </h2>
          <a
            href="https://github.com/nishadkindre"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono text-sm text-nb-muted underline underline-offset-2 hover:text-nb-black transition-all duration-700 delay-100 ${
              hasIntersected ? 'opacity-100' : 'opacity-0'
            }`}
          >
            view the archive ↗
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <OtherProjectCard project={project} />
            </div>
          ))}
        </div>

        {otherProjects.length > 6 && (
          <div
            className={`text-center mt-12 transition-all duration-700 ${
              hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <Button onClick={() => setShowMore(!showMore)} variant="outline">
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OtherProjects;
