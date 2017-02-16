// get emitter core functionality
var Emitter = require('events');
var eventConfig = require('./config').events;

// crete emitter object with events
var emtr = new Emitter();

/*getting variables from anothe object just to avoid spelling mistakes */
emtr.on(eventConfig.GREET, function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
/*OUTPUT:
Hello!
 */

emtr.emit(eventConfig.GREET);
/*OUTPUT:
Somewhere, someone said hello.
A greeting occurred!
 */