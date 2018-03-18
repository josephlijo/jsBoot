# Using Express.js framework to serve the application and handle GET/POST requests

Use the branch - **node-express** - to follow the below

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

# Using Socket.IO library for bi-directional communication between clients and servers

Use the branch - **node-express-socket** - to follow the below

With Express.js we could make requests to the server and handle the response from server. But for applications like Chat, we might need bi-directional communication. This can be done by using Socket.IO, a web sockets library.
Without that we might want to introduce polling in the client side to check for changes at the server.  
Web sockets are also behind Push notifications feature.

## Getting started with Socket.IO
- Install it as a application package using `npm install -s socket.io`
- Now let's create a HTTP server with Node which we will then share with Express and Socket.IO
- Let's first create the http server and pass in our express app:
```
// Create the HTTP server and pass in our Express.js app
var http = require('http').Server(app);
```
- Now let's require in `socket` and pass in reference to http.  
```
// Require in Socket.IO and pass it HTTP reference
var io = require('socket.io')(http);
```
- Now that we have the Socket.IO set up in backend, we can set it up in front-end:
```
<script src="/socket.io/socket.io.js"></script>
```
- If we run the app - `nodemon ./server.js`, we can see that it has got error serving the `socket.io.js` file.
- The problem is that we cannot serve just our backend with Express.js any longer. We need to use Node.js HTTP; for that, change `app.listen` to `http.listen`
```
// Listen to incoming requests at port 4200
var server = http.listen(4200, () => {
  console.log(`Server is listening at port ${server.address().port}`);
});
```

## Initializing Socket.IO at the client
- In the client script:
```
var socket = io();
// This initialization will also try to make a connection to the socket.io server
// the page url is hosted on
```

## Updating all the clients at once
- Let's emit an event from server to all client's notifying them of a new *message*
- To emit an event (say, *message*), let's change the `POST` middleware function:
```
app.post('/messages', (req, res) => {
  messages.push(req.body);
  io.emit('message', req.body); // Emit a `message` event when a new message arrive
  res.sendStatus(200);
});
```
- In the client side, let's subscribe to that event (*message*):
```
socket.on('message', function(data){
  displayMessage(data);
});
```
- Run the app via `nodemon .\server.js` and open multiple instances to see the changes.

# Using database with Node

Use the branch - **node-express-socket-db** - to follow along.  
There are SQL and NoSQL databases. SQL, Structured Query Language, based database have the data organized in a structured format. Whereas with NoSQL, the data doesn't need to follow a specific structure to fit into the database which gives the benefits of flexibility in data format.  
With NoSQL database there is less upfront design cost but there might be hit to querying performance. 

## Using MongoDB
- MongoDB is a document-oriented database program which stores data as JSON-like document.
- It is written in C, C++, and JavaScript.  

## mLab or mongoDB Atlas
- mLab is Database-as-a-Service cloud feature to host MongoDB databases. 
- mongoDB Atlas is a software platform run by MongoDB itself. 

## Using mLab
- Create a new database. In the setup wizad, select the cloud provider of choice from AWS, GCP, or Azure. 
- Select the plan type. For *free*, select *Sandbox* and hit *Continue*
- Once the database is created, select it, and *add a user*

## Using Mongoose to connect and modelling our MongoDB database
- [Mongoosejs](http://mongoosejs.com/) can be used to connect to and model a MongoDB instance using JavaScript
- Install Mongoose - `npm i -s mongoose`
- Let's now require it in *server.js* - `var mongoose = require('mongoose')`
- Connect to the database
```
var dbUrl = ""; // copy it from mlab.com
mongoose.connect(dbUrl, function(error) {
  console.log('MongoDB connection status', error);
});
```
- To work with *mongoose*, we need to create a **model* and **schema** even though our database is NoSQL
```
var Message = mongoose.model('Message', {
  sender: String,
  text: String
});
```
- In the `POST` section, save it to the database url: 
```
app.post('/messages', (req, res) => {

  var message = new Message(req.body);
  message.save((error) => {
    if(error) {
      res.sendStatus(500);
    }
    else {
      messages.push(req.body); // This can be removed after next step
      io.emit('message', req.body); // Emit a `message` event when a new message arrive
      res.sendStatus(200);
    }
  });
});
```
- Check the mlab URL for the database to see if data is saved
- Now we can replace the *hardcoded* messages array to get data from MongoDB instance at mlab: 
```
app.get('/messages', (req, res) => {
  Message.find({}, (error, messages) => {
    res.send(messages);
  });
});
```