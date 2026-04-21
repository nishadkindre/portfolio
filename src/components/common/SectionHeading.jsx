import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const SectionHeading = ({ number, title, className = '' }) => {
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`section-heading transition-all duration-700 ${
        hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {number && (
        <span className="section-heading-num shrink-0">{number}.</span>
      )}
      <span className="section-heading-title shrink-0">{title}</span>
      <span className="section-heading-line" />
    </div>
  );
};

export default SectionHeading;
