const test = QUnit.test;

const contacts = [
    { firstName: 'Cade', age: 40 },
    { firstName: 'Ed', age: 20 },
    { firstName: 'Dave', age: 30 }
];

function sortName(contacts) {
    return contacts.sort((a, b) => {
        if(a.name === b.name) {
            return 0;
        }
        if(a.name > b.name) {
            return 1;
        }
        else {
            return -1;
        }
    });
}

test ('sort contacts by name', assert => {
    //arrange
    const expected = [ 
        { firstName: 'Cade', age: 40 },
        { firstName: 'Dave', age: 30 },
        { firstName: 'Ed', age: 20 }
    ];
    //act
    const result = sortName(contacts);
    //assert
    assert.deepEqual(result, expected);
});