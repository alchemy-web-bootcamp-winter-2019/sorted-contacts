const test = QUnit.test;

QUnit.module('creating contact table row doms');

function createContactRow(contact) {
    const currency = { style: 'currency', currency: 'USD' };
    const html = /*html*/`
        <tr>
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.company}</td>
            <td>${contact.email}</td>
            <td>${capitalizeFirstLetter(contact.favoriteFruit)}</td>
            <td>${contact.balance.toLocaleString('en-US', currency)}</td>
            <td>${contact.isActive ? 'Yes' : 'No'}</td>
        </tr>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

test('create contact row', assert => {
    // arrange
    const contact = {
        '_id': '5c75a7b05ef279a15486ff42',
        'isActive': true,
        'balance': 2559.99,
        'picture': 'http://placehold.it/32x32',
        'age': 28,
        'eyeColor': 'blue',
        'firstName': 'Cantu',
        'lastName': 'Sullivan',
        'company': 'IDETICA',
        'email': 'cantu.sullivan@idetica.com',
        'phone': '+1 (970) 454-3315',
        'address': '590 Pershing Loop, Sabillasville, Pennsylvania, 2892',
        'about': 'Minim exercitation nisi ullamco consequat fugiat aute sit amet aute eu nisi. Nulla ad dolor ut fugiat sit sint commodo. Sint duis ullamco labore aute pariatur aute velit consequat elit proident sit aute est. In in culpa velit quis enim occaecat. Veniam esse laboris irure consequat. Laborum dolore nulla excepteur aute sit minim sit voluptate labore non esse cupidatat exercitation. Eiusmod incididunt consectetur quis proident.',
        'favoriteFruit': 'banana'
    };
    const expected = /*html*/`
        <tr>
            <td>Cantu</td>
            <td>Sullivan</td>
            <td>IDETICA</td>
            <td>cantu.sullivan@idetica.com</td>
            <td>Banana</td>
            <td>$2,559.99</td>
            <td>Yes</td>
        </tr>
    `;
    // act
    const result = createContactRow(contact);
    // assert
    assert.htmlEqual(result, expected);
});

function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
}

test('capitalize first letter', assert => {
    // arrange
    const fruit = 'banana';
    const expected = 'Banana';
    // act
    const result = capitalizeFirstLetter(fruit);
    // assert
    assert.equal(result, expected);
});