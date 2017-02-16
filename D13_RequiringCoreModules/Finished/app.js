/*we need not to mention path for core libraries.. node can understand them */
var util = require('util');

var name = 'Tony';
var greeting = util.format('Hello, %s', name);
util.log(greeting);
/*OUTPUT:
15 Feb 14:33:38 - Hello, Tony
 */