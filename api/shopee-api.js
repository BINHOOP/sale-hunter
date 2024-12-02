// Example for fetching Shopee products via a mock API
async function fetchShopeeDeals() {
    return fetch('https://api.shopee.com/v1/products?category=deals')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error('Error fetching Shopee products:', error));
}
