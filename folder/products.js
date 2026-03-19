(function () {
  // --- DATA (The list of items to sell) ---
  const products = [
    {
      id: "p01",
      name: "Coco Peat Block",
      price: 35.0,
      pop: 95,
      desc: "Organic soil amendment.",
      img: "images/product-01.jpg",
      tags: ["featured", "popular", "garden"],
    },
    {
      id: "p02",
      name: "Coco Grow Bag",
      price: 30.0,
      pop: 88,
      desc: "Breathable plant container.",
      img: "images/product-02.jpg",
      tags: ["featured", "garden"],
    },
    {
      id: "p03",
      name: "Coir Doormat",
      price: 100.0,
      pop: 72,
      desc: "Heavy duty mud scraper.",
      img: "images/product-03.jpg",
      tags: ["home", "popular"],
    },
    {
      id: "p04",
      name: "Basket Liners",
      price: 85.0,
      pop: 60,
      desc: "Natural floral displays.",
      img: "images/product-04.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p05",
      name: "Seedling Pots",
      price: 50.0,
      pop: 83,
      desc: "Biodegradable starter cups.",
      img: "images/product-05.png",
      tags: ["garden", "popular"],
    },
    {
      id: "p06",
      name: "Fiber Scrub Brush",
      price: 45.0,
      pop: 68,
      desc: "Natural kitchen cleaning.",
      img: "images/product-06.jpg",
      tags: ["home"],
    },
    {
      id: "p07",
      name: "Tree Mulch Mat",
      price: 30.0,
      pop: 77,
      desc: "Erosion and weed control.",
      img: "images/product-07.png",
      tags: ["garden", "popular"],
    },
    {
      id: "p08",
      name: "Coir Rope Coil",
      price: 45.0,
      pop: 55,
      desc: "Strong maritime fiber rope.",
      img: "images/product-08.png",
      tags: ["industrial"],
    },
    {
      id: "p09",
      name: "Coco Coaster",
      price: 35.0,
      pop: 64,
      desc: "Sturdy and Absorbent.",
      img: "images/product-09.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p10",
      name: "Coir Geotextile Mesh",
      price: 120.0,
      pop: 64,
      desc: "Soil erosion control matting.",
      img: "images/product-10.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p11",
      name: "Coco Pole",
      price: 65.0,
      pop: 64,
      desc: "Support for climbing plants.",
      img: "images/product-11.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p12",
      name: "Coir Logs",
      price: 350.0,
      pop: 64,
      desc: "Shoreline and bank protection.",
      img: "images/product-12.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p13",
      name: "Coco Husk Chips",
      price: 55.0,
      pop: 64,
      desc: "Premium coconut mulch.",
      img: "images/product-13.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p14",
      name: "Coir Bird Nest",
      price: 120.0,
      pop: 64,
      desc: "Natural breeder pocket.",
      img: "images/product-14.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p15",
      name: "Rubberized Coir Pad",
      price: 350.0,
      pop: 64,
      desc: "Breathable mattress cushioning.",
      img: "images/product-15.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p16",
      name: "Coir Boot Scraper",
      price: 210.0,
      pop: 64,
      desc: "Heavy-duty side cleaners.",
      img: "images/product-16.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p17",
      name: "Coir Peat Pellets",
      price: 25.0,
      pop: 64,
      desc: "Compressed seed starters.",
      img: "images/product-17.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p18",
      name: "Coir Pet Mat",
      price: 280.0,
      pop: 64,
      desc: "Scratch-resistant animal bed.",
      img: "images/product-18.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p19",
      name: "Woven Coir Tote Bag",
      price: 450.0,
      pop: 64,
      desc: "Eco-friendly artisanal carrier.",
      img: "images/product-19.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p20",
      name: "Coir Dish Brush with Pad",
      price: 110.0,
      pop: 64,
      desc: "Sustainable kitchen cleaning set.",
      img: "images/product-20.jpg",
      tags: ["home", "featured"],
    },
    {
      id: "p21",
      name: "Premium Coir Yarn",
      price: 95.0,
      pop: 64,
      desc: "Strong multi-purpose fiber yarn.",
      img: "images/product-21.jpg",
      tags: ["home", "featured"],
    },
  ];

  // --- AJAX SIMULATION (Pretending to ask a server for data) ---
  function fetchProductsAjax(tagFilter) {
    return new Promise((resolve) => {
      console.log(`AJAX: Fetching products for tag: ${tagFilter}...`);

      // Wait for 0.8 seconds to mimic a slow internet connection
      setTimeout(() => {
        const filtered =
          tagFilter === "others"
            ? products.filter(
                (p) =>
                  !p.tags.includes("featured") && !p.tags.includes("popular"),
              )
            : products.filter((p) => p.tags.includes(tagFilter));

        resolve(filtered);
      }, 800);
    });
  }

  // Sorting by: Price, by Name, or by Popularity
  const sortingLogic = {
    manual: () => 0,
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

  // --- (Puts the items on the page) ---
  async function loadSectionAjax(containerId, tag, sortKey, limit) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Show a "Loading..." message while waiting for data
    container.innerHTML = `<div class="loader">Loading ${tag} items...</div>`;

    // Wait for the "Ajax" function to finish getting the data
    const data = await fetchProductsAjax(tag);

    // Sort the list (e.g., only show 3 items)
    const finalItems = data
      .sort(sortingLogic[sortKey] || sortingLogic.manual)
      .slice(0, limit);

    // Remove the "Loading..." message and show the actual products
    container.innerHTML = "";
    finalItems.forEach((p) => container.appendChild(createCard(p)));
  }

  // Start loading all three sections
  function initApp() {
    loadSectionAjax(
      "featured-grid",
      "featured",
      document.getElementById("featured-sort")?.value,
      3,
    );
    loadSectionAjax("popular-grid", "popular", "pop-desc", 4);
    loadSectionAjax("others-grid", "others", "manual", 4);
  }

  // Run when the page is ready
  document.addEventListener("DOMContentLoaded", () => {
    initApp();

    // Refresh the "Featured" section whenever the sort dropdown is changed
    document
      .getElementById("featured-sort")
      ?.addEventListener("change", initApp);
  });
})();
