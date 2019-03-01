const test = QUnit.test;

function sortContacts(contacts, sortChoice) {
    const property = sortChoice.property;
    return contacts.sort((a, b) => {
        if(a[property] === b[property]) {
            return 0;
        }
        if(a[property] > b[property]) {
            return 1;
        }
        return -1;
    });

}

test('sort by first name', assert => {
    //arrange
    const sortChoice = { property: 'name' };
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
    const sorted = sortContacts(contacts, sortChoice);
    //assert
    assert.deepEqual(sorted, expected);
});

test('sort by age', assert => {
    //arrange
    const sortChoice = { property: 'age' };
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
    //act
    const sorted = sortContacts(contacts, sortChoice);
    //assert
    assert.deepEqual(sorted, expected);
});