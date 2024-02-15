import React from 'react'
import Playicon from '../../assets/Card/playicon.svg'

const Card = (props) => {
  return (
    <div className='bg-[#FAFAFA] p-5' data-testid="Play">
        <div className='flex gap-2 items-center'>
            <img src={Playicon} alt="" />
            <div>Play trailer {props?.index}</div>
        </div>
    </div>
  )
}

export default Card