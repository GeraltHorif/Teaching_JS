const render = (users) => {
    users.forEach(user => {
        document.write(`
            <div>
                <h3>ID: ${user.id}</h3>
                <p>Name: ${user.name}</p>
                <p>Age: ${user.age}</p>
                <hr>
            </div>
        `);
    });
};

const usersList = [
    {id: 0, name: 'Oleksii', age: 22},
    {id: 1, name: 'Jara', age: 32},
    {id: 2, name: 'Tol', age: 24},
    {id: 3, name: 'Jen', age: 40},
    {id: 4, name: 'Leja', age: 30},
]

render(usersList);


