const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Routes
const { fetchAmazonDeals } = require("./api/amazon-api");
const { fetchShopeeDeals } = require("./api/shopee-api");
const { fetchTikTokDeals } = require("./api/tiktok-api");
const { fetchAlibabaDeals } = require("./api/alibaba-api");

app.get("/api/deals", async (req, res) => {
    const amazonDeals = await fetchAmazonDeals();
    const shopeeDeals = await fetchShopeeDeals();
    const tiktokDeals = await fetchTikTokDeals();
    const alibabaDeals = await fetchAlibabaDeals();

    res.json([...amazonDeals, ...shopeeDeals, ...tiktokDeals, ...alibabaDeals]);
});

// Stripe checkout API
const { createCheckoutSession } = require("./payments/stripe");
app.post("/create-checkout-session", createCheckoutSession);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
