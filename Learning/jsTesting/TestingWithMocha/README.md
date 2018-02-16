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

*Reference code: 01.FirstMochaTest*

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

*Reference code: 01.FirstMochaTest*

- Inorder to test async, pass in a callback to the definition like `it('Should return false if not authorized', function (done)` and call the callback function (`done()`) after assert. If we don't call the callback to the `it`, the test will run in sequence without taking care of the event loop and it will automatically succeed.  
Check `auth.controller.spec.js` for more details.
- Default timeout of mocha is *2000 ms*. To handle timeouts of more, we can change the mocha context inside the callback of `it` using `this.timeout(2500)`. If we don't change the `timeout` we will get the error: 
> Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.

Note: If we are using arrow functions, then we cannot use the `this` context inside. If we use arrow function, `this` get bound to the lexical context instead of the call path. 
So, Mocha suggests to **not use arrow functions**
- `before` and `beforeEach` lifecycle hooks are useful to be in line with `DRY` principle. 
`before` can be used for a global setup (once) and `beforeEach` can be used for a *each test setup*  - i.e. inside a `describe` for all it's `it`s 
This is useful when we have to setup something before we run the tests.

Note: If `beforeEach` is outside of all `describe`s, it is going to run it for all tests, no matter the test are in different files. So, make sure that your `beforeEach` is specific to the *description*. 

**F.I.R.S.T principles, pending tests (skip and only):**

*Reference code: 01.FirstMochaTest*

- **F.I.R.S.T** principle in testing is respected by Mocha; For example, `beforeEach` for *Independent / Isolated* if we use it correctly; *Self Validating* if we put in more descriptions when we write the code; `beforeEach` function can be provided more parameters which can be used to identify where the test are failing if it fails. 
- **Pending tests** can be included by providing `it('Should work when role is correct')` without any additional params and we can go back and write those when we are ready to. The *pending* test would be shown towards the summary section. Doing so, we can avoid using **TODO://** comments. 
- Specific test can be run using `describe.only` and `it.only` to isolate tests; this is useful to test specific tests / avoid long running tests. 
- Specific tests can be skipped using `describe.skip` and `it.skip`. The skipped tests will show up in the *pending test* section. We can also use `this.skip` inside `it` to do some environment specific test for example. 

## Using BDD style assertions, using Chai

*Reference code: 02.MochaAndChai*

**Installing Chai and using `expect`**
- Run `npm install --save chai` to use [Chai](http://chaijs.com/). 
- Why we need Chai? With `mocha` we were using this BDD style for defining our tests with `describe` and `it`, but `assert` is little clunky - we have to **expect** something; Chai brings in that - to make our test code more BDD style.
We can now change it to: 
1. `expect(something).to.be...`
2. `expect(something).to.equal...`
3. `expect(something).to.have...`

Now we are making it more closer to natural language type - which is more nicer way of BDD style. 
- Go to `./test/controllers/auth.controller.spec.js` and pull in `expect` using `var expect = require('chai').expect;`
- We can now change the code from `assert.equal(true, isAuth);` to `expect(isAuth).to.be.true;` which makes it more readable. 

**Natural language asserts using `should`**

- `expect..` is good, but, `something.should...` makes it more natural. The business cases can be read along those lines with `should`. It is more *obvious* with `should`. Translating the business case like below makes it more readable in terms of Behaviour: 
1. `something.should.be...`
2. `something.should.equal...`
3. `something.should.have...`

> *To make it work like that `should` adds itself to `Object.prototype`*
So, the *assertions* are like *authorized.should.be.true* which translates well in business [Gherkin](https://en.wikipedia.org/wiki/Cucumber_(software)#Gherkin_language) language
- To use `should`, require it using `var should = require('chai').should();`; 
*Note*:  `should()` is a function; call it to make it add itself to *Object.prototype* 
- Change `expect(isAuth).to.be.true;` to `isAuth.should.be.true;` and run `npm test` to see the results. Both works the same, but use `expect` / `should` based on how the business care reads out loud and meaningul.