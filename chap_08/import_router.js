var express = require('express');

var app = express();

app.use('/index', require('./router_id').router);

app.all('*', function(req, res){
    res.status(404).send('<h1>Error 404, page not found!!!</h1>');
});

app.listen(666, function() {
    console.log('server running at porn number 666');
});