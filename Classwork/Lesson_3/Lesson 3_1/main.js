// // Inkrement
// let x = 0;
// x = x + 1;
// console.log(x);
// x++;
// console.log(x);
//
// x+=1;
// console.log(x);
//
// // Dekrement
// x = x-1;
// console.log(x);
// x-=1;
// console.log(x);
// x--;
// console.log(x);
//


// let x = 0;
// ++x;
// console.log(x);


// let a = 0;
// let b = ++a;
// console.log(a, b);

//Cycle for of loop
// let users = [
//     {name: 'Vasyl', age: 11, status: false},
//     {name: 'petro', age: 21, status: true},
//     {name: 'mykola', age: 81, status: true},
//     {name: 'Viktoria', age: 32, status: false},
//     {name: 'ivan', age: 30, status: true},
//     {name: 'veronika', age: 41, status: false},
//     {name: 'Veronika', age: 22, status: false},
//     {name: 'albert', age: 61, status: true},
//     {name: 'fred', age: 41, status: true},
//     {name: 'Viktor', age: 32, status: false},
//     {name: 'ksander', age: 45, status: true}
// ];
// debugger;
// for(let user of users) {
//     if (user.age) {
//         console.log(user)
//     }
// }

//Cycle for

// let users = [
//     {name: 'Vasyl',     age: 11, status: false},
//     {name: 'petro',     age: 21, status: true},
//     {name: 'mykola',    age: 81, status: true},
//     {name: 'Viktoria',  age: 32, status: false},
//     {name: 'ivan',      age: 30, status: true},
//     {name: 'veronika',  age: 41, status: false},
//     {name: 'Veronika',  age: 22, status: false},
//     {name: 'albert',    age: 61, status: true},
//     {name: 'fred',      age: 41, status: true},
//     {name: 'Viktor',    age: 32, status: false},
//     {name: 'ksander',   age: 45, status: true}
// ];
// debugger;
// for (let i = 0; i<users.length -1 ; i++){
//     let user = users[i];
//
//     document.write(`<h3>${user.name} ${user.age} ${user.status}</h3>`);
// }

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
// for ( let i = 0; i < products.length; i++ ) {
//     const product = products[i];
//     document.write (`
//         <div class="target">
//             <h2>${product.title} - ${product.price} UAH</h2>
//             <img src="${product.image}" alt=""/>
//         </div>
//     `)
// }


//for in

// let user= {
//     id: 1,
//     name: 'jon',
//     status: true,
//     skills: [],
// }
//
// for (let fieldName in user) {
//     console.log(fieldName, user[fieldName]);
// }

// let users = [
//     {name: 'Vasyl', age: 11, status: false},
//     {name: 'petro', age: 21, status: true},
//     {name: 'mykola', age: 81, status: true},
//     {name: 'Viktoria', age: 32, status: false},
//     {name: 'ivan', age: 30, status: true},
//     {name: 'veronika', age: 41, status: false},
//     {name: 'Veronika', age: 22, status: false},
//     {name: 'albert', age: 61, status: true},
//     {name: 'fred', age: 41, status: true},
//     {name: 'Viktor', age: 32, status: false},
//     {name: 'ksander', age: 45, status: true}
// ];
// for (const user of users) {
//     console.log(user);
//     for (const fieldName in user) {
//         console.log(fieldName, user[fieldName]);
//     }
//     console.log('')
// }

//Cycle while

// let users = [
//     {name: 'Vasyl', age: 11, status: false},
//     {name: 'petro', age: 21, status: true},
//     {name: 'mykola', age: 81, status: true},
//     {name: 'Viktoria', age: 32, status: false},
//     {name: 'ivan', age: 30, status: true},
//     {name: 'veronika', age: 41, status: false},
//     {name: 'Veronika', age: 22, status: false},
//     {name: 'albert', age: 61, status: true},
//     {name: 'fred', age: 41, status: true},
//     {name: 'Viktor', age: 32, status: false},
//     {name: 'ksander', age: 45, status: true}
// ];
//
// let i = 0;
// while (i < users.length) {
//     let user = users[i];
//     console.log(user);
//     i++;
// }



do {
    console.log('ashvjhgkglg');
} while (false)
