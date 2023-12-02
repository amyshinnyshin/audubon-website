import React from "react";
import { Link } from "react-router-dom";

import './TopNav.css'


const TopNav = () => {
    return (
        <div className="top-nav-container">
            <Link to="/"> 
                <img className="audubon-society-logo" src="https://upload.wikimedia.org/wikipedia/en/c/c6/Audubon_logo.svg" alt='audubon society'></img>
            </Link>
        </div>
        
    )
};

export default TopNav