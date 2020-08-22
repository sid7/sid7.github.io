import React from "react";
import { A } from "./utils";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";

interface IStamp {
  url: string;
  icon: IconName;
  fa: IconPrefix;
  children: string;
}

export default function Stamp(props: IStamp) {
  return (
    <A className="stamp" href={props.url}>
      <I icon={[props.fa, props.icon]} className="stamp-icon" fixedWidth />{" "}
      <span className="stamp-title">{props.children}</span>
    </A>
  );
}
Stamp.defaultProps = {
  fa: "fab"
};
