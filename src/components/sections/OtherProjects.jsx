import React, { useState } from 'react';
import OtherProjectCard from '../ui/OtherProjectCard';
import Button from '../ui/Button';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { otherProjects } from '../../utils/constants';

const OtherProjects = () => {
  const [showMore, setShowMore] = useState(false);
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  const displayedProjects = showMore ? otherProjects : otherProjects.slice(0, 6);

  return (
    <section ref={ref} className="py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-3xl font-semibold text-text-100 mb-4 transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Other Noteworthy Projects
          </h2>
          <p className={`text-primary-400 font-mono text-sm transition-all duration-1000 delay-200 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="https://github.com/nishadkindre" target="_blank" rel="noopener noreferrer" className="hover:underline">
              view the archive
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <div key={index} className={`transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <OtherProjectCard project={project} />
            </div>
          ))}
        </div>

        {otherProjects.length > 6 && (
          <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
