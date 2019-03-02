const test = QUnit.test;

QUnit.module('make sort contacts function');

function sortContacts(contact){
    return contact.sort((a, b) => {
        if(a.firstName === b.firstName){
            return 0;
        }
        if(a.firstName < b.firstName){
            return -1;
        }
        if(a.firstName > b.firstName){
            return 1;
        }
    });
}




test('sort by first name', function(assert){
//arrange
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
            firstName: 'Frank',
            age: 987
        }      
    ];

//act
    const result = sortContacts(contact);
    const expected = [
        {
            firstName: 'Frank',
            age: 987
        },      
        {
            firstName: 'Mary',
            age: 15
        },
        {
            firstName: 'Zelda',
            age: 13
        }
    ];

//assert
    assert.deepEqual(result, expected);

});