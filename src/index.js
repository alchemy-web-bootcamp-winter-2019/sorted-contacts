import contacts from '../data/contacts.js';
import loadContacts from '../src/contacts-component.js';
import sort from '../src/sort-component.js';
import loadSort from '../src/sort-load.js';

loadContacts(contacts);

loadSort(sortChoice => {
    const sortedContacts = sort(contacts, sortChoice);

    loadContacts(sortedContacts);
});