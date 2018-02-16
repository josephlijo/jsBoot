function AuthController() {
    function isAuthorized(roles, roleToCheck) {
        return roles.indexOf(roleToCheck) != -1;
    }

    return {
        isAuthorized
    }
}

module.exports = AuthController();