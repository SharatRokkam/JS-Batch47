// OPERATORS
// Operators are the special symbols that perform operations on one or more operand
// operand and operator

// 1. Arithmetic Operators
// 2. Assignment
// 3. Comparison
// 4. Logical
// 5. String
// 6. typeof and instanceof
// 7. ternary Operators

// Arithmetic Operators

// console.log(3 + 5);
// console.log(3 - 5);
// console.log(3 * 5);
// console.log(3 / 5);
// console.log(5 % 2); //remainder
// console.log(5 ** 5); //exponentation

// increment and decrement

//  prefix increment --> ++a
//  postfix increment --> a++
//  prefix decrement --> --a
//  post decrement --> a--

// let a = 10;
// console.log(--a);  //first increment and then print

// let b = 10;
// console.log(b--);  // first print then increment
// console.log(b); //11

// let a = 10;
// 10 + 10 - 11
// let b = a++ + --a - ++a; //Interview
// console.log(b)

//BODMAS
// let c = (--b + b++ - a++ * b--) / a;

// (14 + 14 - 5 * 15)/6
// console.log(c);

// let a = 5;
// let b = 15;
// let c = 7;

// let d = (c ** a + a++ * b-- + c++ - --c + b++ + 2 + --c) / a;

// 16807 + 5 * 15 + 7 - 7 + 14 + 2 + 6;
// 16904 / 6;
// console.log(d);

// Assignment Operator
// =, +=, *= , -=, /=, %=, **=

// let a = 7;

// a += 5; // a = a + 5
// a -= 5; // a = a - 5
// a *= 5; // a = a * 5
// a /= 5; // a = a / 5
// a %= 5; // a = a % 5
// a **= 5; // a = a ** 5

//Comparison Operator
// ==, ===, !=, !==, >, <, =>, <=
// difference between == and === (Imp)
// // comparison operator, == checks the value only, === the value and type
// console.log(5 == "10"); // value (loosely checks)
// console.log(5 === "5"); // value and data type (checks strictly)
// console.log(10 !== 10); //false
// console.log(10 <= 10); //false
// console.log(10 >= 10); //false

// Ternary Operator
// Decision Making

// let age = 17;

// let drive = age > 18 ? "you can drive" : "you cannot drive";

// console.log(drive);

// Logical Operator : &&(logical AND), ||(logical OR), !(Logical NOT)

let x = 3;

// AND - Both condition should satisfy then only you get true
// console.log(x < 5 && x > 0); //true
// || - any one condition is true the answer true
// console.log(x < 5 || x > 10);
console.log(!(3 == 3));

// Instanceof and Bitwise

// ***********************************************************************************

// Coding Question
// 1. Calculate the area of rectangle (l * b)
// 2. Take a variable minutes and convert it into seconds. minutes * 60
// 3. Calculate the simple interest using formula (p * r * t)/100
// 4. Take a variable "celsius" and convert that into fahrenheit...

// 1.
// let length = 50;
// let width = 10;

// console.log(length * width);

// 2.
// let minutes = 60;

// console.log(minutes * 60);

// 3.
// let p = 10000;
// let r = 10;
// let t = 2;

// let interest = (p * r * t) / 100;
// console.log(interest);

// instanceof  - object instance class
// function Animal() {}
// let dog = new Animal();
// console.log(dog instanceof Animal);
// console.log(dog instanceof Object);

