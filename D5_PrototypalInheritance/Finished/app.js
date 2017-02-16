function Person(firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
}

//ptotoype is for adding/updating prpperty in existing constructor
Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

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
Person { greet: [Function] }
 */

console.log(jane.__proto__);
/*OUTPUT:
Person { greet: [Function] }
 */

console.log(john.__proto__ === jane.__proto__);
/*OUTPUT:
true
 */