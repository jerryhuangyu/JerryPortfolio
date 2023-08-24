import { motion } from "framer-motion";

const ScrollingButton = () => {
  return (
    <div className='absolute bottom-20 z-30 flex w-full items-center justify-center sm:bottom-32'>
      <a href='#about' aria-label='Read more'>
        <div className='flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-out p-2'>
          <motion.div
            className='mb-1 h-3 w-3 rounded-full bg-out'
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

export default ScrollingButton