// Closure : It is combination of inner function and lexical environment created by outer function (Interview)

var a = 29;

function outer() {
  var a = 10;

  function inner() {
    let b = 5;
    console.log(a);
    console.log(b);
  }
  inner();
}

outer();

console.log(`This is new variable ${a}`);
