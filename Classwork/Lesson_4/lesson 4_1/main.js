// function writer(productTitle, price, descr) {
//     document.write(`
//  <div>
//     <h2>${productTitle} ${price}</h2>
//     <p>${descr}</p>
// </div>
// `);
// }
//
// writer('milk', 44, 'some milk');
// writer('meat', 200, 'meat product');
//
// function printerArray(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://us-east-1-shared-usea1-02.graphassets.com/A2lCPH6tTelhrsostvMQpz/auto_image/resize=fit:max,width:3840/quality=value:75/rDqxvPKQRqZLAFU4LVJw'
//     },
// ];
//
// printerArray(products);

// function userFactory(id, imja, age, status) {
//     let user = {
//         id: id,
//         name: imja,
//         age: age,
//         status: status,
//     }
//     return user;
// }
// let u1 = userFactory(1, 'illja',33, true )
// console.log(u1)

// function return//

// function calc(a, b){
//     let result = a + b;
//     return result;
// }
//
// let r1 = calc(10, 20);
// let r2 = calc(10, 30);
// console.log(r1, r2);
// function percentge(sum, per) {
//     return sum / 100 * per
// }
//
// function tax(sum) {
//     return sum - percentge(sum, 20) - percentge(sum, 1.5);
// }
//
// let number = tax(10000);
// console.log(number);

function userFilter(users) {
    let filteredUsers = [];
    for (const user of users) {
        if (user.age > 30) {
            filteredUsers.push(user);
        }
    }
    return filteredUsers;
}

let users = [
    {name: 'Vasyl', age: 11, status: false},
    {name: 'petro', age: 21, status: true},
    {name: 'mykola', age: 81, status: true},
    {name: 'Viktoria', age: 32, status: false},
    {name: 'ivan', age: 30, status: true},
    {name: 'veronika', age: 41, status: false},
    {name: 'Veronika', age: 22, status: false},
    {name: 'albert', age: 61, status: true},
    {name: 'fred', age: 41, status: true},
    {name: 'Viktor', age: 32, status: false},
    {name: 'ksander', age: 45, status: true}
];
let filter = userFilter(users);
console.log(filter);




