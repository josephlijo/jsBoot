# Webpack
- Webpack is a **build tool** and **module bundler**

# Why do we need a build system like webpack for JavaScript? 
JavaScript doesn't need to be compiled, it is interpreted. So, functional programming system like JavaScript doesn't need to be build first right? There are exceptions to our ever changing JavaScript world.  

Now a days, web applications began to grow bigger and it started to struggle with problems related to *performance and security*. 
For example, 

- Multiple Web requests - JavaScript files, images, css files, external libraries, even JavaScript files of the same app (file order dependencies)  
    - Solution? **Bundling**, **CSS Sprites**
- Code Size  
    - Solution? **Minification**, **Uglifying**
- File order dependencies. For example, main.js and then load utils.js and then model.js  
    - Solution? **Using frameworks like Angular which takes care of the dependencies itself intelligently**
- Transpilation. For example, ES6 features to ES5 (so that it works in all browsers), *.ts to *.js (TypeScript to JavaScript), JSX to JavaScript    
    - Solution? **JavaScript pre-processor like Babel**
- Linting - Static code analysis to make sure the code aligns with the predefined standards  
    - Solution? **tslint**, **JSHint**, **JSLint**, and **all other linters**  
  
**Webpack helps us solving all these and makes it a perfect build tool**
- Bundling
- Minification and uglifying
- Transpilation 
- Linting 
- Working with module system by taking care of dependencies

**How webpack does this and what are prerequisite?**
- Webpack uses special components called **loaders** for this. 
- Webpack works with **npm**, not **bower** - which means that we pack and load all our client-side assets using **npm**
- We need to use a **Module System**

## What are Module System?
- In our early days, we used to split our JavaScript files to separate concerns - here we used to think about `namespaces` and assumed that it worked correct if loaded in correct order - starting with `window` then `window.App` (say in App.js), and then `window.App.Utils` (in App.Utils.js) - which meant that we should load these file in specific order - first `App.js`, then `App.Utils.js` etc..  
With project becoming big - it became a nightmare to manage this.  
- Here what we tried to achieve was `independent modules` which don't conflict the global `window` object but precaution was needed to load them in right order. `Scope` is important and **here scope can be maintained without conflicts only if file orders were treated correctly**. 
- Solutions? [Prototype pattern](https://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-the-prototype-pattern) to make use of `JavaScript prototype inheritance` OR [Revealing Module Pattern](https://weblogs.asp.net/dwahlin/techniques-strategies-and-patterns-for-structuring-javascript-code-revealing-module-pattern) given a correct `scope` to reveal the module is provided. Again issues like - **injecting and hijacking** and **scope issues** respectively with these patterns. 
- Moving ahead, the need of **Module System**
- Till ES2015 (ES6), we had no module system. Btw, what is Module system? 
- **Module System** allows us split code into **modules** where each module takes care of a *specific functionality* - A module can *require in* or *include* or *use* dependent modules using ES6 Modules (and libraries like Common.js prior to that) and can *export* the module to be used by other modules. Using module system, we can bring in abstraction, encapsulation and expose of only the ones we need to. 

**CommonJS (ServerJS before)**

- **CommonJS (ServerJS before)** is one of the first library which allowed us to do this modularization. We *include or require in the needed dependent module* using `require` function and *expose the ones should be* using `module.exports` object. 
```
// myapp.js
var myApp = function() {
    return {
        name: 'MyApp',
        desc: ''
    }
}; 
module.exports = myApp; // Now, if needed, other module can include this using `require('./myapp')`
```
and use it via
```
var myApp = require('./myapp');
console.log(myApp().name);
```
- [Under the hood in CommonJS](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/) our code is wrapped by a `function` with `exports, require, module` parameters which lets us use them like *global-like variables* 
```
(function (exports, require, module, __filename, __dirname) {
  var myApp = function() {
    return {
        name: 'MyApp',
        desc: ''
    }
  }; 

  module.exports = myApp;
})
```
**ES6 Module System**
- ES6 has [`export`](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export) and [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) feature

# Now, What is **Webpack** again?

- Webpack is a **build tool** and **module bundler**
- Webpack can be thought of as **specialized task runner** (for example, Grunt, and Gulp).
- Webpack is **optimized to do one special task good which is processing input files into output files**
- Webpack **helps us follow a modular approach to development** 
- In a *Module system* we write a module and *require in* all the dependent modules and use them in that file. 
- Webpack helps modular development approach by taking module dependencies and generating a dependency graph. 
- Webpack takes modules and generates static assets representing those modules. 
- The bundler can be used from the **command line (CLI)** OR **can be configured using a config file named webpack.config.js**
 
# Getting started

- Read further [here](./webpack3-getting-started) on getting started with webpack 3