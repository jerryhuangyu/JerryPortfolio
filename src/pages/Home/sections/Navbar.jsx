import { useState, useEffect } from "react";
import { Company, MobileMenu, DesktopMenu } from "../components/navbar";
import { logo } from "../../../assets";
import { navLinks } from "../../../constants";

const Navbar = () => {
  const [selectedPage, setSelectedPage] = useState("");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const bgOpacity = isTopOfPage ? "bg-opacity-0 dark: backdrop-blur-lg" : "bg-opacity-60 dark:bg-primary-dark bg-primary-light backdrop-blur-sm"
  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage("");
    } else {
      setIsTopOfPage(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 backdrop-blur-sm ${bgOpacity}`}>
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
