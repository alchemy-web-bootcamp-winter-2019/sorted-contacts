const test = QUnit.test;

const contacts = [
    { firstName: 'Lance', age: 33 },
    { firstName: 'Xavier', age: 56 },
    { firstName: 'Billy', age: 72 }
];

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


// function sortByFirstName(contacts) {
//     return contacts.sort((a, b) => {
//         if(a.firstName === b.firstName) {
//             return 0;
//         }
//         if(a.firstName > b.firstName) {
//             return 1;
//         }
//         return -1;
//     });
// }

// function sortByAge(contacts) {
//     return contacts.sort((a, b) => {
//         if(a.age === b.age) {
//             return 0;
//         }
//         if(a.age > b.age) {
//             return 1;
//         }
//         return -1;
//     });
// }


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