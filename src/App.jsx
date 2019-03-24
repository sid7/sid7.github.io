import React, { Component } from "react";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

class App extends Component {
  render() {
    return (
      <>
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
        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <section id="about" className="sec sec-about">
          <h2 className="sec-heading">About</h2>
        </section>
        <section id="projects" className="sec sec-projects">
          <h2 className="sec-heading">Projects</h2>
        </section>
        <section id="contact" className="sec sec-contact">
          <h2 className="sec-heading">Contact</h2>
        </section>
      </>
    );
  }
}

export default App;
