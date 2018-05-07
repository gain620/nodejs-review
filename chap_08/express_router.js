var express= require('express');

var app = express();

const port_num = 666;

app.get('/a',function(request, response) {
    response.send('<a href="/b">Go to b</a>');
});

app.get('/b',function(request, response) {
    response.send('<a href="/a">Go to a</a>');
});

app.listen(port_num, function(){
    console.log('server running at port number : '+port_num);
});