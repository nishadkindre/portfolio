import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/FeaturedProjects';
import OtherProjects from './components/sections/OtherProjects';
import Contact from './components/sections/Contact';
import MarqueeTicker from './components/ui/MarqueeTicker';

function App() {
  return (
    <Layout>
      <Hero />
      <MarqueeTicker />
      <About />
      <Experience />
      <Projects />
      <OtherProjects />
      <Contact />
    </Layout>
  );
}

export default App;
