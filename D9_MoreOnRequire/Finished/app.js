/* while using require it checks for that file. if node doesnt find the file 
it will check for index.js in that name directory and executes inde.js */

/*Below it checks for greet.js file, since its not present it goes to greet directory
and executes index.js file */

var greet = require('./greet');

greet.english();
/*OUTPUT:
Hello
 */

greet.spanish();
/*OUTPUT:
Hola
 */