import React from 'react'

const Imagecomponent = ({imageclassName,alttext,src,onClick}) => {
  return (
    <img src={src} alt={alttext} className={imageclassName} onClick={onClick} />
  )
}

export default Imagecomponent