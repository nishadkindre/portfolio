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
            className="transition-all duration-150"
            style={{ color: '#C8A878' }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#D4A055';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#C8A878';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {Icon && <Icon className="w-5 h-5" />}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
