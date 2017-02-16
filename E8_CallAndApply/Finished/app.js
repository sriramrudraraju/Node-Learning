var obj = {
	name: 'John Doe',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();
/*OUTPUT:
Hello John Doe
 */

obj.greet.call({ name: 'Jane Doe'});
/*OUTPUT:
Hello Jane Doe
 */

obj.greet.apply({ name: 'Jane Doe'});
/*OUTPUT:
Hello Jane Doe
 */