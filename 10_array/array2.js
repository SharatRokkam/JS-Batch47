// let value = [1, 2, 3];

// let doubled = [];

// value.forEach((n) => doubled.push(n * 2));
// console.log(doubled);
// value.forEach((n) => console.log(n));

// const double = value.map((n) => n * 2);
// console.log(double);

// const newMarks = marks.filter((num) => num % 2 == 0);
// const newMarks = marks.filter((num) => num % 2 !== 0);
// console.log(newMarks);

// Delete ---> user.id !== id;

// accumulates the array value in single value

// let marks = [100, 43, 55, 22, 64, 98];

// let newArr = [];
// // const reduce = newArr.reduce((acc, curr) => acc + curr, 0);
// const reduce = newArr.reduce((acc, curr) => acc + curr);
// console.log(reduce);

// 1.
let users = ["Sneha", "Rahul", "Purendhar"];

// users.forEach(user => console.log(`Welcome ${user}`))

// console.log(users.map((user) => "Welcome " + user));

//Output : Welcome Sneha, Welcome Rahul

// 2. INR to USD
// let priceInINR = [100, 200, 400, 118];

// let priceInUSD = priceInINR.map((price) => (price / 86).toFixed(2));
// priceInUSD.forEach((dollar) => console.log(Number(dollar));

// 3.
let users1 = [
  { name: "Rahul", age: 24 },
  { name: "Purendhar", age: 26 },
  { name: "Sneha", age: 27 },
  { name: "Akhil", age: 24 },
  { name: "Prem", age: 18 },
];

// const above24 = users1.filter((user) => user.age > 24);
// console.log(above24);

// Output : users who are above 24

// 4.
let cart = [
  { product: "iphone 16", price: 69000 },
  { product: "s24+", price: 55000 },
  { product: "charger", price: 1300 },
];

let totalCartValue = cart.reduce(
  (sum, productValue) => sum + productValue.price,
  0
);
console.log(totalCartValue);
