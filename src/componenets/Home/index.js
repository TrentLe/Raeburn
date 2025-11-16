import React, { useState } from 'react';
import Raelo from '../../assets/images/Raelo.png';
import Trent from '../../assets/images/Trent.png';
import './index.scss'


const Home = () => {
    return (
        <div className="container home">
            <div className="text-zone">
                <h1 className="title">Hi, I'm <br /><span className="name">
                 <img src={Trent} alt="dev" /></span></h1>
               
               <h2> Project Coordinator</h2>
               <div className='description'>
                <p className='p-text'>In a world driven by AI and automated systems I aim to bring fresh eyes and a new perspective to avoid being 
                    stuck in a binary monochrome society. Too often, we look at the gears that are spinning and not realizing it is the screws holding things in place.
                <br />
                <br />
                On this site you will find a collection of my work, as well as a link to my resume and contact information.
                Please feel free to reach out to me with any questions or comments you may have. I look forward to hearing from you!
                Thank you for visiting my site! I hope you enjoy your stay.
                </p>
                </div>
                </div>
            </div>
            
    )
}  

export default Home;