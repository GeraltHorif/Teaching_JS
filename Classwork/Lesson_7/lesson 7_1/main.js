// Funkcii konstruktory
// function User(name, age, status, wifeName, wifeAge){
//     this.name = name;
//     this.age= age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge}
// };
// let user = new User ('Mstyslav', 30, true, 'Ragneda', 25);
// console.log(user);

//////////////////

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
//
// User.prototype.greeting = function () {
//     return `Hello my name is ${this.name}`;
// };
//
// let user = new User('Mykyta', 32);
// console.log(user.greeting());


function User(name, age) {
    this.name = name;
    this.age = age;
}

// let user = new User('Mykyta', 32);
// user.greeting = msg => {return `${msg} my name is ${this.name}`;};
//
// console.log(user.greeting('hello'));
// let user2 = new User('Laherta', 27);

// console.log(user.greeting.apply(user2, ['hi'])); // -> user2.greeting
// console.log(user.greeting.call(user2, 'chus'));


// let user = new User('Mykyta', 32);
// user.greeting = msg => {return `${msg} my name is ${this.name}`;};
//
// let user2 = new User('Laherta', 27);
// let greetingCopy = user.greeting.bind(user2, 'Sava');
// console.log(greetingCopy());
