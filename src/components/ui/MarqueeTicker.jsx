import React from 'react';

const SEGMENT = 'FULL STACK DEV  ✦  REACT  ✦  NODE.JS  ✦  TYPESCRIPT  ✦  OPEN TO WORK  ✦  ';

const MarqueeTicker = () => {
  // Each span holds 4× the segment so the -50% translateX loop is seamless
  const content = SEGMENT.repeat(4);

  return (
    <div
      className="border-y-2 border-nb-black bg-nb-yellow overflow-hidden select-none py-3"
      aria-hidden="true"
    >
      <div className="flex w-max animate-ticker whitespace-nowrap">
        <span className="font-mono font-bold text-nb-black text-xs tracking-[0.25em] uppercase shrink-0">
          {content}
        </span>
        <span
          className="font-mono font-bold text-nb-black text-xs tracking-[0.25em] uppercase shrink-0"
          aria-hidden="true"
        >
          {content}
        </span>
      </div>
    </div>
  );
};

export default MarqueeTicker;
