import { useState } from 'react'
import i18next from 'i18next';

const InnerFAB = ({ icon, handleOnclick, isToggle, translate}) => {
  return (
    <div
      onClick={handleOnclick}
      className={`fixed right-4 bottom-4 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-orange-200 duration-500 md:right-10 md:bottom-10 ${isToggle ? translate : ""}`}
    >
      {icon}
    </div>
  )
}

const FloatActionButton = () => {
  const [fabToggle, setFabToggle] = useState(false);
  const changeLang2En = () => i18next.changeLanguage("en");
  const changeLang2Zh = () => i18next.changeLanguage("zh");

  return (
    <div className='fixed bottom-[92px] z-50 right-20 items-center justify-center text-gray-800'>
      <div
        onClick={() => setFabToggle(!fabToggle)}
        className={`fixed bottom-4 right-4 flex h-10 w-10 z-50 cursor-pointer items-center justify-center rounded-full bg-purple-200 duration-500 md:bottom-10 md:right-10 ${fabToggle ? "" : "rotate-[270deg]"}`}
      >
        {"+"}
      </div>

      <InnerFAB
        icon={"en"}
        handleOnclick={() => {
          changeLang2En();
          setFabToggle(!fabToggle);
        }}
        translate="-translate-y-[45px]"
        isToggle={fabToggle}
      />
      <InnerFAB
        icon={"繁"}
        handleOnclick={() => {
          changeLang2Zh();
          setFabToggle(!fabToggle);
        }}
        translate="-translate-y-[90px]"
        isToggle={fabToggle}
      />
    </div>
  )
}

export default FloatActionButton