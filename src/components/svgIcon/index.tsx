import React from 'react'

const SvgIcon: React.FC<{ classname?: string; fontSize?: number; color?: string }> = ({
  classname,
  fontSize,
  color
}) => {
  return (
    <>
      <svg
        className={`icon ${classname}`}
        style={{ fontSize: `${fontSize}px`, color }}
        aria-hidden="true"
      >
        <use xlinkHref="#icon-xia"></use>
      </svg>
    </>
  )
}

export default SvgIcon
