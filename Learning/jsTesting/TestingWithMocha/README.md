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

**Installing Mocha:**

- Create a project by using `npm init` in a folder (01.FirstMochaTest) to create the `package.json`
- Install Mocha globally using `npm install -g mocha`
- Check the version - `mocha --version`
- Install locally in the new project created - `npm install --save mocha`
- Create a folder `test`, and then create a file `index.spec.js`. Check the folder - `01.FirstMochaTest\test` for details about the test. 
- Type `mocha` and it will look for the `test` directory and run the things in it.
- Add more tests. Check the `controllers` folders to see how to go with testing a `controller`. 
- To run all tests in `test` folder, use the command `mocha './test/**/*.spec.js'`
- We can further *automate* this by moving this command to the package.json file by changing the `scripts.test` to `"test": "mocha ./test/**/*.spec.js"`; Now to run the test, do `npm test`