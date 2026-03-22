const About = () => {
    return (
        <section id="about-me" className="section section-low">
            <h2 className="section-title fade-in-up">About <span className="accent">Me</span></h2>
            <div className="about-grid">
                <div className="about-text fade-in-up">
                    <p>
                        Hi! I'm Priyanshu Kumar, a Computer Science & Engineering undergraduate at Lovely Professional University in Punjab. I'm entirely focused on Data Science, Machine Learning, and Data Analytics — turning raw numbers into actionable insights and intelligent models.
                    </p>
                    <br />
                    <p>
                        My work spans from conducting deep exploratory data analysis to architecting analytical dashboards and predictive models using Python, SQL, Power BI, and Tableau. I don't just write algorithms — I solve business problems with statistical rigor and measurable impact.
                    </p>
                    <br />
                    <p>
                        I'm driven by curiosity and extreme ownership. Whether it's discovering hidden data patterns or training a complex machine learning model, I give it everything. I'm currently seeking internship opportunities in the Data domain where I can contribute, learn, and grow fast.
                    </p>
                </div>
                <div className="about-stats fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="stat-card">
                        <h3>3+</h3>
                        <p>Projects Built</p>
                    </div>
                    <div className="stat-card">
                        <h3>3</h3>
                        <p>Certifications</p>
                    </div>
                    <div className="stat-card">
                        <img src="/lpu%20logo.png" alt="LPU Logo" style={{ height: '60px', borderRadius: '50%', marginBottom: '10px', display: 'inline-block' }} />
                        <h3 style={{ fontSize: '2.2rem' }}>7.39</h3>
                        <p>CGPA</p>
                    </div>
                    <div className="stat-card">
                        <h3>Forage</h3>
                        <p>Deloitte Sim</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
