function arrayList(array){
    document.write(`<ul>`);
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
let mixData = [100, 'water', true, 6578, 'apple'];

arrayList(mixData);
