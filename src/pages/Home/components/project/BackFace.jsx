import React from "react";
import { github, click } from "../../../../assets";
import { useTranslation } from "react-i18next";
import Content from "../Content";

const LinkIcon = ({ link, src }) => (
  <div
    onClick={() => window.open(link, "_blank")}
    className='bg-gradient-to-r from-gray-600 dark:from-gray-800 to-gray-900 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'
  >
    <img src={src} alt='github' className='h-1/2 w-1/2 object-contain' />
  </div>
);

const BackFace = ({ githubLink, demoLink, index }) => {
  const { t } = useTranslation();
  return (
    <div className='absolute w-full h-full rounded-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] bg-tertiary-light dark:bg-black flex flex-col justify-center items-center p-16'>
      <p className='sm:my-8 my-4 text-third-light dark:text-secondary-dark font-["Noto_Sans_TC"] max-w-3xl font-light tracking-wider'>
        {t(`work.cards.${index}`)}
      </p>
      <div className='flex w-full justify-center gap-3'>
        <LinkIcon link={githubLink} src={github} />
        <LinkIcon link={demoLink} src={click} />
      </div>
    </div>
  );
};

export default BackFace;
