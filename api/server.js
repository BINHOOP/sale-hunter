const express = require('express');
const stripe = require('stripe')('sk_test_51QN0YHB6TbyJrfOTbDOrv3Cmxq682haJGItgRiFtkNcNygL3KSS6LrpRDjgH5k0VED5eqmhUzaKG21eDg8IG6YV200aPdxHizM'); // Replace with your actual Stripe secret key
const app = express();

app.use(express.json());

// API route for creating checkout sessions
app.post('/create-checkout-session', async (req, res) => {
    const { plan } = req.body;
    const priceId = plan === 'premium' ? 'prod_RK9E2qz8JgIbf7' : 'prod_RK9IVCThmqGvSS'; // Update with your actual price IDs

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{ price: priceId, quantity: 1 }],
            mode: 'subscription', // Use "subscription" for recurring payments
            success_url: 'http://yourdomain.com/success',
            cancel_url: 'http://yourdomain.com/cancel',
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
