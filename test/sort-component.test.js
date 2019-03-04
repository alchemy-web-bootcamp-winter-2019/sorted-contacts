import sort from '../src/sort-component.js';
const test = QUnit.test;

const contacts = [
    { firstName: 'Cade', age: 40 },
    { firstName: 'Ed', age: 20 },
    { firstName: 'Dave', age: 30 }
];
     

test ('sort contacts by name', assert => {
    const sortChoice = { property: 'firstName' };

    const expected = [ 
        { firstName: 'Cade', age: 40 },
        { firstName: 'Dave', age: 30 },
        { firstName: 'Ed', age: 20 }
    ];

    const result = sort(contacts, sortChoice);

    assert.deepEqual(result, expected);
});

test ('sort contacts by age', assert => {
    const sortChoice = { property: 'age' };

    const expected = [
        { firstName: 'Ed', age: 20 },
        { firstName: 'Dave', age: 30 },
        { firstName: 'Cade', age: 40 }
    ];
    const result = sort(contacts, sortChoice);

    assert.deepEqual(result, expected);
});