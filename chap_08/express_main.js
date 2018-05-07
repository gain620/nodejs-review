var express= require('express');

var app = express();

const port_num = 666;

app.use(function(request, response) {
    //response.writeHead(200, {'Content-Type':'text/html'});
    //response.end('<h1>Hello express!</h1>');
    //response.redirect('naver.com');

    var agent = request.header('User-Agent');
    //console.log(agent);

    if(agent.toLowerCase().match(/chrome/)) {
        response.send('<h1>Hello chrome!</h1>');
        console.log(agent.toLowerCase());
        
    }else if(agent.toLowerCase().match(/explorer/)) {
        response.send('<h1>Hello explorer!</h1>');
    }else {
        response.send('<h1>Hello express!</h1>');
        console.log(agent.toLowerCase());
    }

    /*
    var output = [];
    for(var i = 0; i < 3; i++) {
        output.push({
            count : i,
            name : 'name - ' + i
        });
    }
    */
    //response.cookie('test',100);
    //response.status(200).send(request.headers);
});

app.listen(port_num, function(){
    console.log('server running at port number : '+port_num);
});