import {useState} from "react";
import { light, dark } from "../../../../assets";

const DarkModeSwitcher = () => {
  const [isLight, setIsLight] = useState(
    document.documentElement.classList.contains("dark") ? false : true
  );
  const switchMode = () => {
    setIsLight(!isLight);
    if (isLight) {
      // console.log("set to dark");
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      // console.log("set to light");
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <img
      className='h-5 w-5 cursor-pointer rounded-full'
      alt='mode'
      onClick={() => switchMode()}
      src={isLight ? light : dark}
    />
  );
};

export default DarkModeSwitcher;
