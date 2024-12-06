import React from 'react'
import './Header1.css'

const Header1 = () => {
  return (
    <div className='Header1'>
       <div className="Header-text">
            <p>Welcome to the Farmer Dashboard</p>
            <button className="update">Add product !</button>
        </div>
    </div>
  )
}

export default Header1

//i have change in line no 9 pervious it was <button class="update">Add product !</button>  
// and now i have changed an changed code is <button className="update">Add product !</button>