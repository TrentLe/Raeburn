import React, { useState } from 'react';
import Raelo from '../../assets/images/Raelo.png';
import './index.scss'


const Home = () => {
    return (
        <div className="container home">
            <div className="text-zone">
                <h1 className="title">Hi, I'm <span className="name">Trent
                 <img src={Raelo} alt="dev" /></span></h1>
               
               <h2> Full Stack Web Developer / Grapic Artist / Photographer</h2>
                <p className="description">I'm a full-stack web developer with a passion for creating beautiful, functional websites and applications.</p>
                </div>
            </div>
            
    )
}  

export default Home;