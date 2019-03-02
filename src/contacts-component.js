
export default function makeContactRows(singleContact){
    const html = /*html*/ `<tr>
    <td>${singleContact.id}</td>
    <td>${singleContact.isActive ? 'yes' : 'no'}</td>
    <td>${singleContact.balance}</td>
    <td>
    <img src="${singleContact.picture}">
    </td>
    <td>${singleContact.age} yo</td>
    <td>${singleContact.firstName}</td>
    <td>${singleContact.lastName}</td>
    <td>${singleContact.company}</td>
    <td>${singleContact.email}</td>
    <td>${singleContact.favoriteFruit}</td>            
    </tr>`;
    
    const template = document.createElement('template');
    template.innerHTML = html;
    
    return template.content;
}

const renderContactRows = document.getElementById('table-body');

export function loadContact(contacts){
    contacts.forEach(contact => {
        const dom = makeContactRows(contact);
        renderContactRows.appendChild(dom);
    });
}