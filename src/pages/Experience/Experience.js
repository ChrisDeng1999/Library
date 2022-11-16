import React from 'react';
import './Experience.css';
import AboutBook from '../../components/aboutBook';
import ProjectBook from '../../components/projectBook';


const Experience = () => {
    return( 
    <div className='container'> 
    <div className ='row'>
    <div id="wrapper">
          <div id="contain">
            <section className="open-book perspective3">
              <div className = "head">
                <h6>Chris Deng</h6>
              </div>
              <article>
                <h1 className="chapter-title">Experience</h1>
                <p className='bold'>Mathnasium (4 years)</p>
                <p className='bold'>- Instructor (1 year)</p>
                <li className='exp'>In charge of teaching students assigned to you clearly and effectively while communicating to team leaders about any issues that may occur.</li>
                <p className='bold'>- Lead Instructor (2 year)</p>
                <li className='exp'>In charge of all students and staff by making sure they are teaching effectively while also making sure all students needs are being met.</li>
                <li className='exp'>Tasked with updating team leaders and parents about student progress.</li>
                <li className='exp'>Communicating between staff members and management to make sure everyone is on the same page.</li>
                <p className='bold'>- Assistant Center Director (1 year)</p>
                <li className='exp'>In charge of communicating with parents about their child's progress as well as a plan for the future.</li>
                <li className='exp'>Making sure both students and parents needs are being met.</li>
                <li className='exp'>Tasked with ensuring the quality of teaching is always high and if not guiding any team members who require assistance.</li>
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
    <div className='book-2 col-6'>
        <ProjectBook />
    </div>
    </div>
    </div>
    </div>
);
};


export default Experience;