import React from "react";

export const Navbar = ({ handleClick }: { handleClick: any }) => (
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
