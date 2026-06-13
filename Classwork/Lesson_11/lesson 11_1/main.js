// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => {
//         for (const {name, username, email} of users) {
//             document.write(`<div>${name} ${username} ${email}</div>`)
//         }
//     });

// fetch("https://dummyjson.com/products?limit=70")
//     .then(value => value.json())
//     .then(res=> {
//         console.log(res);
//         document.write(`<div>`);
//         let {products} = res;
//         for (const product of products) {
//             document.write(`<div>`);
//             document.write(`<p>${product.id} -${product.brand} -${product.price}</p>`)
//             document.write(`<img src="${product.thumbnail}" alt="">>`)
//             document.write(`</div>`);
//         }
//         document.write(`</div>`);
//     });
//
// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'BMW Pencil',
//         /* other product data */
//     })
// })
//     .then(res => res.json())
//     .then(console.log);

// ----------URL----------
//
// let url = new URL('https://jsonplaceholder.typicode.com/posts');
// url.searchParams.set('userId',8);
//
//
// fetch(url)
// .then(value=> value.json())
// .then(value => {
//     console.log(value);
// });

// regexp and post




