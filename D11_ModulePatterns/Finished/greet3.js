// create obejct constructor using function synatx
function Greetr() {
	this.greeting = 'Hello world!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}

// expose the obect that is generate using obove constructor
module.exports = new Greetr();