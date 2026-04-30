import React, { useEffect, useRef } from 'react';
import { CATEGORY_STYLES, COMPLEXITY_STYLES } from './TaskCard';

const formatFullDate = dateStr => {
  if (!dateStr) return '';
  const normalized = dateStr.replace(/-/g, '/');
  try {
    const d = new Date(normalized);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
};

const TaskDetailDialog = ({ task, onClose }) => {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    // Focus the close button on mount for keyboard accessibility
    closeBtnRef.current?.focus();

    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const learnings = task.learnings ? task.learnings.split('\n').filter(l => l.trim()) : [];

  const catStyle = CATEGORY_STYLES[task.category] || 'border-nb-black text-nb-black';
  const cplxStyle = COMPLEXITY_STYLES[task.complexity] || 'border-nb-black text-nb-black';

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 md:p-8 overflow-y-auto"
      style={{ backgroundColor: 'rgba(13,13,13,0.75)' }}
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="border-2 border-nb-black bg-nb-white shadow-brutal-xl w-full max-w-2xl my-auto">
        {/* ── Dialog Header ────────────────────────── */}
        <div className="flex items-start gap-4 p-5 md:p-6 border-b-2 border-nb-black bg-nb-gray">
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[11px] text-nb-muted mb-1 uppercase tracking-wider">Task #{task.id}</p>
            <h2 className="font-display font-black text-nb-black text-xl md:text-2xl leading-tight">{task.task}</h2>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="shrink-0 w-9 h-9 border-2 border-nb-black bg-nb-white hover:bg-nb-yellow flex items-center justify-center font-mono font-bold text-xl transition-colors duration-150"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        {/* ── Meta strip ───────────────────────────── */}
        <div className="flex flex-wrap items-center gap-2 px-5 md:px-6 py-3 border-b-2 border-nb-black">
          <span className="font-mono text-[11px] text-nb-muted">{formatFullDate(task.date)}</span>
          <span className="text-nb-gray-mid font-mono">·</span>
          <span className={`font-mono text-[11px] border px-2 py-0.5 font-medium ${catStyle}`}>{task.category}</span>
          <span className={`font-mono text-[11px] border px-2 py-0.5 font-medium ${cplxStyle}`}>{task.complexity}</span>
          {task.initiatedBy === 'Self' && <span className="font-mono text-[10px] border-2 border-nb-black bg-nb-yellow px-2 py-0.5 font-bold">✦ SELF INITIATED</span>}
        </div>

        {/* ── Body (scrollable) ────────────────────── */}
        <div className="p-5 md:p-6 space-y-5 max-h-[55vh] overflow-y-auto">
          {/* Description */}
          <div>
            <h4 className="font-mono text-[10px] font-bold text-nb-muted tracking-[0.25em] uppercase mb-2">Description</h4>
            <p className="text-nb-black text-sm leading-relaxed">{task.description}</p>
          </div>

          {/* Impact */}
          {task.impact && (
            <div className="border-l-4 border-nb-yellow pl-4">
              <h4 className="font-mono text-[10px] font-bold text-nb-muted tracking-[0.25em] uppercase mb-2">Impact</h4>
              <p className="text-nb-muted text-sm leading-relaxed">{task.impact}</p>
            </div>
          )}

          {/* Key Learnings */}
          {learnings.length > 0 && (
            <div>
              <h4 className="font-mono text-[10px] font-bold text-nb-muted tracking-[0.25em] uppercase mb-3">Key Learnings</h4>
              <ul className="space-y-2">
                {learnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-nb-muted leading-relaxed">
                    <span className="shrink-0 mt-0.5 w-4 h-4 border border-nb-black bg-nb-yellow flex items-center justify-center text-[10px] font-bold">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ── Footer ───────────────────────────────── */}
        <div className="border-t-2 border-nb-black px-5 md:px-6 py-4 bg-nb-gray space-y-3">
          {/* Tech Stack */}
          {task.techStack?.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-[10px] text-nb-muted uppercase tracking-wider mr-1">Tech:</span>
              {task.techStack.map((tech, i) => (
                <span key={i} className="tag-brutal">
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] text-nb-muted">
            <span>
              <span className="text-nb-black font-semibold">Role</span>: {task.role}
            </span>
            <span>
              <span className="text-nb-black font-semibold">Initiated by</span>: {task.initiatedBy}
            </span>
            <span>
              <span className="text-nb-black font-semibold">QA Involved</span>: <span className={task.qaTeamInvolvement === 'Yes' ? 'text-nb-green font-bold' : ''}>{task.qaTeamInvolvement}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailDialog;
