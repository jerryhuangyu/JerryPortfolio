import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div variants={textVariant()}>
      <p className='sm:text-[18px] text-[14px] text-black dark:text-white uppercase tracking-wider'>
        {title}
      </p>
      <h2 className='text-out drop-shadow-[0_1.3px_1px_rgba(1,1,1,0.2)] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
        {subtitle}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
