import React from 'react'
import Playicon from '../../assets/Card/playicon.svg'
import Imagecomponent from '../Image/Image.component'

const Card = (props) => {
  return (
    <div className='bg-[#FAFAFA] p-5' data-testid="Play">
        <div className='flex gap-2 items-center'>
            <Imagecomponent src={Playicon} />
            <div>Play trailer {props?.index}</div>
        </div>
    </div>
  )
}

export default Card