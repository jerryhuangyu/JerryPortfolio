import { useEffect, useState } from "react";
import FrontFace from "./FrontFace";
import BackFace from "./BackFace";

const ProjectCard = () => {
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
      className='h-[40vh] w-full group'
      onClick={() => setIsClick(!isClick)}
    >
      <div
        className={`w-full h-full ease-in-out duration-500 [transform-style:preserve-3d] ${flippingStyle}`}
      >
        <FrontFace />
        <BackFace />
      </div>
    </button>
  );
};

export default ProjectCard;
