import { grid, hexagon, octahedron, overlapping, torus, triangle } from "../assets";

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
    title: "Web Application",
    icon: grid,
  },
  {
    title: "VR Application",
    icon: hexagon,
  },
  {
    title: "MR Application",
    icon: octahedron,
  },
  {
    title: "Arduino Project",
    icon: overlapping,
  },
  {
    title: "Autonomous Mobile Robot",
    icon: torus,
  },
  {
    title: "Point Cloud Analyzation",
    icon: triangle,
  },
];

export {
  pages, navLinks, abouts,
}