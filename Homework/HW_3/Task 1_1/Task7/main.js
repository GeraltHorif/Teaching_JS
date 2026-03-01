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

// користувачі зі стутусом true
// for (const user of users) {
//     if (user.status){
//         console.log(user);
//     }
// }

// користувачі зі стутусом false
// for(const user of users){
//     if (!user.status){
//         console.log(user);
//     }
// }

// Користувачі віком старші 30 років.
for (const user of users) {
    if (user.age > 30){
        console.log(user);
    }
}
