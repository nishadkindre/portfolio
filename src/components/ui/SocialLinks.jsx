import React from 'react';
import { socialLinks } from '../../utils/constants';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '../common/Icons';

const iconMap = {
  github:    GithubIcon,
  linkedin:  LinkedinIcon,
  twitter:   TwitterIcon,
  instagram: InstagramIcon,
};

const SocialLinks = ({ orientation = 'vertical', className = '' }) => {
  return (
    <div
      className={`${
        orientation === 'vertical' ? 'flex flex-col gap-4' : 'flex flex-row gap-4 items-center'
      } ${className}`}
    >
      {socialLinks.map(social => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="text-nb-muted hover:text-nb-black hover:-translate-y-0.5 transition-all duration-150"
          >
            {Icon && <Icon className="w-5 h-5" />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
