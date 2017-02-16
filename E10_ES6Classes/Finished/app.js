'use strict';
// class representation instead function constructor syntax
class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	
	greet() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
}

var john = new Person('John', 'Doe');
john.greet();
/*OUTPUT:
Hello, John Doe
 */

var jane = new Person('Jane', 'Doe');
jane.greet();
/*OUTPUT:
Hello, Jane Doe
 */

console.log(john.__proto__);
/*OUTPUT:
Person {}
 */

console.log(jane.__proto__);
/*OUTPUT:
Person {}
 */

console.log(john.__proto__ === jane.__proto__);
/*OUTPUT:
true
 */
