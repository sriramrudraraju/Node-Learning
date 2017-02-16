var firstname = 'Jane';

(function (lastname) {

	var firstname = 'John';
	console.log(firstname);
	/*OUTPUT:
	John
	*/

	console.log(lastname);
	/*OUTPUT:
	Doe
	*/
	
}('Doe'));

console.log(firstname);
/*OUTPUT:
Jane
*/