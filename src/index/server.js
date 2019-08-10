/* server.js
 * 
 * File holds the https server from node 
 *
 *
 * */


const http = require('http');
const url = ('url');
const express = require('express');

var app = express();


console.log('Setting port to default value of 3000');
var port = 3000;

app.use(express.static('public'));

app.get('*', function(req, res) {
	console.log('sending request');
	res.status(200).sendFile(path.join(__dirname,'public'));
});

//app.get('*', function (req, res) {
//	res.status(200).sendFile(path.join(__dirname, 'public'));
//});


app.listen(port, function() {
	console.log('== Server is listening on port: ', port);
});

