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
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

console.log('Setting port to default value of 3000');
var port = 3000;

app.use('/views', express.static('views'));
app.use('/public',express.static('public'));

app.get('/', function(req, res) {
	console.log('rendering login');
	res.sendFile(path.join(__dirname + '/views/login.html'));
});

app.post('/login', function(req, res) {
	console.log('Login User');
	if(req.body.checkLoggedParent) {
		res.sendFile(path.join(__dirname + '/views/parentSettings.html'));
	}
	else{
		res.sendFile(path.join(__dirname + '/views/home.html'));
	}
});

app.get('/childRegistration', function(req, res) {
	console.log('rendering child registration');
	res.sendFile(path.join(__dirname + '/views/childRegistration.html'));
});

app.get('/childFilter', function(req, res) {
	console.log('rendering child filter settings');
	res.sendFile(path.join(__dirname + '/views/childFilter.html'));
});

app.get('/parentSettings', function(req, res) {
	console.log('rendering parent settings');
	res.sendFile(path.join(__dirname + '/views/parentSettings.html'));
});

app.get('/home', function(req, res) {
	console.log('rendering home');
	res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get('/', function(req, res) {
	console.log('sending request');
	res.status(200).sendFile(path.join(__dirname,'views'));
});

app.listen(port, function() {
	console.log('== Server is listening on port: ', port);
});
