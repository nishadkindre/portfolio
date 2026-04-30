import React from 'react';

export const CATEGORY_STYLES = {
  Feature: 'border-nb-blue text-nb-blue',
  Enhancement: 'border-nb-black bg-nb-yellow text-nb-black',
  'Bug Fix': 'border-nb-red text-nb-red',
  Performance: 'border-nb-green text-nb-green',
  'UI/UX': 'border-nb-muted text-nb-muted'
};

export const COMPLEXITY_STYLES = {
  Low: 'border-nb-green text-nb-green',
  Medium: 'border-nb-blue text-nb-blue',
  High: 'border-nb-black bg-nb-yellow text-nb-black',
  'Very High': 'border-nb-red bg-nb-red text-nb-white'
};

export const formatDate = dateStr => {
  if (!dateStr) return '';
  // Normalize hyphens to slashes — all dates in data are US format (MM/DD/YYYY)
  const normalized = dateStr.replace(/-/g, '/');
  try {
    const d = new Date(normalized);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return dateStr;
  }
};

const TaskCard = ({ task, viewMode, onOpen }) => {
  const catStyle = CATEGORY_STYLES[task.category] || 'border-nb-black text-nb-black';
  const cplxStyle = COMPLEXITY_STYLES[task.complexity] || 'border-nb-black text-nb-black';

  if (viewMode === 'list') {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={() => onOpen(task)}
        onKeyDown={e => e.key === 'Enter' && onOpen(task)}
        className="border-b-2 border-nb-black last:border-b-0 hover:bg-nb-gray transition-colors duration-100 cursor-pointer group"
      >
        <div className="flex items-center gap-3 px-4 py-3.5">
          <span className="font-mono text-[11px] text-nb-muted w-8 shrink-0">#{task.id}</span>

          <span className="font-display font-bold text-nb-black text-sm flex-1 min-w-0 truncate group-hover:underline underline-offset-2">{task.task}</span>

          <div className="flex items-center gap-2 shrink-0 ml-2">
            <span className="font-mono text-[11px] text-nb-muted hidden sm:block w-16 text-right">{formatDate(task.date)}</span>
            <span className={`font-mono text-[10px] border px-2 py-0.5 hidden md:inline-block ${catStyle}`}>{task.category}</span>
            <span className={`font-mono text-[10px] border px-2 py-0.5 ${cplxStyle}`}>{task.complexity}</span>
            {task.initiatedBy === 'Self' && <span className="font-mono text-[10px] border-2 border-nb-black bg-nb-yellow px-1.5 py-0.5 font-bold hidden lg:inline-block">✦</span>}
            <span className="text-nb-muted font-mono text-sm group-hover:translate-x-1 transition-transform duration-150">→</span>
          </div>
        </div>
      </div>
    );
  }

  // Card view
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpen(task)}
      onKeyDown={e => e.key === 'Enter' && onOpen(task)}
      className="card-brutal bg-nb-white p-5 cursor-pointer flex flex-col gap-3 group h-full"
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <span className="font-mono text-[11px] text-nb-muted">{formatDate(task.date)}</span>
        {task.initiatedBy === 'Self' && (
          <span title="Self-Initiated Feature" className="font-mono text-[10px] border-2 border-nb-black bg-nb-yellow px-2 py-0.5 font-bold shrink-0 leading-tight">
            ✦ SELF INIT
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-nb-black text-sm leading-snug group-hover:underline underline-offset-2">{task.task}</h3>

      {/* Description — 2-line clamp via inline style for cross-browser consistency */}
      <p
        className="text-nb-muted text-xs leading-relaxed flex-1"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}
      >
        {task.description}
      </p>

      {/* Chips */}
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-nb-gray mt-auto">
        <span className={`font-mono text-[10px] border px-2 py-0.5 font-medium ${catStyle}`}>{task.category}</span>
        <span className={`font-mono text-[10px] border px-2 py-0.5 font-medium ${cplxStyle}`}>{task.complexity}</span>
        <span className="font-mono text-[10px] border border-nb-gray-mid text-nb-muted px-2 py-0.5">{task.role}</span>
      </div>
    </div>
  );
};

export default TaskCard;
