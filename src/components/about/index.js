import React from "react"
import "./index.scss"

import { Img } from "../../helpers"
import { revati, resume } from "../../assets"

const About = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "Javascript (ES6)",
    "Git",
    "GitHub",
    "SQL",
    "Express",
    "Node.js",
    "React",
    "Ruby",
    "Rails",
    "Python",
  ]

  return (
    <div id="about" className="section-wrapper --about">
      <a
        href="https://www.linkedin.com/in/revati-rajabhathor/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img src={revati} className="revati-pic" alt="Revati" />
      </a>
      <div className="about-inner-wrapper">
        <div>
          <h4>About Me</h4>
          <p>
            I'm a Full Stack Web Developer who strives to develop the strongest
            applications using cross-functional teamwork and an empathetic,
            people-centric approach. My creative, analytical, and collaborative
            skills help me break down complex issues into comprehensible and
            intuitive solutions using scalable, efficient, and manageable code.
          </p>
        </div>
        <div>
          <h4>Skills</h4>
          <ul className="skills">
            {skills.map(skill => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="resume-wrapper">
          <h4>Resume</h4>
          <div className="resume-img-wrapper">
            <a
              href="https://docdro.id/vqWrQKD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                src={resume}
                className="resume-img hover-scale"
                alt="resume"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
