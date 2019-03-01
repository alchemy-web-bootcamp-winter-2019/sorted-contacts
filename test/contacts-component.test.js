const test = QUnit.test;

QUnit.module('makeContactRows function');

function makeContactRows(){
    const html = /*html*/ `<tr>
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

    const template = document.createElement('template');
    template.innerHTML = html;
    
    return template.content;
}


test('make contact row template', function(assert) {
//arrange
    const singleContact = {
        
    };
//act
    const result = makeContactRows(singleContact);

    const expected = /*html*/`<tr>
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
//assert
    assert.htmlEqual(result, expected);

});