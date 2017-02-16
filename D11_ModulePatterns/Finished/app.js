// get instance of function which console.logs
var greet = require('./greet1');
greet();
/*OUTPUT:
Hello world
 */

// get instance of function which console.logs
var greet2 = require('./greet2').greet;
greet2();
/*OUTPUT:
Hello world!
 */

// get object created from constructor
var greet3 = require('./greet3');
greet3.greet();
/*OUTPUT:
Hello world!!
 */

// change greeting property value
greet3.greeting = 'Changed hello world!';
// get new modified object created from constructor
var greet3b = require('./greet3');
greet3b.greet();
/*OUTPUT:
Changed hello world!
 */

// get the constructor itself
var Greet4 = require('./greet4');
// create object from constructor
var grtr = new Greet4();
grtr.greet();
/*OUTPUT:
Hello world!!!
 */

// get object with method in it
// directly getting the method.. instaed getting the full object
var greet5 = require('./greet5').greet;
greet5();
/*OUTPUT:
Hello world!!!!
 */