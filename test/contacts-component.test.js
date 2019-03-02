const test = QUnit.test;
import makeContactRows from '../src/contacts-component.js';

QUnit.module('makeContactRows function');



test('make contact row template', function(assert) {
//arrange
    const singleContact = {
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
//act
    const result = makeContactRows(singleContact);

    const expected = /*html*/`<tr>
        <td>${singleContact.id}</td>
        <td>${singleContact.isActive ? 'yes' : 'no'}</td>
        <td>${singleContact.balance}</td>
        <td>
            <img src="${singleContact.picture}">
        </td>
        <td>${singleContact.age} yo</td>
        <td>${singleContact.firstName}</td>
        <td>${singleContact.lastName}</td>
        <td>${singleContact.company}</td>
        <td>${singleContact.email}</td>
        <td>${singleContact.favoriteFruit}</td>            
        </tr>`;
//assert
    assert.htmlEqual(result, expected);

});