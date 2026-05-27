function addToLocalStorage(arrayName, objToAdd) {
    let existingData = localStorage.getItem(arrayName);
    let array = [];

    if (existingData !== null) {
        array = [];
    } else {
        array = JSON.parse(existingData);
    }

    array.push(objToAdd);

    localStorage.setItem(arrayName, JSON.stringify(array));
}
