import { useTranslation } from "react-i18next";
import ReactTyped from "react-typed";
import { motion } from "framer-motion";
import { HackerText } from "../../../components";
import HeroModelCanvas from "../../../components/canvas/HeroModel";

const LineDecorator = () => {
  return (
    <div className='z-30 flex flex-col items-center justify-center'>
      <div className='h-5 w-5 rounded-full bg-out' />
      <div className='blue-gradient h-40 w-1 sm:h-80' />
    </div>
  );
};

const IntroductionContent = () => {
  const { t } = useTranslation();

  return (
    <div className='z-30 w-[600px] rounded-xl backdrop-blur-[4px] dark:bg-opacity-[0.01]'>
      <div className='ml-3'>
        <h1 className='text-third-light dark:text-third-dark font-extrabold lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[38px] lg:leading-[98px] mt-2'>
          {t("hero.header")} <HackerText className='text-out' text='Jerry' />
        </h1>
        <p className='text-secondary-light dark:text-secondary-dark font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[15px] lg:leading-[40xp] mt-4'>
          {t("hero.intro1")}
          <br className='hidden xs:block' />
          {t("hero.intro2")}&nbsp;
          <ReactTyped
            className='font-bold text-third-light dark:text-third-dark'
            strings={["Web.", "MR.", "ROS."]}
            typeSpeed={180}
            backSpeed={110}
            loop
          />
        </p>
      </div>
    </div>
  );
};

const ScrollingButton = () => {
  return (
    <div className='absolute bottom-20 z-30 flex w-full items-center justify-center sm:bottom-32'>
      <a href='#about' aria-label='Read more'>
        <div className='flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2'>
          <motion.div
            className='mb-1 h-3 w-3 rounded-full dark:bg-secondary-dark bg-secondary-light'
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </a>
    </div>
  );
};

const Hero = () => {
  return (
    <section className='h-screen bg-gradient-to-tr from-[#dbe7f0] via-[#f0e8d4] to-[#f5efe6] dark:bg-primary-dark dark:bg-none'>
      <div className='absolute sm:px-16 px-6 pt-5 inset-0 top-[160px] mx-auto max-w-7xl flex flex-row items-start gap-4 sm:top-[190px] md:gap-10'>
        <LineDecorator />
        <IntroductionContent />
      </div>
      <HeroModelCanvas />
      <ScrollingButton />
    </section>
  );
};

export default Hero;
