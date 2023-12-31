import ReactTyped from "react-typed";
import HackerText from "./HackerText";
import DownloadBtn from '../../../resume/components/DownloadBtn';

const IntroductionContent = ({ heroHeader, heroIntro1, heroIntro2 }) => {
  return (
    <div className='z-30 w-[600px] rounded-xl backdrop-blur-[4px] dark:bg-opacity-[0.01]'>
      <div className='ml-3'>
        <h1 className='text-third-light dark:text-third-dark font-bold lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[38px] lg:leading-[98px] mt-2'>
          {heroHeader} <HackerText className='text-out' text='Jerry' />
        </h1>
        <p className='text-secondary-light dark:text-sidemenu-light font-normal lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[15px] lg:leading-[40xp]'>
          {heroIntro1}
          <br className='hidden xs:block' />
          {heroIntro2}&nbsp;
          <ReactTyped
            className='font-bold text-third-light dark:text-third-dark'
            strings={["Web.", "MR.", "ROS."]}
            typeSpeed={180}
            backSpeed={110}
            loop
          />
        </p>
        <DownloadBtn className="mt-4" />
      </div>
    </div>
  );
};

export default IntroductionContent;
