# What is Node.js?
- Helps us build backend applications using JavaScript

# Why Node.js is using JavaScript?
- We can write both front-end and back-end logic using JavaScript by using Node.js
- It helps us avoid repetitive models and mappers

# Core concepts

## Modules
- Is a JavaScript file which is used to group similar and re-usable functionality
- Module exposes of this re-usable functionality via `exporting`
- The consumer modules can use it by `importing` them
- Only things that are `exported` are accessible outside of that module which is the primary difference between a module and a JavaScript file
- We consume modules using `require`; for example, `var path = require('path');` and now `path` module is available in the file that we have *required*.
- When we issue a `require`, node do lookups in several locations (in the following order of priority):
  - **Core Modules** which comes as part of Node installation
  - **node_modules** folder inside of the application (it will check one level up from where we are for this folder)
  - **NODE_PATH** environment variable to and check for globally installed packages
  - Historical directories - **$HOME/.node_modules** and **$HOME/.node_libraries**
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
