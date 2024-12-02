// Example for fetching TikTok livestream deals via a mock API
async function fetchTikTokLivestreamDeals() {
    return fetch('https://api.tiktok.com/live/deals')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error('Error fetching TikTok products:', error));
}
