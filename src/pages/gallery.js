import React from "react";

import Photos from "../componenets/Photos";
import Sidebar from "../componenets/Sidebar";

import "./gallery.scss";

const Gallery = () => {
    return (
    <div>
        <Photos />
        <Sidebar />
    </div>
    );
    }

    export default Gallery;