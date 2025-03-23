// Show All Sections on Page Load
document.addEventListener("DOMContentLoaded", function () {
    showAllProducts();
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

// Hide Other Sections
function hideOtherSections(activeSection) {
    let allSections = ["products-section", "coupons-section", "electronics-section", "mobiles-section"];
    allSections.forEach(section => {
        document.getElementById(section).style.display = section === activeSection ? "flex" : "none";
    });
}

// Section Show Functions
function showProducts() { hideOtherSections("products-section"); loadProducts(); }
function showCoupons() { hideOtherSections("coupons-section"); loadCoupons(); }
function showElectronics() { hideOtherSections("electronics-section"); loadElectronics(); }
function showMobiles() { hideOtherSections("mobiles-section"); loadMobiles(); }

// Display Items
function displayItems(items, sectionId) {
    let html = "";
    items.forEach(item => {
        let starsHTML = generateStars(item.rating);

        // Coupon Section
        if (sectionId === "coupons-section") {
            html += `
                <div class="products" onclick="showCouponPopup('${item.name}', '${item.details}', 'ELEC50')">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.details}</p>
                    <h6>${item.price}</h6>
                    <p class="stars">${starsHTML}</p>
                    <button class="Buy-6">Get Coupon</button>
                </div>`;
        } else {
            // Other Sections
            html += `
                <div class="products">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.details}</p>
                    <h6>${item.price}</h6>
                    <p class="stars">${starsHTML}</p>
                    <button class="Buy-6" onclick="window.open('${item.link}', '_blank')">Own It</button>
                </div>`;
        }
    });

    document.getElementById(sectionId).innerHTML = html;
}

// Show Coupon Popup
function showCouponPopup(title, details, couponCode) {
    // Remove existing popup if present
    const existingPopup = document.getElementById("coupon-popup");
    if (existingPopup) existingPopup.remove();

    // Create Popup Element
    let popupHtml = `
        <div id="coupon-popup" class="coupon-popup">
            <div class="popup-content">
                <h2>${title}</h2>
                <p>${details}</p>
                <div class="coupon-code">
                    <input type="text" value="${couponCode}" id="coupon-text" readonly>
                    <button onclick="copyCouponCode()">Copy</button>
                </div>
                <button class="close-btn" onclick="closeCouponPopup()">Close</button>
            </div>
        </div>`;

    // Append to Body
    document.body.insertAdjacentHTML("beforeend", popupHtml);
}

// Copy Coupon Code
function copyCouponCode() {
    let couponText = document.getElementById("coupon-text");
    navigator.clipboard.writeText(couponText.value)
        .then(() => alert("Coupon Code Copied!"))
        .catch(err => alert("Failed to copy!"));
}

// Close Coupon Popup
function closeCouponPopup() {
    const popup = document.getElementById("coupon-popup");
    if (popup) popup.remove();
}

// Generate Stars
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

// Load Products
function loadProducts() {
    const products = [
        { name: "HP 15s Laptop", 
          details: "Intel i5, 16GB RAM, 512GB SSD", 
          price: "INR 54,990", 
          rating: 4, 
          image: "https://m.media-amazon.com/images/I/71J+OBadJCL._SY450_.jpg", 
          link: "https://amzn.to/4hxR3st" }
    ];
    displayItems(products, "products-section");
}

// Load Coupons
function loadCoupons() {
    const coupons = [{ 
        name: "50% Off on Electronics", 
        details: "Use code ELEC50", 
        price: "Limited Offer", 
        rating: 4, 
        image: "https://blog.swiggy.com/wp-content/uploads/2024/11/1_GRb_rx8fweCdGEnQR5YLAA-1.webp" 
    }];
    displayItems(coupons, "coupons-section");
}

// Load Electronics
function loadElectronics() {
    const electronics = [{ 
        name: "Sony WH-1000XM5", 
        details: "Noise cancellation, 30-hour battery", 
        price: "INR 29,999", 
        rating: 5, 
        image: "https://m.media-amazon.com/images/I/71pIlXDTlzL._AC_UL480_FMwebp_QL65_.jpg", 
        link: "https://www.amazon.in/dp/B09X658QZX?tag=your-affiliate-id" 
    }];
    displayItems(electronics, "electronics-section");
}

// Load Mobiles
function loadMobiles() {
    const mobiles = [{ 
        name: "Samsung Galaxy F215 5G", 
        details: "6GB RAM, 125GB Storage, 200MP Camera", 
        price: "INR 12,148", 
        rating: 5, 
        image: "https://m.media-amazon.com/images/I/71qFJqFePsL._SX569_.jpg", 
        link: "https://amzn.to/3XR9i52" 
    }];
    displayItems(mobiles, "mobiles-section");
}
