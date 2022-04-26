import React from "react"
import "./index.scss"

import { donut, resolve, evolvingnyc } from "../../assets"

const Projects = () => {
  return (
    <div id="projects" className="section-wrapper --projects">
      <h3 className="text-align-left">Projects</h3>

      <div className="all-projects-wrapper">
        <div className="single-project-wrapper">
          <a
            href="http://peterpan.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={donut} alt="Peter Pan Donut Shop" />
          </a>
          <div className="single-project-description">
            <h5>Peter Pan Donuts</h5>
            <p>
              A collaboration with UX designers to redesign the website of the
              nationally renowned Brooklyn donut shop, Peter Pan Donuts.
            </p>
            <h6>Technologies Used:</h6>
            <ul>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className="single-project-wrapper">
          <a
            href="http://resolve.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={resolve} alt="Resolve" />
          </a>
          <div className="single-project-description">
            <h5>Resolve</h5>
            <p>
              A full-stack social media application,{" "}
              <a
                href="http://resolve.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resolve
              </a>{" "}
              allows users to create a personal profile and share personal
              resolutions. Users can view other profiles on the platform to
              inspire their own goals.
            </p>
            <h6>Technologies Used:</h6>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
        <div className="single-project-wrapper">
          <a
            href="http://evolvingnyc.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={evolvingnyc} alt="Evolving NYC" />
          </a>
          <div className="single-project-description">
            <h5>Evolving NYC</h5>
            <p>
              A tool for NYC residents, is an application that pulls data from
              the NYC Department of Buildings permit database to track urban
              reconstruction plans throughout the years. Its purpose is to help
              New Yorkers see the history of change in their community as well
              as future plans for projected change.
            </p>
            <h6>Technologies Used:</h6>
            <ul>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
