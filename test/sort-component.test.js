const test = QUnit.test;

const contacts = [
    { firstName: 'Cade', age: 40 },
    { firstName: 'Ed', age: 20 },
    { firstName: 'Dave', age: 30 }
];

// function sortName(contacts) {
//     return contacts.sort((a, b) => {
//         if(a.firstName === b.firstName) {
//             return 0;
//         }
//         if(a.firstName > b.firstName) {
//             return 1;
//         }
//         else {
//             return -1;
//         }
//     });
// }
// function sortAge(contacts) {
//     return contacts.sort((a, b) => {
//         if(a.age === b.age) {
//             return 0;
//         }
//         if(a.age > b.age) {
//             return 1;
//         }
//         else {
//             return -1;
//         }
//     });
// }

function sort(contacts, sortChoice) {
    const property = sortChoice.property;

    return contacts.sort((a, b) => {
        if(a[property] === b[property]) {
            return 0;
        }
        if(a[property] > b[property]) {
            return 1;
        }
        else {
            return -1;
        }
    });
}       

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