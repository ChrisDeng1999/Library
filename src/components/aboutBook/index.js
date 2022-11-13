import React from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../imgs/cdeng-img.jpg';


const aboutBook = () => {


    return( 
    <div id = "books-1">  
        <div className="cover-1"><h2>About Me</h2></div>
        <div className="page-1"></div>
        <div className="page-1"></div>
        <div className="page-1"></div>
        <div className="page-1"></div>
        <div className="page-1"></div>
        <Link to ="/about" className="last-page-1">
            <img src = {Picture} alt ="Chris Deng"></img>
            <p id="demo1"></p>
        </Link>
        <div className="back-cover-1"></div>
    </div>
);
};




export default aboutBook;