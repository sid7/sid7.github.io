import React from "react";
import Stamp from "../components/stamp";
import { A } from "../components/utils";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";
import { ILinks } from "../data";

export const Contact = ({ email, social, profiles }: ILinks) => (
  <section id="contact" className="sec sec-contact">
    <h2 className="sec-heading">Contact</h2>
    <div className="sec-content">
      <A className="link-btn" href={"mailto:" + email} aria-label="email">
        <I icon={["far", "envelope"]} size="lg" /> {email}
      </A>
      <div className="stamp-group">
        {Object.entries(profiles).map(([a, b], i) => (
          <Stamp {...b} key={i}>
            {a}
          </Stamp>
        ))}
        {Object.entries(social).map(([a, b], i) => (
          <Stamp {...b} key={i}>
            {a}
          </Stamp>
        ))}
      </div>
    </div>
  </section>
);
