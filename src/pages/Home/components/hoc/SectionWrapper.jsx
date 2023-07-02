import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import { useMediaQuery } from "@react-hook/media-query";

const SectionWrapper = (Component, idName) => {
  function HOC() {
    const matches = useMediaQuery("only screen and (min-width: 768px)");
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='max-w-7xl mx-auto relative p-6 sm:p-16 xs:p-8 overflow-hidden'
      >
        <span className='hash-span' id={idName}></span>
        &nbsp;
        <br />
        {!matches ? (
          <>
            &nbsp;
            <br />
            &nbsp;
            <br />
            &nbsp;
            <br />
            &nbsp;
            <br />
            &nbsp;
            <br />
          </>
        ) : (
          <></>
        )}
        <Component />
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
