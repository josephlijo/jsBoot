# Using Express.js framework to serve the application and handle GET/POST requests

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

## Serving static file and root URL request
- Create a static `index.html` file
- We can tell Express.js to *use middleware* using `app.use(...)`
- Update the `server.js` file to tell the app to use static file: `app.use(express.static(__dirname))`  
Here we are specifying to serve all static files since we passed in root directory.
- If we have to handle a specific request, say `GET` request for the ROOT URL, we can pass in a middleware function:
```
// Serve request at /
app.get('/', (request, response) => {
  response.send('Hello from express');
});
```

## GET request and middleware function
- `app.get` can be used to add a middleware to handle GET requests by specifying the *route* to handle and *handler*
```
app.get('/messages', (req, res) => { res.send("Hello");})
```
The above code will send *hello* when a GET request is made to */messages*
- Change the codebase to sent an array of messages (`var messages = [...]`)
- Call this endpoint from the client side and display it
```
$.get("http://localhost:4200/messages", function(data) {...});
```

## POST request and middleware function
- `POST` HTTP method (`app.post`) and a middleware can be used to make POST request
- Express doesn't have option to parse the request body; for that we need to install `body-parser`
- Require in `var bodyParser = require('body-parser');` and use it as middleware `app.use(bodyParser.json())` which lets the *body parser* know that we expect JSON
- Add the `post` method middleware:
```
// Add middleware function to take in messages - POST
app.post('/messages', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});
```
- In order for the body parser to parse URL encoded information we need to add another middleware `app.use(bodyParser.urlencoded({extended: false}))`  
