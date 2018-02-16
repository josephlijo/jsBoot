// How to: run `mocha` in the project folder.
// Mocha will look in the `test` directory and execute things in it.

// We can use `assert` for assertion now
var assert = require('assert');

// We are using BDD style test definition using Mocha
describe('My First Mocha Test', function() { // We have described the test
    // Now we have to give it a list of things that "it does"
    it('Should throw some errors', function() {
        // `assert` throws error when it is `false`
        // so a `try-catch` would supress it == which means we shouldn't use `try-catch`
        // it also means that if we do `throw({})`, the test will fail as well
        assert.equal(1, 2);
    });
    it('Should work as inputs are equal', function(){
        assert.equal(1, 1);
    });
});