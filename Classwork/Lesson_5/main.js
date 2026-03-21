// let greeting = function () {
//   console.log('Hello World');
// };
// greeting();


// asd();
// function asd() {
//     console.log('asd');
// };

//arrow function

// function calc(a,b) {
//     return a + b;
// };

// let calc = (a,b) => a + b;
// console.log(calc(10,20));
//
// let asd = () => console.log('hi');
// console.log(asd());

// let user = {
//     name: 'dmytro',
//     age: 40,
//     greeting: function (msg) {
//         console.log(this)
//         return `${msg} my name is ${this.name}`
//     },
//     vatanny: (msg) => `${msg} my name is ${user.age}`
// };
//
// console.log(user.greeting("hi"));
// console.log(user.vatanny("hello"));


// function asd (){
//     let x = 10;
//     function inner(){
//         return ++x;
//     }
//     return inner;
// }
// let foo = asd();
// console.log(foo());
// console.log(foo());

// let user = {name: 'John', age:34};
// user.age =35;

// function userBuilder(name, age) {
//     let user = {name, age};
//     return {
//         getName() {
//             return user.name;
//         },
//         getAge() {
//             return user.age;
//         },
//         setAge(age){
//             if (age>0){
//                 user.age = age;
//             }
//         },
//     }
// }
//
// let builder = userBuilder('Jaro', 45);
// console.log(builder);
//
// console.log(builder.getAge());
// console.log(builder.getName());
// builder.setAge(-200);
// console.log(builder.getAge());


// function iterator(arr, i) {
//     console.log(arr[i]);
//     i++;
//     if (i < arr.length) {
//         iterator(arr, i);
//     }
//
// }
//
// iterator([11, 22, 33], 0);

// let arr = [11, 22, 33, [44, 55], [88, 99, 101]];
// let innerArray = [];
//
// function flatter(arry) {
//     for (const item of arry) {
//         if (Array.isArray(item)) {
//             flatter(item);
//         } else {
//             innerArray.push(item);
//         }
//     }
// }
//
// flatter(arr);
// console.log(innerArray);

// Generator

// function *foo(){
//     yield 100;
//     yield 200;
//     yield 300;
// }
//
// let fooGenerator = foo();
// console.log(fooGenerator);
// console.log(fooGenerator.next());
// console.log(fooGenerator.next())
// console.log(fooGenerator.next())
// console.log(fooGenerator.next())

// function *cardsHolder(){
//     const cards = [
//         {value: 6, suite: 'diamond'},
//         {value: 10, suite: 'spade'},
//         {value: 8, suite: 'diamond'},
//         {value: 4, suite: 'spade'},
//     ]
//     for (const card of cards) {
//         yield card;
//     }
// }
//
// const cardsHolderGenerator = cardsHolder();
// const card1 = cardsHolderGenerator.next();
// console.log(card1.value);
//
// //
// //
// //
// //
// const card2 =  cardsHolderGenerator.next();
// console.log(card2.value);
//
// //
// //
// //
// //
// //
// const card3Data = cardsHolderGenerator.next().value;
// console.log(card3Data);

// Обробка помилок

// console.log('start')
// try {
//     console.log('gthbg');
// } catch (e) {
//     console.log(e)
// } finally {
//     console.log('finally')
// }
//
// console.log('end')


function calc(a, b) {
    if (b===0) {
        throw  new Error('b is 0');
    }
    return a / b;
}
calc(10,0)


















