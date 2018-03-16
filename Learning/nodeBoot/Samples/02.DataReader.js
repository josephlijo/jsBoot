var fs = require('fs');

fs.readFile('./customerData.json', function(error, response){
  var customerObj = JSON.parse(response);
  customerObj.customers.forEach((element, index, array) => {
    console.log(`The employee "${element.name}" is handling "${element.workGroup}" role`);
  });
});
