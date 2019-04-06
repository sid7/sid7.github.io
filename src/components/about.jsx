import React from "react";
import { skillLst, Achievements, Certificates } from "../data";
import { A, Lst, SkillCard } from "../utils/components";

const Txt = () => (
  <p>
    I am Suyash Bhutani from{" "}
    <A
      className="link"
      href="https://goo.gl/maps/HvY74XbQmoD2"
      aria-label="on google map"
    >
      {" "}
      Jabalpur (M.P), India
    </A>
    . Self taught web developer able to build web site and web app (PWA) from
    group up - from concept, layouts and UX to programming with back-end logic.
    Fast learner, hard worker and team player.
  </p>
);

const About = () => (
  <section id="about" className="sec sec-about">
    <h2 className="sec-heading">About Me</h2>
    <div className="sec-content">
      <Txt />
      <div className="flx">
        <Lst className="lst lst-achiev" name="Achievements">
          {Achievements}
        </Lst>
        <SkillCard lst={skillLst} />
        <Lst className="lst lst-cert" name="Certificates">
          {Certificates}
        </Lst>
      </div>
    </div>
  </section>
);

export default About;
