let str = "Hello World !!!!";
// let s = str.concat('!!!');
// console.log(s);

console.log(str.toUpperCase());                              //Верхній регіст
console.log(str.toLowerCase());                              //Нижній регіст
console.log(str.startsWith("H"));                            //Перевірка чи починається рядок з певних символів.
console.log(str.endsWith('!'));                              //Перевіряє яким символом закінчується рядок.
console.log(str.substring(0,9));                             //Вирізає частину тексту між двома індексами
console.log(str.indexOf('o'));                               //Показує під яким індексом(номер) знаходиться поточна літера в стрінзі.
console.log(str.lastIndexOf('o'));                           //Індекс дивиться з кінця
console.log(str.indexOf('o', 5));                            //ПОчинає з вказаного індекса
console.log(str.charAt(8));                                  //метод, який дозволяє дістати конкретний символ з тексту за його індексом (позицією)
// console.log(str.replace('e', '5'));                       //Замінює обраний, символи на вказаний
console.log(str.replaceAll('o', '7')); //Замінює всі обрані символи, на вказаний
let split = str.split(' ');                  //Розрізає рядок на частини, та перетворює їх в масив.
console.log(split);
