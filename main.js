let users = require('./users');
let stats = require('./users_statistic');
let createDataForGraphBuild = require('./utils/graph');
let createStatsArray = require('./utils/createStatsArray');
let parser = require('./utils/parser');

const express = require('express'),
    app = express(),
    http = require('http').Server(app).listen(8080),
    fs = require('fs'),
    cors = require('cors');
app.use(cors());
console.log('Server started!');

let statsArray = parser(createStatsArray(users, stats));

app.get('/stats/:page', function (req, res, next) {
    res.end(JSON.stringify(statsArray[req.params.page]));
});


app.get('/user/:id', function (req, res, next) {
    res.end(JSON.stringify(createDataForGraphBuild(req.params.id, stats)));
});







