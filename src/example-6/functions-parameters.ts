//Simple function using typescript
//Traditional approach
function greet(name: string) {
    return `Hello ${name}`;
}

//Call the function with a parameter
console.log(greet("Sarah")); //Hello Sarah


//A simple arrow function
//written in a newer, shorter style
const welcome = (name: string): string => {
    return `Hello ${name}`;
}

//Call the arrow function with a parameter
console.log(welcome("Jim")); //Hello Jim