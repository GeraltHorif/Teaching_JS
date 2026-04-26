//Task_1

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let users = [
//     new User(0, 'Mykyta', 'Rubaka', 'rubaka@u.iu', '33-43-33'),
//     new User(1, "Natalka", 'Poltavka', 'poltavka@u.ua', '33-43-32'),
//     new User(2, 'Kyryl', 'Dropatyi', 'dropatyi@u.ua', '33-43-34'),
//     new User(3, 'Olha', 'Juhymenko', 'juh@u.ua', '33-41-35'),
//     new User(4, 'Ruslan', 'Ohrymenko', 'Ohrymenko@u.ua', '98-43-34'),
//     new User(5, 'Bohdan', 'Sovenko', 'sov@u.ua', '33-41-98'),
//     new User(6, 'Hanna', 'Vertyhora', 'Vertyhora@u.ua', '33-4543-34'),
//     new User(7, 'Tetjana', 'Tymchuk', 'Tymchuk@u.ua', '33-41-35'),
//     new User(8, 'Oleksandr', 'Rotnyi', 'Rotnyi@u.ua', '33-43-34'),
//     new User(9, 'Tonja', 'Danylko', 'Danylko@u.ua', '355-41-35')
// ];
//
// console.log(users);

//Task_2
// filterFunctions = (user) => user.id % 2 ===0;
//
// const filterUsers = users.filter(filterFunctions);
// console.log(filterUsers);

//Task_3
// let users = [
//  new User(9, 'Mykyta', 'Rubaka', 'rubaka@u.iu', '33-43-33'),
//  new User(4, "Natalka", 'Poltavka', 'poltavka@u.ua', '33-43-32'),
//  new User(2, 'Kyryl', 'Dropatyi', 'dropatyi@u.ua', '33-43-34'),
//  new User(3, 'Olha', 'Juhymenko', 'juh@u.ua', '33-41-35'),
//  new User(7, 'Ruslan', 'Ohrymenko', 'Ohrymenko@u.ua', '98-43-34'),
//  new User(5, 'Bohdan', 'Sovenko', 'sov@u.ua', '33-41-98'),
//  new User(6, 'Hanna', 'Vertyhora', 'Vertyhora@u.ua', '33-4543-34'),
//  new User(4, 'Tetjana', 'Tymchuk', 'Tymchuk@u.ua', '33-41-35'),
//  new User(1, 'Oleksandr', 'Rotnyi', 'Rotnyi@u.ua', '33-43-34'),
//  new User(0, 'Tonja', 'Danylko', 'Danylko@u.ua', '355-41-35')
// ];
//
// sort = (user1, user2) => user1.id - user2.id;
//
// console.log(users.sort(sort));

//Task_4

function Client (id, name, surname , email, phone, ...products){
 this.id = id;
 this.name = name;
 this.surname = surname;
 this.email = email;
 this.phone = phone;
 this.order = products;
}

function Product(title, price) {
 this.title = title;
 this.price = price
}


let clients = [
    new Client(0, 'Mykyta', 'Rubaka', 'rubaka@u.iu', '33-43-33',new Product('TV', 1200), new Product('Notebook', 40000), new Product('Phone', 5000), new Product('Flash Disk', 1000)),
    new Client(1, "Natalka", 'Poltavka', 'poltavka@u.ua', '33-43-32', new Product('HDD', 2000), new Product('Notebook', 40000)),
    new Client(2, 'Kyryl', 'Dropatyi', 'dropatyi@u.ua', '33-43-34', new Product('Monitor', 20000), new Product('PC', 70000)),
    new Client(3, 'Olha', 'Juhymenko', 'juh@u.ua', '33-41-35', new Product('Phone', 5000), new Product('Flash Disk', 1000)),
    new Client(4, 'Ruslan', 'Ohrymenko', 'Ohrymenko@u.ua', '98-43-34', new Product('X-Box', 30000), new Product('Game', 2000)),
    new Client(5, 'Bohdan', 'Sovenko', 'sov@u.ua', '33-41-98', new Product('TV', 4000), new Product('Notebook', 40000)),
    new Client(6, 'Hanna', 'Vertyhora', 'Vertyhora@u.ua', '33-4543-34', new Product('X-Box', 30000), new Product('Game', 2000), new Product('Notebook', 40000)),
    new Client(7, 'Tetjana', 'Tymchuk', 'Tymchuk@u.ua', '33-41-35', new Product('TV', 4000)),
    new Client(8, 'Oleksandr', 'Rotnyi', 'Rotnyi@u.ua', '33-43-34', new Product('TV', 4000), new Product('Notebook', 40000)),
    new Client(9, 'Tonja', 'Danylko', 'Danylko@u.ua', '355-41-35', new Product('TV', 4000), new Product('Phone', 5000), new Product('Flash Disk', 1000)),
]
// console.log(clients[0].order);

//Task_5

let sort = clients.sort((client1, client2) => client1.order.length - client2.order.length);

console.log(sort);
