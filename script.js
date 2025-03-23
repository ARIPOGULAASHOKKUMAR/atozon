document.addEventListener("DOMContentLoaded", function () {
    showAllProducts(); // Show all products on homepage load
});

// Show All Products on Home
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

// Hide Other Sections
function hideOtherSections(activeSection) {
    let allSections = ["products-section", "coupons-section", "electronics-section", "mobiles-section"];
    allSections.forEach(section => {
        document.getElementById(section).style.display = section === activeSection ? "flex" : "none";
    });
}

// Show Each Category
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

// Display Items Function
function displayItems(items, sectionId) {
    let html = "";
    items.forEach(item => {
        let starsHTML = generateStars(item.rating);

        // Coupon Button for Coupon Section
        let buttonHTML = (sectionId === "coupons-section") 
            ? `<button class="Buy-6" onclick="showCouponPopup('${item.name}', '${item.details}', '${item.couponCode}')">Show Code</button>`
            : `<button class="Buy-6" onclick="window.open('${item.link}', '_blank')">Own It</button>`;

        html += `
            <div class="products">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.details}</p>
                <h6>${item.price}</h6>
                <p class="stars">${starsHTML}</p>
                ${buttonHTML}
            </div>`;
    });

    document.getElementById(sectionId).innerHTML = html;
}

// Generate Rating Stars
function generateStars(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        stars += (i < rating) ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    }
    return stars;
}

// Search Products Function
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
    }
}

// Load Category Data
function loadProducts() {
    const products = [
        { 
            name: "HP 15s Laptop", 
            details: "Intel i5, 16GB RAM, 512GB SSD", 
            price: "INR 54,990", 
            rating: 4, 
            image: "https://m.media-amazon.com/images/I/71J+OBadJCL._SY450_.jpg", 
            link: "https://amzn.to/4hxR3st"
        }
    ];
    displayItems(products, "products-section");
}

function loadCoupons() {
    const coupons = [
        { 
            name: "50% Off on Electronics",
            details: "Use code ELEC50", 
            price: "Limited Offer", 
            rating: 4, 
            image: "https://blog.swiggy.com/wp-content/uploads/2024/11/1_GRb_rx8fweCdGEnQR5YLAA-1.webp", 
            couponCode: "ELEC50" 
        }
    ];
    displayItems(coupons, "coupons-section");
}

function loadElectronics() {
    const electronics = [
        { 
            name: "Sony WH-1000XM5", 
            details: "Noise cancellation, 30-hour battery", 
            price: "INR 29,999", 
            rating: 5, 
            image: "https://m.media-amazon.com/images/I/71pIlXDTlzL._AC_UL480_FMwebp_QL65_.jpg", 
            link: "https://www.amazon.in/dp/B09X658QZX?tag=your-affiliate-id" 
        }
    ];
    displayItems(electronics, "electronics-section");
}

function loadMobiles() {
    const mobiles = [
        { 
            name: "Samsung Galaxy F215 5G", 
            details: "6GB RAM, 128GB Storage, 200MP Camera", 
            price: "INR 12,148", 
            rating: 5, 
            image: "https://m.media-amazon.com/images/I/71qFJqFePsL._SX569_.jpg", 
            link: "https://amzn.to/3XR9i52"
        }
    ];
    displayItems(mobiles, "mobiles-section");
}

// Coupon Popup Functionality
function showCouponPopup(title, terms, code) {
    document.getElementById("coupon-title").innerText = title;
    document.getElementById("coupon-terms").innerText = terms;
    document.getElementById("coupon-code").value = code;
    document.getElementById("coupon-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("coupon-popup").style.display = "none";
}

// Copy Coupon Code
function copyCouponCode() {
    let copyText = document.getElementById("coupon-code");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value)
        .then(() => alert("Coupon code copied!"))
        .catch(err => alert("Failed to copy: ", err));
}
