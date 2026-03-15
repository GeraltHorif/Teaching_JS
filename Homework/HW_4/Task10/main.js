function minNumber(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

let  myNambers = [12, 33, 1089, -5, -9689, 0];
let result = minNumber(myNambers);
console.log(result);
