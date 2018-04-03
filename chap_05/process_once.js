process.once('uncaughtException', function(err) {
    console.log('error exception caught!');
});

var test = function() {
    console.log("error!!!");
    
    setTimeout(test, 3000);
    error.error.error();

};

setTimeout(test, 3000);