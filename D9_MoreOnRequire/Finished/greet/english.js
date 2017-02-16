// get the data from greetings file
var greetings = require('./greetings.json');

var greet = function() {
	console.log(greetings.en);
}

// expose greet function
module.exports = greet;