var express = require('express');
var app = express();

// Serve static file
app.use(express.static(__dirname));
// Serve request at /
app.get('/', (request, response) => {
  response.send('Hello from express');
});
// Listen to incoming requests at port 4200
var server = app.listen(4200, () => {
  console.log(`Server is listening at port ${server.address().port}`);
});
