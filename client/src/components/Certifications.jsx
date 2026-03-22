const Certifications = () => {
    return (
        <section id="certifications" className="section">
            <h2 className="section-title fade-in-up">My <span className="accent">Certifications</span></h2>
            
            <div className="projects-grid">
                
                {/* Certification 1 */}
                <div className="project-card fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div className="project-image-wrapper">
                        <a href="/Social Networks.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                            <img src="/SocialNetworks.png" alt="Social Networks" className="project-img" />
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Social Networks</h3>
                        <p>NPTEL</p>
                        <div className="project-tech">
                            <span className="tech">Oct 2025</span>
                        </div>
                    </div>
                </div>

                {/* Certification 2 */}
                <div className="project-card fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="project-image-wrapper">
                        <a href="/SummerInternship.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                            <img src="/Summerinternship.png" alt="Data Analytics Essentials: SQL, Python, Power BI, Tableau and Excel" className="project-img" />
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Data Analytics Essentials: SQL, Python, Power BI, Tableau and Excel</h3>
                        <p>CPE - LPU</p>
                        <div className="project-tech">
                            <span className="tech">Jul 2025</span>
                        </div>
                    </div>
                </div>

                {/* Certification 3 */}
                <div className="project-card fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="project-image-wrapper">
                        <a href="/deloitte.pdf" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                            <img src="/Deloitte.png" alt="Data Analytics Job Simulation – Deloitte" className="project-img" />
                        </a>
                    </div>
                    <div className="project-content">
                        <h3>Data Analytics Job Simulation – Deloitte</h3>
                        <p>Forage</p>
                        <div className="project-tech">
                            <span className="tech">Jun 2025</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Certifications;
