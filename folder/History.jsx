import React from 'react';

const History = () => {
  // Mock data representing previous purchases
  const pastOrders = [
    { id: 1, name: "Coco Peat Block", price: 35.0, qty: 1, desc: "Organic soil amendment.", img: "/images/product-01.jpg", date: "2024-03-15" },
    { id: 7, name: "Tree Mulch Mat", price: 90.0, qty: 3, desc: "Erosion and weed control.", img: "/images/product-07.png", date: "2024-03-15" },
    { id: 4, name: "Basket Liners", price: 170.0, qty: 2, desc: "Natural floral displays.", img: "/images/product-04.jpg", date: "2024-02-28" }
  ];

  return (
    <main className="main">
      <h1 className="h-cart">Transaction History</h1>
      <hr />

      <div className="cart-content">
        {/* TITLE BAR */}
        <div className="cart-title">
          <h3 className="cart-prod">Product</h3>
          <div className="cart-text">
            <h3></h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
            <h3>Status</h3>
          </div>
        </div>

        {/* HISTORY CONTENTS */}
        {pastOrders.map((item) => (
          <div className="cart-item" key={item.id}>
            <img className="cart-img" src={item.img} alt={item.name} />
            <div className="cart-deets">
              <div className="c-text">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <small style={{ color: '#888' }}>Purchased on: {item.date}</small>
              </div>
              <span>{item.qty}</span>
              <span>₱{item.price.toFixed(2)}</span>
              <span style={{ color: 'green', fontWeight: 'bold' }}>Completed</span>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </main>
  );
};

export default History;