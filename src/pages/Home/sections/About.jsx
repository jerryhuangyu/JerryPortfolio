import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../components/hoc";

import { abouts } from "../../../constants";
import { InfoCard } from "../components/about";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  const [active, setActive] = useState("web");

  return (
    <div className=''>
      <SectionTitle title={"introduction"} subtitle={"about me"}/>

      <div className='mt-[50px] flex lg:flex-row flex-col min-h-[60vh] gap-5'>
        {abouts.map((about, index) => (
          <InfoCard
            id={about.id}
            info={about.title}
            icon={about.icon}
            key={about.title}
            index={index}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
