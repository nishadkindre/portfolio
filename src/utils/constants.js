// Navigation configuration
export const navLinks = [
  {
    name: 'About',
    url: '#about'
  },
  {
    name: 'Experience',
    url: '#experience'
  },
  {
    name: 'Work',
    url: '#projects'
  },
  {
    name: 'Contact',
    url: '#contact'
  }
];

// Social media links
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/nishadkindre',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/nishad-kindre',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://x.com/NishadKindre',
    icon: 'twitter'
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/nishadkindre',
    icon: 'instagram'
  }
  // {
  //   name: 'NPM',
  //   url: 'https://www.npmjs.com/nishadkindre',
  //   icon: 'npm',
  // }
];

// Skills and technologies
export const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker'];

// Work experience data
export const workExperience = [
  {
    title: 'Full Stack Developer',
    company: 'medtigo',
    url: 'https://medtigo.com',
    range: 'November 2024 - Present',
    description: [
      'Implemented Database design with end to end feature development targetted for Global Healthcare professionals',
      'Reduced dependencies on third-party services, cutting costs by 30% by implementing in-house tools',
      'Developed cross platform APIs and Optimised prime APIs response time by 80%',
      'Led the migration of legacy systems to modern frameworks, improving maintainability, performance & implementing best coding practices',
      'Developed & maintained end to end payment infrastructure for domestic and international payments using Stripe and Razorpay',
    ]
  },
  {
    title: 'Intern - Full Stack Developer',
    company: 'medtigo',
    url: 'https://medtigo.com',
    range: 'May 2024 - November 2024',
    description: [
      'Implemented SOC 2 compliant features',
      'Lead project of migrating old website theme to new design system',
      'Optimised application build size by 70%',
      'Developed End to end user real time Quiz tracking system'
    ]
  }
];

// Featured projects
export const featuredProjects = [
  {
    title: 'GitFlex',
    description: 'A platform for developers to showcase their GitHub Profile with enhanced features like analytics, one page portfolio & more.',
    technologies: ['React', 'Tailwind CSS', 'GitHub API', 'PWA'],
    github: 'https://github.com/nishadkindre/gitflex',
    external: 'https://gitflexx.vercel.app',
    image: './featured-projects/gitflex.png'
  },
  {
    title: 'SQLHub',
    description:
      'A SQL learning platform that runs entirely in your browser. Practice with real databases, execute complex queries, and master SQL without any setup or backend.',
    technologies: ['React', 'Material-UI', 'SQL', 'Real-time DB'],
    github: 'https://github.com/nishadkindre/sqlhub',
    external: 'https://sqlhub.vercel.app',
    image: './featured-projects/sqlhub.png'
  },
  {
    title: 'Nova UI',
    description: 'A modern, JavaScript-first UI component library with 8 essential components & Storybook documentation. Perfect for learning modern React development.',
    technologies: ['TypeScript', 'React', 'Storybook', 'npm package'],
    github: 'https://github.com/nishadkindre/nova-ui',
    external: 'https://nova-ui.vercel.app/',
    image: './featured-projects/nova-ui.png'
  }
];

// Other notable projects
export const otherProjects = [
  {
    title: 'Viewport Sense',
    description: 'A recipe search application with ingredient-based filtering and meal planning features.',
    technologies: ['npm package', 'TypeScript', 'React Hooks'],
    github: 'https://github.com/nishadkindre/viewport-sense',
    external: 'https://www.npmjs.com/package/viewport-sense'
  },
  {
    title: 'JS Exercises',
    description: 'A collection of interactive JavaScript coding exercises to practice and improve your coding skills.',
    technologies: ['JavaScript', 'Interview Prep', 'Coding Challenges'],
    github: 'https://github.com/nishadkindre/js-exercises'
  },
  {
    title: 'NoteKeep',
    description: 'A full stack CRUD note-taking app with user authentication and responsive design.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/nishadkindre/notekeep-app-client',
    external: 'https://notekeepapp.vercel.app'
  },
  {
    title: 'Python Module Info',
    description: 'A CLI tool to fetch and display information about installed Python modules.',
    technologies: ['Python', 'CLI'],
    github: 'https://github.com/nishadkindre/python-projects/tree/main/ModuleInfo'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects and skills with smooth animations.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/nishadkindre/portfolio',
    external: 'https://nishadkindre.vercel.app'
  }
];

// Personal information
export const personalInfo = {
  name: 'Nishad Kindre',
  email: 'nishadkindre@gmail.com',
  location: 'Pune, India',
  resumeUrl: '/resume.pdf'
};
