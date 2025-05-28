// ## ** Quiz Questions (MCQs)**

// 1. **What will be the output of the following code?**

// let x = "5";
// let y = 2;
// console.log(x + y);

//    a) 7
//    b) "7"
//    c) "52"
//    d) 3

// 2. **Which of the following is NOT a valid JavaScript variable name?**
//    a) \_name
//    b) \$value
//    c) 1stName
//    d) full\_name

// 3. **What is the data type of `typeof NaN`?** -- Nan(not a number)
//    a) "NaN"
//    b) "undefined"
//    c) "number"
//    d) "object"

// 4. **Which statement is true about `let`, `var`, and `const`?**
//    a) `const` variables can be reassigned.
//    b) `var` is block-scoped.
//    c) `let` and `const` are block-scoped.
//    d) All three are function-scoped.

// 5. **Which data type can hold multiple values?**
//    a) Number
//    b) Boolean
//    c) String
//    d) Array

// ## Coding Questions (Practice)**

// 1. **Declare a variable to store your name and print a greeting using template literals.**

//    Example Output: Hello, my name is John.

// String Operator
// let myName = "John";
// console.log("Hello, my name is " + myName);

// Template literal or String interpolation(backtick) --- $

// let myName1 = "Rahul";
// console.log(`Hello, my name is ${myName1}`);

// 2. **Create three variables of type number, calculate their average, and print the result.**

// 3. **Write a program to swap the values of two variables (without using a third variable).**

// 4. **Check the type of the following values and log them:**

//    * "Hello" - string
//    * 100 - number
//    * `true` - boolean
//    * `null` - object
//    * `undefined` - undefined
//    * `[1, 2, 3]` - object
//    * `{name: "Alice"}` - object

// 5. **Write a program to accept a value and check whether it is a number or not using `isNaN()` function.**

// let myValue = "Prem";
// console.log(isNaN(myValue));

let a = 5;
let b = 10;

// a = a + b;
// b = a - b; // 5
// a = a - b; // 15 - 5
// console.log(a);
// console.log(b);

// Destructuring
[a, b] = [b, a];
console.log(a)
console.log(b)
