const sortSelect = document.getElementById('sort-select');
const tableBody = document.getElementById('table-body');

export default function loadSort(callback) { 
    sortSelect.addEventListener('change', () => {
        const sortChoice = { property: sortSelect.value };


        callback(sortChoice);
    });
}