// Question: What is the output of the below code? 
console.log(a);
function funcA() {
	console.log(a);
}
var a = 1;
var b = 2;
function funcB() {
	console.log(b);
}
funcA();
funcB();

// Answer: 
// undefined
// 1
// 2

// Explanation: 

/* 
As a result of hoisting, variables and function declarations are processed before any code is executed. 
Note only declarations are hoisted, not assignments. So the above code for the interpreter becomes: 

function funcA() { ... }
var a;
var b;
function funcB() { ... }

console.log(a);
a = 1;
b = 2;
funcA();
funcB();
*/ 