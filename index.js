function changeText() {
  document.getElementById("heading").innerText = "Welcome to JavaScript!";
}

// process 1 Variables

let name = "Arun";  // String
let age = 20;       // Number
const PI = 3.14;    // Constant

// process 2 Data Types
let num = 25;             // number
let str = "Hello";        // string
let arr = [1, 2, 3];      // array
let obj = {name:"Kavi"};  // object

let a1=10;
let c=20;
let y=a1+c;
console.log(y)

// process 3  Operators

let a= 10, b = 5;
console.log(a + b);   // 15
console.log(a > b);   // true
console.log(a === "10"); // false


// process 4  Functions
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Priya"));  // Hello, Priya


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

// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// while loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// Do…While Loop
let vip= 1;
do {
  console.log(vip);
  j++;
} while (vip <= 5);


// For…in (for objects)
let student = {name:"Arun", age:20};
for (let key in student) {
  console.log(key + ": " + student[key]);
}
 // For…of (for arrays/strings) 
 let array = [10, 20, 30];
for (let value of array) {
  console.log(value);
}
// Document Object Model (DOM)
// Selecting Elements
document.getElementById("title").style.color = "red";
document.querySelector("h1").style.backgroundColor = "blue";


for (let i = 1; i <= 10; i++) {
   if (i % 2 === 0) {
      console.log(i);
   }
}



