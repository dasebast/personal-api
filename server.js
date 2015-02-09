var express = require('express'); //npm init --> npm install --save express
var bodyParser = require('body-parser'); //npm install --save body-parser
var app = express();
var port = 9006;
app.listen(port);

app.use(bodyParser.json());

var me = {
	name: "Doug",
	location: "Provo",
	hobbies: ["lifting", "coding", "yoloing"],
	occupations: ["inventing", "coding", "entrepreneurship"],
	mentions: ["twitter", "facebook", "reddit"],
	references: ["guy1", "guy2", "guy3"],
	skills: [
				{
					id: 1,
					name: 'JavaScript',
					experience: 'Intermediate'
				},
				{
					id: 2,
					name: 'AngularJS',
					experience: 'Beginner'
				},
				{
					id: 3,
					name: 'NodeJS',
					experience: 'Beginner'

				},
				{
					id: 4,
					name: 'Weightlifting',
					experience: 'Advanced'
				}
			]
};
	

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/', function(req, res) {
	res.send(me);
});

app.get('/name', function(req, res) {
	res.send(me.name);
});

app.get('/location', function(req, res) {
	res.send(me.location);
});

app.get('/hobbies', function(req, res) {
		
		if(req.query.abc === 'asc') {
			res.send(me.hobbies.sort());
		} 
		else if(req.query.abc === 'desc') {
			res.send(me.hobbies.sort().reverse());
		}
		else {
			res.send(me.hobbies);
		}
	
});

app.get('/occupations', function(req, res) {
		if(req.query.abc === 'asc') {
			res.send(me.occupations.sort());	
		}
		else if(req.query.abc === 'desc') {
			res.send(me.occupations.sort().reverse());
		}
		else {
			res.send(me.occupations);
		}
});

app.get('/occupations/latest', function(req, res) {
	res.send(me.occupations[me.occupations.length - 1]);
});

app.get('/mentions', function(req, res) {
	res.send(me.mentions);
});

app.post('/mentions', function(req, res) {
	me.mentions.push(req.body.text);
	res.send(req.body);
});

app.get('/references', function(req, res) {
	res.send(me.references);
});

app.post('/references', function(req, res) {
	me.references.push(req.body.text);
	res.send(me.references);
});

app.get('/skills', function(req, res) {
	var skillDiff = [];
	if (req.query.exp) {
		for (var i = 0; i < me.skills.length; i++) {
			if (req.query.exp === 'beginner' && me.skills[i].experience === 'Beginner') {
				skillDiff.push(me.skills[i]);
			}
			else if (req.query.exp === 'intermediate' && me.skills[i].experience === 'Intermediate') {
				skillDiff.push(me.skills[i]);
			}
			else if (req.query.exp === 'advanced' && me.skills[i].experience === 'Advanced') {
				skillDiff.push(me.skills[i]);
			}
			else if (req.query.exp !== 'beginner' && req.query.exp !== 'intermediate' && req.query.exp !== 'advanced') {
				res.send("found nothing");
			}
		}
		res.send(skillDiff);
	}
	else if (!req.query.exp) {
		res.send(me.skills);
	}

	// else if (!req.query.exp) {
	// 	for (var i  = 0; i < me.skills.length; i++) {
	// 		res.send(me.skills[i].name);
	// 	}
	// }
});
