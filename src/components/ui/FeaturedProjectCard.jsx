import { GithubIcon, ExternalLinkIcon } from '../common/Icons';

const FeaturedProjectCard = ({ project, flip = false }) => {
  return (
    <div
      className={`flex flex-col ${flip ? 'md:flex-row-reverse' : 'md:flex-row'} group rounded-sm overflow-hidden transition-all duration-300`}
      style={{
        background: 'linear-gradient(160deg, #FFFDF8 0%, #F8F2E8 100%)',
        border: '1px solid #C8A878',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.75), 0 6px 22px rgba(60,30,10,0.14), 0 2px 6px rgba(60,30,10,0.09)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px) rotate(0.15deg)';
        e.currentTarget.style.boxShadow =
          'inset 0 1px 0 rgba(255,255,255,0.75), 0 14px 40px rgba(60,30,10,0.18), 0 4px 12px rgba(60,30,10,0.12)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
        e.currentTarget.style.boxShadow =
          'inset 0 1px 0 rgba(255,255,255,0.75), 0 6px 22px rgba(60,30,10,0.14), 0 2px 6px rgba(60,30,10,0.09)';
      }}
    >
      {/* Image */}
      <div
        className="md:w-[60%] overflow-hidden"
        style={{
          borderRight: flip ? 'none' : '1px solid #C8A878',
          borderLeft: flip ? '1px solid #C8A878' : 'none',
          borderBottom: '1px solid #C8A878',
        }}
      >
        <div className="relative w-full h-56 md:h-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Photo-paper gloss overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, transparent 55%)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="md:w-[40%] p-8 md:p-10 flex flex-col justify-between">
        <div>
          <p
            className="font-mono text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: '#B8823A' }}
          >
            Featured Project
          </p>
          <h3
            className="font-display font-black text-2xl md:text-3xl mb-4"
            style={{ color: '#1E140A', letterSpacing: '-0.01em' }}
          >
            {project.title}
          </h3>
          {/* Description inset panel */}
          <div
            className="rounded-sm p-4 mb-6"
            style={{
              background: 'linear-gradient(160deg, #EEE4D4 0%, #E4D8C4 100%)',
              border: '1px solid #C8A878',
              boxShadow: 'inset 0 2px 6px rgba(60,30,10,0.08)',
            }}
          >
            <p className="text-sm leading-relaxed" style={{ color: '#4A2C1A' }}>
              {project.description}
            </p>
          </div>
        </div>

        <div>
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tag-brutal">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-medium px-3 py-1.5 rounded-sm transition-all duration-150"
                style={{
                  color: '#4A2010',
                  background: 'linear-gradient(175deg, #F8F2E8 0%, #EEE4D4 100%)',
                  border: '1px solid #C8A878',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.60), 0 1px 3px rgba(60,30,10,0.12)',
                }}
                aria-label="GitHub"
                onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(175deg, #F0DDB8 0%, #E4CDA0 100%)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(175deg, #F8F2E8 0%, #EEE4D4 100%)')}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
            {project.external && (
              <a
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-medium px-3 py-1.5 rounded-sm transition-all duration-150"
                style={{
                  color: '#4A2010',
                  background: 'linear-gradient(175deg, #F8F2E8 0%, #EEE4D4 100%)',
                  border: '1px solid #C8A878',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.60), 0 1px 3px rgba(60,30,10,0.12)',
                }}
                aria-label="External link"
                onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(175deg, #F0DDB8 0%, #E4CDA0 100%)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'linear-gradient(175deg, #F8F2E8 0%, #EEE4D4 100%)')}
              >
                <ExternalLinkIcon className="w-3.5 h-3.5" />
                <span>Visit</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
