// Example for fetching Amazon products via a mock API
async function fetchAmazonDeals() {
    return fetch('https://api.amazon.com/products?category=deals')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error('Error fetching Amazon products:', error));
}
