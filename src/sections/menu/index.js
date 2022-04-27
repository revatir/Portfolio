import React from "react"
import SmoothScroll from "smooth-scroll"
import "./index.scss"

const Menu = ({ menuOptions, selected, setSelected }) => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    easing: "easeInOutQuart",
    offset: function (anchor) {
      const { id } = anchor
      if (id === "projects" || id === "photography" || id === "contact")
        return 115
      else return 30
    },
  })

  return (
    <menu>
      <ul className="menu-list">
        {menuOptions.map(item => {
          return (
            <a
              href={`/#${item}`}
              onClick={() => setSelected(item)}
              className={`menu-item ${selected === item ? "--selected" : ""}`}
            >
              <li>{item}</li>
            </a>
          )
        })}
      </ul>
    </menu>
  )
}

export default Menu
