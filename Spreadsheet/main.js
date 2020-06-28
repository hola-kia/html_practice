let currentSelectedBox;

const selectBox = (selectedBox) => {
    if (selectedBox.parentNode.id !== 'numbers') {
        if (selectedBox.id === '0') {
            selectedBox.parentNode.classList.add('parentBoxColor');
        } else {
            selectedBox.classList.add('box-border');

            const selectedBoxColumnHeader = selectedBox.parentNode.firstElementChild;
            selectedBoxColumnHeader.classList.add('parentBoxColor');

            const rowHeaders = document.getElementById('numbers').children;
            const selectedBoxRowHeader = rowHeaders[parseInt(selectedBox.id)];
            selectedBoxRowHeader.classList.add('parentBoxColor');
        }
    }
};
const deselectColumns = (columns) => {
    const columnCount = columns.length;
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        const columnCells = columns[columnIndex].children;
        const cellCount = columnCells.length;
        for (let cellIndex = 0; cellIndex < cellCount; cellIndex++) {
            columnCells[cellIndex].classList.remove('parentBoxColor');
            columnCells[cellIndex].classList.remove('box-border');
        }
    }
};
const onBoxClicked = (event) => {
    const selectedBox = event.currentTarget;
    currentSelectedBox = selectedBox;
    deselectColumns(selectedBox.parentNode.parentNode.children);
    selectBox(selectedBox);
};

const boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(box => box.addEventListener('click', onBoxClicked));

//create function to connect box with type input
const inputHandler = (event) => {
    if (currentSelectedBox) {
        currentSelectedBox.innerHTML = event.currentTarget.value;
    }
};

const input = document.getElementById('fxInput');
input.addEventListener('input', inputHandler);
