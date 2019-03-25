import React from "react";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

const Header = () => (
  <header>
    <h1>Suyash Bhutani</h1>
    <nav className="quick-link">
      <a href="/">
        <I icon={["fab", "codepen"]} size="2x" fixedWidth />
      </a>{" "}
      <a href="/">
        <I icon={["fab", "github"]} size="2x" fixedWidth />
      </a>{" "}
      <a href="/">
        <I icon={["fab", "linkedin"]} size="2x" fixedWidth />
      </a>
    </nav>
  </header>
);

export default Header;