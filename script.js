document.addEventListener("DOMContentLoaded", function () {
    showAllProducts(); // Show all products on homepage load
});

function showAllProducts() {
    document.getElementById("products-section").style.display = "flex";
    document.getElementById("coupons-section").style.display = "flex";
    document.getElementById("electronics-section").style.display = "flex";
    document.getElementById("mobiles-section").style.display = "flex";

    loadProducts();
    loadCoupons();
    loadElectronics();
    loadMobiles();
}

function hideOtherSections(activeSection) {
    let allSections = ["products-section", "coupons-section", "electronics-section", "mobiles-section"];
    allSections.forEach(section => {
        document.getElementById(section).style.display = section === activeSection ? "flex" : "none";
    });
}

function showProducts() {
    hideOtherSections("products-section");
    loadProducts();
}

function showCoupons() {
    hideOtherSections("coupons-section");
    loadCoupons();
}

function showElectronics() {
    hideOtherSections("electronics-section");
    loadElectronics();
}

function showMobiles() {
    hideOtherSections("mobiles-section");
    loadMobiles();
}

// Function to Display Items
function displayItems(items, sectionId) {
    let html = "";
    items.forEach(item => {
        let starsHTML = generateStars(item.rating);
        
        html += `
            <div class="products">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.details}</p>
                <h6>${item.price}</h6>
                <p class="stars">${starsHTML}</p>
                <button class="Buy-6" onclick="window.open('${item.link}', '_blank')">Own It</button>
            </div>`;
    });

    document.getElementById(sectionId).innerHTML = html;
}

// Function to Generate Rating Stars
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fa-solid fa-star"></i>';
        } else {
            stars += '<i class="fa-regular fa-star"></i>';
        }
    }
    return stars;
}

// Fixed Search Function
function searchProducts() {
    let query = document.getElementById("search-box").value.toLowerCase();
    let allSections = ["products-section", "coupons-section", "electronics-section", "mobiles-section"];
    let itemsFound = false;

    allSections.forEach(section => {
        let items = document.querySelectorAll(`#${section} .products`);
        let sectionHasResults = false;

        items.forEach(item => {
            let name = item.querySelector("h3").innerText.toLowerCase();
            let details = item.querySelector("p").innerText.toLowerCase();
            if (name.includes(query) || details.includes(query)) {
                item.style.display = "block";
                sectionHasResults = true;
                itemsFound = true;
            } else {
                item.style.display = "none";
            }
        });

        document.getElementById(section).style.display = sectionHasResults ? "flex" : "none";
    });

    if (!itemsFound) {
        document.getElementById("products-section").innerHTML = "<p>No products found.</p>";
        document.getElementById("coupons-section").style.display = "none";
        document.getElementById("electronics-section").style.display = "none";
        document.getElementById("mobiles-section").style.display = "none";
    }
}


// Load More Products in Each Category
function loadProducts() {
    const products = [
        { name: "HP 15s Laptop", 
          details: "Intel i5, 16GB RAM, 512GB SSD", 
          price: "INR 54,990", rating: 4, 
          image: "https://m.media-amazon.com/images/I/71J+OBadJCL._SY450_.jpg", 
          link: "https://amzn.to/4hxR3st" }
    ];
    displayItems(products, "products-section");
}

function loadCoupons() {
    const coupons = [{ name: "50% Off on Electronics",
         details: "Use code ELEC50", 
         price: "Limited Offer", 
         rating: 4, 
         image: "https://blog.swiggy.com/wp-content/uploads/2024/11/1_GRb_rx8fweCdGEnQR5YLAA-1.webp", 
         link: "https://www.amazon.in/dp/B09X658QZX?tag=your-affiliate-id" }];
    displayItems(coupons, "coupons-section");
}

function loadElectronics() {
    const electronics = [{ name: "Sony WH-1000XM5", 
        details: "Noise cancellation, 30-hour battery", 
        price: "INR 29,999", rating: 5, 
        image: "https://m.media-amazon.com/images/I/71pIlXDTlzL._AC_UL480_FMwebp_QL65_.jpg", 
        link: "https://www.amazon.in/dp/B09X658QZX?tag=your-affiliate-id" }];
    displayItems(electronics, "electronics-section");
}

function loadMobiles() {
    const mobiles = [{ name: "Samsung Galaxy F215 5G", 
        details: "6GB RAM, 125GB Storage, 200MP Camera", 
        price: "INR 12,148", 
        rating: 5, 
        image: "https://m.media-amazon.com/images/I/71qFJqFePsL._SX569_.jpg", 
        link: "https://amzn.to/3XR9i52" }];
    displayItems(mobiles, "mobiles-section");
}
