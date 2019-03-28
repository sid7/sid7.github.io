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
