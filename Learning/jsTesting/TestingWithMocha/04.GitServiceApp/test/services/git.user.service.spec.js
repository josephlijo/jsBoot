var chai = require('chai');
var sinon = require('sinon');

chai.should();
var gitUserService = require('../../services/git.user.service');

describe('Git Service', function () {
    describe('Get Git User', function () {
        // Test case: Get user information from Git
        it('Should return user information', function () {
            return gitUserService.getUserInfo('ljnotes').then(function (userData) {
                userData.should.have.property('userName');
                userData.userName.should.equal('ljnotes');
            }).catch(function (error) {
                console.log(error);
            });
        });
    });
});