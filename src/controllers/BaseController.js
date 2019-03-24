function BaseController() {
    this.store = {};
}

BaseController.prototype.save = function (request, response) {
    this.store.save(request.body, handleResponse(response));
};

BaseController.prototype.get = function (request, response) {
    this.store.get(request.query, handleResponse(response));
};

module.exports = BaseController;

function handleResponse(response) {
    return (error, result) => {
        if (error) {
            response.status(500);
            return response.send(error);
        }
        response.send(result);
    }
}