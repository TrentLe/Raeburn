import React from "react";
import { Link } from "react-router-dom";
import Resume from "../componenets/Resume";
import Sidebar from "../componenets/Sidebar";

const ResumePage = () => {
    return (
     <div className="resume-page">
        <h1>Resume</h1>
        
            <Resume />
            <Sidebar />
           </div>
    
    );
    }

export default ResumePage;