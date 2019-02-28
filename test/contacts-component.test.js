import { makeContactRow } from '../src/contacts-component.js';
const test = QUnit.test;

test('make contact row template', assert => {
    //arrange
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
        'favoriteFruit': 'Banana'
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