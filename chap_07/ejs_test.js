var ejs = require('ejs');
var jade = require('jade');
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (requset, response) {
    // ejs_page.js
    fs.readFile('ejs_page.ejs', 'utf8', function(err, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(ejs.render(data, {
            name : 'Gain Chang',
            description : 'Hello NodeJS & EJS!'
        }));
    });
});

server.listen(666, function() {
    console.log('server is running on port 666');
});