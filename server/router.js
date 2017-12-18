var Router = function(app) {
    this.app = app;
};

Router.prototype.addRout = function(requestType, path, page, callback) {
    if (requestType === 'GET') {
        this.app.get(path, callback || function(req, res) {
                res.render(page);
            })
    } else {
        this.app.post(path, callback || function(req, res) {
                res.render(page);
            })
    }

};

module.exports = Router;