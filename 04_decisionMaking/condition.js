// Conditional Statement

// 1. if

// Syntax
// if (condition) {

// }

// Syntax
// if (condition) {

// }
//  else {

// }

// let age = 16;
// if (age > 18) {
//   console.log("you can vote");
// } else {
//   console.log("you cannot vote");
// }

// Ternary Operator  :

// let result = age > 18 ? "you can drive" : " you cannot drive";
// console.log(result);

// *******************

// if else if ladder

// let score = 80;

// if (score > 90) {
//   console.log("you scored A+");
// } else if (score > 80) {
//   console.log("you score B");
// } else if (score > 70) {
//   console.log("you scored C");
// } else if (score > 60) {
//   console.log("you scored C");
// } else {
//   console.log("you failed");
// }

// switch

let day = 10;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("invalid day");
}

//Nested if else

// let marks = 45;

// if (marks >= 40) {
//   console.log("passed");

//   if (marks >= 70) {
//     console.log("first class");
//   } else {
//     console.log("second class");
//   }
// } else {
//   console.log("failed");
// }

// WAP to find if the given is even or odd

// let num = 73;

// if (num % 2 == 0) {
//   console.log("number is even", num);
// } else {
//   console.log("number is odd", num);
// }

// let a = 10,
//   b = 30,
//   c = 53;

// if (a > b && a > c) {
//   console.log(a);
// } else if (b > c && b > a) {
//   console.log(b);
// } else {
//   console.log(c);
// }

let username = "admin";

let password = 12345;

let role = "admin";

if (username === "admin" && password === 12345) {
  console.log("login successful");

  if (role === "admin") {
    console.log("Hello ! Admin");
  } else {
    console.log("Hello ! user");
  }
} else {
  console.log("login failed ");
}

// 1. Check the given year is a leap year or not
// 2.  Take number between 1 to 100; that number is fizzbuzz or not.?

// * if the number is divided by 3 print fizz
// * if the number is divided by 5 print buzz
// * if the number is divided by 3 && 5 print fizzbuzz

// 3. Check if the given number is positive, negative or zero

// 4. Electricity bill calculator
// --> First 50 units : 0.50 per unit
// --> Next 100 units : 0.75 per unit
// --> Next 100 units : 1.20 per unit
// --> Above 250 units : 1.50 per unit

// Apply surcharge/tax of 20% on the total bill

// 5. Input a number between 1 to 9 and print the word;
// Example : 3 -> three and 7 -> seven

// 6. Time Based Greeting
// Based 0-23 print :
// 5 to 11 AM : "Good Morning"
// 12 to 16 PM : "Good Afternoon"
// 17 to  21 PM : "Good Evening"
// 21 to 9 AM : "Good Night"
