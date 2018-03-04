// Require in the needed
var fs = require('fs'); // File system

// Read files to demo how sync and async'ly the code is 'written and interpreted'

// Sync...
const responseData = fs.readdirSync('c:/');
console.log(responseData);

console.log('Sync read of directory compled');

// Async
fs.readdir('c:/', function(err, resp) {
	console.log(resp);
	console.log('Async read completed!');
});

console.log('Async read initiated on the line before');
