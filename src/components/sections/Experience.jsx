import React, { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { workExperience } from '../../utils/constants';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, , hasIntersected] = useIntersectionObserver();

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-6 lg:px-20"
      style={{
        background: 'linear-gradient(160deg, #F8F2E6 0%, #F2EAD8 60%, #EAE0CC 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading number="02" title="Where I've Worked" />

        <div
          className={`transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Ledger / Registry Card container */}
          <div
            className="flex flex-col md:flex-row rounded-sm overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, #FFFDF8 0%, #F8F2E8 100%)',
              border: '1px solid #C8A878',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.75), 0 8px 28px rgba(60,30,10,0.15), 0 2px 6px rgba(60,30,10,0.10)',
            }}
          >
            {/* Tab List — leather spine */}
            <div
              className="flex md:flex-col overflow-x-auto md:overflow-visible shrink-0"
              style={{
                background: 'linear-gradient(180deg, #3A1A08 0%, #2D1508 100%)',
                borderRight: '1px solid #4A2010',
                borderBottom: 'none',
                minWidth: '160px',
              }}
            >
              {/* Spine top decorative rule */}
              <div
                className="hidden md:block h-px w-full"
                style={{ background: 'linear-gradient(90deg, transparent 0%, #D4A055 50%, transparent 100%)' }}
              />

              {workExperience.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className="px-5 py-4 text-left font-mono text-sm font-medium whitespace-nowrap transition-all duration-150"
                  style={{
                    background: activeTab === index
                      ? 'linear-gradient(90deg, #C8923A 0%, #B8823A 100%)'
                      : 'transparent',
                    color: activeTab === index ? '#FBF7F2' : '#C8A878',
                    borderBottom: index < workExperience.length - 1 ? '1px solid rgba(74,32,16,0.60)' : 'none',
                    textShadow: activeTab === index ? '0 1px 2px rgba(0,0,0,0.35)' : 'none',
                    boxShadow: activeTab === index
                      ? 'inset 0 1px 0 rgba(255,255,255,0.18), inset 3px 0 0 #F0C878'
                      : 'none',
                    letterSpacing: '0.04em',
                  }}
                >
                  {job.company}
                </button>
              ))}
            </div>

            {/* Tab Content — parchment panel */}
            <div className="flex-1 p-8 md:p-10">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  style={{ display: activeTab === index ? 'block' : 'none' }}
                >
                  <h3
                    className="font-display font-bold text-xl mb-1"
                    style={{ color: '#1E140A' }}
                  >
                    {job.title}{' '}
                    <span
                      className="font-semibold not-italic"
                      style={{ color: '#7A5840' }}
                    >
                      @{' '}
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all"
                        style={{ color: '#8C5E20', textDecoration: 'underline', textDecorationColor: '#C8A878', textUnderlineOffset: '3px' }}
                      >
                        {job.company}
                      </a>
                    </span>
                  </h3>

                  <p
                    className="font-mono text-xs mb-7 tracking-widest uppercase"
                    style={{ color: '#B8823A' }}
                  >
                    {job.range}
                  </p>

                  {/* Divider */}
                  <div className="divider-brass mb-6" />

                  <ul className="space-y-4">
                    {job.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                        style={{ color: '#4A2C1A' }}
                      >
                        {/* Brass bullet ornament */}
                        <span
                          className="shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center rounded-sm font-mono text-xs font-bold"
                          style={{
                            background: 'linear-gradient(135deg, #D4A055 0%, #B8823A 100%)',
                            border: '1px solid #8C6028',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                            color: '#FBF7F2',
                            textShadow: '0 1px 1px rgba(0,0,0,0.30)',
                          }}
                        >
                          ▸
                        </span>
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
