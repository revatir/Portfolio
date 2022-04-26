import React from "react"
import "./index.scss"
import { projectList } from "./constants"

const Project = ({ project }) => {
  const { img, name, description, tech_used } = project

  return (
    <div className="single-project-wrapper">
      <a href={img.href} target="_blank" rel="noopener noreferrer">
        <img src={img.src} alt={img.alt} />
      </a>

      <a href={img.href} target="_blank" rel="noopener noreferrer">
        <div className="single-project-description">
          <h5>{name}</h5>
          <p>{description}</p>
          <h6>Technologies Used:</h6>
          <ul>
            {tech_used.map(tech => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </a>
    </div>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="section-wrapper --projects">
      <h3 className="text-align-left">Projects</h3>

      <div className="all-projects-wrapper">
        {projectList.map(project => (
          <Project project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
