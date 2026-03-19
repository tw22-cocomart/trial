import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

const Confirmation = () => {
  // Destructure clearCart correctly from context
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    // Check if the function exists before calling it to prevent crashing
    if (clearCart) {
      clearCart();
    }
  }, [clearCart]);

  return (
    <div className="confirm">
      <h1>Thank You!</h1>
      <p>Your order has been placed successfully.</p>
      {/* ... the rest of your HTML */}
    </div>
  );
};

export default Confirmation;