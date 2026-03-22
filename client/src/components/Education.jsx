const Education = () => {
    return (
        <section id="education" className="section section-low">
            <h2 className="section-title fade-in-up">My <span className="accent">Education</span></h2>
            <div className="timeline-container fade-in-up" style={{ animationDelay: '0.1s', maxWidth: '800px', margin: '0 auto' }}>
                <h3 className="column-title"><i className="fas fa-graduation-cap"></i> Academic Journey</h3>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <span className="date">Present</span>
                        <h4>B.Tech in Computer Science and Engineering</h4>
                        <p>Lovely Professional University</p>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <span className="date">Intermediate</span>
                        <h4>Class XII</h4>
                        <p>Vanijya Inter College</p>
                        <p className="score">Percentage: 77%</p>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <span className="date">Matriculation</span>
                        <h4>Class X</h4>
                        <p>DAV Public School</p>
                        <p className="score">Percentage: 88.6%</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
