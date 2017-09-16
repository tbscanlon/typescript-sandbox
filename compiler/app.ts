let myName: string = "Tom";
let myAge: number = 27;

// myName = 30; // Although this is invalid, by default tsc *will* compile regardless 

let anything; // only works with noImplicitAny set to false
anything = 12;

function controlMe(isTrue:boolean, somethingElse: boolean) {
    // somethingElse will throw an error if noUnusedParamaters is true
    let result: number;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result; // won't work if strictNullChecks is true
}