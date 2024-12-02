// Handle affiliate links
const affiliateLinks = document.querySelectorAll('.affiliate-link');
affiliateLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const affiliateCode = link.getAttribute('data-affiliate-code');
        window.location.href = `${link.href}?affiliate=${affiliateCode}`;
    });
});
