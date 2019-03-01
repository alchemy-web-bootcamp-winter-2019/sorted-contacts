const test = QUnit.test;

function sortByFirstName(contacts) {
    return contacts.sort((a, b) => {
        if(a.name === b.name) {
            return 0;
        }
        if(a.name > b.name) {
            return 1;
        }
        return -1;
    });

}

function sortByAge(contacts) {
    return contacts.sort((a, b) => {
        if(a.age === b.age) {
            return 0;
        }
        if(a.age > b.age) {
            return 1;
        }
        return -1;
    });

}
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

test('sort by age', assert => {
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
    const sorted = sortByAge(contacts);
    //assert
    assert.deepEqual(sorted, expected);
});