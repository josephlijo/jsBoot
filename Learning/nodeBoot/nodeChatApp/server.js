var express = require('express');
var bodyParser = require('body-parser');
var app = express();

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
  res.sendStatus(200);
});

// Listen to incoming requests at port 4200
var server = app.listen(4200, () => {
  console.log(`Server is listening at port ${server.address().port}`);
});
