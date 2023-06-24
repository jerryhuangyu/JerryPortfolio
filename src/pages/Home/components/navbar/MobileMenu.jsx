import { useState } from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";
import MenuIcon from "./MenuIcon";
import SideMenu from "./SideMenu";

const MobileMenu = ({ links, className, selectedPage, setSelectedPage }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={`${className} pr-6 flex flex-row items-center gap-4 text-secondary-light dark:text-secondary-dark`}>
      <DarkModeSwitcher />
      <MenuIcon setToggleMenu={setToggleMenu} />
      <SideMenu
        links={links}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default MobileMenu;
