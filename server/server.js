var path = require('path');
var express = require('express');
var compression = require('compression')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Router = require('./router.js');

var Server = function Server(port) {
    this.port = port;
    this.dispatcher = express();
    this.router = new Router(this.dispatcher);

    this.dispatcher.use(compression());
    this.dispatcher.use(bodyParser.json());
    this.dispatcher.use(bodyParser.urlencoded({extended: false}));
    this.dispatcher.use(cookieParser());

    this.dispatcher.engine('html', require('ejs').renderFile);
    this.dispatcher.set('view engine', 'pug');

};

Server.prototype.listen = function(callback) {
    this.dispatcher.listen(this.port, callback);
};

Server.prototype.addRout = function(requestType, path, page , callback) {
    this.router.addRout(requestType, path, page, callback)
};

Server.prototype.addSources = function(dir, tpath, fpath) {
    if (fpath) {
        this.dispatcher.use(fpath, express.static(path.join(dir, tpath)));
    } else {
        this.dispatcher.use(express.static(path.join(dir, tpath)));
    }
};

module.exports = Server;