var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// Create the HTTP server and pass in our Express.js app
var http = require('http').Server(app);
// Require in Socket.IO and pass it HTTP reference
var io = require('socket.io')(http);
// Mongoose for MongoDB
var mongoose = require('mongoose');

// Database URL
var dbUrl = "mongodb://user:password@instance.mlab.com:12168/nodechatapp";

// Database model
var Message = mongoose.model('Message', {
  sender: String,
  text: String
});

// Serve static file
app.use(express.static(__dirname));

// Parse JSON and URL encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Add middleware function to the GET request for /messages
app.get('/messages', (req, res) => {
  Message.find({}, (error, messages) => {
    res.send(messages);
  });
});

// Add middleware function to take in messages - POST
app.post('/messages', (req, res) => {

  var message = new Message(req.body);
  message.save((error) => {
    if(error) {
      res.sendStatus(500);
    }
    else {
      io.emit('message', req.body); // Emit a `message` event when a new message arrive
      res.sendStatus(200);
    }
  });
});

// Listen to the `connection` event
io.on('connection', (socket) => {
  console.log('a connection has been established');
});

// Connect to the database
mongoose.connect(dbUrl, function(error) {
  console.log('MongoDB connection status', error);
});

// Listen to incoming requests at port 4200
var server = http.listen(4200, () => {
  console.log(`Server is listening at port ${server.address().port}`);
});
