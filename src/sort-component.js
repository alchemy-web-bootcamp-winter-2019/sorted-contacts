const sortSelectNode = document.getElementById('sort-select');

export default function loadSort(callback) {
    sortSelectNode.addEventListener('change', function() {
        const sortChoice = {
            property: sortSelectNode.value
        };
        callback(sortChoice);
    });
}