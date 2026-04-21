import { GithubIcon, ExternalLinkIcon } from '../common/Icons';

const FeaturedProjectCard = ({ project, flip = false }) => {
  return (
    <div
      className={`flex flex-col ${
        flip ? 'md:flex-row-reverse' : 'md:flex-row'
      } border-2 border-nb-black shadow-brutal-lg bg-white group hover:-translate-y-1 hover:shadow-brutal-xl transition-all duration-200`}
    >
      {/* Image — 60% width */}
      <div className="md:w-[60%] overflow-hidden border-b-2 md:border-b-0 border-nb-black" style={{ borderRight: flip ? 'none' : '2px solid #0D0D0D', borderLeft: flip ? '2px solid #0D0D0D' : 'none' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 md:h-full object-cover transition-transform duration-500"
        />
      </div>

      {/* Content — 40% width */}
      <div className={`md:w-[40%] p-8 md:p-10 flex flex-col justify-between`}>
        <div>
          <p className="font-mono text-xs font-medium text-nb-muted uppercase tracking-widest mb-3">
            Featured Project
          </p>
          <h3 className="font-display font-black text-nb-black text-2xl md:text-3xl mb-4">
            {project.title}
          </h3>
          <div className="border-l-4 border-nb-yellow pl-4 mb-6">
            <p className="text-nb-muted text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div>
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
                className="inline-flex items-center gap-2 font-mono text-xs font-medium border border-nb-black px-3 py-1.5 hover:bg-nb-yellow transition-colors duration-150"
                aria-label="GitHub"
              >
                <GithubIcon />
                <span>Code</span>
              </a>
            )}
            {project.external && (
              <a
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-medium border border-nb-black px-3 py-1.5 hover:bg-nb-yellow transition-colors duration-150"
                aria-label="External link"
              >
                <ExternalLinkIcon />
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
