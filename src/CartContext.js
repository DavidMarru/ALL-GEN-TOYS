import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || {});
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const totalCount = Object.values(items).reduce((sum, item) => sum + item.quantity, 0);
    setTotalItems(totalCount);
  }, [items]);

  const addToCart = (productId, productName, productPrice, productImage, quantity) => {
    setItems((prevItems) => {
      const updatedItems = {
        ...prevItems,
        [productId]: {
          name: productName,
          price: productPrice,
          imagePath: productImage,
          quantity: (prevItems[productId]?.quantity || 0) + 1,
        },
      };
      return updatedItems;
    });
  };

  const removeFromCart = (productId, newQuantity) => {
    setItems((prevItems) => {
      const updatedItems = { ...prevItems };
      const existingQuantity = updatedItems[productId]?.quantity || 0;

      const quantity = Math.max(0, Math.floor(newQuantity));

      if (quantity < existingQuantity) {
        updatedItems[productId] = {
          ...updatedItems[productId],
          quantity,
        };
      } else {
        delete updatedItems[productId];
      }

      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ items, totalItems, addToCart, removeFromCart, setItems }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext as default, CartContext };
