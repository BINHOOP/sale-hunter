// Example for fetching Alibaba products via a mock API
async function fetchAlibabaDeals() {
    return fetch('https://api.alibaba.com/products?category=deals')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error('Error fetching Alibaba products:', error));
}
