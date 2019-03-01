const test = QUnit.test;


test('sort by first name', assert => {
    //arrange
    const contacts = [{
        name: 'Megan',
        age: 1
    },
    {
        name: 'Erin',
        age: 15
    },
    {
        name: 'Patrick',
        age: 25
    }];
    
    const expected = [{
        name: 'Erin',
        age: 15
    },
    {
        name: 'Megan',
        age: 1
    },
    {
        name: 'Patrick',
        age: 25
    }];
    //act
    const sorted = sortByFirstName(contacts);
    //assert
    assert.deepEqual(sorted, expected);
});