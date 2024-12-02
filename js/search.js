export function searchDeals(query) {
    const products = document.querySelectorAll('.product-card');
    products.forEach((product) => {
        const name = product.querySelector('h3').textContent.toLowerCase();
        if (name.includes(query.toLowerCase())) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
