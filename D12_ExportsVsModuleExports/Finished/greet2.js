exports.greet = function() {
	console.log('Hello');
}

console.log(exports);
/*OUTPUT:
{ greet: [Function] }
 */

console.log(module.exports);
/*OUTPUT:
{ greet: [Function] }
 */