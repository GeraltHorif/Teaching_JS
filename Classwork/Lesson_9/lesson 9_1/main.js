// 9.1 DOM(Об'єктна модель документа та пошук елементів)
//
// DOM
// console.log(document.head);
// console.log(document.head.innerHTML);
// console.log(document.head.children);
// console.log(document.body.innerHTML);
//
// ID
// let ul1 = document.getElementById('list-1');
// console.log(ul1);
//
// class
// let menuCollection = document.getElementsByClassName('menu');
// console.log(menuCollection);
//
// for (const menuCollectionElement of menuCollection) {
//     console.log(menuCollectionElement);
// }
//
// TAG
// let liList = document.getElementsByTagName('li');
// console.log(liList);
//
// let list1 = document.getElementById('list-1');
// console.log(list1);
//
// let list1LiCollection = list1.getElementsByTagName('li');
// console.log(list1LiCollection);
//
//
// console.log(document.querySelector('body .menu'));
// console.log(document.querySelectorAll('body .menu'));
//
// let nodeListOf = document.querySelectorAll('#list-2 > li');
// console.log(nodeListOf);
//
// for (const node of nodeListOf) {
//     console.log(node);
// }

// //9.2 Forms API
//
// console.log(document.forms);
// console.log(document.forms['f1']);
// console.log(document.forms['f1'].userName);

// //9.3 Маніпуляція DOM  елементами
//
// // let target = document.getElementById('target');
// // console.log(target.innerText);
// // // target.innerText = 'piupiu';
// // target.style.background = 'silver';
// // console.log(target.classList);
// // target.classList.add('good');
// // target.classList.add('nja');
// // // console.log(target.classList.contains('papa'));
// // target.classList.toggle('brown');
//
// // console.log(target.getAttribute('id'));
// // target.setAttribute('id', 'target');
// // console.log(target.previousElementSibling);
// // console.log(target.nextElementSibling);
// // console.log(target.children);
// // console.log(target.childNodes);
// // target.innerHTML = '<b> hgjifu</b>';
// // console.log(target.outerHTML);
//
// let collectionOfDiv = document.getElementsByClassName('tron');
//
// for (const divElement of collectionOfDiv) {
// divElement.innerText = 'try kovbasy';
// divElement.classList = 'urjuk';
// }

//9.4 Stvorennja elementiv

// let h2 = document.createElement('h3');
// h2.innerText = 'Hello World!';
// document.body.appendChild(h2);

// let allUsersDiv = document.getElementsByClassName('users')[0];
//
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
// for (const user of users) {
//     let li = document.createElement('li');
//     li.classList.add('user');
//     li.innerText = user.name;
//     allUsersDiv.appendChild(li);
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
//
// for (const user of users) {
//     let userDiv = document.createElement('div');
//     let h2 = document.createElement('h2');
//     h2.innerText = user.name;
//     let p = document.createElement('p');
//     p.innerText = user.status +  '' + user.age;
//     userDiv.append(h2, p);
//     document.body.appendChild(userDiv)
// }















