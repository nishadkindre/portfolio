import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const SectionHeading = ({ number, title, className = '' }) => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  return (
    <h2 ref={ref} className={`section-heading ${hasIntersected ? 'animate-slide-up' : 'opacity-0'} ${className}`}>
      <span className="text-primary-400 font-mono text-base font-normal mr-2">{number && `${number}.`}</span>
      {title}
    </h2>
  );
};

export default SectionHeading;
