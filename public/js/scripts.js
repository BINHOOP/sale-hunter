async function fetchProducts(endpoint, containerId) {
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        data.items.forEach((item, index) => {
            // Premium access check
            if (!item.premium && index > 5) return; // Giới hạn truy cập 5 sản phẩm cho non-premium
            const productCard = `
                <div class="product-card">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <a href="${item.link}" target="_blank">Buy Now</a>
                </div>`;
            container.insertAdjacentHTML('beforeend', productCard);
        });
        gsap.from(".product-card", { opacity: 0, scale: 0.9, stagger: 0.2 });
    } catch (error) {
        console.error(`Error fetching ${containerId} data:`, error);
    }
}

function openStripeCheckout() {
    const stripe = Stripe('pk_test_51QN0YHB6TbyJrfOTuFy01eVZeKYi6TdNGb4LsGi30bo1J0ntpzEr3ec2AsAa8Fzu2QKSv24ywGI2fSPv9j5EcODe00I89sJkkU');
    stripe.redirectToCheckout({
        lineItems: [{
            price: 'YOUR_PRICE_ID',
            quantity: 1,
        }],
        mode: 'payment',
        successUrl: window.location.href + '?success=true',
        cancelUrl: window.location.href + '?canceled=true',
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts('/api/shopee-products', 'shopee-list');
    fetchProducts('/api/amazon-products', 'amazon-list');
    fetchProducts('/api/tiktok-livestream', 'tiktok-list');
    fetchProducts('/api/alibaba-products', 'alibaba-list');
});
