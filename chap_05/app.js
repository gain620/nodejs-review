var events = require('./events');

events.timer.on('tick', function(code) {
    console.log('Run the tick event!');
});