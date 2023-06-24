import { useTranslation } from "react-i18next";
import {
  ScrollingButton,
  LineDecorator,
  IntroductionContent,
  HeroModelCanvas,
} from "../components/hero";

const Hero = () => {
  const { t } = useTranslation();
  const heroHeader = t("hero.header");
  const heroIntro1 = t("hero.intro1");
  const heroIntro2 = t("hero.intro2");

  return (
    <section className='h-screen bg-gradient-to-tr from-[#dbe7f0] via-[#f0e8d4] to-[#f5efe6] dark:bg-primary-dark dark:bg-none'>
      <div className='absolute sm:px-16 px-6 pt-5 inset-0 top-[160px] mx-auto max-w-7xl flex flex-row items-start gap-4 sm:top-[190px] md:gap-10'>
        <LineDecorator />
        <IntroductionContent
          heroHeader={heroHeader}
          heroIntro1={heroIntro1}
          heroIntro2={heroIntro2}
        />
      </div>
      <HeroModelCanvas />
      <ScrollingButton />
    </section>
  );
};

export default Hero;
