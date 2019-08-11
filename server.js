/* server.js
 * 
 * File holds the https server from node 
 *
 *
 * */


const http = require('http');
const url = require('url');
const path = require('path');
const express = require('express');

var app = express();


console.log('Setting port to default value of 3000');
var port = 3000;

app.use('/views', express.static('views'));
app.use('/public',express.static('public'));

app.get('/', function(req, res) {
	console.log('rendering home');
	res.sendFile(path.join(__dirname + '/views/login.html'));
});

app.get('/', function(req, res) {
	console.log('sending request');
	res.status(200).sendFile(path.join(__dirname,'views'));
});

app.listen(port, function() {
	console.log('== Server is listening on port: ', port);
});

