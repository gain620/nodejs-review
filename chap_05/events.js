var event = require('events');

exports.timer = new event.EventEmitter();

setInterval(function() {
    exports.timer.emit('tick');
}, 1000);