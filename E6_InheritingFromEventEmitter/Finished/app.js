// from events library we get emit and on methods
var EventEmitter = require('events');
// from util library we get inherits method
var util = require('util');

// sample Geetr constructor
function Greetr() {
	this.greeting = 'Hello world!';
}

// Greetr inherits events' methods from below command
util.inherits(Greetr, EventEmitter);

// adding new method to Greetr using prototype
Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	// since it inherits events methods.. it can call emit method
	this.emit('greet', data);
}

//generate object from grGreetr constructor
var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');
/*OUTPUT:
Hello world!: Tony
Someone greeted!: Tony
 */