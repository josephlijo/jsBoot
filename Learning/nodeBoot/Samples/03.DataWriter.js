var fs = require('fs');
var data = {
  name: 'James Sander',
  age: 20,
  profession: 'Advocate'
};

fs.writeFile('personData.json', JSON.stringify(data), function(error) {
  console.log(error);
});
