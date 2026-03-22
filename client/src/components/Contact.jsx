import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Formspree Integration Instructions:
        // 1. Create a free account at formspree.io and create a new form.
        // 2. Change your <form> tag below to: <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        // 3. Remove this `onSubmit={handleSubmit}` attribute from the form if using standard Formspree action.
        
        setStatus('Message simulated! Connect to Formspree for real emails.');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="section section-low">
            <div className="contact-box fade-in-up">
                <h2>Let's Work <span className="accent">Together</span></h2>
                <p>I'm currently available for data analytical and software engineering roles.</p>
                <div className="contact-details">
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:rajputpriyanshu2835@gmail.com">rajputpriyanshu2835@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <a href="tel:+917480846090">+91-7480846090</a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '30px auto 0' }}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        required 
                        value={formData.name} 
                        onChange={handleChange} 
                        style={inputStyle} 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        required 
                        value={formData.email} 
                        onChange={handleChange} 
                        style={inputStyle} 
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        required 
                        rows="4" 
                        value={formData.message} 
                        onChange={handleChange} 
                        style={{...inputStyle, resize: 'vertical'}}
                    ></textarea>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    {status && <p style={{ color: 'var(--accent)', marginTop: '10px' }}>{status}</p>}
                </form>
            </div>
        </section>
    );
};

const inputStyle = {
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(10, 10, 15, 0.6)',
    color: '#fff',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s'
};

export default Contact;
