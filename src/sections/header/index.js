import React from "react"
import "./index.scss"

const Header = ({ setSelected, hoverHeader, setHoverHeader }) => {
  return (
    <div class="header-section-wrapper">
      <a
        className={`header-wrapper pink-border ${
          hoverHeader ? "--yellow" : ""
        }`}
        href="/#about"
        onClick={() => {
          setHoverHeader(!hoverHeader)
          setSelected("about")
        }}
      >
        <h1>Revati Rajabhathor</h1>
        <h2 className="subheader">// Web Development • Art • Photography //</h2>
      </a>
    </div>
  )
}

export default Header
