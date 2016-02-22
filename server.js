var connect = require('connect');
var serveStatic = require('serve-static');
var dir = 'public/';
var port = 8888;
connect().use(serveStatic(dir)).listen(port);
