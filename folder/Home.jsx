import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const productsData = [
  { id: 1, name: "Coco Peat Block", price: 35.0, desc: "Organic soil amendment.", img: "/images/product-01.jpg" },
  { id: 2, name: "Coco Grow Bag", price: 30.0, desc: "Breathable plant container.", img: "/images/product-02.jpg" },
  { id: 3, name: "Coir Doormat", price: 100.0, desc: "Heavy duty mud scraper.", img: "/images/product-03.jpg" },
  { id: 4, name: "Basket Liners", price: 85.0, desc: "Natural floral displays.", img: "/images/product-04.jpg" },
  { id: 5, name: "Seedling Pots", price: 50.0, desc: "Biodegradable starter cups.", img: "/images/product-05.png" },
  { id: 6, name: "Fiber Scrub Brush", price: 45.0, desc: "Natural kitchen cleaning.", img: "/images/product-06.jpg" },
  { id: 7, name: "Tree Mulch Mat", price: 30.0, desc: "Erosion and weed control.", img: "/images/product-07.png" },
  { id: 8, name: "Coir Rope Coil", price: 45.0, desc: "Strong maritime fiber rope.", img: "/images/product-08.png" },
  { id: 9, name: "Coco Coaster", price: 35.0, desc: "Sturdy and Absorbent.", img: "/images/product-09.jpg" },
  { id: 10, name: "Coir Geotextile Mesh", price: 120.0, desc: "Soil erosion control matting.", img: "/images/product-10.jpg" },
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
  { id: 21, name: "Premium Coir Yarn", price: 95.0, desc: "Strong multi-purpose yarn.", img: "/images/product-21.jpg" }
];

const Home = () => {
  // Logic to split products for different sections
  const featured = productsData.slice(0, 3);
  const popular = productsData.slice(3, 6);
  const others = productsData.slice(6, 12);

  return (
    <main className="main">
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-content">
          <h1>Shop locally produced coconut coir products.</h1>
          <div className="hero-button">
            <Link to="/shop"> Shop Now &gt; </Link>
          </div>
        </div>
      </div>

      <div className="section-intro">
        <h1>Premium Coir Collection</h1>
        <p>Eco-friendly solutions for your garden, home, and industrial needs.</p>
      </div>

      {/* FEATURED SECTION */}
      <section className="product-section">
        <div className="section-header">
          <h2>Featured Selection</h2>
          <select id="featured-sort" className="pretty-select">
            <option value="manual">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="name-asc">A-Z</option>
          </select>
        </div>
        <div className="product-grid">
          {featured.map(item => <ProductCard key={item.id} product={item} />)}
        </div>
        <button className="btn-pretty">View More Featured</button>
      </section>

      {/* POPULAR SECTION */}
      <section className="product-section">
        <h2>Popular Items</h2>
        <div className="product-grid">
          {popular.map(item => <ProductCard key={item.id} product={item} />)}
        </div>
        <button className="btn-pretty">Explore Popular</button>
      </section>

      {/* OTHERS SECTION */}
      <section className="product-section">
        <h2>Others</h2>
        <div className="product-grid">
          {others.map(item => <ProductCard key={item.id} product={item} />)}
        </div>
      </section>
      
      {/* FULL COLLECTION GRID */}
      <h2 style={{marginTop: '40px'}}>Full Collection</h2>
      <div className="product-grid">
        {productsData.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;