import React from "react";
import DarkModeSwitcher from "./DarkModeSwitcher";

const DesktopMenu = ({ links, className, selectPage, setSelectPage }) => {
  return (
    <div className={className}>
      <ul className='list-none flex-row flex gap-10 text-secondary-light dark:text-secondary-dark font-medium text-[18px] items-center pr-4'>
        {links.map((link) => {
          const underline = selectPage === link.title ? "underline" : "";
          return (
            <li
              key={link.id}
              className={`${underline} hover:text-out`}
              onClick={() => setSelectPage(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
        <DarkModeSwitcher />
      </ul>
    </div>
  );
};

export default DesktopMenu;
