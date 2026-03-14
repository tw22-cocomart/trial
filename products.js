(function () {
  // --- DATA (The list of items to sell) ---
  const products = [
    { id: "p01", name: "Coco Peat Block", price: 35.0, pop: 95, desc: "Organic soil amendment.", img: "images/product-01.jpg", tags: ["featured", "popular", "garden"] },
    { id: "p02", name: "Coco Grow Bag", price: 30.0, pop: 88, desc: "Breathable plant container.", img: "images/product-02.jpg", tags: ["featured", "garden"] },
    { id: "p03", name: "Coir Doormat", price: 100.0, pop: 72, desc: "Heavy duty mud scraper.", img: "images/product-03.jpg", tags: ["home", "popular"] },
    { id: "p04", name: "Basket Liners", price: 85.0, pop: 60, desc: "Natural floral displays.", img: "images/product-04.jpg", tags: ["home", "featured"] },
    { id: "p05", name: "Seedling Pots", price: 50.0, pop: 83, desc: "Biodegradable starter cups.", img: "images/product-05.png", tags: ["garden", "popular"] },
    { id: "p06", name: "Fiber Scrub Brush", price: 45.0, pop: 68, desc: "Natural kitchen cleaning.", img: "images/product-06.jpg", tags: ["home"] },
    { id: "p07", name: "Tree Mulch Mat", price: 30.0, pop: 77, desc: "Erosion and weed control.", img: "images/product-07.png", tags: ["garden", "popular"] },
    { id: "p08", "name": "Coir Rope Coil", price: 45.0, pop: 55, desc: "Strong maritime fiber rope.", img: "images/product-08.png", tags: ["industrial"] },
    { id: "p09", name: "Coco Coaster", price: 35.0, pop: 64, desc: "Sturdy and Absorbent.", img: "images/product-09.jpg", tags: ["home", "featured"] }
  ];

  // --- AJAX SIMULATION (Pretending to ask a server for data) ---
  function fetchProductsAjax(tagFilter) {
    return new Promise((resolve) => {
      console.log(`AJAX: Fetching products for tag: ${tagFilter}...`);
      
      // Wait for 0.8 seconds to mimic a slow internet connection
      setTimeout(() => {
        const filtered = tagFilter === "others" 
          ? products.filter(p => !p.tags.includes("featured") && !p.tags.includes("popular"))
          : products.filter(p => p.tags.includes(tagFilter));
        
        resolve(filtered);
      }, 800);
    });
  }

  // Sorting by: Price, by Name, or by Popularity
  const sortingLogic = {
    "manual": () => 0,
    "price-asc": (a, b) => a.price - b.price,
    "name-asc": (a, b) => a.name.localeCompare(b.name),
    "pop-desc": (a, b) => b.pop - a.pop,
  };

  // Create the HTML for one product card
  function createCard(p) {
    const article = document.createElement("article");
    article.className = "product-card";
    article.innerHTML = `
      <img class="img-wrap" src="${p.img}" alt="${p.name}" />
      <div class="product-info">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price">₱${p.price.toFixed(2)}</p>
      </div>
    `;
    return article;
  }

  // --- RENDERER (Puts the items on the page) ---
  async function loadSectionAjax(containerId, tag, sortKey, limit) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Show a "Loading..." message while waiting for data
    container.innerHTML = `<div class="loader">Loading ${tag} items...</div>`;

    // Wait for the "Ajax" function to finish getting the data
    const data = await fetchProductsAjax(tag);

    // Sort the list (e.g., only show 3 items)
    const finalItems = data.sort(sortingLogic[sortKey] || sortingLogic.manual).slice(0, limit);

    // Remove the "Loading..." message and show the actual products
    container.innerHTML = ""; 
    finalItems.forEach(p => container.appendChild(createCard(p)));
  }

  // Start loading all three sections
  function initApp() {
    loadSectionAjax("featured-grid", "featured", document.getElementById("featured-sort")?.value, 3);
    loadSectionAjax("popular-grid", "popular", "pop-desc", 4);
    loadSectionAjax("others-grid", "others", "manual", 4);
  }

  // Run when the page is ready
  document.addEventListener("DOMContentLoaded", () => {
    initApp();
    
    // Refresh the "Featured" section whenever the sort dropdown is changed
    document.getElementById("featured-sort")?.addEventListener("change", initApp);
  });
})();