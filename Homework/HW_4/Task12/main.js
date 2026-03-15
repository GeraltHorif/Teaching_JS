function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
return arr;
}

console.log(swap([16,2,78,987],1,3));

