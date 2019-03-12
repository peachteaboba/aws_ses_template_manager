/**
 * Created by peachteaboba on 03/08/19
 */

// ---------------------------------------------------------------
// ------------------------------------------------------- Require
// ---------------------------------------------------------------
require('dotenv-safe').config();
const express = require('express');
const port = process.env.PORT || 9000;
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
require('colors');

// ---------------------------------------------------------------
// --------------------------------------------------------- Setup
// ---------------------------------------------------------------
let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb', extended: true, parameterLimit: 1000000}));
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static("./bower_components"));

// ---------------------------------------------------------------
// -------------------------------------------------------- Routes
// ---------------------------------------------------------------
require('./server/config/routes')(app, path);

// ---------------------------------------------------------------
// -------------------------------------------------------- Listen
// ---------------------------------------------------------------
http.createServer(app).listen(port, function () {
    console.log("-----------------------------------------------------------".cyan);
    console.log("------------ It's over port: 9000!!! ( http ) -------------".cyan);
    console.log("-----------------------------------------------------------".cyan);
});