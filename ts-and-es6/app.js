// let & const
// -----------
console.log("Let & Const");
var variable = "Test";
// variables declared with let are block-scoped
// variables declared with var are global-scoped (basically don't use)
var maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99;
// constants can't be reassigned
// Block Scope
function reset() {
    var variable = null; // this var doesn't overwrite the one above because it is block-scoped
    console.log(variable);
}
reset();
console.log(variable);
// Arrow Functions
// ---------------
console.log("Arrow Functions");
// Regular function
var addNumbers = function (x, y) {
    return x + y;
};
console.log(addNumbers(10, 3));
// arrow function with 2 args
var multiplyNumbers = function (x, y) { return x * y; };
console.log(multiplyNumbers(10, 3));
// arrow function with no args
var greet = function () { return console.log("Hello!"); };
greet();
// arrow function with one arg
// note the brackets aren't necessary
var greetFriend = function (friend) { return console.log("Hello " + friend); };
greetFriend("Tom");
// Default paramaters
// ------------------
console.log("Default Parameters");
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countdown();
// Rest & Spread Operators
// ---------------
console.log("Rest & Spread Operators");
// Spread Operator
var numbers = [1, 10, 99, -5];
console.log(Math.max.apply(Math, numbers));
// ... splits an array into a list of values to be used in functions
// Lets you flexibly transform your arrays without complicated loops
// Rest Operator
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
// make sure the rest operator is last in a list of arguments
// Destructuring Arrays
// --------------------
console.log("Destructuring Arrays");
// without destructuring
var myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
// with destructuring
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
// destructuring is useful for getting items out of an array
// Destructuring Objects
// ---------------------
console.log("Destructuring Objects");
// without destructuring
var userData = { userName: "Tom", age: 25 };
// const userName = userData.userName;
// const age = userData.age;
// with destructuring
var myName = userData.userName, myAge = userData.age; // aliases can be used to set custom variable names for object attributes 
console.log(myName, myAge);
// Template Literals
// -----------------
console.log("Template Literals");
// without template literals
var userName = "Tom";
var oldGreeting = "Hello, I'm " + userName;
console.log(oldGreeting);
// with template literals
var newGreeting = "Hello, \nI'm \n" + userName; // template literals can have multiple lines
console.log(newGreeting);
