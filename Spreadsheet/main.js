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
    const selectedBox = event.currentTarget;
         
    if (selectedBox.getAttribute('data-row') === '0') {
        selectedBox.parentNode.classList.add('parentBoxColor');
        //selectedBox.classList.add('headerStyleOnSelect');
    } else if (selectedBox.parentNode.id === 'numbers') {
        const selectedBoxRow = selectedBox.classList[1];
        const selectedRowCells = document.getElementsByClassName(selectedBoxRow);
        
        Array.from(selectedRowCells).forEach(cell => cell.classList.add('parentBoxColor'));
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
    const selectedBox = event.currentTarget;
    const columns = event.path[2].children;
    const tableColumns = document.getElementById('table').children;
    const columnCount = tableColumns.length;

    //console.log(table.length);
    for (let columnIndex = 0; columnIndex < columnCount; columnIndex++) {
        tableColumns[columnIndex].classList.remove('parentBoxColor');        
        
        const columnCells = tableColumns[columnIndex].children;
        const cellCount = columnCells.length;
        //console.log(columnCells);
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









