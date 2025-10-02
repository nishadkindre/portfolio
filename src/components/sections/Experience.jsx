import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { workExperience } from '../../utils/constants';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();

  return (
    <section id="experience" ref={ref} className="py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeading number="02" title="Where I've Worked" />

        <div className={`transition-all duration-1000 ${hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible mb-8 md:mb-0 md:mr-12">
              <div className="flex md:flex-col min-w-max md:min-w-0">
                {workExperience.map((job, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-4 text-left font-mono text-sm whitespace-nowrap md:whitespace-normal border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 ${
                      activeTab === index
                        ? 'text-primary-400 border-primary-400 bg-primary-500 bg-opacity-10'
                        : 'text-text-400 border-dark-700 hover:text-primary-400 hover:border-primary-400 hover:bg-primary-500 hover:bg-opacity-5'
                    }`}
                  >
                    {job.company}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 min-h-[400px]">
              {workExperience.map((job, index) => (
                <div key={index} className={`transition-all duration-300 ${activeTab === index ? 'opacity-100' : 'opacity-0 absolute'}`} style={{ display: activeTab === index ? 'block' : 'none' }}>
                  <h3 className="text-xl font-semibold text-text-100 mb-2">
                    {job.title}{' '}
                    <span className="text-primary-400">
                      @{' '}
                      <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {job.company}
                      </a>
                    </span>
                  </h3>

                  <p className="font-mono text-sm text-text-400 mb-6">{job.range}</p>

                  <ul className="space-y-4">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-text-400 leading-relaxed">
                        <span className="text-primary-400 mr-4 mt-2 text-sm">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
