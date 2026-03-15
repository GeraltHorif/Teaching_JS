function dataArray(users) {
    for (const user of users) {
        document.write(`<div>
           <p>id:${user.id}</p>
           <p>name:${user.name}</p>
           <p>age:${user.age}</p>
           <br>
        </div>`);
    }
}

let list = [
    {id: 0, name: 'Ivan', age: 30},
    {id: 1, name: 'Jaroslav', age: 65},
    {id: 2, name: 'Myroslav', age: 25},
    {id: 3, name: 'Olga', age: 32},
    {id: 4, name: 'Tetjana', age: 34},
];

dataArray(list);
