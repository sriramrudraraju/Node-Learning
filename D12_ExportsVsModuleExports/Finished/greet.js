exports = function() {
	console.log('Hello');
}

console.log(exports);
/*OUTPUT:
[Function: exports]
 */

console.log(module.exports);
/*OUTPUT:
{}
 */