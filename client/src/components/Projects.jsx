const Projects = () => {
    return (
        <section id="projects" className="section section-low">
            <h2 className="section-title fade-in-up">Featured <span className="accent">Projects</span></h2>
            <div className="projects-grid">
                
                {/* Project 1 */}
                <div className="project-card fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div className="project-image-wrapper">
                        <img src="/GlobalHealth.png" alt="Global Health Dashboard" className="project-img" />
                        <a href="https://github.com/Priyanshu2835/Global-Health-Workforce-Intelligence-Dashboard-Power-BI" target="_blank" rel="noopener noreferrer" className="github-float-btn">
                            GitHub <i className="fas fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Global Health Workforce Dashboard</h3>
                        <p>Analyzed global WHO datasets for healthcare workforce distribution. Designed interactive Power BI dashboards with KPIs and DAX measures to compare density and identify under-served regions.</p>
                        <div className="project-tech">
                            <span className="tech">Power BI</span>
                            <span className="tech">DAX</span>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="project-image-wrapper">
                        <img src="/HospitalEmergencyRoom.png" alt="ER Intelligence Dashboard" className="project-img" />
                        <a href="https://github.com/Priyanshu2835/Hospital-Emergency-Room-Dashboard-in-Excel" target="_blank" rel="noopener noreferrer" className="github-float-btn">
                            GitHub <i className="fas fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Emergency Room Intelligence Dashboard</h3>
                        <p>Developed an interactive dashboard in MS Excel to analyze ER performance. Performed data cleaning via Power Query and created dynamic charts, slicers, and KPI cards.</p>
                        <div className="project-tech">
                            <span className="tech">MS Excel</span>
                            <span className="tech">Power Query</span>
                            <span className="tech">Pivot Charts</span>
                        </div>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="project-card fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="project-image-wrapper">
                        <img src="/pythondash.png" alt="Educational Impact Analysis" className="project-img" />
                        <a href="https://github.com/Priyanshu2835/An-Analytical-Dashboard-for-Educational-Impact-on-Career" target="_blank" rel="noopener noreferrer" className="github-float-btn">
                            GitHub <i className="fas fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Dashboard Analysis for Educational Impact</h3>
                        <p>Built an interactive data analytics dashboard using Python to analyze how educational factors influence long-term career outcomes. Conducted EDA and applied statistical summaries.</p>
                        <div className="project-tech">
                            <span className="tech">Python</span>
                            <span className="tech">Pandas</span>
                            <span className="tech">Seaborn</span>
                            <span className="tech">Matplotlib</span>
                            <span className="tech">Linear Regression</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Projects;
