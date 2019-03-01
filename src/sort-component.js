const sortSelect = document.getElementById('sort-select');

export default function loadSort() {
    sortSelect.addEventListener('change', () => {
        const sortChoices = {
            property: sortSelect.nodeValue
        };
        console.log(sortChoices);
    });
}