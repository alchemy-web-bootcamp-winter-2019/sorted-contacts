import contacts from '../data/contacts.js';
import loadContacts from './contacts-component.js';
import loadSort from './sort-component.js';
import sortContacts from './sort-contacts.js';

loadContacts(contacts);
loadSort(sortChoice => {
    const sortedChoices = sortContacts(contacts, sortChoice);
    loadContacts(sortedChoices);
});