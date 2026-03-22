import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <div className="logo">
                    Priyanshu<span className="accent">.</span>
                </div>
                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMobileMenu}>Home</a></li>
                    <li><a href="#about-me" className={activeSection === 'about-me' ? 'active' : ''} onClick={closeMobileMenu}>About</a></li>
                    <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={closeMobileMenu}>Skills</a></li>
                    <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={closeMobileMenu}>Projects</a></li>
                    <li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={closeMobileMenu}>Education</a></li>
                    <li><a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''} onClick={closeMobileMenu}>Certifications</a></li>
                    <li><a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''} onClick={closeMobileMenu}>Achievements</a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={closeMobileMenu}>Contact</a></li>
                </ul>
                <div className="hamburger" onClick={toggleMobileMenu}>
                    <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
