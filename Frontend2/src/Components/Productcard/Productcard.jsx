import React from 'react';
import './Productcard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-title">{product.name}</h3>
    </div>
  );
};

export default ProductCard;
