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

> *To make it work like that, `should` adds itself to `Object.prototype`*; As a result of this, even if we `require` *should* in just one test file, it would be accessible everywhere since it is already included in `Object.prototype`

So, the *assertions* are like *authorized.should.be.true* which translates well in business [Gherkin](https://en.wikipedia.org/wiki/Cucumber_(software)#Gherkin_language) language
- To use `should`, require it using `var should = require('chai').should();`

> **Note**: `should()` is a function; call it to make it add itself to *Object.prototype*;

> **Note**: By doing so, we make `should` available in all `objects` no matter which file they live.

- Change `expect(isAuth).to.be.true;` to `isAuth.should.be.true;` and run `npm test` (or `mocha './test/**/*.spec.js'`) to see the results. Both works the same, but, use `expect` / `should` based on how the business case reads out loud and meaningful.

**Testing Objects**

*Reference code: 02.MochaAndChai\test\object.spec.js*

- We can check objects (for example, *obj*) using `obj.should.equal` for reference check and `obj.should.deep.equal` for object value check 
- Properties and values of an object (for example, *obj*) can also be checked using `obj.should.have.property('property-name')` and `obj.should.have.property('property-name').equal('property-value')`
- More details on [Chai BDD](http://chaijs.com/api/bdd/)

**Testing `null`s**

- `typeof null` is an `object` in JavaScript, but we cannot deal with `null` as a real object; i.e. we cannot add properties and methods to it and so `should` will not work with `null`s. 
In essence we cannot use `var aNull = null; aNull.should...` 
- To make it work, we could use `should` object as `should.not.exist(aNull);` - Here it might make sense to use `expect` probably; it is the choice of the application and the stake holders of it. 
> **Note**: Here we would need to *require* `should` in the file by using `var should = require('chai').should();` since we are no more working with *Object.prototype*, but using *should* object. 

**Testing Promises**

- Install `chai-as-promised` using the command `npm install --save chai-as-promised` 
- Create a function which returns [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), for example, *isAuthorizedPromise*
Check *02.MochaAndChai\controllers\auth.controller.js* for more details.
- We need to *return* `should.eventually.be...` checks for Mocha to test promise. 
Before that, we need to require `var chai = require('chai')` and `var chaiAsPromised = require('chai-as-promised')` and then extend `chai` to be used with `chai-as-extended` via `chai.use(chaiAsPromised)`. 
We need to also append `should` via `chai.should()`

## Test Doubles - Dummy, Fake, Stubs, Spies (Spys), Mocks

**References:**
- [Mocks aren't Stubs](https://martinfowler.com/articles/mocksArentStubs.html) by Martin Fowler
- [Testing JavaScript for Node.js with Mocha](https://app.pluralsight.com/library/courses/mocha-javascript-testing-nodejs/table-of-contents) by Jonathan Mills
- [Test Doubles](http://xunitpatterns.com/Test%20Double.html) by Gerard Meszaros
- [Test Doubles: Dummy, Fake, Stubs, Spies, Mocks](https://martinfowler.com/bliki/TestDouble.html) by Martin Fowler
- [Test Doubles — Fakes, Mocks and Stubs](https://blog.pragmatists.com/test-doubles-fakes-mocks-and-stubs-1a7491dfa3da) by Michal Lipski

**Dummy, Fake, Stubs, Spies, Mocks**

The system that we are testing, the *System Under Test (SUT)* might have dependencies and moving parts, and in order to test our system, we might need to include *test doubles* which can be: 
- `Dummy`: For the sake of *using* it. 
For example, *filling in the function arguments* to use the function which otherwise we couldn't. 
- `Fake`: Faking a real *something*. Has implementation, but not real one, we are faking it. 
For example, real database with in-memory *database*. 
- `Stubs`: Making sure that *this* does *that*. *that* will be not be the same thing as in real environment, but it is *the* thing which is expected to *proceed* with next. 
For example, *given the current credits of a user*, we need to *make sure user is eligible or not for more*. We cannot get the *real credit* so we pass in *an option* to continue further with *what we need to do - i.e. to do credit check*. 
- `Spies`: *Intelligent Stubs*; Spies are Stubs, but *intelligently stubbed* to *capture and record* more details which can be later used as an *observation point (post test analysis)*. 
For example, *stubbing the credit check system*, but *recording how many times the credit check system was called* in the process of *credit check*, which can be later used to understand the *load the credit check receives* from our system.
- `Mocks`: Mimic the behaviour of a dependent object of our SUT *in all ways*. We *don't stub it to give canned answers, but we program it in a way to expect all we could* and then test against it - *this pre-programming is to cover all cases we should expect*. 
For example, continuing with the credit check example, we don't give canned answers, say, 10 or -10, but all cases we need to take care of - *negative, positive, exception, interruption*, anything - which our system is dealing with. 

**Mocking using [`Sinon`](http://sinonjs.org/)**

*Reference code: 03.MockingWithSinon*

- Install Sinon - `npm install --save sinon`
- 