import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const InfoCard = ({ id, info, icon, index, active, handleClick }) => {
  return (
    <motion.div
      className={`${
        active === id ? "flex-[13]" : "flex-[2]"
      } relative duration-300 text-secondary-light dark:text-secondary-dark`}
      variants={fadeIn("right", "spring", index * 0.5, 0.1)}
      onClick={() => handleClick(id)}
    >
      <div className='absolute top-0 left-0 z-10 w-full h-full rounded-[24px]'>
        <div className='flex w-full h-full green-pink-gradient rounded-[24px]'>
          <div className='m-[3px] w-full bg-black rounded-[20px] opacity-[0.9]'></div>
        </div>
      </div>

      {active !== id ? (
        <div className='absolute lg:bottom-[216px] bottom-100 lg:right-[255px] max-lg:left-10 items-center justify-start pr-[4.5rem]'>
          <h3 className='font-extrabold uppercase w-[600px] h-[30px] whitespace-nowrap overflow-auto sm:text-[27px] text-[18px] tracking-[1px] absolute lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0] leading-none z-20'>
            {info}
          </h3>
        </div>
      ) : (
        <>
          <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20 h-[200px]'>
            <h2 className='font-bold sm:text-[32px] text-[24px] text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]'>
              {info}
            </h2>
            <p className='text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px]font-poppins tracking-[1px]'>
              description
            </p>
            {/* add image full cover */}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default InfoCard;
