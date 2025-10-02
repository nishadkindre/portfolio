import { GithubIcon, ExternalLinkIcon } from '../common/Icons';

// Regular project card for "Other Projects" section
const OtherProjectCard = ({ project }) => {
  return (
    <div className="project-card h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div className="text-primary-400">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className="flex space-x-3">
          {project.github && <GithubIcon href={project.github} />}
          {project.external && <ExternalLinkIcon href={project.external} />}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-text-100 mb-3">{project.title}</h3>
      <p className="text-text-400 text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

      <ul className="flex flex-wrap gap-2 font-mono text-xs text-text-400">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default OtherProjectCard;
