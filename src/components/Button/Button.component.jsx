import React from 'react'

const Button = ({text,buttonclassName,textclassName,onClick }) => {
  return (
        <button className={buttonclassName} onClick={onClick} data-testid={text}>
            <span className={textclassName}>{text}</span>
        </button>
  )
}

export default Button