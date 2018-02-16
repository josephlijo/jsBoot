# Testing code with Mocha, Chai

Sample code to getting started with testing JavaScript code with Mocha 

## Types of testing and dealing with Node version

**Three different types of test mainly:**
- **Unit test**: Testing basic unit of code. 
- **Integration test**: Testing by integration one piece of code with depending code unit(s). To make sure that things fit together.
- **Functional test**: Testing the whole thing E2E; Also called *Blackbox testing*; Making sure that everything fits together.

**Dealing with Node versions using NVM:**
Node has very frequent release cycles and to deal with this to test against different version of node we could make use of [nvm - Node Version Manager](https://github.com/creationix/nvm). 

Note: NVM doesn't support Windows.

## Testing with Mocha

- Mocha is a test runner (like Jasmine, Jest etc.)
- Mechanism by which tests are executed

**Installing Mocha and running basic tests:**

- Create a project by using `npm init` in a folder (01.FirstMochaTest) to create the `package.json`
- Install Mocha globally using `npm install -g mocha`
- Check the version - `mocha --version`
- Install locally in the new project created - `npm install --save mocha`
- Create a folder `test`, and then create a file `index.spec.js`. Check the folder - `01.FirstMochaTest\test` for details about the test. 
- Type `mocha` and it will look for the `test` directory and run the things in it.
- Add more tests. Check the `controllers` folders to see how to go with testing a `controller`. 
- To run all tests in `test` folder, use the command `mocha './test/**/*.spec.js'`
- We can further *automate* this by moving this command to the package.json file by changing the `scripts.test` to `"test": "mocha ./test/**/*.spec.js"`; Now to run the test, do `npm test`

**Testing async, timeouts, and using hooks:**
- Inorder to test async pass in a callback to the definition like `it('Should return false if not authorized', function (done)` and call the callback function (`done()`) after assert. If we don't call the callback to the `it`, the test will run in sequence without taking care of the event loop and it automatically succeed.  
Check `auth.controller.spec.js` for more details.
- Default timeout of mocha is 2000 ms. To handle timeouts of more, we can change the mocha context inside the callback of `it` using `this.timeout(2500)`. If we don't change the `timeout` we will get the error: 
> Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves. 

Note: If we are using arrow functions, then we cannot use the `this` context inside. If we use arrow function, `this` get bound to the lexical context instead of the call path. 
So, Mocha suggests to **not use arrow functions**
