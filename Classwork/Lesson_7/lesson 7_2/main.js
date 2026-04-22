// //Klasy ta nasliduvannja
//
// class User {
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     // static greeting() {
//     //     return `Hello I am ${this.name}`;
//     // }
//
//     work() {
//         return `work in process`;
//     }
// }
//
// // let user = new User('gryc', 23);
// // console.log(user);
// // console.log(user.greeting());
// // console.log(User.greeting());
//
// class Customer extends User {
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
// }
//
// let customer = new Customer("Orest", 34, '12e4');
// console.log(customer);
// console.log(customer.work());


function User(name, age) {
    this.name = name;
    this.age = age;
}

function Customer(name, age, password) {
    User.apply(this, arguments);
    this.password = password;
}

let customer = new Customer('Oleksii', 41, 'ratatui');
console.log(customer);
