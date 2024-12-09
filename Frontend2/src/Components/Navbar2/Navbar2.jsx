import React, { useState } from 'react';
import './Navbar2.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar2 = () => {
  const [opt, setopt] = useState("Home");

  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">
          <img src={assets.logo} alt="Logo" />
        </div>
        <div className="list">
          <ul>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setopt("Home")}
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to='/Shop'
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setopt("Shop")}
            >
              <span>Shop</span>
            </NavLink>
            <NavLink
              to='/Cart'
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setopt("Cart")}
            >
              <span>Cart</span>
            </NavLink>
            <NavLink
              to='/Profile'
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setopt("Profile")}
            >
              <span>Profile</span>
            </NavLink>
            <a
              href="#ContactUs"
              onClick={() => {
                setopt("Contact Us");
              }}
              className={opt === "Contact Us" ? "active contact-us" : ""}
            >
              <span>Contact Us</span>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
