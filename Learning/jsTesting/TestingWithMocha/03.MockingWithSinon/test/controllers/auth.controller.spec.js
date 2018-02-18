// In order for `mocha` to test this, we have to specify, `mocha './test/**/*.spec.js'

var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var should = require('chai').should();
// For using `promise`
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
// Sinon
var sinon = require('sinon');
// using middleware syntax add chai-as-promised to chai
chai.use(chaiAsPromised);
chai.should();

describe('Auth Controller', function () {

    describe('Get Index Page', function () {
        it('Should render index', function () {
            var req = {}; // Fake request
            var res = {}; // Fake response
            res.render = sinon.spy(); // Spy
            authController.getIndex(req, res);
            res.render.calledOnce.should.be.true;
            // We can check the arguments 
            res.render.firstCall.args[0].should.equal('index');
        });
    });
});

