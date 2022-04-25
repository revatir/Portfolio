import React from "react"
import "./index.scss"

import { Img } from "../../helpers"
import { revati, resume } from "../../assets"

const Link = ({ href, content }) => {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}

const Contact = () => {
  return (
    <div id="contact" className="section-wrapper --contact">
      <h3>Let's Connect</h3>

      <div className="contact-inner-wrapper">
        <div>
          <div className="email-wrapper">
            <h4>Email</h4>
            <Link
              href="mailto: rajabhathorr@gmail.com"
              content="rajabhathorr@gmail.com"
            />
          </div>

          <div className="social-wrapper">
            <h4>Social Media</h4>
            <Link
              href="https://www.linkedin.com/in/revati-rajabhathor"
              content="LinkedIn"
            />{" "}
            <Link href="https://github.com/revatir/" content="GitHub" />
          </div>
        </div>

        <div className="resume-wrapper">
          <h4>Resume</h4>
          <div>
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

export default Contact
