export default function sortContacts(contact, sortOptions){
    const property = sortOptions.property;

    return contact.sort((a, b) => {
        if(a[property] === b[property]){
            return 0;
        }
        if(a[property] < b[property]){
            return -1;
        }
        if(a[property] > b[property]){
            return 1;
        }
    });
}
