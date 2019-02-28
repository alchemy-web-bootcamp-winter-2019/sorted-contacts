const test = QUnit.test;

function makeContactRow(contact) {
    const html = /*html*/`
    <tr>
                    <td>Cantu</td>
                    <td>Sullivan</td>
                    <td>Yes</td>
                    <td>Banana</td>
                    <td><img src="http://placehold.it/32x32"></td>
                    <td>$2,559.99</td>
                    <td title="cantu.sullivan@idetica.com">IDETICA</td>
                </tr>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make contact row template', assert => {
    //arrange
    const contact = {};
    //act
    const dom = makeContactRow(contact);
    //assert
    assert.htmlEqual(dom, /*html*/`
    <tr>
                    <td>Cantu</td>
                    <td>Sullivan</td>
                    <td>Yes</td>
                    <td>Banana</td>
                    <td><img src="http://placehold.it/32x32"></td>
                    <td>$2,559.99</td>
                    <td title="cantu.sullivan@idetica.com">IDETICA</td>
                </tr>`);
});