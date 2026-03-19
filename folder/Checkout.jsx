import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleConfirmOrder = () => {
    // In a real app, you'd save the order to a database here
    navigate('/confirmation');
  };

  return (
    <main className="main">
      <div className="checkout">
        <div className="checkout-title">
          <h2>Secure Checkout</h2>
          <p>Enter your shipping and payment details.</p>
        </div>

        <div className="checkout-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="checkout-details">
              <div className="checkout-name">
                <label>First Name</label>
                <input type="text" placeholder="Juan" />
              </div>
              <div className="checkout-name">
                <label>Last Name</label>
                <input type="text" placeholder="Dela Cruz" />
              </div>

              <div className="shipping">
                <label>Shipping Address</label>
                <textarea 
                  className="ship-add" 
                  rows="3" 
                  placeholder="Street, Barangay, City, Province"
                ></textarea>
              </div>
            </div>

            <h3 className="payment-method">Payment Method</h3>
            <div className="pay">
              <button 
                type="button"
                className={`pay-choices ${paymentMethod === 'GCash' ? 'active-pay' : ''}`}
                onClick={() => setPaymentMethod('GCash')}
              >
                GCash
              </button>
              <button 
                type="button"
                className={`pay-choices ${paymentMethod === 'Maya' ? 'active-pay' : ''}`}
                onClick={() => setPaymentMethod('Maya')}
              >
                Maya
              </button>
              <button 
                type="button"
                className={`pay-choices ${paymentMethod === 'COD' ? 'active-pay' : ''}`}
                onClick={() => setPaymentMethod('COD')}
              >
                COD
              </button>
            </div>

            <button
              className="order"
              type="button"
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Checkout;