import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [sortOrder, setSortOrder] = useState('manual');

  // 1. The Data: All your products in one place
  const allProducts = [
    { id: 1, name: "Coco Peat Block", price: 35.0, desc: "Organic soil amendment.", img: "images/product-01.jpg", category: "featured" },
    { id: 2, name: "Coco Grow Bag", price: 30.0, desc: "Breathable plant container.", img: "images/product-02.jpg", category: "popular" },
    { id: 3, name: "Coir Doormat", price: 100.0, desc: "Heavy duty mud scraper.", img: "images/product-03.jpg", category: "featured" },
    { id: 4, name: "Basket Liners", price: 85.0, desc: "Natural floral displays.", img: "images/product-04.jpg", category: "popular" },
    { id: 5, name: "Seedling Pots", price: 50.0, desc: "Biodegradable starter cups.", img: "images/product-05.png", category: "others" },
    { id: 6, name: "Fiber Scrub Brush", price: 45.0, desc: "Natural kitchen cleaning.", img: "images/product-06.jpg", category: "others" },
    { id: 7, name: "Tree Mulch Mat", price: 30.0, desc: "Erosion and weed control.", img: "images/product-07.png", category: "featured" },
    { id: 8, name: "Coir Rope Coil", price: 45.0, desc: "Strong maritime fiber rope.", img: "images/product-08.png", category: "popular" },
    { id: 9, name: "Coco Coaster", price: 35.0, desc: "Sturdy and Absorbent.", img: "images/product-09.jpg", category: "others" },
    { id: 10, name: "Coir Geotextile Mesh", price: 120.0, desc: "Soil erosion control matting.", img: "images/product-10.jpg", category: "others" },
    { id: 11, name: "Coco Pole", price: 65.0, desc: "Support for climbing plants.", img: "/images/product-11.jpg" },
     { id: 12, name: "Coir Logs", price: 350.0, desc: "Shoreline protection.", img: "/images/product-12.jpg" },
    { id: 13, name: "Coco Husk Chips", price: 55.0, desc: "Premium coconut mulch.", img: "/images/product-13.jpg" },
     { id: 14, name: "Coir Bird Nest", price: 120.0, desc: "Natural breeder pocket.", img: "/images/product-14.jpg" },
    { id: 15, name: "Rubberized Coir Pad", price: 350.0, desc: "Cushioning material.", img: "/images/product-15.jpg" },
    { id: 16, name: "Coir Boot Scraper", price: 210.0, desc: "Heavy-duty side cleaners.", img: "/images/product-16.jpg" },
    { id: 17, name: "Coir Peat Pellets", price: 25.0, desc: "Compressed seed starters.", img: "/images/product-17.jpg" },
    { id: 18, name: "Coir Pet Mat", price: 280.0, desc: "Scratch-resistant bed.", img: "/images/product-18.jpg" },
    { id: 19, name: "Woven Coir Tote Bag", price: 450.0, desc: "Eco-friendly carrier.", img: "/images/product-19.jpg" },
    { id: 20, name: "Coir Dish Brush", price: 110.0, desc: "Sustainable kitchen set.", img: "/images/product-20.jpg" },
    { id: 21, name: "Premium Coir Yarn", price: 95.0, desc: "Strong multi-purpose yarn.", img: "images/product-21.jpg" }
  ];

  // 2. Sorting Logic
  const sortedProducts = [...allProducts].sort((a, b) => {
    if (sortOrder === 'price-asc') return a.price - b.price;
    if (sortOrder === 'name-asc') return a.name.localeCompare(b.name);
    return 0;
  });

  // 3. Helper to render a section
  const renderGrid = (category) => {
    return sortedProducts
      .filter(p => category === 'all' ? true : p.category === category)
      .map(product => (
        <article className="product-card" key={product.id}>
          <img className="img-wrap" src={product.img} alt={product.name} />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p>{product.desc}</p>
            <p className="product-price">₱{product.price.toFixed(2)}</p>
            <button 
              className="btn-pretty" 
              style={{ marginTop: '10px', width: '100%' }}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </article>
      ));
  };

  return (
    <main className="main">
      <h1>Premium Coir Collection</h1>
      <p>Eco-friendly solutions for your garden, home, and industrial needs.</p>

      {/* FEATURED SECTION */}
      <section className="product-section">
        <div className="section-header">
          <h2>Featured Selection</h2>
          <select 
            className="pretty-select" 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="manual">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="name-asc">A-Z</option>
          </select>
        </div>
        <div className="product-grid">{renderGrid('featured')}</div>
        <button className="btn-pretty">View More Featured</button>
      </section>

      {/* POPULAR SECTION */}
      <section className="product-section">
        <h2>Popular Items</h2>
        <div className="product-grid">{renderGrid('popular')}</div>
        <button className="btn-pretty">Explore Popular</button>
      </section>

      {/* OTHERS SECTION */}
      <section className="product-section">
        <h2>Others</h2>
        <div className="product-grid">{renderGrid('others')}</div>
      </section>
    </main>
  );
};

export default Shop;
