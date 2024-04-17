import React from 'react'

const SvgIcon: React.FC<{
  classname?: string
  fontSize?: number
  color?: string
  icon: string
}> = ({ classname, fontSize, color, icon }) => {
  return (
    <>
      <svg
        className={`icon ${classname ? classname : ''}`}
        style={{ fontSize: `${fontSize}px`, color }}
        aria-hidden="true"
      >
        <use xlinkHref={`#icon-${icon}`}></use>
      </svg>
    </>
  )
}

export default SvgIcon
