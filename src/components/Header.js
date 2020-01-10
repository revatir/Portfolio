import React from 'react';

//React Router
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="headerWrapper">
      <header>
        <Link to="/" id="name"><h1>REVATI RAJABHATHOR</h1></Link>
        <h2 id="subheader">Software Engineer</h2>
      </header>
      <menu>
        <ul id="menuList">
          <Link to="About" className="menuItem"><li>About</li></Link>
          <Link to="Projects" className="menuItem"><li>Projects</li></Link>
          <Link to="Photography" className="menuItem"><li>Photography</li></Link>
          <Link to="Contacts" className="menuItem"><li>Contact</li></Link>
        </ul>
      </menu>
    </div>
  )
}

export default Header