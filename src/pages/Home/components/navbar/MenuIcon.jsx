import { menu, menudark } from "../../../../assets";

const MenuIcon = ({ setToggleMenu }) => {
  return (
    <>
      <img
        className='h-8 w-8 cursor-pointer object-contain dark:hidden'
        src={menu}
        alt='menu'
        onClick={() => setToggleMenu(true)}
      />
      <img
        className='h-8 w-8 cursor-pointer object-contain hidden dark:block'
        src={menudark}
        alt='menu'
        onClick={() => setToggleMenu(true)}
      />
    </>
  );
};

export default MenuIcon;
