import React, { Component } from "react";
import Header from "./components/header";
import Navbar from "./components/site-nav";
import About from "./components/about";
import MyProjects from "./components/projects";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Navbar />
        <About />
        <MyProjects />
        <Contact />
      </>
    );
  }
}

export default App;
