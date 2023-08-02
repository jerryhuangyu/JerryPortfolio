import React from 'react'

const InputTextarea = ({ name, value, handleChange, placeholderText }) => (
  <div className='mt-2'>
    <div className='relative w-full'>
      <textarea
        id={`form${name}`}
        name={name}
        value={value}
        onChange={handleChange}
        className='peer h-full min-h-[100px] w-full resize-none rounded-[7px] border-2 border-gray-50 bg-transparent px-3 py-2.5 text-sm font-normal text-gray-500 outline outline-0 transition-all placeholder-shown:border-gray-50 placeholder-shown:border-t-gray-50 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 dark:border-gray-400 dark:placeholder-shown:border-gray-400 dark:focus:border-pink-500 dark:focus:border-t-transparent'
        placeholder=' '
      ></textarea>
      <label
        htmlFor={`form${name}`}
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-transparent before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-transparent after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2  peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-pink-500"
      >
        {value ? "" : placeholderText}
      </label>
    </div>
  </div>
);

export default InputTextarea