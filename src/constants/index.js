import { grid, hexagon, octahedron, overlapping, torus, triangle } from "../assets";
import { cardweb, cardvr, cardmr, cardarduino, cardrobot, cardpcd } from "../assets";

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

export {
  pages, navLinks, abouts,
}