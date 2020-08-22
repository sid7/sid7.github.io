import * as img from "../img";

interface IProjectLink {
  url: string;
  label: string;
}
type IProjectHost = "codepen" | "github";
export interface IProject {
  name: string;
  slug: string;
  desc: string[];
  img: string;
  links: IProjectLink[];
  host: IProjectHost;
}

function hostLinks(host: IProjectHost, slug: string): IProjectLink[] {
  switch (host) {
    case "codepen":
      return [
        { url: `https://codepen.io/sid7/pen/${slug}`, label: "Code" },
        { url: `https://codepen.io/sid7/full/${slug}`, label: "Preview" }
      ];
    case "github":
      return [
        { url: `https://github.com/sid7/${slug}`, label: "Project Repo" }
      ];
  }
}

const projectsLst: IProject[] = [
  {
    name: "Restaurant Review App",
    slug: "mws-restaurant-stage-1",
    desc: [""],
    img: img.restaurantReview,
    host: "github",
    links: []
  },
  {
    name: "The Game of Life",
    slug: "vgJwoP",
    desc: [""],
    img: img.gameOfLife,
    host: "codepen",
    links: []
  },
  {
    name: "Recipe Box",
    slug: "VPbGby",
    desc: [""],
    img: img.recipeBox,
    host: "codepen",
    links: []
  },
  {
    name: "Tic Tac Toe Game",
    slug: "XKZLmr",
    desc: [""],
    img: img.ticTacToe,
    host: "codepen",
    links: []
  },
  {
    name: "Pomodoro Clock",
    slug: "adRKBy",
    desc: [""],
    img: img.pomodoroClock,
    host: "codepen",
    links: []
  }
];

projectsLst.forEach((project) => {
  project.links.push(...hostLinks(project.host, project.slug));
});

export default projectsLst;
