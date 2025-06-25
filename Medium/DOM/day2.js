// let parent = document.querySelector(".parent");
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[2].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].textContent);
// }

// let dayOne = document.querySelector(".day");
// console.log(dayOne.innerHTML);

// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

// console.log(parent.firstElementChild.innerHTML);
// console.log(parent.lastElementChild.innerHTML);

// console.log("NODES", parent.childNodes);

// const div = document.createElement("div");
// div.className = "main";
// div.id = Math.floor(Math.random() * 10);
// div.setAttribute("title", "default");
// div.style.color = "red";
// div.style.backgroundColor = "orange";
// div.style.padding = "15px";
// const addText = document.createTextNode("Learning DOM");
// div.appendChild(addText);
// console.log(div);

// document.body.appendChild(div);

function addLang(langName) {
  let li = document.createElement("li");
  const textnode = document.createTextNode(langName);
  li.appendChild(textnode);

  document.querySelector(".language").appendChild(li);
}

addLang("java");
addLang("typescript");
addLang("golang");
addLang("ruby on rails");

//Edit
const language = document.querySelector(".language");
// const oldLang = language.children[2];

// const newLi = document.createElement("li");
// const textNode = document.createTextNode("Python");
// newLi.appendChild(textNode);

// oldLang.replaceWith(newLi);

//Edit
const thirdChild = document.querySelector("li:nth-child(3)");

thirdChild.textContent = "HTML";
// thirdChild.outerHTML = "<li>C++</li>";

// const thirdChild = document.querySelector("li:nth-child(3)");
// thirdChild.outerHTML = "<li>C</li>";

//delete
const removingLi = language.children[1];
removingLi.remove();
