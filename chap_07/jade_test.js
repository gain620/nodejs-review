var ejs = require('ejs');
var jade = require('jade');
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (requset, response) {
    // ejs_page.js
    fs.readFile('jade_page.jade', 'utf8', function(err, data) {
        var fn = jade.compile(data);
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(fn({
            name : 'Gain Chang',
            description : 'Hello NodeJS with Jade!'
        }));
    });
});

server.listen(666, function() {
    console.log('server is running on port 666');
});