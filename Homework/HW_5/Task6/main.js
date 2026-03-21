const findMin = (arr) => {
    let min = arr[0];
    for (const num of arr) {
        if (num < min) {
            min = num;
        }
    }
    return min;
};
console.log(findMin([10, 65,98,10989,-467,1]));



