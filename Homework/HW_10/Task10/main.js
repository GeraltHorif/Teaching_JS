const itemsArray = [];
for (let i = 1; i <= 100; i++) {
    itemsArray.push({
        id: i,
        title: `Щось №${i}`,
        description: `Це опис для об'єкта під номером ${i}`
    });
}

let currentPage = 1;
const itemsPerPage = 10;

const container = document.getElementById('objects-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageNumberSpan = document.getElementById('page-number');

function renderPage(page) {
    container.innerHTML = '';

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const pageItems = itemsArray.slice(startIndex, endIndex);

    pageItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item-box';
        div.innerHTML = `<strong>ID: ${item.id}</strong> — ${item.title}`;
        container.appendChild(div);
    });

    pageNumberSpan.textContent = `Сторінка: ${page}`;

    prevBtn.disabled = (page === 1);
    nextBtn.disabled = (page === Math.ceil(itemsArray.length / itemsPerPage));
}

nextBtn.onclick = function () {
    if (currentPage < Math.ceil(itemsArray.length / itemsPerPage)) {
        currentPage = currentPage + 1;
        renderPage(currentPage);
    }
};

prevBtn.onclick = function () {
    if (currentPage > 1) {
        currentPage = currentPage - 1;
        renderPage(currentPage)
    }
};

renderPage(currentPage);
