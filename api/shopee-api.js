// Mock API integration for Shopee
async function fetchShopeeDeals() {
    return [
        { id: 1, name: "Shopee Deal 1", description: "Shopee Exclusive", price: "$15", image: "/images/shopee1.jpg" },
        { id: 2, name: "Shopee Deal 2", description: "Discounted Shopee Item", price: "$35", image: "/images/shopee2.jpg" }
    ];
}
