import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // 1. Calculate Subtotal safely right here
  const subtotal = cartItems.reduce((acc, item) => {
    return acc + (Number(item.price) || 0) * (Number(item.quantity) || 1);
  }, 0);

  const shippingFee = cartItems.length > 0 ? 30.0 : 0;
  const grandTotal = subtotal + shippingFee;

  return (
    <main className="main">
      <h1 className="h-cart">Shopping Cart</h1>
      <hr />

      <div className="cart-content">
        <div className="cart-title">
          <h3 className="cart-prod">Product</h3>
          <div className="cart-text">
            <h3></h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
            <h3></h3>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <p>Your cart is empty.</p>
            <Link to="/shop" style={{ color: '#058c42', fontWeight: 'bold' }}>
              Go shopping!
            </Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item act" key={item.id}>
              {/* Added a fallback for images */}
              <img className="cart-img" src={item.img || 'https://via.placeholder.com/150'} alt={item.name} />
              <div className="cart-deets">
                <div className="c-text">
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
                <span>{item.quantity || 1}</span>
                {/* 2. Added safety check for toFixed */}
                <span>₱{((Number(item.price) || 0) * (Number(item.quantity) || 1)).toFixed(2)}</span>
                <button onClick={() => removeFromCart(item.id)}>x</button>
              </div>
            </div>
          ))
        )}
      </div>
      <hr />

      <div className="cart-summary">
        {/* 3. Using subtotal instead of the undefined 'total' */}
        <p><b>Item SubTotal</b>: ₱{(subtotal || 0).toFixed(2)}</p>
        <p><b>Shipping Fee</b>: ₱{(shippingFee || 0).toFixed(2)}</p>
        <p><b>Total</b>: ₱{(grandTotal || 0).toFixed(2)}</p>
        
        {cartItems.length > 0 && (
          <Link className="cart-button" to="/checkout">
            Proceed to Checkout
          </Link>
        )}
      </div>
    </main>
  );
};

export default Cart;