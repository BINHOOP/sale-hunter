export function generateAffiliateLink(productLink, platform) {
    let affiliateID = 'your-affiliate-id';
    if (platform === 'amazon') {
        return `${productLink}?tag=${affiliateID}`;
    } else if (platform === 'shopee') {
        return `${productLink}&affiliate_id=${affiliateID}`;
    }
    return productLink;
}
