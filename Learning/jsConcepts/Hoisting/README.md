# Hoising in JavaScript

## Understanding the variables, functions, and class

- Variable declaration: `var a;`
- Variable definition: `a = 22;`
- Function declaration: `function greet() { console.log("Hello, human!"); }`
- Function expression: `var greet = function() { console.log("Hello, world!"); }`
- Class declaration (statement): `class Greeter { constructor() {} greet() { console.log("Hello, world!"); } }` - creates a new class with a given name using prototype-based inheritance 
- Class expressions - named: `var Greeter = class Greeter { ... }` 
- Class expressions - unnamed: `var Greeter = class { ... }` 

## Hoisting 
- Hoisting means "lifting up" some statements towards the top
- Variable declarations are hoisted, not definitions. For example
```
console.log(greet);
var greet = "Hello";
```
becomes
```
var greet; // undefined 
console.log(greet); // Outputs `undefined`
greet = "Hello";
```
- Function declarations are hoisted completely
```
greet();
function greet() { console.log("Hello, world!"); }
```
becomes
```
function greet() { console.log("Hello, world!"); }
greet(); // Outputs `Hello, world!`
```
- Function expressions are not hoisted, only the `variable` gets hoisted
```
greet();
var greet = function() { console.log("Hello, world!"); }
```
becomes
```
var greet; // undefined
greet(); // TypeError: greet is not a function
greet = function() { console.log("Hello, world!"); }
```

## Hoisting in Classes
TODO:// 