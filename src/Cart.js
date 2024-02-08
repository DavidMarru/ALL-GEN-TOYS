import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import './NavMenu.css';
import CartList from './CheckOut';
import CartContext from './CartContext';
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const { totalItems, items, addToCart, removeFromCart } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(true);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const storedCartVisibility = JSON.parse(localStorage.getItem('isCartVisible'));
    setIsCartVisible(storedCartVisibility || false);
  }, []);

  useEffect(() => {
    localStorage.setItem('isCartVisible', JSON.stringify(isCartVisible));
  }, [isCartVisible]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const toggleCart = () => {
    setIsCartVisible((prev) => !prev);
    document.body.classList.toggle('no-scroll');
  };

  useEffect(() => {
    if (isCartVisible) {
      setIsHiding(false);
      setIsOpen(true);
    } else {
      const timeoutId = setTimeout(() => {
        setIsHiding(true);
      }, 1000);

      setIsOpen(false);
      return () => clearTimeout(timeoutId);
    }
  }, [isCartVisible]);

  return (
    <div>
      <div className="cart-Bar" id="cartBar">
        <FaShoppingCart onClick={toggleCart} />
        <span className="cart-item-count">{totalItems}</span>
        <div
          className={`close-Btn ${isOpen ? 'closeBtn' : ''}`}
          id="closeBtn"
          onClick={toggleCart}
        >
          <span></span>
          <span></span>
        </div>

        <div
          className={`Cart-content ${isCartVisible ? 'showCart' : 'hideCart'} ${
            isHiding ? 'hidden' : ''
          }`}
        >
          <CartList />
        </div>
      </div>
    </div>
  );
};

export default Cart;

