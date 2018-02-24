# Functional programming in JavaScript

## What is functional programming?  (FP)
Functional programming is the concept of building software by following core concepts:  
- **functions** are the first-class citizens
- **data** and **function which operates on it** are kept separate
- Avoid **state change** and **mutable data**

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

**`functions` are first-class citizens**

## Lodash, the JavaScript library
Lodash contains a lot of useful methods for functional programming.  
It can be installed using `npm install -g lodash`



