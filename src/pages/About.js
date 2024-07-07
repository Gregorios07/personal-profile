import React from 'react';
import './About.css';
import { FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaDatabase, FaUser } from 'react-icons/fa';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';

const About = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeInStyles} className="about-container">
            <div className="container-title">
                <h1>About Me</h1>
                <p className="subtitle">A brief description about myself</p>
            </div>
            <div className="about-content">
                <div className="left-side">
                    <div className="text-block">
                        <h2>Contact</h2>
                        <p>For any sort of help or inquiries, feel free to send me an <Link to="/contact" className="email-link"><strong>email</strong></Link> and I'll get back to you soon.</p>
                    </div>
                    <div className="text-block">
                        <h2>Interested in having me speak at an event?</h2>
                        <p>I specialize in topics related to software development, emerging technologies, and digital marketing.</p>
                    </div>
                    <div className="text-block">
                        <h2>Want to hire me as a freelancer?</h2>
                        <p>Schedule a free consultation with me and we can discuss about your project.</p>
                    </div>
                </div>
                <div className="right-side">
                    <p>Throughout my academic career, I have developed a strong foundation in key IT concepts, including HTML, CSS, JavaScript, PHP, and ReactJS. My coursework and projects have equipped me with practical experience in Web Development.</p>
                    <p>During my internship at MF Computer Solutions, I had the opportunity to experience different paths in IT, including Computer and Printer Troubleshooting, CCTV Installation, Networking, and etc.. This experience not only honed my technical abilities but also enhanced my communication and teamwork skills in a professional setting.</p>
                    <h2>Technologies I Use</h2>
                    <div className="technologies">
                        <div className="tech-icon-container">
                            <FaReact className="tech-icon" style={{ color: '#61dafb' }} />
                            <span className="tech-name">React</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaBootstrap className="tech-icon" style={{ color: '#563d7c' }} />
                            <span className="tech-name">Bootstrap</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaHtml5 className="tech-icon" style={{ color: '#e34c26' }} />
                            <span className="tech-name">HTML</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaCss3Alt className="tech-icon" style={{ color: '#264de4' }} />
                            <span className="tech-name">CSS</span>
                        </div>
                        <div className="tech-icon-container">
                            <FaDatabase className="tech-icon" style={{ color: '#00758f' }} />
                            <span className="tech-name">PHP</span>
                        </div>
                    </div>
                    <div className="recommendation-container">
                        <h2>Recommendations</h2>
                        <div className="recommendation">
                            <div className="profile">
                                <FaUser className="profile-img" style={{ fontSize: '3rem', color: '#333', border: '2px solid #333', borderRadius: '50%', padding: '5px' }} />
                                <div className="profile-info">
                                    <h3>Jose Marie Clyde Taburada</h3>
                                    <p>Faculty Member at Central Philippines State University</p>
                                </div>
                            </div>
                            <p className="comment">"Leonard is a good student and web developer who shows professionalism and dedication in whatever he does. His software projects during his academic years are up to standard. Leonard also demonstrated social awareness skills through his involvement as a member in various student and special interest groups in the university."</p>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default About;
