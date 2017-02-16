// get custom emitter code.. NOT IN BUILT EMITTER
var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
	console.log('A greeting occurred!');
});

console.log('Hello!');
/*OUTPUT:
Hello!
 */

emtr.emit('greet');
/*OUTPUT:
Somewhere, someone said hello.
A greeting occurred!
 */