# What is Node.js?
- Helps us build backend applications using JavaScript

## Benefits of using Node.js?
- We can write both front-end and back-end logic using JavaScript by using Node.js
- It helps us avoid repetitive models and mappers

## Modules
- Is a JavaScript file which is used to group similar and re-usable functionality
- Module exposes this re-usable functionality via `exporting`
- The consumer modules can use it by `importing` them
- Only things that are `exported` are accessible outside of that module which is the primary difference between a module and a JavaScript file
- We consume modules using `require`; for example, `var path = require('path');` and now `path` module is available in the file that we have *required*.
- When we issue a `require`, node do lookups in several locations (in the following order of priority):
  - **Core Modules** which comes as part of Node installation
  - **node_modules** folder inside of the application (it will check one level up from where we are for this folder)
  - **NODE_PATH** environment variable to and check for globally installed packages
  - Historical directories - **$HOME/.node_modules** and **$HOME/.node_libraries**
- Before executing the code in a module, it wraps the code inside a function which looks like below:
```
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```
Doing so it protects the scope of the variables inside that module file.  
This is how we also get the *functions and objects* like **exports**, **require**, **module**, **__filename**, and **__dirname**

- **How do we define interface for our modules?**
  - `module.exports` is used to define our interface
  - `module` is defined via closure during the compile process
  - `module.exports` is what is assigned as a result of the `require()` call
  - If we do a `console.log(module)` in a JavaScript file (say, test.js) and run it via `node test.js`, you can see that `module` is an object which holds the following details.
  ```
  Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'C:\\user_name\\temp\\test.js',
  loaded: false,
  children: [],
  paths:
   [ 'C:\\user_name\\temp\\node_modules',
     'C:\\user_name\\node_modules',
     'C:\\node_modules' ] }
  ```
  - As we can see, `module`, `module.exports`, `module.id`, etc. are available to be used from inside the JavaScript file.
- **How does `require` work?**
  - if we do a `console.log(require)` inside a JavaScript file (say, test.js) we can see that it is a function:
  ```
  { [Function: require]
  resolve: { [Function: resolve] paths: [Function: paths] },
  main:
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: 'C:\\user_name\\temp\\test.js',
     loaded: false,
     children: [],
     paths:
      [ 'C:\\user_name\\temp\\node_modules',
        'C:\\user_name\\node_modules',
        'C:\\node_modules' ] },
  extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },
  cache:
   { ... }
  ```
  - When we call `require()`, it wraps an internal method in `module` called `module._load`
  - What `_load()` does is:
    - It check `cache` for a copy
    - If not in `cache`, a new module is created
    - Saves it to the `cache`
    - Call `_load()` with the given file name
    - **Compile** the file contents
    - If there is an error, delete from cache
    - return `module.exports`
- **How does the compile work?**
  - It creates a standalone `require` function that calls `module.require` function
  - Attaches other helper methods to `require`
  - Wraps the contents of the file inside the function:
  ```
  (function(exports, require, module, __filename, __dirname) {
  // Module code actually lives in here
  });
  ```
  - Calls this function, where `require` to this function is the one created in step 1.

### Working with file system :: Reading and writing data
- We need to bring in the file system node module (fs)
- Node handles the operation asynchronously, so we pass in the *data file* along with *callback*. Reference [code](./Samples/02.DataReader.js)
```
var fs = require('fs');
fs.readFile('./customerData.json', function(error, response){... }
```
- We could install the `nodemon` module which will listen to file changes and run the code using `nodemon .\02.DataReader.js`
- To write data, we use the `fs` method: `fs.writeFile`. See the reference [code](./Samples/02.DataWriter.js)

## Node.js Frameworks
Some of the popular Node.js frameworks are:
- [Express](https://expressjs.com/)  
Express JS allows us to create a Web API.
Express JS doesn't have bi-directional flow. Express allows the client to sent request to the server, but, the server cannot sent request to the client.
[Socket.io](https://socket.io/) library can be used for bi-directional data flow. We can push notifications from the server to the client when an event happens.
- [Sails](https://sailsjs.com/), an MVC framework for Node which also has ORM support
- [Koa](http://koajs.com/)

### References
- [Mastering Node.js modules and packages](https://mva.microsoft.com/en-US/training-courses/Mastering-Node-js-Modules-and-Packages-with-Visual-Studio-Code-13921?l=8UwHgkzbB_6201937557#)
