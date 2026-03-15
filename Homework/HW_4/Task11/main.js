function sum(arr){
    let total = 0;
    for (const num of arr) {
        total = total + num;
    }
    return total;
}

console.log(sum([2,78,987]));
