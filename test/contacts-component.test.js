import { makeContactTemplate } from '../src/contacts-component.js';
const test = QUnit.test;

QUnit.module('contacts component');

const contacts = {
    isActive: true,
    firstName: 'Cantu',
    lastName: 'Sullivan',
    company: 'IDETICA',
    email: 'cantu.sullivan@idetica.com',
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
    <td>IDETICA</td>
    <td>cantu.sullivan@idetica.com</td>
    <td>banana</td> 
    </tr>
    `);

});