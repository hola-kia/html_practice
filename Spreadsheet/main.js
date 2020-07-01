//const spreadsheet = document.querySelector(".table");
//const columns = spreadsheet.children;
//const colArray = Array.from(columns);
//console.log();

////////////////////////////////////////////////////////////////////

/*
//create table's nested array
const makeNestedArray = array => {
    const all = [];
    for(let i = 0; i < array.length; i++) {
        const colBoxes = Array.from(array[i].children);
        all.push(colBoxes); 
    }
    return all;
};

const table = makeNestedArray(colArray);
*/

//create and toggle css class function

function selectHandler(event) {
    const selectedBox = event.path[0];
           
    if (selectedBox.getAttribute('data-row') === '0') {
        selectedBox.parentNode.classList.add('parentBoxColor');
    } else if (selectedBox.parentNode.id === 'numbers') {
        return
    } else {
        selectedBox.classList.add('box-border');
                
        const selectedBoxColumnHeader = selectedBox.parentNode.firstElementChild;
        selectedBoxColumnHeader.classList.add('parentBoxColor');
        
        const rowHeaders = document.getElementById('numbers').children;
        const selectedBoxRowHeader = rowHeaders[parseInt(selectedBox.getAttribute('data-row'))];
        selectedBoxRowHeader.classList.add('parentBoxColor');   
    }
 }; 


function deselectHandler(event) {
    const columns = event.path[2].children;
    const columnCount = columns.length;
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        if (columns[columnIndex].classList.value === 'box parentBoxColor') {
            columns[columnIndex].classList.remove('parentBoxColor');
        };

        const columnCells = columns[columnIndex].children;
        const cellCount = columnCells.length;
        for (let cellIndex = 0; cellIndex < cellCount; cellIndex++) {
                columnCells[cellIndex].classList.remove('parentBoxColor');
                columnCells[cellIndex].classList.remove('box-border');   
        }
    }; 
};

const boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(box => {
    box.addEventListener('click', deselectHandler);
    box.addEventListener('click', selectHandler);
});

//[...boxes].forEach(box => box.addEventListener('click', deselectHandler));
//[...boxes].forEach(box => box.addEventListener('click', selectHandler));


//////////////////////////////////////////////////////////////

//create function to connect box with type input

const input = document.getElementById('fxInput');
const selectedBox = document.getElementsByClassName('box box-border')

function inputHandler(event) {
    if(selectedBox[0]) {
    selectedBox[0].innerHTML = input.value;
    };
};

input.addEventListener('input', inputHandler); 









