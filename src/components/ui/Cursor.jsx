import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Only activate on pointer-capable (non-touch) devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    dot.style.display = 'block';

    const onMouseMove = (e) => {
      // Direct DOM update — no React re-render overhead
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const onMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        dot.classList.add('cursor-dot--hover');
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        dot.classList.remove('cursor-dot--hover');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="cursor-dot"
      style={{ display: 'none', left: 0, top: 0 }}
    />
  );
};

export default Cursor;
