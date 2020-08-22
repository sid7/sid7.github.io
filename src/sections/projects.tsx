import React from "react";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { A } from "../components/utils";
import { IProject } from "../data/projects";
import { ILinks } from "../data";

interface IMyProjects {
  projectLst: IProject[];
  links: ILinks;
}

export const MyProjects = ({ projectLst, links }: IMyProjects) => {
  const profile_links = { ...links.profiles, FreeCodeCamp: links.fcc };
  return (
    <section id="projects" className="sec sec-projects">
      <h2 className="sec-heading">My Projects</h2>
      <div className="sec-content">
        {projectLst.map((p, i) => (
          <div className="card" key={i} tabIndex={0}>
            <div className="card-body img-container">
              <img src={p.img} alt={`Screenshot of ${p.name}`} />
              <h3>{p.name}</h3>
            </div>
            <div className="card-footer">
              {p.links.map(({ url, label }, j) => (
                <A className="link-btn btn-outline" href={url} key={j}>
                  <I icon={["fab", p.host]} fixedWidth /> {label}
                </A>
              ))}
            </div>
          </div>
        ))}
        <div className="card block" tabIndex={0}>
          <h3>Check more on</h3>
          <div className="flx">
            {Object.entries(profile_links).map(([n, p], i) => (
              <A className="link-btn" href={p.url} key={i}>
                <I icon={["fab", p.icon]} /> {n}
              </A>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
