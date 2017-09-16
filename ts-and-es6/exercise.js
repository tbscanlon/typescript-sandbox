// var double = function(value) {
//     return value * 2;
// };
var double = function (value) { return value * 2; };
console.log(double(10));
// var greeting = function(name) {
//     if (name === undefined) { name = "Tom";}
//     console.log("Hello" + name);
// };
var greeting = function (name) {
    if (name === void 0) { name = "Tom"; }
    return console.log("Hello " + name);
};
greeting();
greeting("Anna");
var numbersList = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbersList));
console.log(Math.min.apply(Math, numbersList));
var newArray = [55, 20];
// Array.prototype.push(...newArray, ...numbersList);
newArray.push.apply(newArray, numbersList);
console.log(newArray);
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
