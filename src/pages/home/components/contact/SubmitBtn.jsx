const SubmitBtn = ({ loading }) => {
  return (
    <div className='flex justify-end mt-5'>
      <div className='group relative'>
        <div className='absolute -inset-0.5 hidden rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 ease-in-out group-hover:opacity-100 group-hover:duration-200 dark:block'></div>
        <button
          type='submit'
          className='group relative h-12 w-fit overflow-hidden rounded-lg bg-white pr-6 pl-7 text-lg shadow dark:bg-gray-800'
        >
          <div className='absolute inset-0 w-3 bg-out transition-all duration-[250ms] ease-out group-hover:w-full dark:hidden'></div>
          <span className='relative text-black group-hover:text-white dark:text-white'>
            {loading ? "Sending..." : "Send"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SubmitBtn;
