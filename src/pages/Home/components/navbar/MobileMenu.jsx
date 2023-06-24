import { useState } from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";
import MenuIcon from "./MenuIcon";
import SideMenu from "./SideMenu";

const MobileMenu = ({ className }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={`${className} pr-6 flex flex-row items-center gap-4`}>
      <DarkModeSwitcher />
      <MenuIcon setToggleMenu={setToggleMenu} />
      <SideMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </div>
  );
};

export default MobileMenu;
