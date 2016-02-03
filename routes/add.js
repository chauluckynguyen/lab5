var data = require("../data.json");


exports.addFriend = function(req, res) { 

	var newFriend = {
			"name": req.query.name,
			"description": req.query.description,
			"imageURL": "http://lorempixel.com/400/400/people"
	};

	console.log(newFriend);

	data["friends"].push(newFriend);
	res.render('add', {allmyfriends: data["friends"]});

};

exports.view = function(req, res){
  res.render('add', {
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
};
