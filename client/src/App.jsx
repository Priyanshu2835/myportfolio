import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Particles from './components/Particles';
import { useEffect } from 'react';
import './index.css';

function App() {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in-up');
    const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
  }, []);

  return (
    <>
      <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <Particles
          particleColors={["#ffffff", "#00add8"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2026 Priyanshu Kumar. Built with <i className="fas fa-code accent"></i> and React</p>
      </footer>
    </>
  );
}

export default App;
