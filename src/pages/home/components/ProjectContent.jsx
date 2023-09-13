import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const ProjectContent = ({ contents }) => {
  return (
    <motion.div variants={textVariant()}>
      <p className="text-content">
        {contents.map((value, index) => {
          const highlightStyle = value.isHighlight
            ? "decoration-2 underline underline-offset-2 decoration-wavy decoration-out"
            : "";
          return (
            <span className={`text-content ${highlightStyle}`} key={`project-card-content-${index}`}>
              {value.content}
            </span>
          );
        })}
      </p>
    </motion.div>
  );
};

export default ProjectContent;
