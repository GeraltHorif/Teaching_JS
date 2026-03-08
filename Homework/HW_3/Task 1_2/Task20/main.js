let letters = ['a', 'b', 'c'];
let wordFor = "";

for (let i = 0; i < letters.length; i++) {
    wordFor += letters[i];
}
console.log( wordFor);

let wordWhile = "";
let i = 0;

while (i < letters.length) {
    wordWhile += letters[i];
    i++;
}
console.log( wordWhile);

let wordForOf = "";

for (const letter of letters) {
    wordForOf += letter;
}
console.log( wordForOf);
