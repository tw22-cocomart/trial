import React, { createContext, useState } from 'react';

// 1. You MUST create and export the Context itself here
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to cart (useful for Shop.jsx)
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Function to remove a specific item
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // The function your Confirmation page was looking for
  const clearCart = () => {
    setCartItems([]); 
  };

  return (
    // 2. Pass all functions into the value object
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};