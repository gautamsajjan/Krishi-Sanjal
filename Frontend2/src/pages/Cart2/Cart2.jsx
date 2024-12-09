import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart2.css';
import Widget from '../../Components/Widget/Widget';
import { assets } from '../../assets/assets';

function Cart2() {
  const navigate = useNavigate();

  const handleStartShopping = () => {
    navigate('/shop');
  };

  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="cart2">
      <h2 className="cart2-title">Your Cart</h2>
      <div className="cart2-content">
        <img
          alt="empty-cart"
          src= {assets.cart111}
          className="cart2-image"
        />
        <p className="cart2-message">Your cart is feeling lonely</p>
        <button className="cart2-button" onClick={handleStartShopping}>
          Start Shopping
        </button>
      </div>
      <div>

        <Widget itemsInCart={cart} />
      </div>
    </div>
  );
}

export default Cart2;
