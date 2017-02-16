var buf = new Buffer('Hello', 'utf8');
console.log(buf);
/*OUTPUT:
<Buffer 48 65 6c 6c 6f>
 */

console.log(buf.toString());
/*OUTPUT:
Hello
 */

console.log(buf.toJSON());
/*OUTPUT:
{ type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
 */

console.log(buf[2]);
/*OUTPUT:
108
 */

buf.write('wo');
console.log(buf.toString());
/*OUTPUT:
wollo
 */