// get greet function instance from english.js
var english = require('./english');
// get greet function instance from spanish.js
var spanish = require('./spanish');

// exposes the object with methods generated from other files
module.exports = {
	english: english,
	spanish: spanish	
};