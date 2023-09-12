const FrontFace = ({ title, tags, src, isHighlight }) => {
  return (
    <div className={`${isHighlight?" bg-cyan-700":"bg-tertiary-light dark:bg-tertiary-dark"} absolute h-full w-full rounded-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] p-4`}>
      {/* cover image */}
      <img
        src={src}
        alt={title}
        className='h-[200px] w-full rounded-xl object-cover'
      />

      {/* card front title */}
      <h3 className='flex pt-3 sm:pt-4 cursor-pointer items-center gap-2 text-[28px] sm:text-[24px] font-bold text-white tracking-wider drop-shadow-lg'>
        {title}
      </h3>

      {/* card front tags */}
      <div className='flex flex-wrap gap-2 sm:py-3 py-1'>
        {tags.map((tag) => (
          <p
            key={tag.name}
            className={`text-[16px] sm:text-[13px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FrontFace;
