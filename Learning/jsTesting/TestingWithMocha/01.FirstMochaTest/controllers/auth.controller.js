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

    return {
        setRoles,
        isAuthorized,
        isAuthorizedAsync
    }
}

module.exports = AuthController();