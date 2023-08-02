import React from 'react'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'

const Content = ({content}) => {
  return (
    <motion.div variants={textVariant()}>
      <p className='text-content'>
        {content}
      </p>
    </motion.div>
  )
}

export default Content