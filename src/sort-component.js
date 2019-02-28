const sortSelectNode = document.getElementById('sort-select');

export default function loadSort() {
    sortSelectNode.addEventListener('change', function() {
        const sortSelection = {
            property: sortSelectNode.value
        };
        console.log(sortSelection);
    });
}