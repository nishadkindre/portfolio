import React from 'react';
import SectionHeading from '../common/SectionHeading';
import FeaturedProjectCard from '../ui/FeaturedProjectCard';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { featuredProjects } from '../../utils/constants';

const FeaturedProjects = () => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-6 lg:px-20"
      style={{ background: 'linear-gradient(160deg, #F8F2E6 0%, #F4EFE6 60%, #EDE4D4 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="03" title="Some Things I've Built" />

        <div className="space-y-10">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <FeaturedProjectCard project={project} flip={index % 2 !== 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
