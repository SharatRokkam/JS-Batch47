// Data types : Primitive and Non-Primitive
// Primitive (Pass by value) and Non- Primitive (Pass by reference )
// Stack Memory and Heap Memory

// Primitive Data type
// Number
// let score = 100;
// console.log(typeof score);

//string - double or single quotation
// let myAge = "35";
// let myName = "John";
// let emoji = "📸";
// console.log(typeof emoji);

//Boolean - true or false
// const isEmployee = true;
// const isPresent = false;

// let a = 10;
// let b = 20;

// console.log(a > b);

//Null and undefined and isNan - Imp
//Null : when we don't have any value to provide to variable we keep it null..

// let myVar = null;
// console.log(typeof null); //object

// Imp : almost everything in a javascript is an object

// undefined
// var newName = 10; //declaration
// console.log(newName); //accessing

// var - undefined and let/const = reference error

// Hoisting - is phenomenan in javascript variable declared with var keyword moves to the top of the scope(it gives you an illusion of that). Execution context (undefined)

// ES6 - Symbol and BigInt
// Symbol  is unique

// Symbol()
// let id = Symbol("name"); //generate a new key1
// let id1 = Symbol("name1"); //key2

// console.log(id == id1);

//BigInt
// const bigIntegar = 1322424724792420420482480280482048028408204800204208;
// console.log(bigIntegar);

// Non - Primitive

// Array[] : collection of different datatype and value

let employee = ["John", 23, 23, 23, true, null, [], {}];

// Array starts from index value : zero
// John : 0
// 23 : 1
// true : 2..

// console.log(employee.indexOf(23));
// console.log(employee.lastIndexOf(23));

// Object : {key : value}

let student = {
  name: "David",
  age: 24,
  isStudent: true,
  hasAadhaar: true,
};

// console.log(student.age);

// function : reusable block of code
// one function  - multiple time usage

// Syntax :
// function funCName(parameter){
//     return
//     console.log
// }

// funCName(argument)


// Pure function : that provides similar output when passing similar value 
function Add(a, b) {
  return a + b;
}

//argument - values
console.log(Add(4, 5)); //invoking or calling
console.log(Add(1, 5)); //invoking or calling
console.log(Add(2, 5)); //invoking or calling
console.log(Add(6, 5)); //invoking or calling
console.log(Add(8, 5)); //invoking or calling



