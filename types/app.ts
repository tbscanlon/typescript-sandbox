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
