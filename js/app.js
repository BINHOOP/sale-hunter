export const fetchShopeeDeals = async () => {
    // Thay YOUR_SHOPEE_API_KEY bằng key API của bạn
    const response = await fetch('https://partner.shopeemobile.com/api/v2/product/get', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_SHOPEE_API_KEY',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ shop_id: 'YOUR_SHOP_ID', page_size: 20 }),
    });
    return await response.json();
  };
  
  export const fetchAmazonDeals = async () => {
    const response = await fetch('https://api.amazon.com/product/', {
      headers: { 'Authorization': 'Bearer YOUR_AMAZON_API_KEY' },
    });
    return await response.json();
  };
  
  // Thêm các hàm API tương tự cho Lazada, AliExpress, eBay, TikTok
