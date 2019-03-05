const sortSelect = document.getElementById('sort-select');

export default function loadSort(callback) { 
    sortSelect.addEventListener('change', () => {
        const sortChoice = { property: sortSelect.value };


        callback(sortChoice);
    });
}