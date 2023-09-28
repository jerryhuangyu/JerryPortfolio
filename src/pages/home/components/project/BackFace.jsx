import { github, click } from "../../../../assets";
import { useTranslation } from "react-i18next";
import Content from "../Content";

const LinkIcon = ({ link, src }) => (
  <div
    onClick={() => window.open(link, "_blank")}
    className="bg-gradient-to-r from-gray-600 dark:from-gray-800 to-gray-900 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full"
  >
    <img
      src={src}
      alt="github"
      className="relative animate-ping h-5 w-5 object-contain"
    />
    <img src={src} alt="github" className="absolute h-6 w-6 object-contain" />
  </div>
);

const BackFace = ({ githubLink, demoLink, index }) => {
  const { t } = useTranslation();
  return (
    <div className="absolute w-full h-full rounded-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] bg-tertiary-light dark:bg-black flex flex-col justify-center items-center p-6">
      <p className='sm:my-8 my-4 text-third-light dark:text-secondary-dark font-["Noto_Sans_TC"] max-w-3xl font-light tracking-wider'>
        {t(`work.cards.${index}`)}
      </p>
      <div className="flex w-full justify-center items-center gap-4">
        <div className="flex flex-col gap-2">
          <LinkIcon link={githubLink} src={github} />
          <p className="text-third-light dark:text-secondary-dark font-['Noto_Sans_TC']">
            源碼
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <LinkIcon link={demoLink} src={click} />
          <p className="text-third-light dark:text-secondary-dark font-['Noto_Sans_TC']">
            展示
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackFace;
