import React from "react";
import { A } from "../utils/components";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

const Header = ({ profiles, social }) => (
  <header>
    <h1>Suyash Bhutani</h1>
    <nav className="quick-link">
      <A
        href={profiles.Codepen.url}
        title="Codepen Profile"
        aria-label="codepen profile"
      >
        <I icon={["fab", "codepen"]} size="2x" fixedWidth />
      </A>{" "}
      <A
        href={profiles.GitHub.url}
        title="GitHub Profile"
        aria-label="github profile"
      >
        <I icon={["fab", "github"]} size="2x" fixedWidth />
      </A>{" "}
      <A
        href={social.LinkedIn.url}
        title="LinkedIn Profile"
        aria-label="linkedin profile"
      >
        <I icon={["fab", "linkedin"]} size="2x" fixedWidth />
      </A>
    </nav>
  </header>
);

export default Header;
