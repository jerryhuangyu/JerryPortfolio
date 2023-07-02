

const FrontFace = ({ image, name }) => {
  return (
    <div className='absolute h-full w-full rounded-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] bg-tertiary-light dark:bg-tertiary-dark'>
      {/* <img src={image} alt={name} /> */}
    </div>
  );
};

export default FrontFace;
