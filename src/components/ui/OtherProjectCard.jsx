import { GithubIcon, ExternalLinkIcon } from '../common/Icons';

const OtherProjectCard = ({ project }) => {
  return (
    <div className="card-brutal h-full flex flex-col p-6 bg-white">
      {/* Top row */}
      <div className="flex justify-between items-start mb-5">
        {/* Folder icon */}
        <div className="w-10 h-10 border-2 border-nb-black bg-nb-yellow flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              className="p-1.5 border border-nb-gray-mid hover:border-nb-black hover:bg-nb-yellow transition-all duration-150"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border border-nb-gray-mid hover:border-nb-black hover:bg-nb-yellow transition-all duration-150"
              aria-label="External"
            >
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-display font-bold text-nb-black text-lg mb-2">{project.title}</h3>
      <p className="text-nb-muted text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 font-mono text-xs text-nb-muted">
        {project.technologies.map((tech, i) => (
          <span key={i} className="tag-brutal">{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default OtherProjectCard;
