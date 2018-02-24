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

## Lodash, the JavaScript library
Lodash contains a lot of useful methods for functional programming.  
It can be installed using `npm install -g lodash`



