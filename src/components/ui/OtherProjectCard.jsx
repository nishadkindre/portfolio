import { GithubIcon, ExternalLinkIcon } from '../common/Icons';

const OtherProjectCard = ({ project }) => {
  return (
    <div
      className="card-brutal h-full flex flex-col p-6"
      style={{ background: 'linear-gradient(160deg, #FFFDF8 0%, #F8F2E8 60%, #F0E8D8 100%)' }}
    >
      {/* Top row */}
      <div className="flex justify-between items-start mb-5">
        {/* Folio icon — brass folder */}
        <div
          className="w-10 h-10 flex items-center justify-center rounded-sm shrink-0"
          style={{
            background: 'linear-gradient(145deg, #D4A055 0%, #B8823A 40%, #8C5E20 100%)',
            border: '1px solid #7A4E18',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 2px 6px rgba(60,30,10,0.22)',
          }}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(251,247,242,0.90)"
            strokeWidth="1.8"
          >
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-sm transition-all duration-150"
              style={{
                color: '#7A5840',
                border: '1px solid #C8A878',
                background: 'linear-gradient(175deg, #F8F2E8 0%, #EEE4D4 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.50)',
              }}
              aria-label="GitHub"
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(175deg, #F0DDB8 0%, #E4CDA0 100%)';
                e.currentTarget.style.color = '#4A2010';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'linear-gradient(175deg, #F8F2E8 0%, #EEE4D4 100%)';
                e.currentTarget.style.color = '#7A5840';
              }}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-sm transition-all duration-150"
              style={{
                color: '#7A5840',
                border: '1px solid #C8A878',
                background: 'linear-gradient(175deg, #F8F2E8 0%, #EEE4D4 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.50)',
              }}
              aria-label="External"
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(175deg, #F0DDB8 0%, #E4CDA0 100%)';
                e.currentTarget.style.color = '#4A2010';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'linear-gradient(175deg, #F8F2E8 0%, #EEE4D4 100%)';
                e.currentTarget.style.color = '#7A5840';
              }}
            >
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <h3
        className="font-display font-bold text-lg mb-2"
        style={{ color: '#1E140A' }}
      >
        {project.title}
      </h3>
      <p
        className="text-sm leading-relaxed flex-1 mb-4"
        style={{ color: '#5A3E2A' }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech, i) => (
          <span key={i} className="tag-brutal">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default OtherProjectCard;
