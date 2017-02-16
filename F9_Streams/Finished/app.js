var fs = require('fs');

// read file in chunks object
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

// write to file in chunks object
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// on getting chunk of data on rading file
readable.on('data', function(chunk) {
	console.log(chunk);
	// prints the data on to console log

	// write the same chunk into another file
	writable.write(chunk);
});