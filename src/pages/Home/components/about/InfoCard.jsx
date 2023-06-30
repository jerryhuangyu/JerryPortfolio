import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const InfoCardBackground = ({ image, isActive, info }) => {
  const imageStyle = isActive ? "opacity-10" : "opacity-80";
  return (
    <div className='absolute top-0 left-0 z-10 flex w-full h-full green-pink-gradient rounded-[24px]'>
      <div className='m-[3px] w-full dark:bg-primary-dark bg-primary-light rounded-[20px] opacity-[0.9]'></div>
      <img
        src={image}
        alt={info}
        className={`absolute right-[3px] top-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] object-cover rounded-[20px] ${imageStyle}`}
      />
    </div>
  );
};

const FoldedInfoCard = ({ title, src }) => (
  <div className='absolute sm:bottom-[56px] bottom-[20px] sm:-right-[16px] max-sm:left-4 items-center justify-start pr-[4.5rem] z-10'>
    <h3 className='absolute w-full h-full z-20 font-bold flex items-center whitespace-nowrap sm:-rotate-90 gap-2'>
      <img
        src={src}
        alt='infoicon'
        className='w-4 aspect-square object-contain'
      />
      {title}
    </h3>
  </div>
);

const UnfoldedInfoCard = ({ title, description }) => (
  <div className='absolute bottom-[3px] right-[3px] p-8 sm:p-3 md:p-8 justify-start w-[calc(100%-6px)] flex-col bg-tertiary-light dark:bg-tertiary-dark rounded-b-[20px] z-20 h-[135px] sm:h-[200px]'>
    <h2 className='font-bold lg:text-[32px] text-[24px] text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem] text-third-light dark:text-third-dark'>
      {title}
    </h2>
    <p className='lg:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] tracking-[1px]'>
      {description}
    </p>
    {/* add image full cover */}
  </div>
);

const InfoCard = ({
  id,
  info,
  icon,
  description,
  coverImage,
  index,
  active,
  handleClick,
}) => {
  const isActive = active !== id;
  const sizeProportion = isActive ? "flex-[2.3]" : "flex-[13]";

  return (
    <motion.div
      className={`${sizeProportion} relative duration-300 text-secondary-light dark:text-secondary-dark overflow-hidden`}
      variants={fadeIn("right", "spring", index * 0.5, 0.1)}
      onClick={() => handleClick(id)}
    >
      <InfoCardBackground image={coverImage} isActive={isActive} info={info} />
      {isActive ? (
        <FoldedInfoCard title={info} src={icon} />
      ) : (
        <UnfoldedInfoCard title={info} description={description} />
      )}
    </motion.div>
  );
};

export default InfoCard;
