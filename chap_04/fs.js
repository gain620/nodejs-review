var fs = require('fs');

var text = fs.readFile('testfile.txt', 'utf8', function(err, data) {
    console.log(data);
});

var writeData = 'Hello, NodeJS!';

fs.writeFile('textfileWriteAsync.txt', writeData, 'utf8', function(err) {
    console.log('Async Write complete!');
});

fs.writeFileSync('textfileWriteSync.txt', writeData, 'utf8');
console.log('Sync Write complete!');
