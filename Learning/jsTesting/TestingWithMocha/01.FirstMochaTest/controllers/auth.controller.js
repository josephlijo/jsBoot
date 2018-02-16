function AuthController() {
    function isAuthorized(roles, roleToCheck) {
        return roles.indexOf(roleToCheck) != -1;
    }

    function isAuthorizedAsync(roles, roleToCheck, callback) {
        setTimeout(() => {
            callback(isAuthorized(roles, roleToCheck));
        }, 2100);
    }

    return {
        isAuthorized,
        isAuthorizedAsync
    }
}

module.exports = AuthController();