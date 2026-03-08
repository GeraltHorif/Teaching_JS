let numbers = [15, 22, 3, 48, 50, 31, 12, 7, 9, 100];

for (let i = 0; i < numbers.length; i++) {


    if (numbers[i] % 2 === 0) {
        console.log(`Парне число: ${numbers[i]}`);
    }
}

let sourceArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let copyArray = [];

for (let i = 0; i < sourceArray.length; i++) {

    copyArray.push(sourceArray[i]);
}

console.log('Оригінал:', sourceArray);
console.log('Копія:', copyArray);
