//Operator Opcionalnoi gjcksljdyjcns (?)

// let name ='Oleksii';
// let age = 40;
// let user = {
//     name,
//     age,
//     foo(){
//         console.log(this);
//     },
// }
// console.log(user);
// user.foo();

//Деструктуризація об'єктів

// let user = {
//     name: 'Oleksii',
//     age: 32,
//     foo(){
//         console.log(foo);
//     },
// };
//
// let {age,name} = user;
// console.log(name);
// console.log(age);
//
// function asd({name}){
//     console.log(name);
// }
//
// let obj = ({a:'hgvkk', name: 'yu' });
// asd(obj);


// let numbers = [ 11, 22,33];
// let [a, b, c] = numbers;
// console.log(numbers);

//Spred   {...name}[}   Copijuvannja

// let user = {
//     name: "John",
//     age: 25,
// };
//  let user2 = user;
//
//  let user3 = {
//      name: "Josh",
//      age: 65,
//  };
//   console.log(user === user2);
//   console.log(user === user3);

// let user ={
//     name:"John",
//     age:25,
// };
//
// let userCopy = {...user};
// console.log(userCopy);
// console.log(userCopy === user);
//
// userCopy.age = 50;
// console.log(userCopy);
// console.log(user);

// let nums = [1, 2, 3, 4, 5];
// let nums2 = [...nums];
// console.log(nums === nums2);


//--------Poverchneva ta hlyboka kopii ta JSON()

// let user = {
//     name: "John",
//     skills: ['html, css'],
//     greeting: function () {
//     },
// };

// let userClone = {...user};
// console.log(user === userClone);
// console.log(user.skills === userClone.skills);

// let s = JSON.stringify(user); // convert to JSON / Format peredaCi dannych dlja vsich mov prog

// let json = '{"name": "John", "skills": ["html", "css"]}'

// let userJsonClone = JSON.stringify(user);
// console.log(userJsonClone);
//
// let parse = JSON.parse(userJsonClone);
//
// console.log(parse);
// console.log(user);
// console.log(user === parse);
// console.log(user.skills === parse.skills);

// let assign = Object.assign({}, user);
// console.log(assign);
// console.log(assign.skills === user.skills);
// console.log(assign === user);


//Prototyping

// let base = {
//     id: 1,
//     name: 'Inha'
// }
//
// let copy = Object.create(base);
// copy.surname = 'Ruta';
//
// console.log(base);
// console.log(copy);
// console.log(copy.id);
// console.log(copy.name);
// console.log(copy.hasOwnProperty('id'));
// console.log(copy.hasOwnProperty('surname'));
// copy.id = 232;
// console.log(copy);
// console.log(copy.hasOwnProperty('id'));
//
// let obj = {};
// obj.__proto__ = base;
// console.log(obj);


//DESCRIPTOR

// let user = {
//     firstName: 'John',
//     lastName: 'Doe',
// }

// user.firstName = 'Ihor';
// console.log(user);
//
// for(const userKey in user){
//     console.log(userKey);
// }

// Object.defineProperty(   //дозволяє не просто додати властивість до об'єкта, а налаштувати її поведінку на дуже глибокому рівні (наприклад, зробити її невидимою або заборонити її змінювати).
//     user,
//     'id',
//     {
//         value: 100,
//         writable: false,  //false - Блокує зміни цього значення.
//         enumerable: false, //false - робить невидимим цей параметр.
//         configurable: true, //false - блокує можливість виклику Object.defineProperty в майбутньому, для цього об'єкта.
//     }
// )
// console.log(user);
//
// Object.defineProperty(
//     user,
//     'id',
//     {
//         value: 10220,
//         writable: false,  //false - Блокує зміни цього значення.
//         enumerable: false, //false - робить невидимим цей параметр.
//         configurable: false, //false - блокує можливість виклику Object.defineProperty в майбутньому, для цього об'єкта.
//     }
// )
// console.log(user);

// IN operator














