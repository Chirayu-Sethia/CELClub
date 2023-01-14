import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Pitem = (props) => {
  return (
    <div className='box'>
      <FontAwesomeIcon icon={props.icons} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default Pitem;
