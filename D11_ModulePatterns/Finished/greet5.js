var greeting = 'Hello world!!!!';

function greet() {
	console.log(greeting);
}

// expose object with method in it
module.exports = {
	greet: greet
}