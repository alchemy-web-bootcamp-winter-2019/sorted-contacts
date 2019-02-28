import { makeContactTemplate } from '../src/contacts-component.js';
const test = QUnit.test;

QUnit.module('contacts component');

const contacts = {
    isActive: true,
    firstName: 'Cantu',
    lastName: 'Sullivan',
    favoriteFruit: 'banana'
};

test('make contact row template', assert => {
    
    const dom = makeContactTemplate(contacts);

    
    //assert
    assert.htmlEqual(dom, `
    <tr>
    <td>Yes</td> 
    <td>Cantu</td> 
    <td>Sullivan</td> 
    <td>banana</td> 
    </tr>
    `);

});