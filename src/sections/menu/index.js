import React from "react"
import "./index.scss"

const Menu = ({ menuOptions, selected, setSelected }) => {
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
