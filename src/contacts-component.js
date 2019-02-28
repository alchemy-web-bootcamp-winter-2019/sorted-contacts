export function createContactRow(contact) {
    const currency = { style: 'currency', currency: 'USD' };
    const html = /*html*/`
        <tr>
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.company}</td>
            <td>${contact.email}</td>
            <td>${capitalizeFirstLetter(contact.favoriteFruit)}</td>
            <td>${contact.balance.toLocaleString('en-US', currency)}</td>
            <td>${contact.isActive ? 'Yes' : 'No'}</td>
        </tr>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

export function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function clearContacts() {
    while(contactTableBody.children.length > 0) {
        contactTableBody.lastElementChild.remove();
    }
}

const contactTableBody = document.getElementById('contacts-table-body');

export default function loadContacts(contacts) {
    clearContacts();
    contacts.forEach(contact => {
        const dom = createContactRow(contact);
        contactTableBody.appendChild(dom);
    });
}
