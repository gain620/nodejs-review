var mysql = require('mysql');

var client = mysql.createConnection({
    user : 'root',
    password : '',
    database : 'Company'
});

//client.query('USE Company');
client.query('SELECT * FROM products', function(err, res, fields) {
    if(err)
    {
        console.log('there was an error on query');
    }
    else
    {
        console.log(res);
    }
});

client.end();