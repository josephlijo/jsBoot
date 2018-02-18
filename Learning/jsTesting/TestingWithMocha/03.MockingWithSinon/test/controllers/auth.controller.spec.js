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

    describe('Is Authorized', function () {
        // Setup
        var user = {};
        beforeEach('Set up user', function () {
            user = {
                roles: ['user', 'admin'],
                isAuthorized: function (roleToCheck) {
                    return this.roles.indexOf(roleToCheck) >= 0;
                }
            }
            // Set the user and roles
            authController.setRoles(['admin', 'user']);

            // Spy the user object's `isAuthorized` function
            sinon.spy(user, 'isAuthorized');

            // Set the user object to the controller
            authController.setUser(user);
        });

        it('Should return true if authorized', function () {
            var isAuthorized = authController.isAuthorized('admin');
            // isAuthorized.should.be.true;
            // Since we are spying on the user.isAuthorized, we can make sure that it is called
            user.isAuthorized.calledOnce.should.be.true;
        });
    });

    describe('Get Index Page', function () {

        // Setup
        var user = {};
        var req = {};
        var res = {};
        beforeEach('Set up user', function () {
            user = {
                roles: ['user', 'admin'],
                isAuthorized: function (roleToCheck) {
                    return this.roles.indexOf(roleToCheck) >= 0;
                }
            }

            // Fake request
            req = {
                user: user
            };
            // Fake response
            res = {
                render: sinon.spy() // Dummy render via Spy
            };
        });

        it('Should render index if authorized', function () {
            // Arrange...
            // Stub user's isAuthorized function
            var isAuth = sinon.stub(user, 'isAuthorized').returns(true);

            // Act...
            authController.getIndex(req, res);

            // Assert...
            // Check if is authorized is called
            isAuth.calledOnce.should.be.true;
            // Check that the render method is called
            res.render.calledOnce.should.be.true;
            // Make sure that correct render is called. 
            res.render.firstCall.args[0].should.equal('index');
        });

        it('Should render notauthorized if not authorized', function () {
            // Arrange...
            // Stub user's isAuthorized function
            var isAuth = sinon.stub(user, 'isAuthorized').returns(false);

            // Act...
            authController.getIndex(req, res);

            // Assert...
            // Check if is authorized is called
            isAuth.calledOnce.should.be.true;
            // Check that the render method is called
            res.render.calledOnce.should.be.true;
            // Make sure that correct render is called. 
            res.render.firstCall.args[0].should.equal('notauthorized');
        });

        it('Should render error if there is error', function () {
            // Arrange...
            // Stub user's isAuthorized function
            var isAuth = sinon.stub(user, 'isAuthorized').throws();

            // Act...
            authController.getIndex(req, res);

            // Assert...
            // Check if is authorized is called
            isAuth.calledOnce.should.be.true;
            // Check that the render method is called
            res.render.calledOnce.should.be.true;
            // Make sure that correct render is called. 
            res.render.firstCall.args[0].should.equal('error');
        });
    });
});

