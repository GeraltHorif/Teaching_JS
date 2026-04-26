//Task6

// function Car(model, producer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//
//     this.info = function () {
//         console.log("--- Інформація про автомобіль ---");
//         for (let key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key} – ${this[key]}`);
//             }
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
// let myCar = new Car('Model S', 'Tesla', 2022, 250, 0);
//
// myCar.drive();
// myCar.increaseMaxSpeed(30);
// myCar.changeYear(2024);
// myCar.addDriver({ name: 'Mykyta', experience: 10 });
//
// myCar.info();

//Task7

class Car {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }


    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log("--- Детальна інформація ---");
        for (const key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} – ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }


    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}



const myCar = new Car('M5', 'BMW', 2020, 250, 4.4);

myCar.drive();

myCar.increaseMaxSpeed(50);
myCar.changeYear(2023);

const driverInfo = { name: 'Vasyl', age: 30, license: 'A, B' };
myCar.addDriver(driverInfo);

myCar.info();
