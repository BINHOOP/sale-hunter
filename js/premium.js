export function upgradeToPremium() {
    const stripe = Stripe('your-stripe-public-key');
    stripe.redirectToCheckout({
        lineItems: [{ price: 'your-price-id', quantity: 1 }],
        mode: 'payment',
        successUrl: window.location.href + '?status=success',
        cancelUrl: window.location.href + '?status=canceled',
    });
}
document.getElementById('upgrade-button').addEventListener('click', upgradeToPremium);
