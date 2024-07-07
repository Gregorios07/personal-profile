import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';

const Contact = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="contact-container">
            <h1>Contact Me</h1>
            <p className="contact-description">Feel free to reach out to me via any of the methods below:</p>
            
            <div className="contact-info">
                <div className="contact-item">
                    <span className="icon-label">Email</span>
                    <FaEnvelope className="contact-icon" />
                    <p>leonardgregorios@gmail.com</p>
                </div>
                <div className="contact-item">
                    <span className="icon-label">Mobile Number</span>
                    <FaPhone className="contact-icon" />
                    <p>(63) 995-6477-101</p>
                </div>
                <div className="contact-item">
                    <span className="icon-label">Location</span>
                    <FaMapMarkerAlt className="contact-icon" />
                    <p>Kabankalan, Negros Occidental</p>
                </div>
            </div>
        </animated.div>
    );
}

export default Contact;
