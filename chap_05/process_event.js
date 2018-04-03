process.on('exit', function(code) {
    console.log('Good bye!~');
    //console.log(code);
});

process.on('uncaughtException', function(err) {
    console.log('Exception happened !!!');
    //console.log(typeof(err));
});

var count = 0;
var test = function() {
    count = count + 1;
    if(count > 3) return;

    // recursive
    setTimeout(test, 5000);
    error.error.error();

};

setTimeout(test, 1000);