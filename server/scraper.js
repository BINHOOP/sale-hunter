import puppeteer from 'puppeteer';

export async function scrapeShopeeDeals() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://shopee.vn/deals');
    const data = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.product-card')).map((item) => ({
            name: item.querySelector('.title').textContent,
            price: item.querySelector('.price').textContent,
            link: item.querySelector('a').href,
            image: item.querySelector('img').src,
        }));
    });
    await browser.close();
    return data;
}
