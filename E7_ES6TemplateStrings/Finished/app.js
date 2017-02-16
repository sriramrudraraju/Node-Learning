var name = 'John Doe';

// regular way of adding variable to string
var greet = 'Hello ' + name;
// ES6 way adding variable to string
var greet2 = `Hello ${ name }`;

console.log(greet);
/*OUTPUT:
Hello John Doe
 */

console.log(greet2);
/*OUTPUT:
Hello John Doe
 */