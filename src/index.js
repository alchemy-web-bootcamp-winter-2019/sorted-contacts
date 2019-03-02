import contacts from '../data/contacts.js';
import { loadContact } from '../src/contacts-component.js';
import loadSort from '../src/sort-component.js';
import sortContacts from '../src/sort-contacts.js';

// eslint-disable-next-line no-console

loadContact(contacts);

loadSort(sortChoices => {
    const sortedContacts = sortContacts(contacts, sortChoices);
    loadContact(sortedContacts);
});