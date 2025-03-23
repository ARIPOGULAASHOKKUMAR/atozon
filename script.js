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

// Function to Show Coupon Popup
function showCouponPopup(title, details, couponCode) {
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

    let popupDiv = document.createElement("div");
    popupDiv.innerHTML = popupHtml;
    document.body.appendChild(popupDiv);
}

// Function to Copy Coupon Code
function copyCouponCode() {
    let couponText = document.getElementById("coupon-text");
    couponText.select();
    document.execCommand("copy");
    alert("Coupon Code Copied!");
}

// Function to Close Coupon Popup
function closeCouponPopup() {
    document.getElementById("coupon-popup").remove();
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

// Load More Products in Each Category
function loadProducts() {
    const products = [
        { name: "HP 15s Laptop", details: "Intel i5, 16GB RAM, 512GB SSD", price: "INR 54,990", rating: 4, 
          image: "https://m.media-amazon.com/images/I/71J+OBadJCL._SY450_.jpg", link: "https://amzn.to/4hxR3st" }
    ];
    displayItems(products, "products-section");
}

function loadCoupons() {
    const coupons = [{ name: "50% Off on Electronics", details: "Use code ELEC50", price: "Limited Offer", rating: 4, 
        image: "https://blog.swiggy.com/wp-content/uploads/2024/11/1_GRb_rx8fweCdGEnQR5YLAA-1.webp" }];
    displayItems(coupons, "coupons-section");
}

function loadElectronics() {
    const electronics = [{ name: "Sony WH-1000XM5", details: "Noise cancellation, 30-hour battery", price: "INR 29,999", rating: 5, 
        image: "https://m.media-amazon.com/images/I/71pIlXDTlzL._AC_UL480_FMwebp_QL65_.jpg", link: "https://www.amazon.in/dp/B09X658QZX?tag=your-affiliate-id" }];
    displayItems(electronics, "electronics-section");
}

function loadMobiles() {
    const mobiles = [{ name: "Samsung Galaxy F215 5G", details: "6GB RAM, 125GB Storage, 200MP Camera", price: "INR 12,148", rating: 5, 
        image: "https://m.media-amazon.com/images/I/71qFJqFePsL._SX569_.jpg", link: "https://amzn.to/3XR9i52" }];
    displayItems(mobiles, "mobiles-section");
}
