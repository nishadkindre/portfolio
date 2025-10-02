# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, inspired by [Brittany Chiang's portfolio](https://v4.brittanychiang.com/).

![Official Site](https://github.com/user-attachments/assets/9648c8e2-8da3-40d6-8e56-58ce03a820c9)

## 🚀 Features

- **Modern Design**: Clean, minimalist design with dark theme
- **Fully Responsive**: Mobile-first approach with responsive design
- **Smooth Animations**: Scroll-triggered animations and smooth transitions
- **Accessible**: Built with accessibility best practices
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Fast Performance**: Optimized for speed and performance

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS
- **Language**: JavaScript/JSX
- **Type**: Single Page Application (SPA)

## 📱 Sections

1. **Hero Section** - Introduction with name, tagline, and CTA
2. **About Section** - Bio, skills, and professional photo
3. **Experience Section** - Work history with tabbed interface
4. **Projects Section** - Featured projects with detailed descriptions
5. **Other Projects** - Grid of additional projects
6. **Contact Section** - Call-to-action for opportunities

## 🎨 Design Features

- **Color Scheme**: Navy blue (#0a192f, #112240) with mint green (#64ffda) accents
- **Typography**: SF Mono for code, Calibre for text
- **Layout**: Clean, minimalist design with ample whitespace
- **Animations**: Fade-in animations on scroll, hover effects
- **Navigation**: Fixed header with smooth scrolling

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishadkindre/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Customization

### Personal Information

Update the following files with your information:

1. **`src/utils/constants.js`** - Update personal info, work experience, projects, and skills
2. **`src/components/sections/Hero.jsx`** - Update name and tagline
3. **`src/components/sections/About.jsx`** - Update bio and about content
4. **`index.html`** - Update meta tags and title

### Styling

- **Colors**: Modify `tailwind.config.js` to change the color scheme
- **Fonts**: Update font families in `tailwind.config.js`
- **Animations**: Customize animations in `src/index.css`

### Content

- **Resume**: Add your resume PDF to the `public` folder
- **Images**: Add project images to `src/assets/images`
- **Projects**: Update project data in `src/utils/constants.js`

## 📱 Component Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer with social links
│   │   └── Layout.jsx          # Main layout wrapper
│   ├── sections/
│   │   ├── Hero.jsx            # Hero/intro section
│   │   ├── About.jsx           # About me section
│   │   ├── Experience.jsx      # Work experience
│   │   ├── Projects.jsx        # Featured projects
│   │   ├── OtherProjects.jsx   # Other projects grid
│   │   └── Contact.jsx         # Contact section
│   ├── ui/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── ProjectCard.jsx     # Project display card
│   │   └── SocialLinks.jsx     # Social media links
│   └── common/
│       └── SectionHeading.jsx  # Section title component
├── hooks/
│   ├── useScrollspy.js         # Active section tracking
│   └── useIntersectionObserver.js # Scroll animations
├── utils/
│   ├── constants.js            # App constants and data
│   └── helpers.js              # Utility functions
└── assets/                     # Images and documents
```

## 🔧 Key Features Implementation

### Smooth Scrolling Navigation

- Custom scroll spy hook tracks active sections
- Smooth scroll behavior for navigation links

### Responsive Design

- Mobile-first approach with Tailwind CSS
- Hamburger menu for mobile devices
- Responsive typography with clamp() functions

### Animations

- Intersection Observer for scroll-triggered animations
- CSS animations for hover effects and transitions
- Staggered animations for better visual appeal

### Accessibility

- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- High contrast ratios

## 🚀 Deployment

The site can be deployed to any static hosting service:

- **Netlify**: Connect your Git repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Upload build files to S3 bucket

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- Design inspiration from [Brittany Chiang](https://brittanychiang.com)
- Built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)

## 📞 Contact

Feel free to reach out if you have any questions or suggestions!

- Email: nishadkindre@gmail.com
- LinkedIn: [nishad-kindre](https://linkedin.com/in/nishad-kindre)
- GitHub: [nishadkindre](https://github.com/nishadkindre)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
