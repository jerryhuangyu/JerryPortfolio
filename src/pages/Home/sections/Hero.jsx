import { useTranslation } from "react-i18next";
import ReactTyped from "react-typed";

const LineDecorator = () => {
  return (
    <div className='z-30 mt-5 flex flex-col items-center justify-center'>
      <div className='h-5 w-5 rounded-full bg-out' />
      <div className='blue-gradient h-40 w-1 sm:h-80' />
    </div>
  );
};

const IntroductionContent = () => {
  const { t } = useTranslation();

  return (
    <div className='z-30 w-[600px] rounded-xl backdrop-blur-[4px] dark:bg-opacity-[0.01]'>
      <h1>hacker text</h1>
      <p>
        {t("hero.intro1")}
        <br />
        {t("hero.intro2")}&nbsp;
        <ReactTyped
          strings={["Web.", "MR.", "ROS."]}
          typeSpeed={180}
          backSpeed={110}
          loop
        />
      </p>
    </div>
  );
};

const Hero = () => {
  return (
    <section className='h-screen bg-gradient-to-tr from-[#dbe7f0] via-[#f0e8d4] to-[#f5efe6]'>
      <div className='absolute inset-0 top-[160px] mx-auto max-w-7xl flex flex-row items-start gap-4 sm:top-[190px] md:gap-10'>
        <LineDecorator />
        <IntroductionContent />
      </div>
    </section>
  );
};

export default Hero;
