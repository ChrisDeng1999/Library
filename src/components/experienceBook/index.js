import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../imgs/cdeng-img.jpg';


const experienceBook = () => {
    return( 
    <div id = "books-3">  
        <div className="cover-3"><h2>Experience</h2></div>
        <div className="page-3"></div>
        <div className="page-3"></div>
        <div className="page-3"></div>
        <div className="page-3"></div>
        <div className="page-3"></div>
        <Link to ='/experience' className="last-page-3">
            <img src = {Picture} alt ="Chris Deng"></img>
            <p id="demo3"></p>
        </Link>
        <div className="back-cover-3"></div>
    </div>
);
};






export default experienceBook;