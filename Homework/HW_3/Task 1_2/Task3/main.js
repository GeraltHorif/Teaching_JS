let numArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < numArray.length) {
    console.log(numArray[i]);
    i++;
}

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}

let j = 0;
while (j < numArray.length) {
    if (j % 2 !== 0) {
        console.log(numArray[j]);
    }
    j++;
}

for (let j = 0; j < numArray.length; j++) {
    if (j % 2 !== 0) {
        console.log(numArray[j]);
    }
}

let h = 0
while (h < numArray.length) {
    if (numArray[h] % 2 === 0) {
        console.log(numArray[h]);
    }
    h++;
}
for (let h = 0; h < numArray.length; h++) {
    if (numArray[h] % 2 === 0) {
        console.log(numArray[h]);
    }
}

for (let g = 0; g < numArray.length; g++) {
    if (numArray[g] % 3 === 0) {
        numArray[g] = 'okten';
    }
}
console.log(numArray);


for (let t = numArray.length - 1; t >= 0; t--) {
    console.log(numArray[t]);
}

// revers
let nums = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let q = nums.length - 1;
while (q >= 0) {
    console.log(nums[q]);
    q--;
}

for (let q = nums.length - 1; q >= 0; q--) {
    console.log(nums[q]);
}

let w = nums.length - 1;
while (w >= 0) {
    if (w % 2 !== 0) {
        console.log(nums[w]);
    }
    w--;
}

for (let w = nums.lenght -1; w >= 0; w--) {
    console.log(nums[w]);
}

let e = nums.length - 1;
while (e >= 0) {
    if (nums[e] % 2 === 0) {
        console.log(nums[e]);
    }
    e--;
}

for (let e = nums.length - 1; e >= 0; e--) {
    if (nums[e] % 2 === 0) {
        console.log(nums[e]);
    }
}
for (let e = nums.length; e < nums.length; e--) {
    if (nums[e] % 3 === 0) {
        nums[e] = 'okten';
    }
}
console.log(numArray);
