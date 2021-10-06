import { IconName } from "@fortawesome/fontawesome-svg-core";

export { default as projectsLst } from "./projects";

export const Certificates = {
  "Udaicty: Mobile Web Specialist Nanodegree":
    "https://confirm.udacity.com/EGTPLFVW",
  "FreeCodeCamp: Front-End Certificate":
    "https://www.freecodecamp.org/certification/sid7/legacy-front-end",
  "FreeCodeCamp: Responsive Web Design Certificate":
    "https://www.freecodecamp.org/certification/sid7/responsive-web-design",
  "FreeCodeCamp: JavaScript Algorithms and Data Structures Certificate":
    "https://www.freecodecamp.org/certification/sid7/javascript-algorithms-and-data-structures"
};
export const skillLst = {
  "HTML 5": "html5",
  "CSS 3": "css3-alt",
  JavaScript: "js",
  "React JS": "react",
  "Node JS": "node-js",
  Git: "git-square"
};
export const Achievements = {
  "Recipient of Google India Challenge Scholarship: Mobile Web":
    "https://sites.google.com/prod/udacity.com/gis2018",
  "GIS2018 Collaborative projects Moderator":
    "https://sites.google.com/prod/udacity.com/gis2018/community/collaborative-projects/mobile-web-specialist#h.p_a_ltL5EO8YDP"
};

interface ILinkObj {
  icon: IconName;
  url: string;
}

export interface ILinks {
  email: string;
  profiles: {
    [platform: string]: ILinkObj;
  };
  social: {
    [platform: string]: ILinkObj;
  };
  fcc: ILinkObj;
}

export const links: ILinks = {
  profiles: {
    Codepen: { icon: "codepen", url: "https://codepen.io/sid7/" },
    GitHub: { icon: "github", url: "https://github.com/sid7" }
  },
  social: {
    LinkedIn: {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/suyashbhutani/"
    },
    Twitter: { icon: "twitter", url: "https://twitter.com/sidzxzx" }
  },
  fcc: {
    icon: "free-code-camp",
    url: "https://www.freecodecamp.org/sid7"
  },
  email: "suyashsidzzz@gmail.com"
};
