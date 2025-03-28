function loadCoupons() {
    const coupons = [
        
            { 
                name: "OTT Play",
                details: "Get Sony Liv & 36 OTTs - Validity: March 31",
                couponCode: "OTTPTMCB1PP99",
                howToAvail: "1. Avail the subscription by redeeming your points.\n2. Use the code at checkout.\n3. Enjoy access to 36+ OTT platforms.",
                termsAndConditions: "1. Offer valid until March 31.\n2. Non-transferable and non-refundable.\n3. Limited to one-time use per user.",
                price: "Limited Offer @ 99/-",
                rating: 5,
                image: "https://onlinedth.co.in/wp-content/uploads/2024/09/Yash-OTT-Pack-25-992x1024.webp",
            },
        
            { 
                name: "Boat Products Flat 500 off",
                details: " on Smartwatches and Airdopes, Val: Apr 15",
                howToAvail: "1. Go to Amazon Prime subscription page.\n2. Apply the coupon code at checkout.\n3. Complete the payment process.",
                termsAndConditions: "1. Valid for new users only.\n2. Cannot be combined with other promotions.\n3. Limited availability.",
                couponCode: "PaytmxboAt",
                price: "No Min",
                rating: 4,
                image: "https://i.pinimg.com/474x/0b/33/0e/0b330e03f9126c75e970a75f83bb485d.jpg",
            },
            
            { 
                name: "JBL Flat 15% off",
                details: " on Selected Products| Val: nill",
                howToAvail: "1. Go to Amazon Prime subscription page.\n2. Apply the coupon code at checkout.\n3. Complete the payment process.",
                termsAndConditions: "1. Valid for new users only.\n2. Cannot be combined with other promotions.\n3. Limited availability.",
                couponCode: "PAY96TMND20HG15",
                price: "No Min",
                rating: 4,
                image: "https://i.pinimg.com/474x/95/88/d8/9588d8e0812e7174777a82c1366b7d96.jpg",
            },
            
        ];
        
    displayItems(coupons, "coupons-section");
}