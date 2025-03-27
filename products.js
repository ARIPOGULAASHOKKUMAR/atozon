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
