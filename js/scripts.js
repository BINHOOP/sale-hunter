// Fetch product deals from API and display them
fetch('/api/deals')
    .then(response => response.json())
    .then(deals => {
        const productsContainer = document.querySelector('.products');
        deals.forEach(deal => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${deal.image}" alt="${deal.name}">
                <h3>${deal.name}</h3>
                <p>${deal.description}</p>
                <p><strong>${deal.price}</strong></p>
                <button>Buy Now</button>
            `;
            productsContainer.appendChild(productCard);
        });
    });

// Stripe checkout integration (for Premium plans)
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        fetch('/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId })
        })
        .then(res => res.json())
        .then(data => window.location = data.url);
    });
});
