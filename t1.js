

// Function to change heading text
function changeText() {
  document.getElementById("heading").innerText = "Welcome to JavaScript!";

}

// Button click alert
document.getElementById("btn").addEventListener("click", function() {
  alert("Button was clicked!");
});


// process 1 Variables
let name = "Arun";  
let age = 20;       
const PI = 3.14;    

// process 2 Data Types
let num = 25;             
let str = "Hello";        
let arr = [1, 2, 3];      
let obj = {name:"Kavi"};  

let a1=10, c=20;
let y=a1+c;
console.log("Sum of a1+c:", y);

// process 3 Operators
let a= 10, b = 5;
console.log("a+b:", a + b);   
console.log("a>b:", a > b);   
console.log("a === '10':", a === "10"); 

// process 4 Functions
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Priya"));  

// process 5 Conditional Statements
let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// process 6 Loops
for (let i = 1; i <= 5; i++) {
  console.log("For loop:", i);
}

let j = 1;
while (j <= 5) {
  console.log("While loop:", j);
  j++;
}

let vip= 1;
do {
  console.log("Do-While loop:", vip);
  vip++;
} while (vip <= 5);

// For…in (object)
let student = {name:"Arun", age:20};
for (let key in student) {
  console.log("For-in:", key + " -> " + student[key]);
}

// For…of (array)
let array = [10, 20, 30];
for (let value of array) {
  console.log("For-of:", value);
}

// DOM Manipulation
document.getElementById("heading").style.color = "red";
document.querySelector("h1").style.backgroundColor = "lightblue";

// Selecting multiple elements

// By class name
let classItems = document.getElementsByClassName("mandatory");
console.log("getElementsByClassName:", classItems);

// By tag name
let headings = document.getElementsByTagName("h1");
console.log("getElementsByTagName:", headings);

// By querySelectorAll
let mandatoryItems = document.querySelectorAll("li.mandatory");
console.log("querySelectorAll:", mandatoryItems);

// Example: change style for all selected elements
for (let item of mandatoryItems) {
  item.style.color = "blue";
  item.style.fontWeight = "bold";
}


