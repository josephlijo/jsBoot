var express = require('express');
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

// Add middleware function to the GET request for /messages
app.get('/messages', (req, res) => {
  res.send(messages);
});

// Listen to incoming requests at port 4200
var server = app.listen(4200, () => {
  console.log(`Server is listening at port ${server.address().port}`);
});
