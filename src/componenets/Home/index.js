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
               
               <h2> Full Stack Web Developer / Grapic Artist / Photographer</h2>
               <div className='description'>
                <p className='p-text'>I'm a full-stack web developer with a passion for creating beautiful, functional websites and applications.
                I have a background in graphic design and photography, which has given me a unique perspective on not only the web development process, but the world as a whole.
                I'm always looking for new opportunities to learn and grow, in hopes of becoming a better developer and a better person. The world we live in is constantly changing, 
                for better or for worse, and I believe that it is our responsibility to do our part in making it a better place for everyone. We can do this together, but we can Only do this together.
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