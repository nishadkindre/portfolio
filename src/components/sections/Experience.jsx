import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { workExperience } from '../../utils/constants';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section id="experience" ref={ref} className="py-24 px-6 lg:px-20 bg-nb-gray">
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="02" title="Where I've Worked" />

        <div
          className={`transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row border-2 border-nb-black shadow-brutal-lg bg-white">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-r-2 border-nb-black shrink-0">
              {workExperience.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-4 text-left font-mono text-sm font-medium whitespace-nowrap transition-all duration-150 border-r-0 md:border-r-0 ${
                    activeTab === index
                      ? 'bg-nb-yellow text-nb-black border-b-2 md:border-b-0 border-nb-black'
                      : 'text-nb-muted hover:bg-nb-gray hover:text-nb-black'
                  }`}
                >
                  {job.company}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-8 md:p-10">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  style={{ display: activeTab === index ? 'block' : 'none' }}
                >
                  <h3 className="font-display font-bold text-xl text-nb-black mb-1">
                    {job.title}{' '}
                    <span className="text-nb-muted font-medium">
                      @{' '}
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-nb-black underline underline-offset-2 decoration-nb-yellow hover:decoration-2 transition-all"
                      >
                        {job.company}
                      </a>
                    </span>
                  </h3>

                  <p className="font-mono text-xs text-nb-muted mb-7 tracking-wide uppercase">
                    {job.range}
                  </p>

                  <ul className="space-y-3">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-nb-muted text-sm leading-relaxed">
                        <span className="shrink-0 mt-1 w-4 h-4 border border-nb-black bg-nb-yellow flex items-center justify-center text-xs font-bold">
                          →
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Task Archive link — only for medtigo entries */}
                  {job.company.toLowerCase() === 'medtigo' && (
                    <div className="mt-7 pt-5 border-t-2 border-nb-gray flex flex-wrap items-center gap-4">
                      <a
                        href="/medtigo/tasks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-brutal text-xs inline-flex items-center gap-2"
                      >
                        Task Archive ↗
                      </a>
                      <span className="font-mono text-xs text-nb-muted">
                        Full log of features &amp; improvements shipped
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
