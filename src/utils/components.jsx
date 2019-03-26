import React from "react";

export const A = ({ children, ...props }) => {
  if (props.target && !props.rel) {
    props.rel = "noreferrer noopener";
  }
  return <a {...props}>{children}</a>;
};
A.defaultProps = {
  target: "_blank"
};
