const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
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
});

// function sortTeam(team) {
//     json_data.sort((a, b) => {
//         if (a.Pts === b.Pts) {
//             return b.NRR - a.NRR;
//         } else {
//             return b.Pts - a.Pts;
//         }
//     });
// }

// sortTeam();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));


const firstEmitter = new EventEmitter();
app.get('/', (req, res) => {
    firstEmitter.emit("My first event");
    res.render('index.pug', { json_data });

})




app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
});