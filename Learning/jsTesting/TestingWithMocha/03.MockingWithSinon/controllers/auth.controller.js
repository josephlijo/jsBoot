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
        try {
            // Let's make the response render based on the role
            if (request.user.isAuthorized('admin')) {
                response.render('index');
            } else {
                response.render('notauthorized');
            }
        } catch (error) {
            response.render('error');
        }
    }

    return {
        setRoles,
        setUser,
        isAuthorized,
        getIndex
    }
}

module.exports = AuthController();