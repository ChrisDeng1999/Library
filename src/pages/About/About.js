import React from "react";
import './About.css';
import ProjectBook from "../../components/projectBook";
import ExperienceBook from "../../components/experienceBook";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div id="wrapper">
          <div id="contain">
            <section className="open-book">
              <div className="head">
                <h6>Chris Deng</h6>
              </div>
              <article>
                <h1 className="chapter-title">About Me</h1>
                <p>
                  Hello, my name is Chris Deng. I am a 23-year-old male who has
                  graduated from California State Polytechnic University Pomona
                  with a degree in Business Administration and an emphasis in
                  Finance.
                </p>
                <p>
                  During my second year of college, I decided to pick
                  up a part-time job at Mathnasium, and I have been with the
                  company for four years. In my time at Mathnasium, I started as
                  an Instructor, was promoted to lead Instructor, and eventually
                  an Assistant Center Director with the intention of becoming
                  the Center Director after I graduated college. After
                  graduating, however, I decided to pursue a passion of mine,
                  being a developer. 
                </p>
                <p>
                  And in May of 2022, I took part in the UCLA
                  Full Stack Web Development Coding Boot Camp. There I was able
                  to learn skills such as HTML, CSS, Javascript(JQuery),
                  Node.js, Express.js, MySQL(Sequalize), MongoDB(Mongoose),
                  React.js, and responsive web design. I worked in teams as a
                  team leader in charge of daily scruming, assigning tasks, and
                  making sure each team member is using their time efficiently
                  and effectively. I've directed my team members towards an MVP
                  while also keeping in mind a simple and intuitive UI. I am
                  extremely thrilled to continue to learn and expand my
                  knowledge and skill set as a developer.
                </p>
              </article>
              <div className="foot">
                <ol id="page-numbers">
                  <li>1</li>
                  <li>2</li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="row">
        <div id="books-1">
          <div className="book-2 col-6">
            <ProjectBook />
          </div>
          <div className="book-3 col-6">
            <ExperienceBook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
