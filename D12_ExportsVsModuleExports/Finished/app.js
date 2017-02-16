/*exports and module.exports works similarly as long as they return object..
exports misbehave if we return as functions or contructuctors */

// throws an error if we invoke the function
var greet = require('./greet');
// here its returning as object.. so no error
var greet2 = require('./greet2');
greet2.greet();
/*OUTPUT:
Hello
 */