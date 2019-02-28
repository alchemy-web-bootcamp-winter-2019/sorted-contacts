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

const contacts = [
    { firstName: 'Andrew', balance: 5 },
    { firstName: 'Unis', balance: 1 },
    { firstName: 'Lois', balance: 6 }
];

test('sort by first name', assert => {
    // arrange
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

function sortByBalance(contacts) {
    const sortedContacts = contacts.sort((a, b) => {
        if(a.balance === b.balance) {
            return 0;
        }
        if(a.balance > b.balance) {
            return 1;
        }
        return -1;
    });
    return sortedContacts;
}

test('sort by balance', assert => {
    // arrange
    const expected = [
        { firstName: 'Unis', balance: 1 },
        { firstName: 'Andrew', balance: 5 },
        { firstName: 'Lois', balance: 6 }
    ];
    // act
    const result = sortByBalance(contacts);
    // assert
    assert.deepEqual(result, expected);
});