// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;

//     this.honk = function () {
//         console.log("Toooooooooot!");
//     };

//     this.accelerate = function (speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }

class Car {
    acceleration: number = 0;

    constructor(public name: string) {}

    honk(): void {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
class BaseObject {
    constructor(public length: number, public width: number) {}

    calcSize(): number {
        return this.width * this.length;
    }
}

class Rectangle extends BaseObject {
    constructor(length: number = 5, width: number = 2) {
        super(length, width);
    }
}

const rectangle = new Rectangle();
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function () {
//     return this.width * this.length;
// };
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var dude = {
//     _firstName: ""
// };
// Object.defineProperty(dude, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });

class NewPerson {
    constructor(private _firstName: string = "") {}
    
    get firstName() {
        return this._firstName;
    }
    
    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

const dude = new NewPerson();
console.log(dude.firstName);
dude.firstName = "To";
console.log(dude.firstName);
dude.firstName = "Thomas";
console.log(dude.firstName);