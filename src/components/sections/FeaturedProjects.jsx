import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FeaturedProjectCard from '../ui/FeaturedProjectCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { featuredProjects } from '../../utils/constants';

const FeaturedProjects = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  return (
    <section id="projects" ref={ref} className="px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="03" title="Some Things I've Built" />

        <div className="space-y-20">
          {featuredProjects.map((project, index) => {
            const flip = index % 2 !== 0;
            return (
              <div key={index} className={`transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <FeaturedProjectCard project={project} flip={flip} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
