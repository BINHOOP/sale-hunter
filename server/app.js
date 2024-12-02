require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Example Shopee API endpoint
app.get('/api/shopee-products', (req, res) => {
    // Simulate fetching data from Shopee's API
    res.json({
        items: [
            { name: 'Product 1', price: '$10', image: 'image1.jpg', link: '#' },
            { name: 'Product 2', price: '$20', image: 'image2.jpg', link: '#' }
        ]
    });
});

// Stripe payment endpoint
app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: { name: 'Premium Membership' },
                        unit_amount: 1999,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
        });
        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
