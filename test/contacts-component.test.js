const test = QUnit.test;

QUnit.module('makeContactRow function');

test('make contact row template', assert => {
//arrange
const singleContact = /*html*/ `<tr>
<td>5c75a7b05ef279a15486ff42</td>
<td>Yes</td>
<td>2599.99</td>
<td>
    <img src="http://placehold.it/32x32">
</td>
<td>28 yo</td>
<td>Cantu</td>
<td>Sullivan</td>
<td>IDETICA</td>
<td>cantu.sullivan@idetica.com</td>
<td>banana</td>            
</tr>`;
//act

//assert
assert.deepEqual(expected, result);

});