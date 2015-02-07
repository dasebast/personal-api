var express = require('express'); //npm init --> npm install --save express
var bodyParser = require('body-parser'); //npm install --save body-parser
var app = express();
var port = 9005;
app.listen(port);

app.use(bodyParser.json());

var me = {
	name: "doug",
	location: "provo",
	hobbies: ["lifting", "coding", "yoloing"],
	occupations: ["inventor", "coder", "entrepreneur"]
};


app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/name', function(req, res) {
	res.send(me.name);
});

app.get('/location', function(req, res) {
	res.send(me.location);
});

app.get('/hobbies', function(req, res) {
	
		if(req.query.hobbies === 'true') {
			res.send(me.hobbies.sort());
		} 
		else if(req.query.hobbies === 'false') {
			res.send(me.hobbies.sort().reverse());
		}
		else if (req.query.hobbies === '') {
			res.send(me.hobbies);
		}
	
});


app.get('/occupations', function(req, res) {
		if(req.query.occupations === 'true') {
			res.send(me.occupations.sort());	
		}
		else if(req.query.occupations === 'false') {
			res.send(me.occupations.sort().reverse());
		}
		else if(req.query.occupations === '') {
			res.send(me.occupations);
		}
});

app.get('/occupations/latest', function(req, res) {
	res.send(me.occupations[me.occupations.length - 1]);
});

// app.get('/hobbies', function(req, res) {

// })


