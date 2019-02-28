import sortContacts from '../src/sort-contacts.js';
const test = QUnit.test;

const contacts = [
    { firstName: 'Lance', age: 33 },
    { firstName: 'Xavier', age: 56 },
    { firstName: 'Billy', age: 72 }
];

test('sort by first name', assert => {

    const sortChoice = {
        property: 'firstName'
    };

    const expected = [
        { firstName: 'Billy', age: 72 },
        { firstName: 'Lance', age: 33 },
        { firstName: 'Xavier', age: 56 }
    ];
    
    const result = sortContacts(contacts, sortChoice);

    assert.deepEqual(result, expected);
});

test('sort by age', assert => {

    const sortChoice = {
        property: 'age'
    };

    const expected = [
        { firstName: 'Lance', age: 33 },
        { firstName: 'Xavier', age: 56 },
        { firstName: 'Billy', age: 72 }
    ];
    
    const result = sortContacts(contacts, sortChoice);

    assert.deepEqual(result, expected);
});