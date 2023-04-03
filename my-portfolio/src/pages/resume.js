import React from "react";
import { Link } from "react-router-dom";
import Resume from "../componenets/Resume";
import Sidebar from "../componenets/Sidebar";
import Navbar from "../componenets/Navbar";

const ResumePage = () => {
    return (
     <div className="resume-page">
   
            <Navbar />
            <Resume />
            <Sidebar />
           </div>
    
    );
    }

export default ResumePage;