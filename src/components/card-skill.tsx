import React from "react";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";

interface ICard {
  lst: {
    [key: string]: string;
  };
}

export default function SkillCard({ lst }: ICard) {
  return (
    <div className="lst-card">
      <h3>Skills</h3>
      <div className="content">
        {Object.entries(lst).map(([a, b], i) => (
          <div key={i}>
            <I icon={["fab", b as IconName]} fixedWidth /> {a}
          </div>
        ))}
      </div>
    </div>
  );
}
