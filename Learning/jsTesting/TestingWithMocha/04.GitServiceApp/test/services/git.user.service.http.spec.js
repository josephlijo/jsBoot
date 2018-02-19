var chai = require('chai');
var sinon = require('sinon');

var https = require('https');
var PassThrough = require('stream').PassThrough;

chai.should();
var gitUserService = require('../../services/git.user.service');

describe('Git Service', function () {
    describe('Get Git User', function () {
        beforeEach('Setup', function () {
            // Stub just the `request` function of `https`
            this.request = sinon.stub(https, 'request');
        });
        // Test case: Get user information from Git
        it('Should return user information', function () {
            // Arrange...
            // Dummy result
            var responseJSON = {
                id: 1,
                name: 'Foo Bar',
                userName: 'ljnotes'
            };
            var fakeResponse = new PassThrough();
            fakeResponse.write(JSON.stringify(responseJSON));
            fakeResponse.end();

            // Act...
            // `request` is stubbed and we are making telling it to return 
            // JSON string 
            this.request.callsArgWith(1, fakeResponse).returns(new PassThrough());

            return gitUserService.getUserInfo('ljnotes').then(function (userData) {
                userData.should.have.property('userName');
                userData.userName.should.equal('ljnotes');
            }).catch(function (error) {
                console.log(error);
            });
        });
        afterEach('tear off and restore', function () {
            // Restore the `hijacked` https request object.
            this.request.restore();
        })
    });
});