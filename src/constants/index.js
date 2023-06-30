import { grid, hexagon, octahedron, overlapping, torus, triangle } from "../assets";
import { cardweb, cardvr, cardmr, cardarduino, cardrobot, cardpcd } from "../assets";
import { css, html, js, ts, reactjs, nodejs, tailwindcss, mongodb, threejs, redux, git, ros, arduino, csharp, mrtk, python  } from "../assets";

const pages = {
  Hero: 'Hero',
  About: 'About',
  Work: 'Work',
  Contact: 'Contact'
}

const navLinks = [
  {
    id: "about",
    title: pages.About,
  },
  {
    id: "work",
    title: pages.Work,
  },
  {
    id: "contact",
    title: pages.Contact,
  },
];

const abouts = [
  {
    id: "web",
    title: "Web Application",
    icon: grid,
    image: cardweb,
  },
  {
    id: "vr",
    title: "VR Application",
    icon: hexagon,
    image: cardvr,
  },
  {
    id: "mr",
    title: "MR Application",
    icon: octahedron,
    image: cardmr,
  },
  {
    id: "arduino",
    title: "Arduino Project",
    icon: overlapping,
    image: cardarduino,
  },
  {
    id: "robot",
    title: "Autonomous Mobile Robot",
    icon: torus,
    image: cardrobot,
  },
  {
    id: "pointcloud",
    title: "Point Cloud Analyzation",
    icon: triangle,
    image: cardpcd,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: js,
  },
  {
    name: "TypeScript",
    icon: ts,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "ros",
    icon: ros,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "arduino",
    icon: arduino,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "mrtk",
    icon: mrtk,
  },
];

export {
  pages, navLinks, abouts, technologies,
}