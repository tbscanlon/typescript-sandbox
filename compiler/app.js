var myName = "Tom";
var myAge = 27;
// myName = 30; // Although this is invalid, by default tsc *will* compile regardless 
var anything; // only works with noImplicitAny set to false
anything = 12;
function controlMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result; // won't work if strictNullChecks is true
}
