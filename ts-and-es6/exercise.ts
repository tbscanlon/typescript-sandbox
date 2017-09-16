const double = (value: number): number => value * 2;
console.log(double(10));

const greeting = (name: string = "Tom"): void => console.log(`Hello ${name}`);

greeting();
greeting("Anna");

const numbersList: number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbersList));

let newArray: number[] = [55, 20];
newArray.push(...numbersList);
console.log(newArray);

const testResults: number[] = [3.89, 2.99, 1.38];
const [result1, result2, result3]: number[] = testResults
console.log(result1, result2, result3);

const scientist = { firstName: "Will", experience: 12 };
const {firstName, experience} = scientist;
console.log(firstName, experience);