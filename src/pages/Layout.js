import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaBars } from 'react-icons/fa';
import './Layout.css';

function Layout() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <>
            <header>
                <div className="left-section">
                    <NavLink to="/" className="name-link">
                        <h1>Leonard Gregorios</h1>
                        <p className="navbar-text">Web Developer</p>
                    </NavLink>
                </div>
                <nav className="navbar">
                    <FaBars className="hamburger" onClick={toggleNav} />
                    <ul className={isNavVisible ? 'show' : ''}>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/experience"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                onClick={toggleNav}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="right-section">
                    <ul className="social-icons">
                        <li>
                            <a href="https://www.facebook.com/leonard.gregorios?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="fa-facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/leonardgregorios?igsh=MWFhMmF2bjg0MHVrMg==" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@greg77101?_t=8nnQXwhnHdq&_r=1" target="_blank" rel="noopener noreferrer">
                                <FaTiktok className="fa-tiktok" />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

            <hr />

            <div className="content">
                <Outlet />
            </div>

            <footer>
                <p>&copy; Leonard Gregorios</p>
                <ul className="social-icons">
                    <li>
                        <a href="https://www.facebook.com/leonard.gregorios?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="fa-facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/leonardgregorios?igsh=MWFhMmF2bjg0MHVrMg==" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="fa-instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@greg77101?_t=8nnQXwhnHdq&_r=1" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="fa-tiktok" />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Layout;
