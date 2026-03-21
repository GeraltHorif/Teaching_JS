const createList = (text,count)=> {
    const ul = document.createElement("ul");
    for (let i = 0; i < count; i++ ) {
        const li = document.createElement('li');
        li.innerText = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};

createList("Зло — це зло.", 3);

