//----------Task_1----------

// const testBlock = document.createElement('div');
// testBlock.innerText = `Afterlife Save me from this pain and fill the hole inside
//     You wonder why I'm all out of tears to cry
//     Today I'm not, not afraid to die`;
//
// testBlock.classList.add('wrap', 'collapse', 'alpha','beta');
// testBlock.style.backgroundColor = 'green';
// testBlock.style.color = 'white';
// testBlock.style.fontSize = '20px';
//
// document.body.appendChild(testBlock);
//
// const clonedBlock = testBlock.cloneNode(true);
//
// document.body.appendChild(clonedBlock);

//----------Task_2----------

const menuItems = ['Main', 'Products', 'About us', 'Contacts'];

const ulElement = document.createElement('ul');

for(const item of menuItems) {
    const liElement = document.createElement('li');

    liElement.innerText = item;

    ulElement.appendChild(liElement);
}
document.body.appendChild(ulElement);
