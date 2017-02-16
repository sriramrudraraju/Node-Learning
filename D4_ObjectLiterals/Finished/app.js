var person = {
	firstname: 'John',
	lastname: 'Doe',
	greet: function() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
};

person.greet();
/*OUTPUT:
Hello, John Doe
 */

console.log(person['firstname']);
/*OUTPUT:
John
 */