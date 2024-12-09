import React from 'react';
import './Widget.css';

export default function Widget({ itemsInCart }) {
    if (itemsInCart.length === 0) {
        return null;
    }

    return (
        <div className="container">
            <div className="widget-main">
                <h2 className="header">Shopping Cart</h2>
                <div className="product-row">
                    <span>Product Details</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Total</span>
                </div>
                {itemsInCart.map((item, index) => (
                    <div key={index} className="product-row">
                        <div>
                            <span className="product-details">{item.name}</span><br />
                            <span>{item.platform}</span>
                        </div>
                        <div>
                            <button className="button">-</button>
                            <span>{item.quantity}</span>
                            <button className="button">+</button>
                        </div>
                        <span>£{item.price}</span>
                        <span>£{(item.price * item.quantity).toFixed(2)}</span>
                        <button className="button-remove">Remove</button>
                    </div>
                ))}
                <a href="#" className="link">Continue Shopping</a>
                <span>{itemsInCart.length} Items</span>
            </div>
            <div className="widget-summary">
                <h2 className="header">Order Summary</h2>
                <div className="product-row">
                    <span>Items</span>
                    <span>£{itemsInCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                </div>
                <div className="product-row">
                    <span>Shipping</span>
                    <span>Standard Delivery - £5.00</span>
                </div>
                <div>
                    <label htmlFor="promo-code">Promo Code</label>
                    <input type="text" id="promo-code" placeholder="Enter your code" className="input" />
                    <button className="button">Apply</button>
                </div>
                <div className="product-row">
                    <span>Total Cost</span>
                    <span>£{(itemsInCart.reduce((total, item) => total + item.price * item.quantity, 0) + 5).toFixed(2)}</span>
                </div>
                <button className="button-primary">Checkout</button>
            </div>
        </div>
    );
}
