//Базові функції  масивів.

let arr = [10,20,30,40,50];
console.log(Array.isArray(arr));
 console.log (arr.push('new elemets'));
 console.log(arr);
arr.unshift('76');
console.log(arr);
console.log(arr.join('-'));
console.log(arr);

let nums = [23,87,99];
let concat = arr.concat(nums);
console.log(concat);
console.log(arr);
console.log(concat);
console.log(concat.slice(0, 4));
// let splice = concat.splice(0,2);
// console.log(splice);
// console.log(concat);

concat.includes()


