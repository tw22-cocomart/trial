import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
      <div className="img-wrap">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p>{product.desc}</p>
        <p className="product-price">₱{product.price.toFixed(2)}</p>
        {/* We will add an "Add to Cart" button here later! */}
      </div>
    </article>
  );
};

export default ProductCard;