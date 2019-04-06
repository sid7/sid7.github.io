import React from "react";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

export const A = ({ children, ...props }) => {
  if (props.target && !props.rel) {
    props.rel = "noreferrer noopener";
  }
  return <a {...props}>{children}</a>;
};
A.defaultProps = {
  target: "_blank"
};

export const Stamp = ({ url, children, icon, fa = "fab" }) => (
  <A className="stamp" href={url}>
    <I className="stamp-icon" icon={[fa, icon]} fixedWidth />{" "}
    <span className="stamp-title">{children}</span>
  </A>
);

export const SkillCard = ({ lst }) => (
  <div className="lst-card">
    <h3>Skills</h3>
    <div className="content">
      {Object.entries(lst).map(([a, b], i) => (
        <div key={i}>
          <I icon={["fab", b]} fixedWidth /> {a}
        </div>
      ))}
    </div>
  </div>
);

export const Lst = ({ name, children, ...props }) => (
  <dl {...props}>
    <dt>{name}</dt>
    {Object.entries(children).map(([a, b], i) => (
      <dd key={i}>
        <A href={b}>{a}</A>
      </dd>
    ))}
  </dl>
);
