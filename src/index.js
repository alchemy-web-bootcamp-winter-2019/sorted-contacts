import contacts from '../data/contacts.js';
// import makeContactRows from '../src/contacts-component.js';
import { loadContact } from '../src/contacts-component.js';
// eslint-disable-next-line no-console


console.log(contacts);

loadContact(contacts);