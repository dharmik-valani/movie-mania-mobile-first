import React from 'react'

const Button = ({text,buttonclassName,textclassName,onClick }) => {
  return (
    <div>
        <button className={buttonclassName} onClick={onClick}>
            <span className={textclassName}>{text}</span>
        </button>
    </div>
  )
}

export default Button