import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';

function App() {
  useEffect(() => {
    // Preload 3D models and textures
    const preloadAssets = async () => {
      // Add preloading logic here
    };

    preloadAssets();
  }, []);

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
      
        <Achievements />
        <Certifications />
        <Skills />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;