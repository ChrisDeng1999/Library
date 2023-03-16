import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../imgs/projectImage.jpg';


const projectBook = () => {
    return( 
    <div id = "books-2">  
        <div className="cover-2"><h2>Projects</h2></div>
        <div className="page-2"></div>
        <div className="page-2"></div>
        <div className="page-2"></div>
        <div className="page-2"></div>
        <div className="page-2"></div>
        <Link to ='/projects' className="last-page-2">
            <img src = {Picture} alt ="Chris Deng"></img>
            <p id="demo2"></p>
        </Link>
        <div className="back-cover-2"></div>
    </div>
);
};







export default projectBook;