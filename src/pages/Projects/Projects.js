import React from 'react';
import AboutBook from '../../components/aboutBook';
import ExperienceBook from '../../components/experienceBook';

const Projects = () => {
    return( 
        <div className='container'> 
        <div className ='row'>
        <div id="wrapper">
          <div id="contain">
            <section className="open-book">
              <div className = "head">
                <h6>Chris Deng</h6>
              </div>
              <article>
                <h1 className="chapter-title">Projects</h1>
                <div className='personal'>
                    <div className='project-box'>
                        <p>BattleStrategy</p>
                    </div>
                </div>

   
                
            
              </article>
              <div className = "foot">
                <ol id="page-numbers">
                  <li>1</li>
                  <li>2</li>
                </ol>
              </div>
            </section>
          </div>
        </div>
        </div>
        <div className='row'> 
        <div id ='books-1'>  
        <div className='book-1 col-6'>
            <AboutBook />
        </div>
        <div className='book-3 col-6'>
            <ExperienceBook />
        </div>
        </div>
        </div>
        </div>
);
};


export default Projects;