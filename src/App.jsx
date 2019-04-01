import React, { Component } from "react";
import Header from "./components/header";
import Navbar from "./components/site-nav";
import About from "./components/about";
import MyProjects from "./components/projects";
import Contact from "./components/contact";

import { links, projectsLst } from "./data";
import scrollSpy from "./utils/scroll-spy";

window.scrollSpy = scrollSpy;

class App extends Component {
  componentDidMount() {
    scrollSpy.inject(".sec");
  }
  componentWillUnmount() {
    scrollSpy.eject();
  }
  render() {
    return (
      <>
        <Header />
        <Navbar />
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
