var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// Create the HTTP server and pass in our Express.js app
var http = require('http').Server(app);
// Require in Socket.IO and pass it HTTP reference
var io = require('socket.io')(http);

var messages = [
  {
    sender: 'John',
    text: 'Hello from John'
  }, {
    sender: 'Martin',
    text: 'Hi there John!'
  } ];

// Serve static file
app.use(express.static(__dirname));

// Parse JSON and URL encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Add middleware function to the GET request for /messages
app.get('/messages', (req, res) => {
  res.send(messages);
});

// Add middleware function to take in messages - POST
app.post('/messages', (req, res) => {
  messages.push(req.body);
  io.emit('message', req.body); // Emit a `message` event when a new message arrive
  res.sendStatus(200);
});

// Listen to the `connection` event
io.on('connection', (socket) => {
  console.log('a connection has been established');
});

// Listen to incoming requests at port 4200
var server = http.listen(4200, () => {
  console.log(`Server is listening at port ${server.address().port}`);
});
