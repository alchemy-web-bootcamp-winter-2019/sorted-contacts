
const sortSelect = document.getElementById('sort-select');

export default function loadSort() {
    sortSelect.addEventListener('change', () => {
        console.log(sortSelect.value);
    });
}