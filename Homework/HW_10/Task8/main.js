const btn = document.getElementById('generate-btn');
const table = document.getElementById('my-table');

btn.onclick = function () {
    table.innerHTML = '';

    const rowsCount = +document.getElementById('rows-input').value;
    const cellsCount = +document.getElementById('cells-input').value;
    const cellContent = document.getElementById('content-input').value;

    if (rowsCount <= 0 || cellsCount <= 0) {
        alert('Будь ласка, введіть коректну кількість рядків та комірок!');
        return;
    }

    for (let i = 0; i < rowsCount; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j < cellsCount; j++) {
            const td = document.createElement('td');
            td.textContent = cellContent;

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
};
