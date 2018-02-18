function AuthController() {

    function getIndex(request, response) {
        response.render('index');
    }

    return {
        getIndex
    }
}

module.exports = AuthController();