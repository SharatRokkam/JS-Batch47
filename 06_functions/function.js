// Parameters and Arguments
// Function Declaration

// function greet(name) {
//   return `Hello! ${name}`;
// }

// console.log(greet("John"));

// function greet(name) {
//   console.log(`Hello! ${name}`);
// }

// greet("Sneha");
// greet("Prem");

// Function Expression

// const greet = function (name) {
//   console.log(`Hello! ${name}`);
// };

// greet("Purendhar");

//Arrow Function (ES6)
// return and function

const add = (a, b = 10) => a + b;

console.log(add(4, 7));

// IIFE - Immediately invoking function(Self invoking function)

// --> Quick calculation without polluting the scope

// (function (a, b) {
//   console.log(a * b);
// })(10, 3);

// IIFE should be called or invoked just after it is defined or created

// This cannot be reused
