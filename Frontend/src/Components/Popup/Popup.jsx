import React from 'react'
import './Popup.css'

const Popup = ({ message}) => {
  return (
    <div className='poppop'>
      <p>{message}</p>
    </div>
  )
}

export default Popup;