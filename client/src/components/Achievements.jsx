const Achievements = () => {
    return (
        <section id="achievements" className="section section-low">
            <h2 className="section-title fade-in-up">My <span className="accent">Achievements</span></h2>
            <div className="timeline-container fade-in-up" style={{ animationDelay: '0.1s', maxWidth: '800px', margin: '0 auto' }}>
                <h3 className="column-title"><i className="fas fa-trophy"></i> Coding Profiles</h3>
                <div className="timeline">
                    
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                            <h4>
                                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="accent" style={{textDecoration: 'none'}}>Achieved LeetCode Badges In Problem Solving</a> | <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--secondary)', textDecoration: 'underline'}}>Link</a>
                            </h4>
                            <p>Completed the LeetCode Challenge and Solve Problems</p>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-card">
                            <h4>
                                <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" className="accent" style={{textDecoration: 'none'}}>Achieved 5 Stars in HackerRank</a> | <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--secondary)', textDecoration: 'underline'}}>Link</a>
                            </h4>
                            <p>In Python, C++, Java and SQL</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Achievements;
