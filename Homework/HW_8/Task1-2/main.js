// let coursesAndDurationArray = [
//     { title: 'JavaScript Complex', monthDuration: 5 },
//     { title: 'JavaComplex', monthDuration: 6 },
//     { title:  'Python Complex', monthDuration: 6 },
//     { title: 'QA Complex', monthDuration: 4 },
//     {title: 'FullStack', monthDuration: 7 },
//     { title: 'Frontend', monthDuration: 4}
// ];
//
// let result = coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course}))
//
// console.log(result);


function deepCopy(obj) {
    if (obj === null || obj === undefined || (typeof obj === 'number' && isNaN(obj)) || typeof obj !== 'object') {
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}

let original = {
    title: 'JavaScript',
    duration: 5,
    data: NaN,
    skills: ['HTML', 'CSS'],
    info: { mentor: 'Okten', status: undefined },
    sayHi: function() { console.log('Hi!'); }
};

let result = deepCopy(original);
console.log(result);
