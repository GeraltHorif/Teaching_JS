const button = document.getElementById('submit');
const container = document.getElementById('result-container');

button.onclick = function () {
    const inputName = document.getElementById('name').value;
    const inputSurname = document.getElementById('surname').value;
    const ageInput = document.getElementById('age').value;

    const user  = {
        name: inputName,
        surname: inputSurname,
        age: +ageInput,
    };


    container.innerHTML =  `
<p><b>Ім'я:</b> ${user.name}</p>
    <p><b>Прізвище:</b> ${user.surname}</p>
    <p><b>Вік:</b> ${user.age} р.</p>`;
};




