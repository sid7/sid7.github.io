import React, { HTMLAttributes } from "react";
import { A } from "./utils";

interface ILst extends HTMLAttributes<HTMLDListElement> {
  name: string;
  children: {};
}

export default function Lst({ name, children, ...props }: ILst) {
  return (
    <dl {...props}>
      <dt>{name}</dt>
      {Object.entries(children).map(([a, b], i) => (
        <dd key={i}>
          <A href={b as string}>{a}</A>
        </dd>
      ))}
    </dl>
  );
}
