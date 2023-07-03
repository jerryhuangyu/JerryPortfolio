import { useState } from "react";
import { SectionWrapper } from "../components/hoc";
import { useTranslation } from "react-i18next";

import { abouts } from "../../../constants";
import { InfoCard } from "../components/about";
import { Content, SectionTitle } from '../components'

const About = () => {
  const [active, setActive] = useState("web");
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={"introduction"} subtitle={"about me."} />
      <Content content={t("about.intro.p1")} />
      <div className='mt-[20px] flex sm:flex-row flex-col min-h-[70vh] sm:gap-2 gap-1'>
        {abouts.map((about, index) => {
          const infoContent = t(`about.intro.l${index + 1}`);
          return (
            <InfoCard
              id={about.id}
              info={about.title}
              icon={about.icon}
              description={infoContent}
              coverImage={about.image}
              index={index}
              active={active}
              handleClick={setActive}
              key={index}
            />
          );
        })}
      </div>
      <Content content={t('about.intro.p2')} />
      <Content content={t('about.intro.p3')} />
    </>
  );
};

export default SectionWrapper(About, "about");
