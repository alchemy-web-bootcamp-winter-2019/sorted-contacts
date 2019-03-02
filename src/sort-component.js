const listSort = document.getElementById('list-sort')

export default function loadSort(callback){
    listSort.addEventListener('change', () => {
        const sortOptions = {
            property: listSort.value
        };
        
        callback(sortOptions);
    });

}