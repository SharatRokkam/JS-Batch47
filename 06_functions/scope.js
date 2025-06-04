// Variables declared in global scope can be accessed anywhere in the code...
let global = "I am global variable";

function outer() {
  // variable declared with let, var or const inside the function will be accessed inside the function only
  let functioned = "I am function scope";

  if (true) {
    // variable declared with let and const inside the block will be accessed inside the block only
    let block = "I am block scoped";

    console.log(global); //works
    console.log(functioned); //works
    console.log(block); //works
  }

  console.log(block); //not work
}

outer();
console.log(functioned); //work

// var is function , let and const are block scope
