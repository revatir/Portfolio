import React from 'react';

function Menu() {
  return (
    <menu>
      <ul id="menuList">
        <a href="/#about" className="menuItem"><li>About</li></a>
        <a href="/#projects" className="menuItem"><li>Projects</li></a>
        <a href="/#photography" className="menuItem"><li>Photography</li></a>
        <a href="/#contact" className="menuItem"><li>Contact</li></a>
      </ul>
    </menu>
  )
}

export default Menu