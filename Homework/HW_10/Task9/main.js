const priceBlock = document.getElementById('price-block');

let savedPrice = localStorage.getItem('current_price');
let lastUpdateTime = localStorage.getItem('last_update_time');

const now = Date.now();

if (savedPrice === null || lastUpdateTime === null) {
    savedPrice = 100;
    lastUpdateTime = now;

    localStorage.setItem('current_price', savedPrice);
    localStorage.setItem('last_update_time', lastUpdateTime);
} else {
    savedPrice = parseInt(savedPrice);
    lastUpdateTime = parseInt(lastUpdateTime);

    if (now - lastUpdateTime >= 10000) {
        savedPrice = savedPrice + 10;
        lastUpdateTime = now;

        localStorage.setItem('current_price', savedPrice);
        localStorage.setItem('last_update_time', lastUpdateTime);
    }
}

priceBlock.textContent = `${savedPrice}грн`;
