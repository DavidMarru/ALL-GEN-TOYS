import React, { useContext } from 'react';
import './ProductCard.css';
import { CartContext } from './CartContext';

const ProductCard = ({ productId, imagePath, name, description, rating, price }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={imagePath} alt={name} />
      <div className="product-info">
        <h3 className="productName">{name}</h3>
        <p className="productDescription">{description}</p>
        <p className="productRating">{rating}</p>
        <div className="product-lower">
          <p>{price}</p>
          <a onClick={() => addToCart(productId, name, price, imagePath)} className="add-btn">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
