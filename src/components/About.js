import React from 'react';

import Revati from '../Images/Revati.JPG'

function About() {
  return (
    <div id="about" className="section-wrapper">
      <img src={Revati} id="revati-pic" alt="Revati" />
      <div className="about-inner-wrapper">
        <section id="aboutMe">
          <h3>About Me</h3>
          <p>As a tenacious legal specialist turned passionate software developer, my background in corporate-governance and client relations has given me the analytical thinking and collaborative skills needed to build dynamic and responsive web applications. Whether it be elaborate legal records or code, I have an innate ability to break down complex information into comprehensible, intuitive solutions. I believe that the best results are achieved through cross-functional team work with an empathetic and people-centric approach.</p>
        </section>
        <section>
          <h3>Skills</h3>
          <ul id="skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript (ES6)</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>SQL</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Ruby</li>
            <li>Rails</li>
            <li>Python</li>
          </ul>
        </section>
        <section id="resume">
          <h3>Resume:</h3>
          <a href="https://www.docdroid.net/e1QPOkU/revati-rajabhathor-resume.pdf" target="_blank" rel="noopener noreferrer">Click Here for Resume</a>
        </section>
      </div>
    </div>
  )
}

export default About