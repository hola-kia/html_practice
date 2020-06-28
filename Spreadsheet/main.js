function selectHandler(event) {
    const selectedBox = event.path[0];

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
}

function deselectHandler(event) {
    const columns = event.path[2].children;
    const columnCount = columns.length;
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        const columnCells = columns[columnIndex].children;
        const cellCount = columnCells.length;
        for (let cellIndex = 0; cellIndex < cellCount; cellIndex++) {
            columnCells[cellIndex].classList.remove('parentBoxColor');
            columnCells[cellIndex].classList.remove('box-border');
        }
    }
}

const boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(box => {
    box.addEventListener('click', deselectHandler);
    box.addEventListener('click', selectHandler);
});

//////////////////////////////////////////////////////////////

//create function to connect box with type input

const input = document.getElementById('fxInput');
const selectedBox = document.getElementsByClassName('box box-border');

function typeHandler() {
    selectedBox[0].innerHTML = input.value;
}

input.addEventListener('keyup', typeHandler);
