function AuthController() {
    var roles = [];

    function setRoles(theRoles) {
        roles = theRoles;
    }
    function isAuthorized(roleToCheck) {
        return roles.indexOf(roleToCheck) != -1;
    }

    function isAuthorizedAsync(roleToCheck, callback) {
        setTimeout(() => {
            callback(isAuthorized(roleToCheck));
        }, 2100);
    }

    function isAuthorizedPromise(roleToCheck) {
        return new Promise(function (resolve) {
            setTimeout(() => {
                resolve(isAuthorized(roleToCheck));
            }, 0);
        });
    }

    return {
        setRoles,
        isAuthorized,
        isAuthorizedAsync,
        isAuthorizedPromise
    }
}

module.exports = AuthController();