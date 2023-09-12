import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const ProjectContent = ({ p1, p2, p3, p4, p5 }) => {
  return (
    <motion.div variants={textVariant()}>
      <p className="text-content">
        {p1}
        <span className="text-content decoration-2 underline underline-offset-2 decoration-wavy decoration-out">
          {p2}
        </span>
        {p3}
        <span className="text-content decoration-2 underline underline-offset-2 decoration-wavy decoration-out">
          {p4}
        </span>
        {p5}
      </p>
    </motion.div>
  );
};

export default ProjectContent;
