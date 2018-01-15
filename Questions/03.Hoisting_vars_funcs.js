// Question: What is the output of the below code? 
console.log(a);
var funcA = function() {
	console.log(a);
}
funcA();
var a = 1;
var b = 2;
var funcB = function() {
	console.log(b);
}
funcB();


// Answer: 
// undefined
// undefined
// 2

// Explanation: 

/* 
As a result of hoisting, variables and function declarations are processed before any code is executed. 
Note only declarations are hoisted, not assignments. So the above code for the interpreter becomes: 

var funcA;
var a;
var b;
var funcB;

console.log(a);
funcA = { ... };
funcA();
a = 1;
b = 2;
funcB = { ... };
funcB();
*/ 