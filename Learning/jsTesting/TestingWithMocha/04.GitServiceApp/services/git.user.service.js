var https = require('https');

var gitUserService = (function () {

    var userInfo = function () {
        this.id = null;
        this.name = null;
        this.url = null;
        this.userName = null;
        this.publicReposCount = null;
        this.publicGistCount = null;

        this.construct = function (inputData) {
            this.id = inputData.id;
            this.name = inputData.name;
            this.url = inputData.url;
            this.userName = inputData.login;
            this.publicReposCount = inputData['public_repos'];
            this.publicGistCount = inputData['public_gists'];

            return this;
        }
    };

    var getUserInfo = function (userId) {
        return new Promise(function (resolve, reject) {

            https.request({
                host: `api.github.com`,
                path: `/users/${userId}`,
                method: 'GET', // Default and optional
                headers: {
                    'User-Agent': 'Git Service App' // http://developer.github.com/v3/#user-agent-required
                }
            }, function (response) {
                var gatheredData = '';
                // Hook to `on data`
                response.on('data', function (dataChunk) {
                    gatheredData += dataChunk;
                });

                // Hook to `end of data`
                response.on('end', function () {
                    // parse the data to formulate the `user` object
                    var user = JSON.parse(gatheredData);

                    // Resolve the promise
                    resolve(new userInfo().construct(user));
                });

                // Hook to `error`
                response.on('error', function (error) {
                    reject(error || 'Failed to get user data');
                })
            }).end();
        });
    };

    return {
        getUserInfo
    }
})();

module.exports = gitUserService;