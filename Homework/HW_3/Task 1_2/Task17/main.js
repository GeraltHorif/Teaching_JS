let evenArray = [];
for (let i = 2; evenArray.length < 50; i += 2) {
    evenArray.push(i);
}
console.log(evenArray);

let oddArray = [];
for (let i = 1; oddArray.length < 50; i += 2) {
    oddArray.push(i);
}
console.log(oddArray);

let randomArray = [];
for (let i = 0; i < 20; i++) {
    randomArray.push(Math.round(Math.random() * 100));
}
console.log(randomArray);

let rangedRandomArray = [];
for (let i = 0; i < 20; i++) {
    let randomNum = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
    rangedRandomArray.push(randomNum);
}
console.log(rangedRandomArray);


for (let i = 0; i < evenArray.length; i += 3) {
    console.log(`${i}: ${evenArray[i]}`);
}

for (let i = 0; i < evenArray.length; i += 3) {
    if (evenArray[i] % 2 === 0) {
        console.log(evenArray[i]);
    }
}

for (let i = 0; i < evenArray.length; i += 3) {
    if (evenArray[i] % 2 === 0) {
        console.log(evenArray[i]);
        evenArray.push(evenArray[i]);
    }
}

let list = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < list.length - 1; i++) {
    if (list[i + 1] % 2 === 0) {
        console.log(list[i]);
    }
}

let prices = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;

for (let price of prices) {
    sum += price;
}

let average = sum / prices.length;
console.log(`Середній чек: ${average.toFixed(2)} UAH`);

let baseArray = [2, 5, 8, 10]; // або твій рандомний
let multipliedArray = [];

for (let num of baseArray) {
    multipliedArray.push(num * 5);
}
console.log(multipliedArray);

let mixed = ["hello", 42, true, 7, "js", 100, false];
let numbersOnly = [];

for (let item of mixed) {
    if (typeof item === 'number') {
        numbersOnly.push(item);
    }
}
console.log(numbersOnly);
