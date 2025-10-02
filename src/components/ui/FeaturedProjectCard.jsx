import { GithubIcon, ExternalLinkIcon } from '../common/Icons';

const FeaturedProjectCard = ({ project, flip = false }) => {
  return (
    <div className="relative">
      <div className="relative">
        {/* Project Image */}
        <div className="relative overflow-hidden rounded-lg">
          <img src={project.image} alt={project.title} className={`w-160 h-64 lg:h-80 object-cover transition-transform duration-300 ${flip ? 'mr-auto' : 'ml-auto'}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/40 to-transparent"></div>
        </div>

        {/* Project Info - Overlapping the image */}
        <div className={`absolute max-w-md bottom-0 ${flip ? 'right-0 text-right' : 'left-0 text-left'} p-6 lg:p-8`}>
          <p className="font-mono text-primary-400 text-sm mb-2">Featured Project</p>
          {/* Project Title */}
          <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-3">{project.title}</h3>

          {/* Project Description */}
          <div className="mb-4">
            <p className={`font-sans text-sm text-text-300 bg-dark-800/80 p-2 ${flip ? 'pl-8' : 'pr-8'} rounded-lg backdrop-blur-sm ${flip ? 'text-right' : 'text-left'}`}>{project.description}</p>
          </div>

          {/* Project Technologies */}
          <div className={`flex flex-wrap gap-2 mb-4 ${flip ? 'justify-end' : ''}`}>
            {project.technologies.map((tech, index) => (
              <span key={index} className={`font-mono text-xs text-text-300 bg-dark-800/60 px-2 py-1 rounded backdrop-blur-sm ${flip ? 'text-right' : 'text-left'}`}>
                {tech}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className={`flex space-x-4 ${flip ? 'justify-end' : ''}`}>
            {project.github && <GithubIcon href={project.github} />}
            {project.external && <ExternalLinkIcon href={project.external} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
