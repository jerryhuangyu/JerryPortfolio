import React from 'react'

const BackFace = () => {
  return (
    <div className='absolute w-full h-full rounded-xl [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] bg-tertiary-light dark:bg-black'>BackFace</div>
  )
}

export default BackFace