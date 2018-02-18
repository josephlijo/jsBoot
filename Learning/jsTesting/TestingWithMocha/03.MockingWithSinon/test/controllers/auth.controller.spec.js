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

    describe('Get Index Page', function () {
        it('Should render index', function () {
            authController.getIndex(null, null);
        });
    });
});

