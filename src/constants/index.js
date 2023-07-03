import {
  grid,
  hexagon,
  octahedron,
  overlapping,
  torus,
  triangle,
} from "../assets";
import {
  cardweb,
  cardvr,
  cardmr,
  cardarduino,
  cardrobot,
  cardpcd,
} from "../assets";
import {
  css,
  html,
  js,
  ts,
  reactjs,
  nodejs,
  tailwindcss,
  mongodb,
  threejs,
  redux,
  git,
  ros,
  arduino,
  csharp,
  mrtk,
  python,
} from "../assets";
import {
  codegpt,
  dataanalytics,
  evogym,
  portfolio,
  sinsight,
  tshortmaker,
} from "../assets";

const pages = {
  Hero: "Hero",
  About: "About",
  Work: "Work",
  Contact: "Contact",
};

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
  // {
  //   name: "ros",
  //   icon: ros,
  // },
  // {
  //   name: "csharp",
  //   icon: csharp,
  // },
  // {
  //   name: "arduino",
  //   icon: arduino,
  // },
  // {
  //   name: "python",
  //   icon: python,
  // },
  // {
  //   name: "mrtk",
  //   icon: mrtk,
  // },
];

const projects = [
  {
    name: "My Protfolio",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "i18next",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/jerryhuangyu/Portfolio",
    demo_link: "https://portfolio-peach-one-10.vercel.app/",
  },
  {
    name: "S-Insight",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
    ],
    image: sinsight,
    source_code_link: "https://github.com/jerryhuangyu/StockAnalyze/",
    demo_link: "https://stock-analyze.vercel.app/",
  },
  {
    name: "Tshirt Maker",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
    ],
    image: tshortmaker,
    source_code_link: "https://github.com/jerryhuangyu/TShirtCustomApp",
    demo_link: "https://jerryhuangyu.github.io/TShirtCustomApp/",
  },
  {
    name: "CodeGPT",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "openai",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
    ],
    image: codegpt,
    source_code_link: "https://github.com/jerryhuangyu/SelfChatGPT/",
    demo_link: "https://self-chatgpt-flame.vercel.app/",
  },
  {
    name: "EVOGYM",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: evogym,
    source_code_link: "https://github.com/jerryhuangyu/FitnessWebPage",
    demo_link: "https://jernox.tk/",
  },
  {
    name: "DATA ANALYTICS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: dataanalytics,
    source_code_link: "https://github.com/jerryhuangyu/DataFinanceWebPage",
    demo_link: "https://jerryhuangyu.github.io/DataFinanceWebPage/",
  },
];

export { pages, navLinks, abouts, technologies, projects };
