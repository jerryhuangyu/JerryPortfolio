import { useRef, useCallback, useEffect } from "react";
import PropType from "prop-types";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let interval = null;

const updateHackerText = (currentText, originText, iteration) => {
  let updateText = currentText
    .split("")
    .map((_, index) => {
      if (index < iteration) {
        let originLetter = originText[index];
        return originLetter;
      } else {
        let randomLetter = letters[Math.floor(Math.random() * letters.length)];
        return randomLetter;
      }
    })
    .join("");
  return updateText;
};

const HackerText = ({ className, text }) => {
  const hackerTextRef = useRef(null);
  const handleMouseOver = useCallback((e) => {
    let iteration = 0;
    let originText = e.target.dataset.value;
    let currentText = e.target.innerText;

    clearInterval(interval);
    interval = setInterval(() => {
      e.target.innerText = updateHackerText(currentText, originText, iteration);
      if (iteration >= e.target.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 5;
    }, 60);
  }, []);

  useEffect(() => {
    const hackerText = hackerTextRef.current;
    hackerText.addEventListener("mouseover", handleMouseOver);
    return () => {
      hackerText.removeEventListener("mouseover", handleMouseOver);
    };
  }, [handleMouseOver]);

  return (
    <span ref={hackerTextRef} data-value={text} className={className}>
      {text}
    </span>
  );
};

HackerText.propTypes = {
  className: PropType.string,
  text: PropType.string.isRequired,
};

export default HackerText;
