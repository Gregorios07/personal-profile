import React, { useRef } from 'react';
import './Projects.css';
import dashboardImage from '../images/dashboard.png';
import posterImage from '../images/poster.png';
import sampleVideo from '../videos/sample-video.mp4';
import profileVideo from '../videos/profile.mp4';
import { useSpring, animated } from '@react-spring/web';

const Projects = () => {
    const fadeInStyles = useSpring({
        from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
        to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
        config: { duration: 1000 },
    });

    const handleMouseEnter = (videoRef) => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = (videoRef) => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0; // Reset video to the beginning
        }
    };

    const sampleVideoRef = useRef(null);
    const profileVideoRef = useRef(null);

    return (
        <animated.div style={fadeInStyles} className="projects-container">
            <div className="container-title">
                <h1>Projects</h1>
                <p className="subtitle">Explore my projects</p>
            </div>
            <div className="projects-content">
                <div className="project-side">
                    <div className="project-card">
                        <div className="project-info">
                            <h2>CCS - Inventory Control System</h2>
                        </div>
                        <video
                            ref={sampleVideoRef}
                            onMouseEnter={() => handleMouseEnter(sampleVideoRef)}
                            onMouseLeave={() => handleMouseLeave(sampleVideoRef)}
                            muted // Ensure the video is muted
                        >
                            <source src={sampleVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="project-number">
                            <p>01</p>
                        </div>
                    </div>
                </div>
                <div className="project-side">
                    <div className="project-card dark-bg">
                        <div className="project-info">
                            <h2>Colloquium Poster Contest</h2>
                        </div>
                        <div className="project-image zoom">
                            <img src={posterImage} alt="Dashboard Project" />
                        </div>
                        <div className="project-number">
                            <p>02</p>
                        </div>
                    </div>
                </div>
                <div className="project-side">
                    <div className="project-card">
                        <div className="project-info">
                            <h2>Personal Profile</h2>
                        </div>
                        <video
                            ref={profileVideoRef}
                            onMouseEnter={() => handleMouseEnter(profileVideoRef)}
                            onMouseLeave={() => handleMouseLeave(profileVideoRef)}
                            muted // Ensure the video is muted
                        >
                            <source src={profileVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="project-number">
                            <p>03</p>
                        </div>
                    </div>
                </div>
            </div>
        </animated.div>
    );
}

export default Projects;
