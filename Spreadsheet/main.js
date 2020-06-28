const boxes = document.getElementsByClassName('box');

////////////////////////////////////////////////////////////////////

function selectHandler(event) {
    const selectedBoxId = event.path[0].id;
    const rowHeaders = document.getElementById('numbers').children;
    if (event.path[0].id === '0') {
        event.path[1].classList.add('parentBoxColor');
    } else if (event.path[1].id === 'numbers') {
        return;
    } else {
        this.classList.add('box-border');

        let selectedBoxColumn = this.parentNode.firstElementChild;
        selectedBoxColumn.classList.add('parentBoxColor');

        if (selectedBoxId == rowHeaders[selectedBoxId].innerHTML) {
            rowHeaders[selectedBoxId].classList.add('parentBoxColor');
        }
    }
}

function deselectHandler(event) {
    const columns = event.path[2].children;
    for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        if (columns[columnIndex].classList.value === 'box parentBoxColor') {
            console.log(columns[columnIndex]);
            columns[columnIndex].classList.remove('parentBoxColor');
        }

        let columnCells = columns[columnIndex].children;

        for (let cellIndex = 0; cellIndex < columnCells.length; cellIndex++) {
            if (columnCells[cellIndex].classList.value == 'box parentBoxColor' || columnCells[cellIndex].classList.value == 'box box-border') {
                columnCells[cellIndex].classList.remove('parentBoxColor');
                columnCells[cellIndex].classList.remove('box-border');
            }
        }
    }
}

[...boxes].forEach(box => box.addEventListener('click', deselectHandler));
[...boxes].forEach(box => box.addEventListener('click', selectHandler));

//////////////////////////////////////////////////////////////

//create function to connect box with type input

const input = document.getElementById('fxInput');
const selectedBox = document.getElementsByClassName('box box-border');

function typeHandler() {
    selectedBox[0].innerHTML = input.value;
}

input.addEventListener('keyup', typeHandler);
