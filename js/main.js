import { fetchShopeeDeals, fetchAmazonDeals } from './api.js';

const displayDeals = async () => {
  const productList = document.getElementById('product-list');
  
  // Fetch Shopee Deals
  const shopeeData = await fetchShopeeDeals();
  shopeeData.products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <img src="${product.image_url}" alt="${product.name}">
      <p>${product.price}</p>
      <a href="${product.link}" target="_blank">Buy Now</a>
    `;
    productList.appendChild(productElement);
  });

  // Fetch Amazon Deals
  const amazonData = await fetchAmazonDeals();
  amazonData.items.forEach(item => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <h3>${item.title}</h3>
      <img src="${item.image_url}" alt="${item.title}">
      <p>${item.price}</p>
      <a href="${item.product_url}" target="_blank">Buy Now</a>
    `;
    productList.appendChild(productElement);
  });
};

displayDeals();
