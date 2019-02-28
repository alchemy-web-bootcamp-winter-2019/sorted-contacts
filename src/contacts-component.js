
export function makeContactRow(contact) {
    const currencyOption = { style: 'currency', currency: 'USD' };
    const html = /*html*/`
    <tr>
                    <td>${contact.firstName}</td>
                    <td>${contact.lastName}</td>
                    <td>${contact.isActive ? 'Yes' : 'No'}</td>
                    <td class="capitalize">${contact.favoriteFruit}</td>
                    <td><img src="${contact.picture}"></td>
                    <td>${contact.balance.toLocaleString('en-US', currencyOption)}</td>
                    <td title="${contact.email}">${contact.company}</td>
                </tr>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadContacts(contacts) {
    console.log(contacts);
}