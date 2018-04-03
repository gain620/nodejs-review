var fs = require('fs');

try {
    var data = fs.readFileSync('errt1estfile.txt', 'utf8');
    console.log(data);
} catch(err) {
    console.log(err);
}

try {
    fs.writeFileSync('textfileWriteSync.txt', 'hello nodejs!', 'utf8');
    console.log('FILE SYNC WRITE COMPLETE!');
} catch(err) {
    console.log(err);
}

fs.readFile('testfile.txt', 'utf8', function(err, data) {
    if(err) {return console.log(err);}
        console.log(data);
});

fs.writeFile('textfileWriteAsync.txt', 'hello, nodejs!', 'utf8' , function(err, data) {
    if(err) {return console.log(err);}
        console.log('Write complete!!!');
});