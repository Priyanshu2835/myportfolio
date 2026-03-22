const Hero = () => {
    return (
        <section id="about" className="hero section">
            <div className="hero-content fade-in-up">
                <h3 className="subtitle">Hello, I'm</h3>
                <h1 className="title">Priyanshu <span className="accent">Kumar</span></h1>
                <div className="role">
                    Machine Learning | Data Analyst
                </div>
                <p className="description">
                    I analyze complex datasets, build intelligent machine learning models, and create actionable visualizations. Currently pushing the boundaries of what's possible with raw data and AI.
                    Skilled in Python, C++, Java, and Data Visualization tools.
                </p>
                <div className="cta-buttons">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="/MYCV.pdf" download="Priyanshu_Kumar_Resume.pdf" className="btn btn-secondary">
                        <i className="fas fa-download" style={{ marginRight: '8px' }}></i> Download CV
                    </a>
                </div>
                <div className="social-links">
                    <a href="https://linkedin.com/in/priyanshu-kumar69584a297" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Priyanshu2835" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                    <a href="mailto:rajputpriyanshu2835@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
            <div className="hero-image fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="image-wrapper">
                    <img
                        src="/profile.png"
                        alt="Priyanshu Kumar"
                        className="profile-img"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://ui-avatars.com/api/?name=Priyanshu+Kumar&background=00ADD8&color=fff&size=512&font-size=0.33" }}
                    />
                    <div className="accent-circle"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
