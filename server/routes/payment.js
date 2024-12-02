const express = require('express');
const stripe = require('stripe')('sk_test_51QN0YHB6TbyJrfOTbDOrv3Cmxq682haJGItgRiFtkNcNygL3KSS6LrpRDjgH5k0VED5eqmhUzaKG21eDg8IG6YV200aPdxHizM');
const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
    const { productId } = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Premium Subscription',
                    },
                    unit_amount: 2000, // Số tiền bạn muốn tính (Ví dụ: 20 USD)
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${process.env.BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.BASE_URL}/cancel`,
        });

        res.json({ sessionId: session.id });
    } catch (err) {
        console.error('Error creating checkout session:', err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
