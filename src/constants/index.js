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
    id: "web",
    title: "Web Application",
    icon: grid,
  },
  {
    id: "vr",
    title: "VR Application",
    icon: hexagon,
  },
  {
    id: "mr",
    title: "MR Application",
    icon: octahedron,
  },
  {
    id: "arduino",
    title: "Arduino Project",
    icon: overlapping,
  },
  {
    id: "robot",
    title: "Autonomous Mobile Robot",
    icon: torus,
  },
  {
    id: "pointcloud",
    title: "Point Cloud Analyzation",
    icon: triangle,
  },
];

export {
  pages, navLinks, abouts,
}