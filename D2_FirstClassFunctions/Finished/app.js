// function statement
function greet() {
	console.log('hi');
}
greet();
/*OUTPUT:
hi
*/

// functions are first-class
function logGreeting(fn) {
	// greet function is invoked
	fn();
}
//here greet function is passed as paramenter.. since its first-class
logGreeting(greet);
/*OUTPUT:
hi
*/

// function expression
var greetMe = function() {
	console.log('Hi Tony!');
}
greetMe();
/*OUTPUT:
Hi Tony
*/

// it's first-class
logGreeting(greetMe);
/*OUTPUT:
Hi Tony
*/

// use a function expression to create a function on the fly
logGreeting(function() {
	console.log('Hello Tony!');
});