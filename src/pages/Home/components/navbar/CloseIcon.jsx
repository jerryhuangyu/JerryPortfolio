import { closedark, closelight } from "../../../../assets";

const CloseIcon = ({setToggleMenu}) => {
  return (
    <div className='relative cursor-pointer'>
      <img
        className='absolute right-[-36px] h-6 w-6 object-contain dark:scale-75 scale-125 dark:hidden'
        src={closelight}
        alt='menuclose'
        onClick={() => setToggleMenu(false)}
      />
      <img
        className='absolute right-[-36px] h-6 w-6 object-contain dark:scale-75 scale-105 hidden dark:block'
        src={closedark}
        alt='menuclose'
        onClick={() => setToggleMenu(false)}
      />
    </div>
  );
};

export default CloseIcon