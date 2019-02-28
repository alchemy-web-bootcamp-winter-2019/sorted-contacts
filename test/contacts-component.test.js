const test = QUnit.test;

function makeContactRow(contact) {
    const currencyOption = { style: 'currency', currency: 'USD' };
    const html = /*html*/`
    <tr>
                    <td>${contact.firstName}</td>
                    <td>${contact.lastName}</td>
                    <td>${contact.isActive ? 'Yes' : 'No'}</td>
                    <td class="capitalize">${contact.favoriteFruit}</td>
                    <td><img src="${contact.picture}"></td>
                    <td>${contact.balance.toLocaleString('en-US', currencyOption)}</td>
                    <td title="${contact.email}">${contact.company}</td>
                </tr>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('make contact row template', assert => {
    //arrange
    const contact = {
        "_id": "5c75a7b05ef279a15486ff42",
        "isActive": true,
        "balance": 2559.99,
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "blue",
        "firstName": "Cantu",
        "lastName": "Sullivan",
        "company": "IDETICA",
        "email": "cantu.sullivan@idetica.com",
        "phone": "+1 (970) 454-3315",
        "address": "590 Pershing Loop, Sabillasville, Pennsylvania, 2892",
        "about": "Minim exercitation nisi ullamco consequat fugiat aute sit amet aute eu nisi. Nulla ad dolor ut fugiat sit sint commodo. Sint duis ullamco labore aute pariatur aute velit consequat elit proident sit aute est. In in culpa velit quis enim occaecat. Veniam esse laboris irure consequat. Laborum dolore nulla excepteur aute sit minim sit voluptate labore non esse cupidatat exercitation. Eiusmod incididunt consectetur quis proident.",
        "favoriteFruit": "Banana"
    };
    //act
    const dom = makeContactRow(contact);
    //assert
    assert.htmlEqual(dom, /*html*/`
    <tr>
                    <td>Cantu</td>
                    <td>Sullivan</td>
                    <td>Yes</td>
                    <td class="capitalize">Banana</td>
                    <td><img src="http://placehold.it/32x32"></td>
                    <td>$2,559.99</td>
                    <td title="cantu.sullivan@idetica.com">IDETICA</td>
                </tr>`);
});