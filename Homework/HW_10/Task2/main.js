const ageInput = document.getElementById('age-input');
const button = document.getElementById('check-btn');

button.onclick = function () {
    const age = +ageInput.value;
    if (ageInput.value === '') {
        alert('Будь ласка, введіть свій вік!');
    } else if (age < 18) {
        alert('Ваш вік менше 18 років!');
    } else {
        alert('Все добре!');
    }
};
