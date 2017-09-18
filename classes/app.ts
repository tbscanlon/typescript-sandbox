// Basic Classes
// -------------
class Person {
    // name: string; // properties are public by default
    private type: string;
    protected age: number = 26; // private, but inherited classes can use it as well 

    constructor(public name: string, public username: string) {} // shorthand for setting properties

    printAge(): void {
        console.log(this.age);
        this.setType("Very cool dude");
    }

    private setType(type: string): void {
        this.type = type;
        console.log(this.type);
    } // methods can also be private or protected
}

const person = new Person("Tom", "tbs");
console.log(person.name, person.username);
person.printAge();

// Inheritance
// -----------
class Tom extends Person { // extends keyword enables inheritance
    // name = "Max";

    constructor(username: string) {
        super("Tom", username); // use super keyword to access parent methods
        this.age = 18; // age can be directly modified because it is protected
        // this.type = "uncool dude"; // type cannot be directly modified because it is private
    }
}
const tom = new Tom("tomtom");
console.log(tom);

// Getters & Setters
// -----------------
class Plant {
    private _species: string = "Default"; // don't use underscores for private properties

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB"; // won't set to AB because of the validation
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

// Static Properties & Methods
// ---------------------------
class Helpers {
    static PI: number = 3.14; // static properties can be accessed without creating an instance of a class
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    } // static methods can also be accessed without needing to create an instance
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
// ----------------
abstract class Project { // abstract classes have to be inherited from, they cannot be instantiated
    projectName: string = "Default";
    budget: number;

    abstract changeName(name: string): void; // abstract methods need to be implemented in child classes

    calcBudget(): number {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    } // abstract method implemented in child class
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// Private Constructors
// --------------------
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    }
} // private constructors allow for singletons

// let wrong = new OnlyOne("The Only One"); // won't work
let right = OnlyOne.getInstance(); // will work
console.log(right.name);
right.name = "Something else"; // this will not work because name is set to readonly.
// Readonly properties are shorthand for using a getter but no setter
