import React from 'react';

function Contacts() {
  return (
    <div id="contact" className="contact-section-outer-wrapper">
      <div className="contact-section-wrapper">
        <h4>Let's Connect:</h4>
        <div className="contact-section-inner-wrapper">
          <section className="email">
            <h3>Email:</h3>
            <a href="mailto: rajabhathorr@gmail.com" target="_blank" rel="noopener noreferrer">rajabhathorr@gmail.com</a>
          </section>
          <section className="socialmedia">
            <h3>Social Media:</h3>
            <a href="https://www.linkedin.com/in/revati-rajabhathor/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/revatir/" target="_blank" rel="noopener noreferrer">GitHub</a>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Contacts