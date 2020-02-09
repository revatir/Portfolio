import React from 'react';
import donut from '../Images/donut.png'
import resolve from '../Images/resolve2.png'
import evolvingnyc from '../Images/evolvingnyc.png'

function Projects() {
  return (
    <div id="projects" className="projects-section-wrapper">
      <h4>Projects</h4>
      <div className="all-projects-wrapper">
        <div className="single-project-wrapper">
          <a href="http://peterpan.surge.sh/" target="_blank" rel="noopener noreferrer">
            <img src={donut} alt="Peter Pan Donut Shop" />
          </a>
          <div className="single-project-description">
            <h5>
              <a href="http://peterpan.surge.sh/" target="_blank" rel="noopener noreferrer">
                Peter Pan Donuts
                </a>
            </h5>
            <p>A colloboration with UX designers to redesign the website of the nationally renowned Brooklyn donut shop, <a href="http://peterpan.surge.sh/" target="_blank" rel="noopener noreferrer">Peter Pan Donuts</a>. The original website is <a href="http://peterpandonuts.com/" target="_blank" rel="noopener noreferrer">here</a> for comparison.</p>
            <h6>Technologies Used:</h6>
            <ul>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className="single-project-wrapper">
          <a href="http://resolve.surge.sh/" target="_blank" rel="noopener noreferrer">
            <img src={resolve} alt="Resolve" />
          </a>
          <div className="single-project-description">
            <h5>
              <a href="http://resolve.surge.sh/" target="_blank" rel="noopener noreferrer">
                Resolve
                </a>
            </h5>
            <p>A full-stack social media application, <a href="http://resolve.surge.sh/" target="_blank" rel="noopener noreferrer">Resolve</a> allows users to create a personal profile and share personal resolutions. Users can view other profiles on the platform to inspire their own goals.</p>
            <h6>Technologies Used:</h6>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
          </div>
        </div>
        <div className="single-project-wrapper">
          <a href="http://evolvingnyc.surge.sh/" target="_blank" rel="noopener noreferrer">
            <img src={evolvingnyc} alt="Evolving NYC" />
          </a>
          <div className="single-project-description">
            <h5>
              <a href="http://evolvingnyc.surge.sh/" target="_blank" rel="noopener noreferrer">
                Evolving NYC
                </a>
            </h5>
            <p>A tool for NYC residents, <a href="http://evolvingnyc.surge.sh/" target="_blank" rel="noopener noreferrer">Evolving NYC</a> tracks reconstruction plans in the city using the NYC Department of Buildings permit database. This application aims to help New Yorkers see the history of change in their community. </p>
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