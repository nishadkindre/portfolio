import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/FeaturedProjects';
import OtherProjects from './components/sections/OtherProjects';
import Contact from './components/sections/Contact';
import MedtigoTasksPage from './pages/MedtigoTasksPage';

function PortfolioPage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <OtherProjects />
      <Contact />
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/medtigo/tasks" element={<MedtigoTasksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
