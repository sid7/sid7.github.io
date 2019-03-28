import React from "react";
import { Stamp } from "../utils/components";
import { FontAwesomeIcon as I } from "@fortawesome/react-fontawesome";

const Contact = ({ email, social, profiles }) => (
  <section id="contact" className="sec sec-contact">
    <h2 className="sec-heading">Contact</h2>
    <div className="sec-content">
      <a className="link-btn" href={"mailto:" + email} aria-label="email">
        <I icon={["far", "envelope"]} size="lg" /> {email}
      </a>
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

export default Contact;
