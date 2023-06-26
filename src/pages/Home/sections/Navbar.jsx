import { useState } from "react";
import { Company, MobileMenu, DesktopMenu } from "../components/navbar";
import { logo } from "../../../assets";
import { navLinks } from "../../../constants";

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <nav className='fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-60 dark:bg-opacity-60 bg-primary-light dark:bg-primary-dark'>
      <div className='flex w-full items-center justify-between max-w-7xl 2xl:max-w-screen-2xl mx-auto py-5'>
        <Company
          logo={logo}
          zhName={"黃柏瑜"}
          enName={"Jerry's Protfolio"}
          setSelectPage={setSelectedPage}
        />
        <DesktopMenu
          className='hidden sm:flex'
          links={navLinks}
          selectPage={selectedPage}
          setSelectPage={setSelectedPage}
        />
        <MobileMenu
          className='sm:hidden'
          links={navLinks}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
    </nav>
  );
};

export default Navbar;
