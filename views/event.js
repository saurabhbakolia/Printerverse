const { EventEmitter } = require("events");

var json_data = require('./teams.json');

// Initializing event emitter
var eventEmitter = new EventEmitter();

// Registering to myEvent
eventEmitter.on('myEvent', function () {
    json_data.sort((a, b) => {
        if (a.Pts === b.Pts) {
            return b.NRR - a.NRR;
        } else {
            return b.Pts - a.Pts;
        }
    });
    console.log("Clicked!");
});

function myFunc(){
    // eventEmitter.emit('myEvent');
    console.log("Clicked!");
}

