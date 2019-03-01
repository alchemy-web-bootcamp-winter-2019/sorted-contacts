const sortSelect = document.getElementById('sort-select');

export default function loadSort(callback) {
    sortSelect.addEventListener('change', () => {
        const sortChoices = {
            property: sortSelect.nodeValue
        };
        callback(sortChoices);
    });
}