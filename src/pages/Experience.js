import React from 'react';
import './Experience.css';
import { useSpring, animated } from '@react-spring/web';
import certificate1 from '../images/certificate1.jpg';
import certificate2 from '../images/certificate2.jpg';
import certificate3 from '../images/certificate3.jpg';

const Experience = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="experience-container">
            <h1 className="section-title">Experience</h1>
            <div className="experience-content">
                <div className="experience-item">
                    <div className="year-tag">2024</div>
                    <div className="job">
                        <h2>Presented our Capstone Project on BSIT 3rd Student Colloquium</h2>
                        <p>Central Philippines State University</p>
                        <p>We have given a chance to show our Capstone Project which is about Inventory Control in a BSIT stdent Colloquium.</p>
                    </div>
                </div>
                <div className="experience-item">
                    <div className="year-tag">2023</div>
                    <div className="job">
                        <h2>On the Job Trainee</h2>
                        <p>MF Computer Solutions</p>
                        <p>I had the opportunity to gain hands-on experience in troubleshooting hardware and software issues, performing system upgrades, maintaining network infrastructure, etc.</p>
                    </div>
                </div>
            </div>
            <div className="certifications-container">
                <h1 className="section-title">Certifications</h1>
                <div className="certification">
                    <div className="certification-item">
                        <h3>Certificate of Completion</h3>
                        <p>On the Job Training</p>
                        <a href={certificate1} target="_blank" rel="noopener noreferrer">
                            View Certificate <span className="arrow-icon">→</span>
                        </a>
                    </div>
                    <div className="certification-item">
                        <h3>Certificate of Recognition</h3>
                        <p>BSIT Students Colloquium</p>
                        <a href={certificate2} target="_blank" rel="noopener noreferrer">
                            View Certificate <span className="arrow-icon">→</span>
                        </a>
                    </div>
                    <div className="certification-item">
                        <h3>3rd Place Poster</h3>
                        <p>BSIT Students Colloquium</p>
                        <a href={certificate3} target="_blank" rel="noopener noreferrer">
                            View Certificate <span className="arrow-icon">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default Experience;
