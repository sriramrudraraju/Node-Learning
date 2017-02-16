// object properties and methods
var obj = {
	greet: 'Hello'
}

console.log(obj.greet);
/*OUTPUT:
Hello
 */

console.log(obj['greet']);
/*OUTPUT:
Hello
 */

var prop = 'greet';
console.log(obj[prop]);
/*OUTPUT:
Hello
 */

// functions and arrays
var arr = [];

arr.push(function() {
	console.log('Hello world 1');
});
arr.push(function() {
	console.log('Hello world 2');
});
arr.push(function() {
	console.log('Hello world 3');
});

arr.forEach(function(item) {
	item();
});
/*OUTPUT:
Hello world 1
Hello world 2
Hello world 3
 */