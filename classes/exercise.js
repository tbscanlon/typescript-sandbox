// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     this.honk = function () {
//         console.log("Toooooooooot!");
//     };
//     this.accelerate = function (speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
var BaseObject = /** @class */ (function () {
    function BaseObject(length, width) {
        this.length = length;
        this.width = width;
    }
    BaseObject.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, width) {
        if (length === void 0) { length = 5; }
        if (width === void 0) { width = 2; }
        return _super.call(this, length, width) || this;
    }
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
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
var NewPerson = /** @class */ (function () {
    function NewPerson(_firstName) {
        if (_firstName === void 0) { _firstName = ""; }
        this._firstName = _firstName;
    }
    Object.defineProperty(NewPerson.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return NewPerson;
}());
var dude = new NewPerson();
console.log(dude.firstName);
dude.firstName = "To";
console.log(dude.firstName);
dude.firstName = "Thomas";
console.log(dude.firstName);
