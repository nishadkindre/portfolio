import React, { useState, useMemo, useEffect } from 'react';
import tasks from '../utils/medtigo-public-tasks.json';
import TaskCard from '../components/ui/TaskCard';
import TaskDetailDialog from '../components/ui/TaskDetailDialog';

// Ordered complexity values for sort
const COMPLEXITY_ORDER = { Low: 0, Medium: 1, High: 2, 'Very High': 3 };

// All filter options (static, ordered intentionally)
const ALL_CATEGORIES = ['Feature', 'Enhancement', 'Bug Fix', 'Performance', 'UI/UX'];
const ALL_COMPLEXITIES = ['Low', 'Medium', 'High', 'Very High'];

// Derive unique tech stacks from data
const ALL_TECH = [...new Set(tasks.flatMap(t => t.techStack))].sort();

// ── Chip toggle helper ────────────────────────────────────────────
const toggle = (value, list, setList) => setList(prev => (prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]));

const MedtigoTasksPage = () => {
  const [viewMode, setViewMode] = useState('card');
  const [selectedTask, setSelectedTask] = useState(null);
  const [search, setSearch] = useState('');
  const [filterCategories, setFilterCategories] = useState([]);
  const [filterComplexities, setFilterComplexities] = useState([]);
  const [filterTech, setFilterTech] = useState([]);
  const [sortBy, setSortBy] = useState('date-desc');

  // ── Page title ────────────────────────────────────────────────
  useEffect(() => {
    document.title = 'Task Archive @ medtigo — Nishad Kindre';
    return () => {
      document.title = 'Nishad Kindre - Full Stack Developer';
    };
  }, []);

  // ── Stats (stable, computed once) ────────────────────────────
  const stats = useMemo(
    () => ({
      total: tasks.length,
      features: tasks.filter(t => t.category === 'Feature').length,
      enhancements: tasks.filter(t => t.category === 'Enhancement').length,
      bugFixes: tasks.filter(t => t.category === 'Bug Fix').length,
      performance: tasks.filter(t => t.category === 'Performance').length,
      selfInit: tasks.filter(t => t.initiatedBy === 'Self').length
    }),
    []
  );

  // ── Filtered + sorted tasks ───────────────────────────────────
  const filtered = useMemo(() => {
    let result = [...tasks];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(t => t.task.toLowerCase().includes(q) || t.description.toLowerCase().includes(q));
    }
    if (filterCategories.length) result = result.filter(t => filterCategories.includes(t.category));
    if (filterComplexities.length) result = result.filter(t => filterComplexities.includes(t.complexity));
    if (filterTech.length) result = result.filter(t => filterTech.some(tech => t.techStack.includes(tech)));

    result.sort((a, b) => {
      if (sortBy === 'date-asc') return a.id - b.id;
      if (sortBy === 'complexity-desc') return (COMPLEXITY_ORDER[b.complexity] ?? 0) - (COMPLEXITY_ORDER[a.complexity] ?? 0);
      return b.id - a.id; // date-desc (newest first)
    });

    return result;
  }, [search, filterCategories, filterComplexities, filterTech, sortBy]);

  const hasActiveFilters = search || filterCategories.length || filterComplexities.length || filterTech.length;

  const clearAllFilters = () => {
    setSearch('');
    setFilterCategories([]);
    setFilterComplexities([]);
    setFilterTech([]);
  };

  // ── Chip class helper ─────────────────────────────────────────
  const chipCls = active =>
    `font-mono text-xs border-2 px-3 py-1.5 transition-all duration-150 cursor-pointer whitespace-nowrap select-none ${
      active ? 'border-nb-black bg-nb-black text-nb-white' : 'border-nb-gray-mid bg-nb-white text-nb-muted hover:border-nb-black hover:text-nb-black'
    }`;

  return (
    <div className="min-h-screen bg-nb-white text-nb-black">
      {/* ── Page Header (sticky) ─────────────────────────────────── */}
      <header className="lg:sticky top-0 z-40 h-14 bg-nb-white border-b-2 border-nb-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <a href="/" className="font-mono text-xl font-bold text-nb-black group" aria-label="Back to portfolio">
            <span className="bg-nb-yellow px-1 group-hover:bg-nb-yellow-hover transition-colors duration-150">&lt;NK /&gt;</span>
          </a>
          <a href="/" className="font-mono text-xs text-nb-muted hover:text-nb-black transition-colors duration-150 flex items-center gap-1.5">
            ← Back to Portfolio
          </a>
        </div>
      </header>

      {/* ── Title + Stats (scrolls away) ──────────────────────────── */}
      <div className="border-b-2 border-nb-black bg-nb-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10">
          <p className="font-mono text-xs text-nb-muted uppercase tracking-[0.25em] mb-3">medtigo · Task Archive</p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="font-display font-black text-nb-black text-clamp-3xl md:text-clamp-4xl leading-tight">
                Task{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Archive</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-nb-yellow -z-0" aria-hidden="true" />
                </span>
              </h1>
              <p className="font-sans text-nb-muted text-sm mt-2 max-w-md leading-relaxed">Major feature, enhancement, and fix shipped at medtigo — documented from May 2024 to present.</p>
            </div>

            {/* Stat boxes */}
            <div className="flex flex-wrap gap-2">
              {[
                { value: stats.total, label: 'Total', color: 'text-nb-black', bg: 'bg-nb-white' },
                { value: stats.features, label: 'Features', color: 'text-nb-blue', bg: 'bg-nb-white' },
                { value: stats.enhancements, label: 'Enhanc.', color: 'text-nb-black', bg: 'bg-nb-yellow' },
                { value: stats.performance, label: 'Perf.', color: 'text-nb-green', bg: 'bg-nb-white' },
                { value: stats.bugFixes, label: 'Bugs', color: 'text-nb-red', bg: 'bg-nb-white' },
                { value: stats.selfInit, label: 'Self Init', color: 'text-nb-black', bg: 'bg-nb-white' }
              ].map(({ value, label, color, bg }) => (
                <div key={label} className={`border-2 border-nb-black ${bg} px-4 py-2 text-center shadow-brutal-sm`}>
                  <p className={`font-display font-black text-2xl leading-none ${color}`}>{value}</p>
                  <p className="font-mono text-[10px] text-nb-muted uppercase tracking-wider mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Filter Bar (sticky below header) ──────────────────────── */}
      <div className="lg:sticky top-14 z-30 bg-nb-white border-b-2 border-nb-black">
        <div className="flex gap-2 items-start justify-between flex-wrap max-w-7xl mx-auto px-4 md:px-8 py-4 space-y-3">
          {/* Search row */}
          <div className="flex gap-2">
            <div className="relative flex-1 max-w-sm">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search tasks..."
                className="w-full border-2 border-nb-black bg-nb-white font-mono text-sm px-4 py-2 pr-8 focus:outline-none focus:bg-nb-gray placeholder:text-nb-muted"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-nb-muted hover:text-nb-black font-mono text-base leading-none"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
            {!!hasActiveFilters && (
              <button onClick={clearAllFilters} className="font-mono text-xs border-2 border-nb-black px-3 py-2 bg-nb-white hover:bg-nb-yellow transition-colors duration-150 whitespace-nowrap">
                Clear all ×
              </button>
            )}
          </div>

          {/* Filter chip rows */}
          <div className="space-y-2">
            {/* Category */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] text-nb-muted uppercase tracking-wider w-[5.5rem] shrink-0">Category</span>
              <div className="flex flex-wrap gap-1.5">
                {ALL_CATEGORIES.map(cat => (
                  <button key={cat} onClick={() => toggle(cat, filterCategories, setFilterCategories)} className={chipCls(filterCategories.includes(cat))}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] text-nb-muted uppercase tracking-wider w-[5.5rem] shrink-0">Complexity</span>
              <div className="flex flex-wrap gap-1.5">
                {ALL_COMPLEXITIES.map(c => (
                  <button key={c} onClick={() => toggle(c, filterComplexities, setFilterComplexities)} className={chipCls(filterComplexities.includes(c))}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] text-nb-muted uppercase tracking-wider w-[5.5rem] shrink-0">Tech</span>
              <div className="flex flex-wrap gap-1.5">
                {ALL_TECH.map(t => (
                  <button key={t} onClick={() => toggle(t, filterTech, setFilterTech)} className={chipCls(filterTech.includes(t))}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Results Toolbar ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-xs text-nb-muted">
          <span className="text-nb-black font-bold">{filtered.length}</span> of {tasks.length} tasks
          {!!hasActiveFilters && <span className="ml-1">· filtered</span>}
        </p>

        <div className="flex items-center gap-3">
          {/* Sort select */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="font-mono text-xs border-2 border-nb-black px-2 py-1.5 bg-nb-white focus:outline-none focus:bg-nb-gray cursor-pointer"
          >
            <option value="date-asc">Newest first</option>
            <option value="date-desc">Oldest first</option>
            <option value="complexity-desc">Complexity ↓</option>
          </select>

          {/* View toggle */}
          <div className="flex border-2 border-nb-black">
            <button
              onClick={() => setViewMode('list')}
              className={`font-mono text-xs px-3 py-1.5 border-r-2 border-nb-black transition-colors duration-150 ${
                viewMode === 'list' ? 'bg-nb-black text-nb-white' : 'bg-nb-white text-nb-muted hover:bg-nb-gray'
              }`}
              title="List view"
            >
              ≡ List
            </button>
            <button
              onClick={() => setViewMode('card')}
              className={`font-mono text-xs px-3 py-1.5 transition-colors duration-150 ${viewMode === 'card' ? 'bg-nb-black text-nb-white' : 'bg-nb-white text-nb-muted hover:bg-nb-gray'}`}
              title="Card view"
            >
              ⊞ Cards
            </button>
          </div>
        </div>
      </div>

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        {filtered.length === 0 ? (
          /* Empty state */
          <div className="border-2 border-nb-black bg-nb-gray p-12 text-center shadow-brutal">
            <p className="font-display font-bold text-nb-black text-xl mb-2">No tasks found</p>
            <p className="font-mono text-sm text-nb-muted mb-6">Try adjusting your filters or search term</p>
            <button onClick={clearAllFilters} className="btn-brutal">
              Clear all filters
            </button>
          </div>
        ) : viewMode === 'card' ? (
          /* Card grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map(task => (
              <TaskCard key={task.id} task={task} viewMode="card" onOpen={setSelectedTask} />
            ))}
          </div>
        ) : (
          /* List view */
          <div className="border-2 border-nb-black bg-nb-white">
            {/* List header row */}
            <div className="flex items-center gap-3 px-4 py-2 border-b-2 border-nb-black bg-nb-gray">
              <span className="font-mono text-[10px] text-nb-muted uppercase tracking-wider w-8 shrink-0">#</span>
              <span className="font-mono text-[10px] text-nb-muted uppercase tracking-wider flex-1">Task</span>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-[10px] text-nb-muted uppercase tracking-wider hidden sm:block w-16 text-right">Date</span>
                <span className="font-mono text-[10px] text-nb-muted uppercase tracking-wider hidden md:block w-24 text-center">Category</span>
                <span className="font-mono text-[10px] text-nb-muted uppercase tracking-wider w-20 text-center">Complexity</span>
                <span className="w-4" aria-hidden="true" />
              </div>
            </div>
            {filtered.map(task => (
              <TaskCard key={task.id} task={task} viewMode="list" onOpen={setSelectedTask} />
            ))}
          </div>
        )}
      </div>

      {/* ── Detail Dialog ─────────────────────────────────────────── */}
      {selectedTask && <TaskDetailDialog task={selectedTask} onClose={() => setSelectedTask(null)} />}
    </div>
  );
};

export default MedtigoTasksPage;
