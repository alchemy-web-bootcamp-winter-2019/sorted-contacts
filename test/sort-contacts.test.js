import sortContacts from '../src/sort-contacts.js';

const test = QUnit.test;

QUnit.module('make sort contacts function');

//second parameter for sortContacts function will need to represent
//the different sorting options (i.e. firstName/age/favoritefruit/etc.)
//we can express this by passing in another argument which will stand 
//these different sorting options



const contact = [
    {
        firstName: 'Zelda',
        age: 13
    },
    {
        firstName: 'Mary',
        age: 15
    },
    {
        age: 987,
        firstName: 'Frank'
    }      
];

test('sort by first name', function(assert){
//arrange
    const sortOptions = {
        property: 'firstName'
    };
//act
    const result = sortContacts(contact, sortOptions);
    const expected = [
        {
            age: 987,
            firstName: 'Frank'
        },      
        {
            age: 15,
            firstName: 'Mary'
        },
        {
            age: 13,
            firstName: 'Zelda'
        }
    ];

//assert
    assert.deepEqual(result, expected);

});

test('sort by age', function(assert){
//arrange
    const sortOptions = {
        property: 'age'
    };
//act
    const result = sortContacts(contact, sortOptions);
    const expected = [
        {
            age: 13,
            firstName: 'Zelda'
        },
        {
            age: 15,
            firstName: 'Mary'
        },
        {
            age: 987,
            firstName: 'Frank'
        }      
    ];
//assert
    assert.deepEqual(result, expected);

});