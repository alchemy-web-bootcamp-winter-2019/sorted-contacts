const test = QUnit.test;

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
    "favoriteFruit": "banana"
};

function makeTableRow(contact) {
    const template = document.createElement('template');

    template.innerHTML = `<tr>
    <td>true</td>
    <td>$2,559.99</td>
    <td><img src="${contact.picture}"></td>
    <td>${contact.age}</td>
    <td>${contact.firstName}</td>
    <td>${contact.lastName}</td>
    <td>${contact.company}</td>
    <td>${contact.email}</td>
    <td>${contact.favoriteFruit.charAt(0).toUpperCase() + contact.favoriteFruit.slice(1)}</td>
</tr>`;

    return template.content;
}

test('make table row with template and interpolation', assert => {
    
    const expected = `<tr>
    <td>true</td>
    <td>$2,559.99</td>
    <td><img src="http://placehold.it/32x32"></td>
    <td>28</td>
    <td>Cantu</td>
    <td>Sullivan</td>
    <td>IDETICA</td>
    <td>cantu.sullivan@idetica.com</td>
    <td>Banana</td>
</tr>`;

    const result = makeTableRow(contact);

    assert.htmlEqual(result, expected);
});

