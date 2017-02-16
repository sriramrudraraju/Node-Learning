var fs = require('fs');

// synchronus file reading.. 
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

// asynchronus file reading
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	console.log(data);
});

console.log('Done!');

/*OUTPUT:
Hello world!
Done!
Hello world!
 */