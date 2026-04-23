import React from 'react';

const SEGMENT = 'FULL STACK DEV  ✦  REACT  ✦  NODE.JS  ✦  TYPESCRIPT  ✦  OPEN TO WORK  ✦  ';

const MarqueeTicker = () => {
  const content = SEGMENT.repeat(4);

  return (
    <div
      className="ticker-ribbon overflow-hidden select-none py-3"
      aria-hidden="true"
    >
      <div className="flex w-max animate-ticker whitespace-nowrap">
        <span
          className="font-mono font-medium text-xs tracking-[0.22em] uppercase shrink-0"
          style={{ color: '#FBF7F2', textShadow: '0 1px 2px rgba(0,0,0,0.30)' }}
        >
          {content}
        </span>
        <span
          className="font-mono font-medium text-xs tracking-[0.22em] uppercase shrink-0"
          aria-hidden="true"
          style={{ color: '#FBF7F2', textShadow: '0 1px 2px rgba(0,0,0,0.30)' }}
        >
          {content}
        </span>
      </div>
    </div>
  );
};

export default MarqueeTicker;
