import React from "react";
import { Link } from "react-router-dom";

import Home from "../componenets/Home";
import Sidebar from "../componenets/Sidebar";

import './home.scss'

const HomePage = () => {
    return (
       <div>
        <Home />
       <Sidebar />
   
       </div> 
   
    );
}

export default HomePage;