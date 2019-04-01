import React from "react";

const Navbar = ({ handleClick }) => (
  <nav className="site-nav">
    <a href="#about" onClick={handleClick}>
      About
    </a>
    <a href="#projects" onClick={handleClick}>
      Projects
    </a>
    <a href="#contact" onClick={handleClick}>
      Contact
    </a>
  </nav>
);

export default Navbar;
