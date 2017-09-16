// let & const
// -----------
console.log("Let & Const");

let variable = "Test";

// variables declared with let are block-scoped
// variables declared with var are global-scoped (basically don't use)

const maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99;

// constants can't be reassigned

// Block Scope
function reset(): void {
    let variable = null; // this var doesn't overwrite the one above because it is block-scoped
    console.log(variable);
}

reset();
console.log(variable);

// Arrow Functions
// ---------------
console.log("Arrow Functions");

// Regular function
const addNumbers = function(x: number, y: number): number {
    return x + y;
}
console.log(addNumbers(10, 3));

// arrow function with 2 args
const multiplyNumbers = (x: number, y: number) => x * y;
console.log(multiplyNumbers(10, 3));

// arrow function with no args
const greet = () => console.log("Hello!");
greet();

// arrow function with one arg
// note the brackets aren't necessary
const greetFriend = friend => console.log(`Hello ${friend}`);
greetFriend("Tom");

// Default paramaters
// ------------------
console.log("Default Parameters");

const countdown = (start: number = 10): void => { // default arg is 10 for this function
    while (start > 0) {
        start --;
    }
    console.log("Done!", start);
};
countdown();

// Rest & Spread Operators
// ---------------
console.log("Rest & Spread Operators");

// Spread Operator
const numbers: number[] = [1, 10, 99, -5];
console.log(Math.max(...numbers));
// ... splits an array into a list of values to be used in functions
// Lets you flexibly transform your arrays without complicated loops

// Rest Operator
function makeArray(...args: number[]) { // rest turns a list of params into an array
    return args;
}
console.log(makeArray(1, 2, 6));
// make sure the rest operator is last in a list of arguments

// Destructuring Arrays
// --------------------
console.log("Destructuring Arrays");

// without destructuring
const myHobbies = ["Cooking", "Sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];

// with destructuring
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);
// destructuring is useful for getting items out of an array

// Destructuring Objects
// ---------------------
console.log("Destructuring Objects");

// without destructuring
const userData = {userName: "Tom", age: 25};
// const userName = userData.userName;
// const age = userData.age;

// with destructuring
const {userName: myName, age: myAge} = userData; // aliases can be used to set custom variable names for object attributes 
console.log(myName, myAge);

// Template Literals
// -----------------
console.log("Template Literals");

// without template literals
const userName = "Tom";
const oldGreeting = "Hello, I'm " + userName;
console.log(oldGreeting);

// with template literals
const newGreeting = `Hello, 
I'm 
${userName}`; // template literals can have multiple lines
console.log(newGreeting);
