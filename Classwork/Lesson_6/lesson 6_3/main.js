let users = [
    {name: 'vasyl', age: 11, status: false},
    {name: 'petro', age: 21, status: true},
    {name: 'mykola', age: 81, status: true},
    {name: 'viktoria', age: 32, status: false},
    {name: 'ivan', age: 30, status: true},
    {name: 'veronika', age: 41, status: false},
    {name: 'veronika', age: 22, status: false},
    {name: 'albert', age: 61, status: true},
    {name: 'fred', age: 41, status: true},
    {name: 'viktor', age: 32, status: false},
    {name: 'ksander', age: 45, status: true}
];
// users.forEach(function(value){
//  console.log(value);
// });
//
// users.forEach(value => console.log(value));
//
// let filteredUsers = users.filter(value  => value.age > 30);
// console.log(filteredUsers);
//
// Map
//
// let mapedUsers = users.map(function(value, index){
//     return {...value, id: index + 1};
// });
// console.log(mapedUsers);
//
// users.map((value, index) => {
//  return {id: index + 1, name: value.name, age: value.age,status: value.status }});
// console.log(users);
//
// let find = users.find(value => value.name === 'albert');
// console.log(find);
//
// console.log(users.every(value => value.status === true));
// console.log(users.some(value => value.status === true));

// let sort = users.sort ((u1,u2) => {
//  return u1.age - u2.age;
// })
// console.log(sort);

// фільтрування за абеткою.
// console.log(users.sort((a, b) =>{
//  if (a.name> b.name)
//   return 1
//  if (a.name< b.name)
//   return -1
//  if (a.name === b.name)
//   return 0
// }));

//Reduce

// let reduce = users.reduce((accumulator, user) => {
//       if (user.status) {
//        accumulator.statT.push(user);
//       } else {
//        accumulator.statF.push(user);
//       }
//       return accumulator;
// },{statT:[], statF:[]});
// console.log(reduce);




