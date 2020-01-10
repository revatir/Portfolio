import React from 'react';

import Revati from '../reactImages/Revati.JPG'

function About() {
  return (
    <div className="wrapper">
      <img src={Revati} id="revati-pic" />
      <div className="innerWrapper">
        <section id="aboutMe">
          <h3>About Me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </section>
        <section>
          <h3>Skills</h3>
          <ul id="skills">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Ruby</li>
            <li>SQL</li>
          </ul>
        </section>
        <section>
          <h3>Resume:</h3>
          <p>[Insert Resume Here]</p>
        </section>
      </div>
    </div>
  )
}

export default About