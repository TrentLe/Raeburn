import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = useState(false);

    const pageRender = () => {
        if (active) {
            return (
                <div className="header__links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            );
        }
   
        return null;
    };

    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">Raeburn</Link>
            </div>
            <div className="header__menu" onClick={() => setActive(!active)}>
                <div className="header__menu__line"></div>
                <div className="header__menu__line"></div>
                <div className="header__menu__line"></div>
            </div>
            {pageRender()}
        </div>
    );
};


export default Header;

