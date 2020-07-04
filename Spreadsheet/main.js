let currentSelectedCells = [];

const toggleCell = cell => {
    const isHeader = cell.classList.contains('columnHeader') || cell.classList.contains('rowHeader');
    cell.classList.toggle(isHeader ? 'selectedHeader' : 'selectedCell');
};
const cellClickHandler = event => {
    const clickedCell = event.currentTarget;
    const cellColumn = parseInt(clickedCell.getAttribute('data-column'));
    const cellRow = parseInt(clickedCell.getAttribute('data-row'));

    currentSelectedCells.forEach(cell => toggleCell(cell));

    let selectedCells = [];
    if (!clickedCell.classList.contains('cornerCell')) {
        if (cellRow === 0) {
            // Clicked cell is a column header
            selectedCells = document.querySelectorAll(`.cell[data-column="${cellColumn}"]`);
        } else if (cellColumn === 0) {
            // Clicked cell is a row header
            selectedCells = document.querySelectorAll(`.cell[data-row="${cellRow}"]`);
        } else {
            // Clicked cell is a regular cell
            selectedCells = document.querySelectorAll(`.cell[data-column="${cellColumn}"][data-row="${cellRow}"]`);
        }
        selectedCells.forEach(cell => toggleCell(cell));
    }

    currentSelectedCells = Array.from(selectedCells);
};
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', cellClickHandler));

const fxInput = document.querySelector('#fxInput > input');
const fxInputHandler = event => {
    if (currentSelectedCells.length === 1) {
        currentSelectedCells[0].innerHTML = event.currentTarget.value;
    }
};
fxInput.addEventListener('input', fxInputHandler);
