import { useState } from "react";
import { Company, MobileMenu, DesktopMenu } from "../components/navbar";
import { logo } from "../../../assets";
import { navLinks } from "../../../constants";

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <nav className='fixed w-full top-0 z-50'>
      <div className='flex w-full items-center justify-between max-w-7xl mx-auto py-5'>
        <Company
          logo={logo}
          zhName={"黃柏瑜"}
          enName={"Jerry's Protfolio"}
          setSelectPage={setSelectedPage}
        />
        <DesktopMenu
          links={navLinks}
          className='hidden sm:flex'
          selectPage={selectedPage}
          setSelectPage={setSelectedPage}
        />
      </div>
    </nav>
  );
};

export default Navbar;
