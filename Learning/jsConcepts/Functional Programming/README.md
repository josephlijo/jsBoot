# Functional programming in JavaScript

## What is functional programming?  (FP)
Functional programming is the concept of building software by following core concepts:  
- **data** and **function which operates on it** are kept separate
- Avoid **state change** and **mutable data**
- **functions** are the first-class citizens

**Keeping data and functions separate**
- In OOP we encapsulate the data in a class and expose of the functions to operate with them - change the state or get the data
- In contrast, functional programming keep data in separate structures like `Arrays` or `Objects` and create separate functions which takes that data as argument(s), work on the data, and return a transformed form or data or do other operation based on the data. 
- Here we can immediately see the benefits of `polymorphism`. For example, the below function to `increaseAge` will work with all *data* which has *age* property.  
```
// OOP 
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	increaseAge() {
		return ++this.age;
	}
}

// vs. Functional Programming
var personData = {"name": "John Doe", age: 20};
var wineData = {"name": "Rose Wine", age: 10};
var tweetData  = {"name": "Inheritance vs. Composition", age: 1};

function increaseAge(data) {
	return ++data.age;
}
```

**Avoid state change and mutable data** 
- i.e. Avoid changing the value of `data`, instead, copy it or create new data out of it. 
```
// instead of 
var greeting = "Hello";
greeting = greeting + ", world";

// use
var greeting = "Hello";
var worldGreeting = greeting + ", world";
```
- Advantages of this approach is that we don't have to track the changes made over time to the `data` to trace an error for example. 
- We can easily identiy a *point in time* our software behaves unexpectedly because of data
- The above helps performance benefits 

**`functions` are first-class citizens**
- This essentially means that *functions should be also assignable to a variable* like we do for number or string types. For example: 
```
var num = 1;
var str = "Hello";
var func = function () {};
```
- This gives us the ability to **pass function as arguments to other functions** and **return functions are result of a function** 
- Advantages are flexibility and code reuse.  

## Concepts

**Higher-order functions**
- Are functions that takes a function as argument, returns a function or both
- In constrast with basic function that works with data, these functions work with other functions as well and hence the name - Higher-order functions. 
```
// Sample higher-order function 
function getView(data, renderer) {
	// Do something on data...
	// Then call the `renderer` or default it
	return renderer ? renderer(`Here is the requested view: ${data.viewName}`) : console.log("Here is the default view");
}

var requestData = {viewName: "index"}; 
getView(requestData, function(message) {
	console.log('------------------');
	console.log(message);
	console.log('------------------');
});
getView(requestData);
```

**Map, Filter, Reduce functions**
- Map is used to map each element to a new one.
- Using the functional constructs, it helps avoid the usage of *programmatically creating new array*, *looping over an existing one using for each*, *pushing a calculated value to the new array* and thus reducing bugs, and increasing code-reuse. 
```
// Array Map: Map is a higher-order function which creates a new array of data
// The provided function is called against each element in the array
// The new array contains the output this function call results in 
var inputData = [1, 8, 22];
var selfAdd = function (data) { return data + data; }
var selfMultiply = function (data) { return data * data; }
console.log("Self Addition result of", inputData, "is", inputData.map(selfAdd));
console.log("Self Multiply result of", inputData, "is", inputData.map(selfMultiply));
```
- Filter is used to filter elements based on some criteria
```
// Array Filter: Filter is a higher-order function which creates a new array of data
// The provided function is called against each element in the array
// The new array would be a filter of input array based on which element passes the test in the provided function
var animalType = "elephant";
console.log("The vowels in", animalType, "are", animalType.split('').filter(function (element) {
	return ['a', 'e', 'i', 'o', 'u'].includes(element);
}));
```
- Reduce is used to reduce a set of elements to a single value 
```
// Array Reduce: Reduce is a higher-order function which gets a single value
// The provided function is called against each element in the array
// The provided function gets an accumulator of the previous call
// The result depends on how the provided function uses the accumulator 
var requiredSkills = { "C": 20, "C++": 30, "Agile": 10, "JavaScript": 40 };
var candidateSkills = ["C", "Agile"];
var candidateScore = candidateSkills.reduce((accumulator, currentValue) => {
	return Object.keys(requiredSkills).includes(currentValue) ?
		accumulator + requiredSkills[currentValue] : 0;
}, 5); // initial value of 5 as bonus for applying :) 
//Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=a
console.log("The candidate with skills", candidateSkills, "scored", candidateScore, "for", requiredSkills);
```

**Some and every**
- *Some* and *every* are similar as *filter*, but instead of returning an array of values, it **returns true / false**. 
- **Some** checks if at least one element in an array passes the test implemented by the provided function
- **Every** checks if all elements in an array passes the test implemented by the provided function 
```
// Array.some()
var name = 'johny';
console.log("Does the provided name -", name, "- has vowels?", name.split('').some(function (element) {
	return ['a', 'e', 'i', 'o', 'u'].includes(element.toLowerCase());
}));

// Array.every()
var candidateSkills = ['C', 'JavaScript'];
var requiredSkills = ['C', 'C++', 'JavaScript'];
console.log("Does the candidate with skills -", candidateSkills, "- has all the required skill (", requiredSkills, ")?",
	candidateSkills.every(function (currentElement) {
		return requiredSkills.includes(currentElement);
	}));
```

## Lodash, the JavaScript library
Lodash contains a lot of useful methods for functional programming.  
It can be installed using `npm install -g lodash`  
It has methods to do - map, filter, reduce, etc.


