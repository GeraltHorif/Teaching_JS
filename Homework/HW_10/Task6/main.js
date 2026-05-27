const kgInput = document.getElementById('kg-input');
const resultParagraph = document.getElementById('result-pounds');

kgInput.oninput = function () {
    const kg = +kgInput.value;

    if (kgInput.value === '' || kg < 0) {
        resultParagraph.textContent = 'Вага у фунтах: 0 фунтів';
        return;
    }

    const pounds = kg * 2.20462;
    resultParagraph.textContent = `Вага у фунтах: ${pounds.toFixed(2)} фунтів`;
};
