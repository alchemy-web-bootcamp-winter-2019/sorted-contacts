const test = QUnit.test;

QUnit.module('sort contacts');

function sortByFirstName(contacts) {
    const sortedContacts = contacts.sort((a, b) => {
        if(a.firstName === b.firstName) {
            return 0;
        }
        if(a.firstName > b.firstName) {
            return 1;
        }
        return -1;
    });
    return sortedContacts;
}

test('sort by first name', assert => {
    // arrange
    const contacts = [
        { firstName: 'Andrew', balance: 5 },
        { firstName: 'Unis', balance: 1 },
        { firstName: 'Lois', balance: 6 }
    ];
    const expected = [
        { firstName: 'Andrew', balance: 5 },
        { firstName: 'Lois', balance: 6 },
        { firstName: 'Unis', balance: 1 }
    ];
    // act
    const result = sortByFirstName(contacts);
    // assert
    assert.deepEqual(result, expected);
});