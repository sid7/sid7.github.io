import React, { Component } from "react";
import Header from "./components/header";
import Navbar from "./components/site-nav";
import About from "./components/about";
import MyProjects from "./components/projects";
import Contact from "./components/contact";

import { links, projectsLst } from "./data";
import scrollSpy from "./utils/scroll-spy";
import utils from "./utils/utils";

window.scrollSpy = scrollSpy;

class App extends Component {
  componentDidMount() {
    scrollSpy.inject(".sec");
    document.querySelectorAll(".img-container").forEach(i => {
      i.addEventListener("mousemove", utils.zoomEft);
    });
  }
  componentWillUnmount() {
    scrollSpy.eject();
    document.querySelectorAll(".img-container").forEach(i => {
      i.removeEventListener("mousemove", utils.zoomEft);
    });
  }
  render() {
    return (
      <>
        <Header />
        <Navbar handleClick={utils.aniScroll} />
        <About />
        <MyProjects
          lst={projectsLst}
          pl={{ ...links.profiles, FreeCodeCamp: links.fcc }}
        />
        <Contact {...links} />
      </>
    );
  }
}

export default App;
