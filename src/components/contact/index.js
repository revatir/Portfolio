import React from "react"
import "./index.scss"
import { Img, Link } from "../../helpers"
import { resume } from "../../assets"

const Contacts = () => {
  return (
    <div className="section-wrapper --contact">
      <h3>Let's Connect:</h3>
      <div className="contact-wrapper">
        <div className="social-email-wrapper">
          <h4>Email:</h4>
          <Link
            href="mailto: rajabhathorr@gmail.com"
            content="rajabhathorr@gmail.com"
          />

          <h4>Social Media:</h4>
          <Link
            href="https://www.linkedin.com/in/revati-rajabhathor/"
            content="LinkedIn"
          />
          <Link href="https://github.com/revatir/" content="GitHub" />
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

export default Contacts
