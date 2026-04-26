class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

const cinderellas = [
    new Cinderella('Hanna', 18, 35),
    new Cinderella('Olha', 19, 36),
    new Cinderella('Oksana', 20, 37),
    new Cinderella('Marija', 21, 38),
    new Cinderella('Katrusja', 22, 34),
    new Cinderella('Yulija', 18, 39),
    new Cinderella('Nastja', 19, 36.5),
    new Cinderella('Vira', 20, 40),
    new Cinderella('Daryna', 21, 35.5),
    new Cinderella('Svitlana', 22, 37.5)
];

const prince = new Prince('Orest', 25, 34);


let wifeByLoop = null;

for (const girl of cinderellas) {
    if (girl.footSize === prince.foundShoe) {
        wifeByLoop = girl;
        break;
    }
}

console.log(wifeByLoop);

const wifeByFind = cinderellas.find(girl => girl.footSize === prince.foundShoe);

console.log(wifeByFind);


//Task9

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

[10, 20, 30].myForEach((el, index) => {
    console.log(`Елемент №${index} має значення ${el}`);
});

Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.myFilter(n => n % 2 === 0);

console.log(evens);
