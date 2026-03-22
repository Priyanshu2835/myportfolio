import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
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
      <div className="blob-bg"></div>
      <div className="blob-bg blob-bg-2"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2026 Priyanshu Kumar. Built with <i className="fas fa-code accent"></i> and React</p>
      </footer>
    </>
  );
}

export default App;
