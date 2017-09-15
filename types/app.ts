// Basic Types
// -----------

// String
let myName = "Tom";
// myName = 28; 

// The line above won't compile
// We're trying to assign an integer to a string var

// Number
let myAge = 26; 
// ints and floats are BOTH numbers
// TS doesn't care about which you use

// Boolean
let hasHobbies = true;
// hasHobbies = 1;

// The line above won't compile
// Numbers can't be cast as booleans

// Arrays
let hobbies = ["Video Games", "Eating Pancakes"];
// hobbies = [100];

// The line above won't compile
// Arrays are bound to a particular type like other vars

let moreHobbies: any[] = [42, "Not being dead"];

// By setting an array of type any, the items stored within
// are of type any

// Tuples
// Mixed type arrays without having to resort to
// the any type
let address: [number, string] = [50, "Cool Street"];

// Order is important in tuples
// In the example above, it *must* be
// 2 elements long, first number, second string

// Enums
// Makes numbers more expressive
enum Color {
    Grey,  // 0
    Green, // 1
    Blue   // 2
};

let myColor: Color = Color.Green; // using enums

// Overwriting enum values
enum CustomColours {
    Black,       // 0
    Grey,        // 1
    Green = 100, // 100
    Blue         // 101
}
// enums will increment automatically from previous values

// any
// The most flexible type
// Really try hard not to use it
let car: any = "BMW";
car = { brand: "BMW", series: 3 };
// seriously REALLY TRY HARD not to use it

// Assigning Types
let myRealAge;
myRealAge = 25;
myRealAge = '27';

// The above *does* work
// myRealAge is of type 'any'

let myFakeAge: number; // manually assigning types
myFakeAge = 18;
// myFakeAge = '18'; // doesn't compile

// Never
// A function that *never* returns a value
function neverReturns(): never {
    throw new Error("An error!");
}

// Nullable Types
// null is its own type in TS 2.0+
let canBeNull: number | null = 12;
canBeNull = null; // clears the value of the var

let canAlsoBeNull; // initialised with undefined
canAlsoBeNull = null; // now set to null

// Functions
// ---------

// functions should have typed return values
function returnMyName(): string { // assign type to return value
    return myName;
}
console.log(returnMyName());

// void functions
function sayHello(): void { // void functions return nothing
    console.log("Hello friend");
    // return "Hello friend" // this line won't compile
}
sayHello();

// argument types
// arguments should also be given types 
function multiply(x: number, y: number): number {
    return x * y;
}

console.log(multiply(2, 10));

// function types
// variables can store functions
// These can also be given types for args + return vals
let myMultiply: (val1: number, val2: number) => number;

// myMultiply = sayHello;
// myMultiply(); // these won't compile 

myMultiply = multiply;
console.log(myMultiply(5, 5));

// Objects
// -------
let userData = { // object type is inferred by TS
    name: "Tom",
    age: 25
};
// inferred into: { name: string, age: number }

// explicitly defined object types
let moreUserData: { name: string, age: number} = {
    name: "Dave",
    age: 30
};

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],

    output: function (all: boolean) {
        return this.data;
    }
};

// Type alias
type Complex = { data: number[], output: (all: boolean) => number[] }; 
// creates a reusable Complex type

// Same object as above, but with the type alias
let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean) {
        return this.data;
    }
};

// union types
// variables can be set to multiple types by placing
// a pipe between each type in the declaration
let myRealRealAge: number | string = 27;
myRealRealAge = '27';

// check types
let finalValue = 5000;
if (typeof finalValue == "number") {
    console.log("Final value is a number");
    
}