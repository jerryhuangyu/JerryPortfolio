import { useState } from "react";
import { SectionWrapper } from "../components/hoc";
import { useTranslation } from "react-i18next";

import { abouts } from "../../../constants";
import { InfoCard } from "../components/about";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  const [active, setActive] = useState("web");
  const { t } = useTranslation();

  return (
    <div className=''>
      <SectionTitle title={"introduction"} subtitle={"about me"} />

      <p className='text-content'>
        {t("about.intro.p1")}
      </p>

      <div className='mt-[20px] flex sm:flex-row flex-col min-h-[70vh] sm:gap-3 gap-1'>
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

      <p className="text-content">{t('about.intro.p2')}</p>
      <p className="text-content">{t('about.intro.p3')}</p>
    </div>
  );
};

export default SectionWrapper(About, "about");
