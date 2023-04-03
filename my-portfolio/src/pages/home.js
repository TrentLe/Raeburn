import React from "react";
import { Link } from "react-router-dom";

import Home from "../componenets/Home";
import Sidebar from "../componenets/Sidebar";

import './home.scss'
import Navbar from "../componenets/Navbar";

const HomePage = () => {
    return (
       <div>
        <Home />
        <Navbar />
       <Sidebar />
   
       </div> 
   
    );
}

export default HomePage;