import React from 'react';
import Picture from '../../imgs/cdeng-img.jpg';


const experienceBook = () => {
    return( 
    <div className = "books">  
        <div className="cover-3"><h2>Experience</h2></div>
        <div className="page-3"></div>
        <div className="page-3"></div>
        <div className="page-3"></div>
        <div className="page-3"></div>
        <div className="page-3"></div>
        <div className="last-page-3" onClick={openBookThree}>
            <img src = {Picture} alt ="Chris Deng"></img>
            <p id="demo3"></p>
        </div>
        <div className="back-cover-3"></div>
    </div>
);
};




function openBookThree() {
    document.getElementById("demo3").innerHTML = "Hello World";
}


export default experienceBook;