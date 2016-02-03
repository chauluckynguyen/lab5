// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('index', {allmyfriends:data["friends"]});
};

/*
exports.view = function(req, res){
  res.render('index', {
  	'allmyfriends':[
	{'name': 'Grace Hopper',
     'image': 'http://lorempixel.com/500/500/people',
     'description': 'my friend is named A'
 	},
 	{'name': 'Doug Engelbart',
     'image': 'http://lorempixel.com/500/500/people',
     'description': 'myfriend is named B'
 	}
 	]
    });
};*/