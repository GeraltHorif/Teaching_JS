// localStorage.setItem('room', 'close');

// localStorage.clear();

// localStorage.setItem('user', JSON.stringify({id:1, name:'ridik'}));

// let userJSON = localStorage.getItem("user");
// console.log(userJSON);
// let user = JSON.parse(userJSON);
// console.log(user);
// user.age = 33;
// console.log(user);
// let stringify = JSON.stringify(user);
// localStorage.setItem("user", stringify);
// console.log(stringify);

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
// localStorage.setItem('users', JSON.stringify(users));


// let usersJSON = localStorage.getItem('users');
// console.log(usersJSON);
// let users = JSON.parse(usersJSON);
// console.log(users);
// users.push({});
// console.log(users);

let productsDiv = document.getElementsByClassName('products')[0];

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    let productBlock = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = `${product.title}, ${product.price} UAH`;

    let img = document.createElement('img');
    img.src = product.image;

    let buttonElement = document.createElement('button');
    buttonElement.innerText = 'add to cart';

    buttonElement.onclick = function () {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    productBlock.append(h2, img, buttonElement);

    productsDiv.appendChild(productBlock);
}


