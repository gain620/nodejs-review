var onCaughtException = function(err) {
    console.log('just this one time!');

    process.removeListener('uncaughtException', onCaughtException);
};

process.on('uncaughtException', onCaughtException);

var test = function() {
    console.log("error!!!");
    
    setTimeout(test, 3000);
    error.error.error();

};

setTimeout(test, 3000);