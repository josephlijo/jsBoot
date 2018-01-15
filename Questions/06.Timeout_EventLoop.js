// Output of the below code? 
for(var i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log("I am from timeout: " + i);
	}, 3000);
}
console.log("I am outside timeout");

// Output: 
/*
I am outside timeout
I am from timeout: 5
I am from timeout: 5
I am from timeout: 5
I am from timeout: 5
I am from timeout: 5
*/

// How to give the correct value of i inside setTimeout?
// Option 1: 
for(var i = 0; i < 5; i++) {
	setTimeout((function(i) {
		return function() {
			console.log("Option 1: " + i);
		}
	})(i), 3000);
	
	// or wrap the entire setTimeout inside a closure
}
console.log("I am outside timeout");

// Option 2: using the let keyword 
for(let i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log("Option 2: " + i); 
	}, 3000);
}
console.log("I am outside timeout");
