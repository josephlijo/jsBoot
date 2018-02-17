// In order for `mocha` to test this, we have to specify, `mocha './test/**/*.spec.js'

var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var should = require('chai').should();
// For using `promise`
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
// using middleware syntax add chai-as-promised to chai
chai.use(chaiAsPromised);
chai.should();

describe('Auth Controller', function () {

    // `beforeEach` lifecycle hook
    beforeEach(function () {
        authController.setRoles(['admin', 'user']);
    });

    // We can nest `describes`
    describe('Is Authorized', function () {
        it('Should return false if not authorized', function () {
            var isAuth = authController.isAuthorized('guest');
            expect(isAuth).to.be.false;
        });
        it('Should return true if authorized', function () {
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.true;
        });
    });

    describe('Is Authorized Async', function () {
        // Note: We are passing a parameter `done` to the callback of `it`
        // since we are using async. 
        // Default timeout of mocha is `2000 ms`
        it('Should return false if not authorized', function (done) {
            this.timeout(2500);
            authController.isAuthorizedAsync('guest',
                function (isAuth) {
                    assert.equal(false, isAuth);
                    done();
                });
        });
        it('Should work when role is correct');
    });

    describe('Is Authorized Promise', function () {
        it('Should return false if not authorized', function () {
            return authController.isAuthorizedPromise('guest').should.eventually.be.false;
        });
    });
});

