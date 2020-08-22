import React from "react";

interface IExternalLink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

// eslint-disable-next-line jsx-a11y/anchor-has-content
export const A = (props: IExternalLink) => <a {...props} />;
A.defaultProps = {
  target: "_blank",
  rel: "noreferrer noopener"
};
