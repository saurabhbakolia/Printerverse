const express = require('express');
const path = require('path');
const app = express();
var events = require('events');
var eventEmitter = new events.EventEmitter();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const port = 3000;

var json_data = require('./teams.json');

function sortTeam(team) {
    json_data.sort((a, b) => {
        if (a.Pts === b.Pts) {
            return a.NRR - b.NRR;
        } else {
            return a.Pts - b.Pts;
        }
    });
}
const dom = new JSDOM(`index.pug`);

console.log(dom.window.document.getElementsByClassName("btn"));


app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index.pug', { json_data });

})




app.listen(port, () => {
    console.log(`Success! Your application is running on port ${port}.`);
});