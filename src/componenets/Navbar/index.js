import React from 'react';
import { useRef } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

    const navRef = useRef(null);

    const toggleNav = () => {
        navRef.current.classList.toggle('active'); 
    }

    return (
        <header>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/Home">Home</a>
                <a href="/Resume">Resume</a>
                <a href="/Projects">Projects</a>
                <a href="/Contact">Contact</a>
                <a href="https://www.linkedin.com/in/traeburn058/" target="_blank" rel="noreferrer"> linkedin</a>
                <button className="btn"><FontAwesomeIcon icon={faTimes} /></button>
            
            </nav>
            <button className="btn"><FontAwesomeIcon icon={faBars} /></button>
        </header>
    )
}

export default Navbar;