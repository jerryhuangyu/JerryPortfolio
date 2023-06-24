import { Link } from "react-router-dom";
import { logo } from "../../../../assets";

const Company = () => {
  return (
    <Link to={"/"} className='flex gap-2'>
      <img
        src={logo}
        alt='logo'
        className='h-7 w-7 aspect-square rounded-lg object-contain bg-stone-700 dark:bg-transparent'
      />
      <div className='flex cursor-pointer px-2 text-[18px] font-bold text-secondary-light dark:text-secondary-dark'>
        <p>黃柏瑜 &nbsp;</p>
        <p className='hidden sm:block'>| Jerry's Protfolio</p>
      </div>
    </Link>
  );
};

export default Company;
