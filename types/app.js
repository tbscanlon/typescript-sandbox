// Basic Types
// -----------
// String
var myName = "Tom";
// myName = 28; 
// The line above won't compile
// We're trying to assign an integer to a string var
// Number
var myAge = 26;
// ints and floats are BOTH numbers
// TS doesn't care about which you use
// Boolean
var hasHobbies = true;
// hasHobbies = 1;
// The line above won't compile
// Numbers can't be cast as booleans
// Arrays
var hobbies = ["Video Games", "Eating Pancakes"];
// hobbies = [100];
// The line above won't compile
// Arrays are bound to a particular type like other vars
var moreHobbies = [42, "Not being dead"];
// By setting an array of type any, the items stored within
// are of type any
// Tuples
// Mixed type arrays without having to resort to
// the any type
var address = [50, "Cool Street"];
// Order is important in tuples
// In the example above, it *must* be
// 2 elements long, first number, second string
// Enums
// Makes numbers more expressive
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
;
var myColor = Color.Green; // using enums
// Overwriting enum values
var CustomColours;
(function (CustomColours) {
    CustomColours[CustomColours["Black"] = 0] = "Black";
    CustomColours[CustomColours["Grey"] = 1] = "Grey";
    CustomColours[CustomColours["Green"] = 100] = "Green";
    CustomColours[CustomColours["Blue"] = 101] = "Blue"; // 101
})(CustomColours || (CustomColours = {}));
// enums will increment automatically from previous values
// any
// The most flexible type
// Really try hard not to use it
var car = "BMW";
car = { brand: "BMW", series: 3 };
// seriously REALLY TRY HARD not to use it
// Assigning Types
var myRealAge;
myRealAge = 25;
myRealAge = '27';
// The above *does* work
// myRealAge is of type 'any'
var myFakeAge; // manually assigning types
myFakeAge = 18;
// myFakeAge = '18'; // doesn't compile
// Functions
// ---------
// functions should have typed return values
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void functions
function sayHello() {
    console.log("Hello friend");
    // return "Hello friend" // this line won't compile
}
sayHello();
// argument types
// arguments should also be given types 
function multiply(x, y) {
    return x * y;
}
console.log(multiply(2, 10));
// function types
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 5));
