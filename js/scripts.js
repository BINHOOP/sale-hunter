async function fetchProducts(endpoint, containerId) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        data.items.forEach((item, index) => {
            if (!item.premium && index > 5) return; // Giới hạn 5 sản phẩm cho non-premium
            const productCard = `
                <div class="product-card">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <a href="${item.link}" target="_blank">Buy Now</a>
                </div>`;
            container.insertAdjacentHTML('beforeend', productCard);
        });
    } catch (error) {
        console.error(`Error fetching ${containerId} data:`, error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts('/api/shopee-products', 'shopee-list');
    fetchProducts('/api/amazon-products', 'amazon-list');
    fetchProducts('/api/tiktok-livestream', 'tiktok-list');
    fetchProducts('/api/alibaba-products', 'alibaba-list');
});
