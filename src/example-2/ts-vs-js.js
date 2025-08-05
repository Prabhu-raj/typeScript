//Type Safety
var dogAge = 5;
//dogAge = "Five" //Type 'string' is not assignable to type 'number'.
console.log(dogAge);
var birdType = "Parrot";
//birdType = 7; //Type 'number' is not assignable to type 'string'
//Enum - Example (TS)
//Language Extras: TypeScript adds some special features to JavaScript
// TypeScript allows 'enum' which is not available in JavaScript
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(Color[c]); //Green
// // JavaScript does not have 'enum', so you might use an object
// //You can write JavaScript code directly in a TypeScript file
// const JSColor = { Red: 0, Green: 1, Blue: 2 };
// let jc = Color.Green;
