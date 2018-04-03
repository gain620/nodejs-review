process.on('exit', function(code) {
    console.log('good bye!~');
});

//process.exit();

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('program running!');