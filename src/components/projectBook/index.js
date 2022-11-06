import React from 'react';
import Picture from '../../imgs/cdeng-img.jpg';


const projectBook = () => {
    return( 
    <div className = "books">  
        <div className="cover-2"><h2>Projects</h2></div>
        <div className="page-2"></div>
        <div className="page-2"></div>
        <div className="page-2"></div>
        <div className="page-2"></div>
        <div className="page-2"></div>
        <div className="last-page-2" onClick={openBookTwo}>
            <img src = {Picture} alt ="Chris Deng"></img>
            <p id="demo2"></p>
        </div>
        <div className="back-cover-2"></div>
    </div>
);
};



function openBookTwo() {
    document.getElementById("demo2").innerHTML = "Hello World";
}



export default projectBook;