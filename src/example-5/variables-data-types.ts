// Part 1 - Basic Variables
// Declare a variable with a specific type
let message: string = "Hello, TypeScript";
console.log(message);


// Part 2 - Arrays
// declare an array of numbers
let numbers: number[] = [1, 2, 3];
console.log(numbers);


// Part 3: var, let, and const
// 'var' variables can be redeclared and reassigned
var varVariable: string = "Im a var variable";
varVariable = "I've been reassigned";
console.log(varVariable); //I've been reassigned

// 'let' variables can't be redeclared but can be reassigned
let letVariable: string = "Im a let variable";
letVariable = "I've been reassigned"; //I've been reassigned
console.log(letVariable);

// 'const' variables can't be redeclared or reassigned
const constVariable = "I'm a const variable";
console.log(constVariable); //I'm a const variable
