import React from 'react'
import DarkModeSwitcher from './DarkModeSwitcher'

const MobileMenu = ({ className, }) => {
  return (
    <div className={`${className} pr-4`}>
      <DarkModeSwitcher />
    </div>
  )
}

export default MobileMenu