import React from 'react'
import './Middle2.css'
import { assets } from '../../../assets/assets'

const Middle2 = () => {
  return (
    <div className="Middle2">
      <div className="middle2">
                <div className="shoppr">
                    <img src={assets.buy} alt="Buy"/>
                    <div className="h31">Explore Products</div>
                    <div className="p1">Discover fresh produce and grocery items directly from local farmers. Use filters to find exactly what you need.</div>
                    <div className="b1">
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className="cartpr">
                <img src={assets.cart} alt="Cart"/>
                <div className="h32">View Orders</div>
                <div className="p2"> Review your selected items before proceeding to checkout. Make changes to ensure everything is perfect.</div>
                <div className="b2">
                    <button>Update cart</button>
                </div>
                </div>
                <div className="profile">
                    <img src={assets.profile} alt="Profile"/>
                    <div className="h33">Update Profile</div>
                    <div className="p3">Update your personal information, contact details, and preferences for a personalized shopping experience.</div>
                    <div className="b3">
                        <button>Edit Profile</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Middle2