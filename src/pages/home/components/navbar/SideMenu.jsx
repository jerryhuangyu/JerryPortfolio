import React from "react";
import CloseIcon from "./CloseIcon";

const SideMenu = ({
  links,
  toggleMenu,
  setToggleMenu,
  selectedPage,
  setSelectedPage,
}) => {
  const rightPos = toggleMenu ? "right-0" : "right-[-100%]";
  return (
    <div
      className={`${rightPos} fixed top-0 h-screen bg-sidemenu-light dark:bg-sidemenu-dark min-w-[60%] px-16 pt-[23px] duration-300 ease-in-out`}
    >
      <CloseIcon setToggleMenu={setToggleMenu} />
      <ul className='mt-10 flex flex-1 list-none flex-col items-start justify-end gap-6'>
        {links.map((link) => {
          const underline = selectedPage === link.title ? "text-out" : "";
          return (
            <li
              key={link.id}
              className={`${underline} flex w-full cursor-pointer text-[22px] font-medium`}
              onClick={() => {
                setToggleMenu(false);
                setSelectedPage(link.title);
              }}
            >
              <a href={`#${link.id}`} className='w-full'>
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
