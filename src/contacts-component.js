const tableBodyNode = document.getElementById('table-body');

export function makeTableRow(contact) {
    const template = document.createElement('template');
    
    template.innerHTML = `<tr>
    <td>${contact.isActive ? 'Yes' : 'No'}</td>
    <td>$${contact.balance.toLocaleString()}</td>
    <td><img src="${contact.picture}"></td>
    <td>${contact.age}</td>
    <td>${contact.firstName}</td>
    <td>${contact.lastName}</td>
    <td>${contact.company}</td>
    <td>${contact.email}</td>
    <td>${contact.favoriteFruit.charAt(0).toUpperCase() + contact.favoriteFruit.slice(1)}</td>
    </tr>`;
    
    return template.content;
}
export default function loadContacts(contacts) {
    while(tableBodyNode.children.length > 0) {
        tableBodyNode.lastElementChild.remove();
    }
    contacts.forEach(contact => {
        const newRow = makeTableRow(contact);
        tableBodyNode.appendChild(newRow);   
    });

}