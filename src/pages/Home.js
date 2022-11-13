import React from 'react';
import AboutBook from '../components/aboutBook';
import ProjectBook from '../components/projectBook';
import ExperienceBook from '../components/experienceBook';

const Home = () => {
    return( 
    <div className='container'> 
    <div className='row'> 
    <div id ='books-1'>  
    <div className='book-1 col-4'>
        <AboutBook />
    </div>
    <div className='book-2 col-4'>
        <ProjectBook />
    </div>
    <div className='book-3 col-4'> 
        <ExperienceBook />
    </div>
    </div>
    </div>
    </div>
);
};


export default Home;