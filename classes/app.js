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
// Basic Classes
// -------------
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.name = name;
        this.username = username;
        this.age = 26; // private, but inherited classes can use it as well 
    } // shorthand for setting properties
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Very cool dude");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    }; // methods can also be private or protected
    return Person;
}());
var person = new Person("Tom", "tbs");
console.log(person.name, person.username);
person.printAge();
// Inheritance
// -----------
var Tom = /** @class */ (function (_super) {
    __extends(Tom, _super);
    // name = "Max";
    function Tom(username) {
        var _this = _super.call(this, "Tom", username) || this;
        _this.age = 18; // age can be directly modified because it is protected
        return _this;
        // this.type = "uncool dude"; // type cannot be directly modified because it is private
    }
    return Tom;
}(Person));
var tom = new Tom("tomtom");
console.log(tom);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default"; // don't use underscores for private properties
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB"; // won't set to AB because of the validation
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
// Static Properties & Methods
// ---------------------------
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    }; // static methods can also be accessed without needing to create an instance
    Helpers.PI = 3.14; // static properties can be accessed without creating an instance of a class
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract Classes
// ----------------
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    }; // abstract method implemented in child class
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
// Private Constructors
// --------------------
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}()); // private constructors allow for singletons
// let wrong = new OnlyOne("The Only One"); // won't work
var right = OnlyOne.getInstance(); // will work
console.log(right.name);
right.name = "Something else";
