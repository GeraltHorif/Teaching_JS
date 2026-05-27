const countBlock = document.getElementById('counter-block');

let currentCount = localStorage.getItem('page_reload_counter');
if (currentCount === null) {
    currentCount = 0;
} else {
    currentCount = parseInt(currentCount);
}

    currentCount = currentCount + 1;
localStorage.setItem('page_reload_counter', currentCount);
countBlock.textContent = currentCount;
