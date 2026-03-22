const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2 className="section-title fade-in-up">Technical <span className="accent">Arsenal</span></h2>
            <div className="skills-container fade-in-up">
                
                <div className="skill-box">
                    <h3 className="skill-box-title">LANGUAGES</h3>
                    <div className="skill-box-tags">
                        <span className="skill-pill"><i className="fab fa-python"></i> Python</span>
                        <span className="skill-pill"><i className="fas fa-code"></i> C++</span>
                        <span className="skill-pill"><i className="fab fa-java"></i> Java</span>
                    </div>
                </div>

                <div className="skill-box">
                    <h3 className="skill-box-title">ML / DATA SCIENCE</h3>
                    <div className="skill-box-tags">
                        <span className="skill-pill"><i className="fas fa-brain"></i> Scikit-learn</span>
                        <span className="skill-pill"><i className="fas fa-table"></i> Pandas</span>
                        <span className="skill-pill"><i className="fas fa-layer-group"></i> NumPy</span>
                        <span className="skill-pill"><i className="fas fa-image"></i> OpenCV</span>
                    </div>
                </div>

                <div className="skill-box">
                    <h3 className="skill-box-title">TOOLS & PLATFORMS</h3>
                    <div className="skill-box-tags">
                        <span className="skill-pill"><i className="fab fa-git-alt"></i> Git</span>
                        <span className="skill-pill"><i className="fab fa-github"></i> GitHub</span>
                        <span className="skill-pill"><i className="fas fa-database"></i> MySQL</span>
                        <span className="skill-pill"><i className="fas fa-file-excel"></i> MS Excel</span>
                        <span className="skill-pill"><i className="fas fa-cube"></i> Oracle APEX</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
