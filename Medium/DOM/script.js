document.body.style.backgroundColor = "orange";

const heading = document.getElementById("heading");
heading.style.color = "brown";
heading.style.backgroundColor = "skyblue";
heading.style.textAlign = "center";
heading.style.padding = "10px";
heading.style.width = "300px";

//single element changes - NODE LIST is not an array but looks like one
const li = document.querySelectorAll("li");
li[3].style.backgroundColor = "green";

//multiple elements
ul.forEach(function (li) {
  li.style.color = "blue";
});

// HTML Collection - getElementsByClassName
// convert to array using Array.from()
//then you can apply all the array methods ...

const para = document.getElementsByClassName("para");
const convertedArr = Array.from(para);

para.forEach(function (p) {
  p.style.color = "white";
});


// CRUD operation