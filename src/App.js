import React, { useState, useEffect } from "react"
import "./styles/global.scss"

//Custom Components
import { Menu, Header, About, Contact, Projects, Photography } from "./sections"

const App = () => {
  const [selected, setSelected] = useState("")
  const [hoverHeader, setHoverHeader] = useState(null)

  const menuOptions = ["about", "projects", "photography", "contact"]

  useEffect(() => {
    console.log(hoverHeader)
  }, [hoverHeader])

  return (
    <div className="app">
      <Menu
        menuOptions={menuOptions}
        selected={selected}
        setSelected={setSelected}
      />
      <Header
        selected={selected}
        setSelected={setSelected}
        hoverHeader={hoverHeader}
        setHoverHeader={setHoverHeader}
      />
      <div className="scroll-content">
        <About />
        <Projects />
        <Photography />
        <Contact />
      </div>
    </div>
  )
}

export default App
