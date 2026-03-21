const createList = (elemets) => {
    const ul = document.createElement('ui');
    elemets.forEach( item => {
        const li = document.createElement('li');
        li.innerText = item;
        ul.append(li);
    });
    document.body.appendChild(ul);
};

const myData = [true, 26789877, 'apple', false, 'reactJS'];
createList(myData);
