## Getting started with Express.js
- Create a folder for the application and do the initialization (`npm init`) to create *package.json* file
- Install Express.js: `npm i express --save-dev`
- Create a file named `server.js` and require in `express`
- Create an express app by calling the function `var app = express()`
- Let's now start our express app to listen to incoming requests: `app.listen(4200)`
```
var express = require('express');
var app = express();

// listen to incoming requests at port 4200
app.listen(4200);
```
- Run `server.js` using `nodemon` via `nodemon .\server.js` and then navigate to `http://localhost:4200`

## Serving static file
- Create a static `index.html` file
- Update the `server.js` file to tell the app to use static file: `app.use(express.static(__dirname))`
