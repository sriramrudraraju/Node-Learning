function greet(callback) {
	console.log('Hello!');
	var data = {
		name: 'John Doe'
	};
	
	callback(data);
}

greet(function(data) {
	console.log('The callback was invoked!');
	console.log(data);
});
/*OUTPUT:
Hello!
The callback was invoked!
{ name: 'John Doe' }
 */

greet(function(data) {
	console.log('A different callback was invoked!');
	console.log(data.name);
});
/*OUTPUT:
Hello!
A different callback was invoked!
John Doe
 */
