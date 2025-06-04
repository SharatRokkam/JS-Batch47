// Loops

// for
// for (let i = 5; i >= 0; i--) {
//   console.log("Hello", i);
// }

// while

// let i = 0;
// while (i <= 5) {
//   console.log("Hello", i);
//   //increment/ decrement has to be added compulsory otherwise your code will go in infinite loop
//   i++;
// }

// do while

// let z = 6;
// do {
//   console.log("Do while loop = Count: " + z);
//   z++;
// } while (z <= 5);

// for of - used with arrays and iterables(object, array, string, map, set etc....)

// let fruits = ["banana", "mango", "grapes"];

// for (const element of object) {

// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// for in loop : used to iterate over an object properties
// let person = { name: "John", age: 23 };

// for (const key in person) {
//   console.log(key + " : " + person[key]);
// }
// *****************************************************************************
// Table of 5 : Template literal

// for (let i = 1; i <= 10; i++) {
//   console.log("5 * " + i + " = " + i * 5);
// }

// let number = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} * ${i} = ${number * i}`);
// }

// Highlight the even number

// 1 to 10

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(`${i} is even`);
//   }
// }

let cart = [100, 67, 44, 300, 200, 400];

let total = 0;

for (const price of cart) {
  if (price >= 100) {
    total = total + price - price * 0.1;
  } else {
    total += price;
  }
}

console.log(total);

// ./////////////////////////////////////////////////

let employee = {
  name: "Something",
  age: 30,
  role: "developer",
};

console.log(employee.role);

let users = [
  { name: "John", isActive: true },
  { name: "Maven", isActive: false },
  { name: "Beast", isActive: true },
];

for (let user of users) {
  if (user.isActive) {
    console.log(`${user.name} is online`);
  }
}

// write a program to print the users who are active

// Write a program to take password from the user, validate it

// let password;

// do {
//   password = prompt("enter you password");
// } while (password !== "1234");
