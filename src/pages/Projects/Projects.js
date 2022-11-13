import React from 'react';
import AboutBook from '../../components/aboutBook';
import ExperienceBook from '../../components/experienceBook';
import './Project.css';
import mixEasy from '../../imgs/mixEasySS.jpg';
import battleStrategy from '../../imgs/readme_intro.jpg';
import caliPlanner from '../../imgs/Screenshot_of_project.png';

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
                <div className='space'></div>
                <div className='personal-b'>
                    <a href = "https://benefique-chocolatine-69489.herokuapp.com/" target = "_blank" rel = "noreferrer"><div className='project-box'><img src = {battleStrategy} alt ="battlestrategy"></img></div></a> 
                    <div className='title'>BattleStrategy</div>
                </div>
                <div className='personal'>
                    <a href = "https://github.com/ChrisDeng1999/California_Road_Trip_Planner" target = "_blank" rel = "noreferrer"><div className='project-box'><img src = {caliPlanner} alt ="California Road Trip Planner"></img></div></a>
                    <div className='title'>California Road Trip Planner</div>
                </div>
                <div className='personal'>
                    <a href = "https://guarded-reef-56811.herokuapp.com/" target = "_blank" rel = "noreferrer"><div className='project-box'><img src = {mixEasy} alt ="MixMe"></img></div></a>
                    <div className='title'>Mix Me</div>
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