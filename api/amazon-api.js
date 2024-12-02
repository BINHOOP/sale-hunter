// Mock API integration for Amazon
async function fetchAmazonDeals() {
    return [
        { id: 1, name: "Amazon Deal 1", description: "Great Amazon Product", price: "$20", image: "/images/amazon1.jpg" },
        { id: 2, name: "Amazon Deal 2", description: "Another Amazon Product", price: "$50", image: "/images/amazon2.jpg" }
    ];
}
