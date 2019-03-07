import contacts from '../data/contacts.js';
import loadContacts from './contacts-component.js';
import loadSort from './sort-component.js';
import sortByProperty from './sort-by-property.js';

loadContacts(contacts);
loadSort(sortChoices => {
    const sortedContacts = sortByProperty(contacts, sortChoices);
    loadContacts(sortedContacts);
});