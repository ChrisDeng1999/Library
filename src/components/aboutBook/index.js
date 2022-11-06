import React from 'react';
import Picture from '../../imgs/cdeng-img.jpg';


const aboutBook = () => {
    return( 
    <div className = "books">  
        <div className="cover-1"><h2>About Me</h2></div>
        <div className="page-1"></div>
        <div className="page-1"></div>
        <div className="page-1"></div>
        <div className="page-1"></div>
        <div className="page-1"></div>
        <div className="last-page-1" onClick={openBookOne}>
            <img src = {Picture} alt ="Chris Deng"></img>
            <p id="demo1"></p>
        </div>
        <div className="back-cover-1"></div>
    </div>
);
};


function openBookOne() {
    document.getElementById("demo1").innerHTML = "Hello World";
}


export default aboutBook;