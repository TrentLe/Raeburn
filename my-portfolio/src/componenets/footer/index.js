import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer__links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div className="footer__social">
            <a href="   https://www.linkedin.com/in/traeburn058/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
            </a>
            
            <a href="https://github.com/TrentLe" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
            </a>
        </div>
    </div>
    );
};

export default Footer;