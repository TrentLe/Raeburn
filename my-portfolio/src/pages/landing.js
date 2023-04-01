import React from "react";
import { Link } from "react-router-dom";
import Home from "../componenets/Home";

import Welcome from "../assets/images/Welcome.png";
import ImageButton from "../componenets/ImageButton";
import HomePage from "./home";

import "./landing.scss";




const LandingPage = () => {

    const handleClick = () => {
        console.log("clicked");
       <Link to="./Home">
        <HomePage />
       </Link>
    };

    return (
       
          <Link className="link" to="./Home">
            <div className="img-button">
                <ImageButton src={Welcome} alt="Welcome" onClick={handleClick} />
            </div>
            </Link>

         

    );
};

export default LandingPage;