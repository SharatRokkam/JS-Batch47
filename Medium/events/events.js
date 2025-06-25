// const button = document.querySelector("button");

// button.addEventListener("dblclick", (event) => {
//   console.log(event.type);
//   console.log(event.target);
// });

// const box = document.querySelector("div");

// box.addEventListener("mouseover", () => {
//   box.style.backgroundColor = "red";
// });

// box.addEventListener("mouseleave", () => {
//   box.style.backgroundColor = "blue";
// });

// const input = document.querySelector("#inputBox");

// input.addEventListener("keydown", (event) => {
//   console.log("key pressed ", event.key);
// });

// document.querySelector("#inputBox").addEventListener("input", (e) => {
//   e.preventDefault();
//   console.log(e.target.value);
//   //   alert("form submitted successfully");
// });

// window.addEventListener("scroll", () => {
//   console.log("you are scrolling");
// });

const decrement = document.querySelector("#decrement");
const increment = document.querySelector("#increment");
const para = document.querySelector("p");

let count = 10;

increment.addEventListener("click", () => {
  if (count >= 10 && count < 20) {
    count++;
    para.textContent = count;
  }
});

decrement.addEventListener("click", () => {
  if (count < 20 && count > 10) {
    count--;
    para.textContent = count;
  }
});
