// Two ways of creating object

// let user = new Object();
// console.log(user);

// let users = {};

// users.name = "Rahul";
// users.age = 26;
// users.hasAadhaar = true;
// users.isLoggedIn = false;

// console.log(users);

// let mysym = Symbol("key1");
// console.log(typeof mysym);

// let employee = {
//   name: "Purendhar",
//   age: 27,
//   [mysym]: "myKey1",
//   role: "Frontend Developer",
//   loggedInDays: ["Monday", "Tuesday", "Saturday"],
//   full_name: {
//     first_name: "Allu",
//     last_name: "Purendhar",
//     middle_name: {
//       nick_name: "puru",
//     },
//   },

//   greetings: function () {
//     console.log("Hello User");
//   },
// };

// console.log(employee);
// console.log(typeof employee["mysym"]);
// console.log(typeof employee.mysym);

//Anonymous Function

// two ways to access
// 1.
// console.log(employee.loggedInDays);
// 2.
// console.log(employee["role"]);

// console.log(employee["full name"]["middle_name"]["nick_name"]);

// console.log(employee.full_name.middle_name.nick_name);

// console.log(employee.greetings());

// let employee = {
//   name: "Purendhar",
//   age: 27,
//   role: "Frontend Developer",
//   loggedInDays: ["Monday", "Tuesday", "Saturday"],
//   full_name: {
//     first_name: "Allu",
//     last_name: "Purendhar",
//     middle_name: {
//       nick_name: "puru",
//     },
//   },

//   greetings: function () {
//     console.log("Hello User");
//   },
// };

// employee.role = "backend developer ";
// // Object.freeze(employee);
// employee.role = "fullstack developer";
// console.log(employee);

// console.log(Object.keys(employee));
// console.log(Object.values(employee));

// console.log(Object.entries(employee));

// let a = { a: 1, b: 2 };
// let b = { b: 1, c: 2 };
// let c = { c: 7, e: 2 };

// console.log(Object.assign({}, a, b, c));

// Spread{} and Rest (function parameter)(...)

// Spread - Destructuring of Object
// let d = { ...a, ...b, ...c , d : 1};
// console.log(d);

let course = {
  courseInstructor: "Sharath",
  fee: 999,
  time: "11:30 AM",
};

//extract
let { courseInstructor: instructor, fee, time } = course;
console.log(instructor);
console.log(fee);
console.log(time);
