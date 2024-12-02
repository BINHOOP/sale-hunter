// Stripe configuration
const stripe = Stripe('pk_test_51QN0YHB6TbyJrfOTuFy01eVZeKYi6TdNGb4LsGi30bo1J0ntpzEr3ec2AsAa8Fzu2QKSv24ywGI2fSPv9j5EcODe00I89sJkkU'); // Replace with your actual Stripe publishable key

document.addEventListener('click', async (event) => {
    if (event.target.matches('#upgrade-button') || event.target.matches('#upgrade-full-button')) {
        const plan = event.target.getAttribute('data-plan'); // Get selected plan
        try {
            const response = await fetch('/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ plan }),
            });
            const session = await response.json();

            if (session.id) {
                await stripe.redirectToCheckout({ sessionId: session.id });
            } else {
                console.error('Error creating session:', session);
                alert('Failed to initiate payment. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred.');
        }
    }
});
