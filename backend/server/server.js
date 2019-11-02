"use strict";

const express = require("express");
const app = new express();
const port = 8000;

let events = []
let today = ''
let months = [[], [], [], [], [], [], [], [], [], [], [], []]


function getMonth(index) {
    return months[index - 1].toString();
}

function putMonth(index) {
    months[index - 1].push(nEvent);
}

app.get('/', (req, res) => {
    let msg = '';
    try {
        req = JSON.parse(req);
        if (req.type === 'today') {
            msg = today;
        } else {
            msg = getMonth(parseInt(req));
        }
        res.status(200).send(msg);
    } catch {
        res.status(403).send('');
    }
});

app.post('/', (req, res) => {
    try {
        req = JSON.parse(req);
        nEvent = new Event(req.date, req.time, req.emotions, req.notes, req.files);
        events.push(nEvent);
        putMonth(parseInt(req.date.substring(0,2)), nEvent);
        res.status(200);
    } catch {
        res.status(403);
    }
});

app.listen(port, () => console.log(`Listening on port: ${port}`));