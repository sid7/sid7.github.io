import React, { useEffect } from "react";
import { Header, Navbar, About, MyProjects, Contact } from "./sections";
import { links, projectsLst } from "./data";
import scrollSpy from "./scripts/scroll-spy";
import utils from "./scripts/utils";
import ReactGA from "react-ga";

(window as any).scrollSpy = scrollSpy;

if (process.env.NODE_ENV === "production") {
  ReactGA.initialize("UA-138058198-1");
  ReactGA.pageview(window.location.href);
}

export default function App() {
  useEffect(() => {
    scrollSpy.inject(".sec");
    document.querySelectorAll(".img-container").forEach((i) => {
      i.addEventListener(
        "mousemove",
        utils.zoomEft as EventListenerOrEventListenerObject
      );
    });
    return () => {
      scrollSpy.eject();
      document.querySelectorAll(".img-container").forEach((i) => {
        i.removeEventListener(
          "mousemove",
          utils.zoomEft as EventListenerOrEventListenerObject
        );
      });
    };
  }, []);
  return (
    <>
      <Header {...links} />
      <Navbar handleClick={utils.aniScroll} />
      <About />
      <MyProjects projectLst={projectsLst} links={links} />
      <Contact {...links} />
    </>
  );
}
