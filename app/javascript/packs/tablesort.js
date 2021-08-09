/**
 * Sorts a HTML table.
 *
 * @param {HTMLTableElement} table The table to sort
 * @param {number} columnNumber The index of the column to sort
 * 
 * 
 */
function sortColumn(table, columnNumber) {
    // Check "id" and set bool value to sort and add "id" attribute
    const asc = Boolean(table.querySelector(`th:nth-child(${ columnNumber + 1 })`).id == "th-sort-asc")
    // Set direcrion value for sorting
    const direction = asc ? 1 : -1
    // Choose all "<tr>" in "<tbody>" and put them into an array [tr, tr...]
    const rows = Array.from(table.querySelector("tbody").children)
    // Sorting content in selected column by order
    const rowsSorted = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ columnNumber + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ columnNumber + 1 })`).textContent.trim();
        return aColText > bColText ? 1 * direction : -1 * direction // sort logic
    });
    // Add some identification for sorted columns
    // Remove id
    table.querySelectorAll("th").forEach(th => th.removeAttribute('id'));
    // Add id
    if(!asc) {
        table.querySelector(`th:nth-child(${ columnNumber + 1})`).setAttribute("id", "th-sort-asc");
    } else {
        table.querySelector(`th:nth-child(${ columnNumber + 1})`).setAttribute("id", "th-sort-desc");
    }
    // Change row odder FINISH!!!!
    table.querySelector("tbody").append(...rowsSorted)
};
// Execute script
// Choose table
const myTable = document.querySelector('.table-sortable');
// Add event to every "th" in table
myTable.querySelectorAll("th").forEach(cell => {
    cell.addEventListener("click", () => {
        // Find number of column
        const colNum = cell.cellIndex; // 0, 1, 2...
        // Sort table
        sortColumn(myTable, colNum )
    }); 
});
