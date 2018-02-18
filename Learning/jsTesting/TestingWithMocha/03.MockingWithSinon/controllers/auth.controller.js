function AuthController() {

    var roles;
    var user;

    function setRoles(rolesInput) {
        roles = rolesInput;
        if (user) {
            user.roles = roles;
        }
    }

    function setUser(userInput) {
        user = userInput;
    }

    function isAuthorized(roleToCheck) {
        if (user) {
            return user.isAuthorized(roleToCheck);
        }
    }

    function getIndex(request, response) {
        response.render('index');
    }

    return {
        setRoles,
        setUser,
        isAuthorized,
        getIndex
    }
}

module.exports = AuthController();