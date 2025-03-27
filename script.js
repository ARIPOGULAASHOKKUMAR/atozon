// On Page Load - Show All Latest Uploads
document.addEventListener("DOMContentLoaded", function () {
    showAllProducts(); // Display all categories by default
});

// Event Listener for Home Button
document.getElementById("homeButton").addEventListener("click", function () {
    showAllProducts(); // Show all categories on Home button click
});



// Function to Show Latest Uploads from All Categories
function showAllProducts() {
    // Show All Sections
    showSection("products-section");
    showSection("coupons-section");
    showSection("electronics-section");
    showSection("mobiles-section");

    // Load Data for Each Category
    loadProducts();
    loadCoupons();
    loadElectronics();
    loadMobiles();
}

// Hide and Show Sections
function hideOtherSections(activeSection) {
    let allSections = ["products-section", "coupons-section", "electronics-section", "mobiles-section"];
    allSections.forEach(section => {
        document.getElementById(section).style.display = section === activeSection ? "flex" : "none";
    });
}

function showSection(sectionId) {
    document.getElementById(sectionId).style.display = "flex";
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

// Coupon Popup Functions
function showCouponPopup(title, details, code) {
    document.getElementById("coupon-title").innerText = title;
    document.getElementById("coupon-terms").innerText = details;
    document.getElementById("coupon-code").value = code;
    document.getElementById("coupon-popup").classList.add("show");
}

function closePopup() {
    document.getElementById("coupon-popup").classList.remove("show");
}

function copyCouponCode() {
    let copyText = document.getElementById("coupon-code");
    copyText.select();
    document.execCommand("copy");
    alert("Coupon code copied!");
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



