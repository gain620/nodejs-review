var http = require('http');

var server = http.createServer();

server.on('request', function(code) {
    console.log('Req on');
});

server.on('connection', function(code){
    console.log('Connection on');
});

server.on('close', function(code){
    console.log('Close on');
});

server.listen(45454, function(){
    console.log('Server listening on 45454');
});

setTimeout(function() {
    console.log('Server closing!');
    server.close();
}, 10000);