const stripe = require("stripe")("sk_test_51QN0YHB6TbyJrfOTbDOrv3Cmxq682haJGItgRiFtkNcNygL3KSS6LrpRDjgH5k0VED5eqmhUzaKG21eDg8IG6YV200aPdxHizM");

const createCheckoutSession = async (req, res) => {
    const { productId } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: { name: productId },
                        unit_amount: 1000,  // Example price
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });

        res.json({ url: session.url });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { createCheckoutSession };
