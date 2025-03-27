function loadCoupons() {
    const coupons = [
        { 
            name: "50% Off on Electronics",
            //details: "Use code ELEC50", 
            price: "Limited Offer", 
            rating: 4, 
            image: "https://blog.swiggy.com/wp-content/uploads/2024/11/1_GRb_rx8fweCdGEnQR5YLAA-1.webp", 
            couponCode: "ELEC50" 
        },


        {
            name: "Swiggy upto 30% Off on food",
            //details: "Use code foodie", 
            price: "Limited Offer", 
            rating: 4, 
            image: "https://blog.swiggy.com/wp-content/uploads/2024/11/1_GRb_rx8fweCdGEnQR5YLAA-1.webp", 
            couponCode: "Foodie" 

        }




    ];
    displayItems(coupons, "coupons-section");
}