let currentSelectedCell;

const selectCell = (selectedCell) => {
    if (selectedCell.parentNode.id !== 'rowHeaders') {
        if (selectedCell.getAttribute('data-row') === '0') {
            selectedCell.parentNode.classList.add('selectedHeader');
        } else {
            selectedCell.classList.add('selectedCell');

            const selectedCellColumnHeader = selectedCell.parentNode.firstElementChild;
            selectedCellColumnHeader.classList.add('selectedHeader');

            const rowHeaders = document.getElementById('rowHeaders').children;
            const selectedCellRowHeader = rowHeaders[parseInt(selectedCell.getAttribute('data-row'))];
            selectedCellRowHeader.classList.add('selectedHeader');
        }
    }
};
const deselectColumns = (columns) => {
    const columnCount = columns.length;
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        const columnCells = columns[columnIndex].children;
        const cellCount = columnCells.length;
        for (let cellIndex = 0; cellIndex < cellCount; cellIndex++) {
            columnCells[cellIndex].classList.remove('selectedHeader');
            columnCells[cellIndex].classList.remove('selectedCell');
        }
    }
};
const onCellClicked = (event) => {
    const selectedCell = event.currentTarget;
    currentSelectedCell = selectedCell;
    deselectColumns(selectedCell.parentNode.parentNode.children);
    selectCell(selectedCell);
};

const cells = document.getElementsByClassName('cell');
Array.from(cells).forEach(cell => cell.addEventListener('click', onCellClicked));

//create function to connect cell with type input
const inputHandler = (event) => {
    if (currentSelectedCell) {
        currentSelectedCell.innerHTML = event.currentTarget.value;
    }
};

const input = document.getElementById('fxInput');
input.addEventListener('input', inputHandler);
