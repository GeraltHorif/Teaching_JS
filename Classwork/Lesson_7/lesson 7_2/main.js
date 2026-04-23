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


// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// function Customer(name, age, password) {
//     User.apply(this, arguments);
//     this.password = password;
// }
//
// let customer = new Customer('Oleksii', 41, 'ratatui');
// console.log(customer);

// Date=======
//
// let now = new Date();
// // console.log(now);
// // console.log(now.getFullYear());
// // console.log(now.getMonth());
// // console.log(now.getDay());
// // console.log(now.getDate())
// // console.log(now.getHours());
// // console.log(now.getMinutes());
// // console.log(now.getSeconds());
// // console.log(now.getMilliseconds());
// // console.log(now.getTime()); // Kilkist milisecund z pocatku vidliku systemoju unix
//
// // let  date1 = new Date(1776971599999);  //Thu Apr 23 2026 21:13:19
// // let date1 = new Date('Sep 04 1985 01:02:02')
// // let date1 = new Date(1986, 3, 26);
// // console.log(date1);
//
//
// // let user = {
// //     id: 1,
// //     name: 'oleksii',
// //     bday: new Date(1776971599999)
// // }
// // console.log(user);

//Kolekcii set

// // let set = new Set();
// // set.add('root');
// // set.add('foo');
// // set.add('bar');
// // set.add('baz');
// // console.log(set);
// // console.log(set.has('root'));
// // set.delete('baz');
// // console.log(set);
// // console.log(set.size);
// //
// // set.forEach(value => console.log(value));
// // let arrayFromSet  = Array.from(set);
// // console.log(arrayFromSet);
//
// let set = new Set ([11, 22, 11, 33, 22, 55]);
// console.log(set);
// let numbers = Array.from(set);
// console.log(numbers);


//MAP

let map = new Map();
// map.set(1, 'one');
// map.set(2, 'two');
// map.set(3, 'three');
// map.set(4, 'four');
// console.log(map);

let rotor = {id: 'Rotor'};
let toto = {id: 'toto'};

map.set(rotor, {name: 'Syr', surname: 'tara'}); //-ключь(rotor) завжди унікальний.
map.set(toto, {name: 'Sara', surname: 'Kara'});

console.log(map);

console.log(map.get(rotor));

let from = Array.from(map.keys());
console.log(from);
console.log(Array.from(map.values()));
