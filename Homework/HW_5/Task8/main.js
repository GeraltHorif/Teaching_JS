const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
};

console.log(swap([13,34,56],0,2));
