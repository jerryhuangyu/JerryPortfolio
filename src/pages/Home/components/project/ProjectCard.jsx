import { useEffect, useState } from "react";
import FrontFace from "./FrontFace";
import BackFace from "./BackFace";

const ProjectCard = ({ title, tags, src, github, demo, index }) => {
  const [isClick, setIsClick] = useState(false);
  const [timer, setTimer] = useState(0);
  const flippingStyle = isClick ? "[transform:rotateY(180deg)]" : "";

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
      setTimer(0);
    } else if (isClick) {
      var timerId = setTimeout(() => {
        setIsClick(false);
      }, 10_000);
      setTimer(timerId);
    }
  }, [isClick]);

  return (
    <button
      className='h-[50vh] max-h-[350px] sm:h-[42vh] w-full group overflow-hidden duration-700 ease-out'
      onClick={() => setIsClick(!isClick)}
    >
      <div
        className={`w-full h-full ease-in-out duration-500 [transform-style:preserve-3d] ${flippingStyle}`}
      >
        <FrontFace title={title} tags={tags} src={src} />
        <BackFace github={github} demo={demo} index={index} />
      </div>
    </button>
  );
};

export default ProjectCard;
