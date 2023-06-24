import { Link } from "react-router-dom";

const Company = ({
  logo,
  setSelectPage,
  zhName = "公司",
  enName = "Company",
}) => {
  return (
    <Link
      to='/'
      className='flex gap-2 pl-6'
      onClick={() => {
        setSelectPage("");
        window.scrollTo(0, 0);
      }}
    >
      <img
        src={logo}
        alt='logo'
        className='h-7 w-7 aspect-square rounded-lg object-contain bg-stone-700 dark:bg-transparent'
      />
      <div className='flex cursor-pointer px-2 text-[18px] font-bold text-secondary-light dark:text-secondary-dark'>
        <p>{zhName} &nbsp;</p>
        <p className='hidden sm:block'>| {enName}</p>
      </div>
    </Link>
  );
};

export default Company;
