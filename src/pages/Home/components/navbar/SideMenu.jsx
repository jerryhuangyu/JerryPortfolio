import React from "react";
import CloseIcon from "./CloseIcon";

const SideMenu = ({ toggleMenu, setToggleMenu }) => {
  const rightPos = toggleMenu ? "right-0" : "right-[-100%]";
  return (
    <div
      className={`${rightPos} fixed top-0 h-screen bg-sidemenu-light dark:bg-sidemenu-dark min-w-[60%] px-16 pt-[23px] duration-300 ease-in-out`}
    >
      <CloseIcon setToggleMenu={setToggleMenu} />
    </div>
  );
};

export default SideMenu;
