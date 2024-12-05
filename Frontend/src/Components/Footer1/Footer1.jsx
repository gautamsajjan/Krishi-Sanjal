import React from 'react'
import './Footer1.css'
import { assets } from '../../assets/assets'

const Footer1 = () => {
  return (
    <div className='Footer1' id='ContactUs'>
        <div className="final">
            <div className="final-img">
                <img src={assets.logo} alt="Krisi logo"/>
                <p className="Quote">
                <p className="text1">
                    Uniting farmers and consumers directly,<br/>fostering a sustainable bond rooted in<br/>trust and the
                    shared joy of freshness</p>
                </p>
            </div>
            <div className="quicklink">
                <ul>
                    <li className="quick">Quick links</li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">My Products</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Sales Analytics</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </div>
            <div className="Contact">
                <ul>
                    <li className="Cs">Contact Us</li>
                    <li><i className="fa-solid fa-phone"></i> +977 9734078023, +977 9845672341</li>
                    <li><i className="fa-regular fa-envelope"></i><a href="#">  connectkrisi@gmail.com</a></li>
                    <li><i className="fa-solid fa-location-dot"></i> Chitwan, Nepal</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer1